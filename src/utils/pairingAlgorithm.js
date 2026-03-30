import { INGREDIENTS_DB } from '../data/ingredients';

/**
 * Calculate compatibility score between 2-4 ingredients
 * Returns: { score: 0-100, level: 'great'|'interesting'|'clash', reasons: [], suggestions: [] }
 */
export function calculatePairing(selectedKeys) {
  if (selectedKeys.length < 2) return null;

  const ingredients = selectedKeys.filter(k => INGREDIENTS_DB[k]).map(k => ({ key: k, ...INGREDIENTS_DB[k] }));
  if (ingredients.length < 2) return null;

  let score = 50; // base score
  const reasons = [];
  const clashReasons = [];
  let totalPairs = 0;
  let goodPairs = 0;
  let okPairs = 0;
  let clashCount = 0;
  let sharedFlavors = new Set();

  // Check every pair
  for (let i = 0; i < ingredients.length; i++) {
    for (let j = i + 1; j < ingredients.length; j++) {
      const a = ingredients[i];
      const b = ingredients[j];
      totalPairs++;

      const aKey = a.key;
      const bKey = b.key;

      // Check a → b
      const aPairsWellWithB = (a.pairs_well || []).includes(bKey);
      const aPairsOkWithB = (a.pairs_ok || []).includes(bKey);
      const aClashesWithB = (a.clashes || []).includes(bKey);

      // Check b → a
      const bPairsWellWithA = (b.pairs_well || []).includes(aKey);
      const bPairsOkWithA = (b.pairs_ok || []).includes(aKey);
      const bClashesWithA = (b.clashes || []).includes(aKey);

      if (aPairsWellWithB || bPairsWellWithA) {
        goodPairs++;
        reasons.push(`${getDisplayName(aKey)} and ${getDisplayName(bKey)} pair beautifully`);
      } else if (aPairsOkWithB || bPairsOkWithA) {
        okPairs++;
        reasons.push(`${getDisplayName(aKey)} and ${getDisplayName(bKey)} work together`);
      } else if (aClashesWithB || bClashesWithA) {
        clashCount++;
        clashReasons.push(`${getDisplayName(aKey)} and ${getDisplayName(bKey)} clash`);
      } else {
        // Unknown pair — slight neutral penalty
        okPairs += 0.5;
      }

      // Find shared flavor compounds
      const aFlavors = new Set(a.flavors || []);
      const bFlavors = new Set(b.flavors || []);
      for (const f of aFlavors) {
        if (bFlavors.has(f)) sharedFlavors.add(f);
      }
    }
  }

  // Score calculation
  if (totalPairs > 0) {
    const goodRatio = goodPairs / totalPairs;
    const okRatio = okPairs / totalPairs;
    const clashRatio = clashCount / totalPairs;

    score = Math.round(
      50 +
      (goodRatio * 40) +
      (okRatio * 10) -
      (clashRatio * 50)
    );
  }

  // Bonus for shared flavor compounds
  if (sharedFlavors.size > 0) {
    score = Math.min(100, score + sharedFlavors.size * 3);
    const flavs = Array.from(sharedFlavors).slice(0, 3).join(', ');
    reasons.push(`Shared flavor compounds: ${flavs}`);
  }

  // Bonus for complementary categories (spirit + citrus, spirit + sweetener, etc.)
  const categories = ingredients.map(i => i.category);
  const hasSpirit = categories.includes('spirit');
  const hasCitrus = categories.includes('citrus');
  const hasSweetener = categories.includes('sweetener');
  const hasBitters = categories.includes('bitters');
  const hasHerb = categories.includes('herb');
  const hasMixer = categories.includes('mixer');

  if (hasSpirit && hasCitrus) {
    score = Math.min(100, score + 5);
    reasons.push('Spirit + citrus is a classic cocktail foundation');
  }
  if (hasSpirit && hasSweetener && hasCitrus) {
    score = Math.min(100, score + 8);
    reasons.push('Spirit + citrus + sweetener = perfect sour balance');
  }
  if (hasBitters && hasSpirit) {
    score = Math.min(100, score + 4);
    reasons.push('Bitters add complexity and depth');
  }
  if (hasHerb && (hasCitrus || hasSweetener)) {
    score = Math.min(100, score + 3);
    reasons.push('Fresh herbs elevate the profile');
  }

  score = Math.max(0, Math.min(100, score));

  const level = score >= 70 ? 'great' : score >= 45 ? 'interesting' : 'clash';

  // Add clash reasons to the output (displayed separately)
  const allReasons = [
    ...reasons.slice(0, 4),
    ...clashReasons.map(r => `⚠️ ${r}`)
  ].filter(Boolean);

  // Generate suggestions
  const suggestions = getSuggestions(selectedKeys, ingredients, level);

  return { score, level, reasons: allReasons.length > 0 ? allReasons : getDefaultReasons(ingredients, level), suggestions };
}

function getDefaultReasons(ingredients, level) {
  if (level === 'clash') return ['These ingredients have conflicting flavor profiles — try swapping one out'];
  if (level === 'interesting') return ['These have some tension — could be intentional or might need balance'];
  return ['Good flavor harmony — these ingredients complement each other'];
}

/**
 * Suggest additional ingredients that would work with the current selection
 */
function getSuggestions(selectedKeys, ingredients, currentLevel) {
  const selectedSet = new Set(selectedKeys);
  const scores = {};

  for (const [key, ing] of Object.entries(INGREDIENTS_DB)) {
    if (selectedSet.has(key)) continue;

    let suggestScore = 0;
    for (const sel of ingredients) {
      if ((sel.pairs_well || []).includes(key)) suggestScore += 3;
      else if ((sel.pairs_ok || []).includes(key)) suggestScore += 1;
      else if ((sel.clashes || []).includes(key)) suggestScore -= 5;

      if ((ing.pairs_well || []).includes(sel.key)) suggestScore += 3;
      else if ((ing.pairs_ok || []).includes(sel.key)) suggestScore += 1;
      else if ((ing.clashes || []).includes(sel.key)) suggestScore -= 5;
    }

    if (suggestScore > 0) scores[key] = suggestScore;
  }

  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([key]) => key);
}

export function getDisplayName(key) {
  return key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

/**
 * Suggest ratios for Quick Spec Builder based on ingredient categories
 */
export function suggestSpec(ingredients) {
  const spec = [];

  const spirits = ingredients.filter(i => INGREDIENTS_DB[i]?.category === 'spirit');
  const citrus = ingredients.filter(i => INGREDIENTS_DB[i]?.category === 'citrus');
  const sweeteners = ingredients.filter(i => INGREDIENTS_DB[i]?.category === 'sweetener');
  const liqueurs = ingredients.filter(i => INGREDIENTS_DB[i]?.category === 'liqueur');
  const herbs = ingredients.filter(i => INGREDIENTS_DB[i]?.category === 'herb');
  const mixers = ingredients.filter(i => INGREDIENTS_DB[i]?.category === 'mixer');
  const bitters = ingredients.filter(i => INGREDIENTS_DB[i]?.category === 'bitters');
  const garnishes = ingredients.filter(i => INGREDIENTS_DB[i]?.category === 'garnish');

  // Base spirit(s)
  spirits.forEach((k, i) => {
    spec.push({ key: k, amount: i === 0 ? 2.0 : 0.75, unit: 'oz', role: 'base' });
  });

  // Modifier/liqueur
  liqueurs.forEach((k, i) => {
    spec.push({ key: k, amount: i === 0 ? 0.75 : 0.5, unit: 'oz', role: 'modifier' });
  });

  // Citrus
  citrus.forEach((k, i) => {
    spec.push({ key: k, amount: 0.75, unit: 'oz', role: 'citrus', note: 'fresh squeezed' });
  });

  // Sweetener
  sweeteners.forEach((k, i) => {
    spec.push({ key: k, amount: 0.75, unit: 'oz', role: 'sweetener' });
  });

  // Herbs
  herbs.forEach(k => {
    const ing = INGREDIENTS_DB[k];
    const isChili = ing?.subcategory === 'chili';
    spec.push({ key: k, amount: isChili ? 3 : 5, unit: isChili ? 'slices' : 'leaves', role: 'herb' });
  });

  // Bitters
  bitters.forEach(k => {
    spec.push({ key: k, amount: 2, unit: 'dashes', role: 'accent' });
  });

  // Mixers (top up)
  mixers.forEach(k => {
    const isCarbonated = INGREDIENTS_DB[k]?.subcategory === 'carbonated';
    spec.push({ key: k, amount: isCarbonated ? 3 : 1, unit: isCarbonated ? 'oz (top)' : 'oz', role: 'mixer' });
  });

  // Fruits (muddled / juice)
  const fruits = ingredients.filter(i => INGREDIENTS_DB[i]?.category === 'fruit');
  fruits.forEach(k => {
    spec.push({ key: k, amount: 0.75, unit: 'oz', role: 'fruit' });
  });

  // Garnishes
  garnishes.forEach(k => {
    spec.push({ key: k, amount: 1, unit: '', role: 'garnish' });
  });

  // If nothing was categorized, add everything as 1 oz
  if (spec.length === 0) {
    ingredients.forEach(k => {
      spec.push({ key: k, amount: 1, unit: 'oz', role: 'ingredient' });
    });
  }

  return spec;
}
