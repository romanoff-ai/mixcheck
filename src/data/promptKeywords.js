/**
 * promptKeywords.js
 * Maps flavor/style descriptors → INGREDIENTS_DB keys.
 * All keys must exist in INGREDIENTS_DB.
 * The parser scores each ingredient by how many keywords from the prompt match it —
 * ingredients matched by multiple keywords rank higher.
 */

export const KEYWORD_MAP = {
  // ── Smoke & Peat ──────────────────────────────────────────
  smoky:       ['mezcal', 'scotch_blended', 'drambuie', 'mole_bitters'],
  smokey:      ['mezcal', 'scotch_blended', 'drambuie', 'mole_bitters'],
  peaty:       ['scotch_blended', 'mezcal'],
  smoked:      ['mezcal', 'scotch_blended'],

  // ── Tropical ──────────────────────────────────────────────
  tropical:    ['rum_white', 'rum_dark', 'rhum_jamaican', 'coconut', 'pineapple', 'mango',
                'guava', 'passion_fruit', 'falernum', 'orgeat', 'malibu', 'coconut_cream'],
  tiki:        ['rum_white', 'rum_dark', 'rhum_jamaican', 'overproof_rum', 'orgeat', 'falernum',
                'velvet_falernum', 'pineapple', 'lime', 'passion_fruit', 'coconut',
                'angostura_bitters', 'mango', 'guava'],
  island:      ['rum_white', 'rum_dark', 'coconut', 'pineapple', 'mango', 'lime', 'falernum'],
  beach:       ['rum_white', 'coconut', 'pineapple', 'lime', 'falernum', 'malibu'],

  // ── Bitter & Amaro ────────────────────────────────────────
  bitter:      ['campari', 'aperol', 'fernet_branca', 'amaro_nonino', 'amaro_averna',
                'cynar', 'suze', 'angostura_bitters', 'amaro_montenegro'],
  amaro:       ['amaro_nonino', 'amaro_averna', 'fernet_branca', 'cynar', 'suze',
                'amaro_montenegro', 'campari'],
  aperitivo:   ['aperol', 'campari', 'prosecco', 'soda_water', 'elderflower_liqueur',
                'amaro_montenegro', 'suze'],
  digestivo:   ['fernet_branca', 'amaro_averna', 'cynar', 'amaro_nonino', 'amaro_montenegro'],

  // ── Herbal & Botanical ────────────────────────────────────
  herbal:      ['chartreuse_green', 'yellow_chartreuse', 'gin_london_dry', 'absinthe',
                'basil', 'rosemary', 'thyme', 'mint', 'benedictine', 'sage', 'dill',
                'lemongrass'],
  botanical:   ['gin_london_dry', 'gin_old_tom', 'genever', 'chartreuse_green',
                'yellow_chartreuse', 'aquavit', 'benedictine', 'absinthe'],
  garden:      ['cucumber', 'mint', 'basil', 'rosemary', 'thyme', 'dill', 'elderflower_liqueur',
                'gin_london_dry'],
  earthy:      ['mezcal', 'sotol', 'cynar', 'sage', 'thyme', 'rosemary'],

  // ── Citrus & Bright ───────────────────────────────────────
  citrus:      ['lime', 'lemon', 'grapefruit', 'orange', 'yuzu', 'blood_orange',
                'cointreau', 'triple_sec', 'orange_bitters'],
  bright:      ['lime', 'lemon', 'grapefruit', 'blood_orange', 'passion_fruit',
                'elderflower_liqueur', 'yuzu'],
  acidic:      ['lime', 'lemon', 'grapefruit', 'tamarind', 'cranberry', 'passion_fruit', 'yuzu'],
  zesty:       ['lime', 'lemon', 'grapefruit', 'yuzu', 'blood_orange', 'cointreau'],
  tart:        ['lime', 'lemon', 'grapefruit', 'cranberry', 'raspberry', 'tamarind',
                'passion_fruit', 'pomegranate', 'cassis'],

  // ── Creamy & Dessert ──────────────────────────────────────
  creamy:      ['cream', 'coconut_cream', 'egg_white', 'vanilla', 'coconut_milk', 'amaretto'],
  dessert:     ['cream', 'amaretto', 'coffee_liqueur', 'kahlua', 'vanilla', 'coconut_cream',
                'frangelico', 'chocolate_bitters', 'orgeat'],
  rich:        ['bourbon', 'rum_dark', 'cognac', 'demerara_syrup', 'maple_syrup', 'orgeat',
                'chocolate_bitters', 'vanilla'],
  indulgent:   ['cream', 'amaretto', 'frangelico', 'kahlua', 'chocolate_bitters', 'vanilla',
                'coconut_cream'],
  silky:       ['egg_white', 'aquafaba', 'cream', 'coconut_milk', 'vanilla'],

  // ── Spicy & Warming ───────────────────────────────────────
  spicy:       ['chili', 'jalapeño', 'ginger', 'black_pepper', 'cinnamon', 'ginger_beer',
                'mole_bitters'],
  heat:        ['jalapeño', 'chili', 'ginger', 'black_pepper', 'tajin', 'mole_bitters'],
  warming:     ['bourbon', 'cognac', 'cinnamon', 'clove', 'honey', 'apple', 'maple_syrup',
                'star_anise', 'cardamom', 'rum_dark', 'angostura_bitters'],
  winter:      ['bourbon', 'cognac', 'rum_dark', 'cinnamon', 'clove', 'honey', 'apple',
                'maple_syrup', 'star_anise', 'cardamom', 'demerara_syrup'],
  spiced:      ['rum_dark', 'cinnamon', 'clove', 'cardamom', 'ginger', 'star_anise',
                'angostura_bitters', 'velvet_falernum'],
  cozy:        ['bourbon', 'rum_dark', 'cognac', 'cinnamon', 'honey', 'vanilla', 'apple',
                'maple_syrup'],

  // ── Refreshing & Light ────────────────────────────────────
  refreshing:  ['soda_water', 'tonic_water', 'cucumber', 'elderflower_liqueur', 'prosecco',
                'mint', 'kombucha', 'lime', 'lemon', 'ginger_beer'],
  light:       ['vodka', 'prosecco', 'sake', 'soda_water', 'cucumber', 'elderflower_liqueur',
                'aquavit', 'lemon', 'lime'],
  crisp:       ['prosecco', 'champagne', 'tonic_water', 'soda_water', 'cucumber', 'lime',
                'elderflower_liqueur', 'sake'],
  fizzy:       ['soda_water', 'tonic_water', 'ginger_beer', 'ginger_ale', 'prosecco',
                'champagne', 'sparkling_wine', 'kombucha'],
  bubbly:      ['prosecco', 'champagne', 'sparkling_wine', 'soda_water', 'ginger_beer'],
  effervescent: ['prosecco', 'champagne', 'soda_water', 'sparkling_wine', 'tonic_water'],

  // ── Spritz & Aperitif ─────────────────────────────────────
  spritz:      ['aperol', 'prosecco', 'soda_water', 'sparkling_wine', 'elderflower_liqueur',
                'st_germain', 'champagne', 'campari'],
  summer:      ['cucumber', 'elderflower_liqueur', 'mint', 'lime', 'prosecco', 'watermelon',
                'strawberry', 'lemon', 'basil', 'elderflower_liqueur'],
  sunset:      ['aperol', 'rum_white', 'passion_fruit', 'mango', 'orange', 'lime', 'prosecco'],

  // ── Sour & Citrus Forward ─────────────────────────────────
  sour:        ['lime', 'lemon', 'grapefruit', 'tamarind', 'cranberry', 'raspberry',
                'passion_fruit', 'pomegranate'],
  tangy:       ['lime', 'lemon', 'grapefruit', 'tamarind', 'cranberry', 'passion_fruit',
                'raspberry', 'cassis'],

  // ── Savory & Umami ────────────────────────────────────────
  savory:      ['salt', 'black_pepper', 'mole_bitters', 'angostura_bitters', 'olive'],
  saline:      ['salt', 'tonic_water', 'mezcal'],
  umami:       ['sake', 'mezcal', 'sotol', 'angostura_bitters'],

  // ── Floral ────────────────────────────────────────────────
  floral:      ['elderflower_liqueur', 'lavender', 'rose_water', 'hibiscus_syrup',
                'violet_liqueur', 'st_germain', 'lavender_syrup', 'edible_flowers'],
  delicate:    ['elderflower_liqueur', 'st_germain', 'lavender', 'rose_water', 'sake',
                'violet_liqueur', 'lychee'],
  perfumed:    ['violet_liqueur', 'rose_water', 'lavender', 'lavender_syrup', 'elderflower_liqueur'],
  romantic:    ['rose_water', 'elderflower_liqueur', 'st_germain', 'violet_liqueur',
                'lavender_syrup', 'champagne', 'raspberry'],

  // ── Fruity & Sweet ────────────────────────────────────────
  fruity:      ['mango', 'pineapple', 'passion_fruit', 'peach', 'strawberry', 'raspberry',
                'passion_fruit_syrup', 'guava', 'lychee', 'blueberry', 'blackberry'],
  sweet:       ['simple_syrup', 'honey', 'orgeat', 'grenadine', 'cointreau',
                'elderflower_liqueur', 'amaretto', 'kahlua'],
  dry:         ['vermouth_dry', 'gin_london_dry', 'tonic_water', 'champagne', 'lime',
                'grapefruit', 'campari', 'suze'],

  // ── Nuts & Almond ─────────────────────────────────────────
  nutty:       ['orgeat', 'amaretto', 'falernum', 'frangelico'],
  almond:      ['orgeat', 'amaretto', 'velvet_falernum', 'falernum'],
  hazelnut:    ['frangelico', 'amaretto'],

  // ── Coffee & Espresso ─────────────────────────────────────
  coffee:      ['espresso', 'cold_brew', 'coffee_liqueur', 'kahlua'],
  espresso:    ['espresso', 'cold_brew', 'coffee_liqueur', 'kahlua', 'vodka'],
  mocha:       ['espresso', 'chocolate_bitters', 'coffee_liqueur', 'kahlua', 'vanilla'],

  // ── Coconut ───────────────────────────────────────────────
  coconut:     ['coconut', 'coconut_cream', 'coconut_milk', 'coconut_water', 'malibu'],
  pinacolada:  ['rum_white', 'coconut_cream', 'pineapple', 'lime'],

  // ── Ginger ────────────────────────────────────────────────
  ginger:      ['ginger', 'ginger_beer', 'ginger_ale', 'ginger_syrup'],
  gingery:     ['ginger', 'ginger_beer', 'ginger_syrup'],
  spice:       ['ginger', 'cinnamon', 'clove', 'cardamom', 'star_anise', 'black_pepper',
                'angostura_bitters'],

  // ── Melon ─────────────────────────────────────────────────
  melon:       ['watermelon', 'midori'],
  watermelon:  ['watermelon'],

  // ── Classic Spirits ───────────────────────────────────────
  classic:     ['bourbon', 'rye_whiskey', 'gin_london_dry', 'vermouth_dry', 'vermouth_sweet',
                'angostura_bitters', 'cognac', 'maraschino'],
  whiskey:     ['bourbon', 'rye_whiskey', 'scotch_blended', 'whiskey_irish'],
  bourbon:     ['bourbon', 'rye_whiskey', 'vermouth_sweet', 'angostura_bitters', 'demerara_syrup'],
  rum:         ['rum_white', 'rum_dark', 'rhum_jamaican', 'rum_agricole', 'overproof_rum'],
  gin:         ['gin_london_dry', 'gin_old_tom', 'genever', 'sloe_gin'],
  vodka:       ['vodka', 'soda_water', 'lime', 'lemon'],
  tequila:     ['tequila_blanco', 'tequila_reposado', 'mezcal', 'lime', 'agave_syrup'],
  agave:       ['tequila_blanco', 'tequila_reposado', 'mezcal', 'sotol', 'agave_syrup'],
  mezcal:      ['mezcal', 'lime', 'grapefruit', 'agave_syrup', 'mole_bitters'],
  cognac:      ['cognac', 'armagnac', 'calvados', 'lemon', 'honey'],
  brandy:      ['cognac', 'pisco', 'armagnac', 'calvados', 'grappa'],

  // ── Elderflower ───────────────────────────────────────────
  elderflower: ['elderflower_liqueur', 'st_germain'],
  germain:     ['st_germain', 'elderflower_liqueur'],

  // ── Specific Florals ──────────────────────────────────────
  lavender:    ['lavender', 'lavender_syrup'],
  rose:        ['rose_water'],
  hibiscus:    ['hibiscus_syrup'],
  violet:      ['violet_liqueur'],

  // ── Other Descriptors ─────────────────────────────────────
  vanilla:     ['vanilla', 'simple_syrup', 'honey'],
  chocolate:   ['chocolate_bitters', 'coffee_liqueur', 'kahlua', 'mole_bitters'],
  honey:       ['honey', 'honey_syrup', 'honey_water'],
  anise:       ['absinthe', 'star_anise', 'aquavit'],
  minty:       ['mint', 'mint_sprig'],
  cucumber:    ['cucumber'],
  lemon:       ['lemon', 'lemon_twist'],
  lime:        ['lime', 'lime_wheel'],
  grapefruit:  ['grapefruit'],
  orange:      ['orange', 'blood_orange', 'cointreau', 'triple_sec', 'orange_bitters'],
  mango:       ['mango'],
  pineapple:   ['pineapple', 'pineapple_juice', 'pineapple_syrup'],
  strawberry:  ['strawberry'],
  peach:       ['peach'],
  raspberry:   ['raspberry'],
  cherry:      ['cherry', 'maraschino', 'luxardo_maraschino'],
  apple:       ['apple', 'calvados'],
  pear:        ['pear', 'calvados'],
  tamarind:    ['tamarind', 'tamarind_syrup'],

  // ── Seasons & Occasions ───────────────────────────────────
  autumn:      ['bourbon', 'apple', 'cinnamon', 'maple_syrup', 'honey', 'pear'],
  fall:        ['bourbon', 'apple', 'cinnamon', 'maple_syrup', 'honey', 'pear'],
  spring:      ['gin_london_dry', 'elderflower_liqueur', 'lavender', 'lemon', 'cucumber',
                'strawberry', 'prosecco'],
  holiday:     ['rum_dark', 'cinnamon', 'clove', 'star_anise', 'honey', 'apple', 'cognac'],
  festive:     ['champagne', 'prosecco', 'elderflower_liqueur', 'cassis', 'raspberry'],
  brunch:      ['prosecco', 'champagne', 'aperol', 'orange_juice', 'grapefruit',
                'elderflower_liqueur', 'lemon'],

  // ── Cocktail Styles / Formats ─────────────────────────────
  punch:       ['rum_dark', 'overproof_rum', 'lime', 'pineapple', 'orgeat', 'grenadine',
                'angostura_bitters', 'falernum'],
  fizz:        ['gin_london_dry', 'lemon', 'simple_syrup', 'soda_water', 'egg_white'],
  highball:    ['whiskey_irish', 'ginger_ale', 'bourbon', 'soda_water', 'lime'],
  daiquiri:    ['rum_white', 'lime', 'simple_syrup'],
  margarita:   ['tequila_blanco', 'lime', 'cointreau', 'salt', 'agave_syrup'],
  negroni:     ['gin_london_dry', 'campari', 'vermouth_sweet'],
  mojito:      ['rum_white', 'lime', 'mint', 'simple_syrup', 'soda_water'],
  manhattan:   ['rye_whiskey', 'vermouth_sweet', 'angostura_bitters'],
  martini:     ['gin_london_dry', 'vermouth_dry', 'orange_bitters'],
  mule:        ['vodka', 'ginger_beer', 'lime'],
  sling:       ['gin_london_dry', 'lemon', 'cherry', 'soda_water', 'angostura_bitters'],
  smash:       ['bourbon', 'lemon', 'mint', 'simple_syrup'],
  swizzle:     ['rum_dark', 'lime', 'mint', 'angostura_bitters'],
  colada:      ['rum_white', 'coconut_cream', 'pineapple'],
  cosmo:       ['vodka', 'cointreau', 'cranberry_juice', 'lime'],
  cosmos:      ['vodka', 'cointreau', 'cranberry_juice', 'lime'],
  paloma:      ['tequila_blanco', 'grapefruit', 'lime', 'salt', 'soda_water'],
  spritzer:    ['prosecco', 'soda_water', 'elderflower_liqueur', 'aperol'],
  sangria:     ['red_wine', 'cognac', 'orange', 'lemon', 'raspberry', 'simple_syrup'],
  cobbler:     ['bourbon', 'cognac', 'lemon', 'simple_syrup', 'peach', 'cherry'],
  shrub:       ['apple', 'raspberry', 'tamarind', 'ginger', 'lemon', 'simple_syrup'],

  // ── Texture & Body ────────────────────────────────────────
  strong:      ['overproof_rum', 'absinthe', 'gin_london_dry', 'mezcal', 'bourbon',
                'fernet_branca'],
  spirit_forward: ['bourbon', 'rye_whiskey', 'mezcal', 'gin_london_dry', 'cognac', 'rum_dark'],
  low_abv:     ['prosecco', 'sake', 'aperol', 'elderflower_liqueur', 'kombucha',
                'vermouth_dry', 'vermouth_sweet'],
  boozy:       ['overproof_rum', 'absinthe', 'bourbon', 'mezcal', 'rum_dark'],
  balanced:    ['gin_london_dry', 'bourbon', 'lime', 'simple_syrup', 'angostura_bitters'],

  // ── Misc / Color ──────────────────────────────────────────
  pink:        ['aperol', 'campari', 'grapefruit', 'raspberry', 'rose_water', 'hibiscus_syrup',
                'cassis'],
  red:         ['campari', 'cassis', 'pomegranate', 'blood_orange', 'grenadine', 'raspberry'],
  green:       ['chartreuse_green', 'mint', 'cucumber', 'basil', 'midori', 'kiwi'],
  golden:      ['bourbon', 'cognac', 'honey', 'demerara_syrup', 'pineapple', 'champagne'],
}

/**
 * Parse a free-text prompt and return scored ingredient suggestions.
 * @param {string} text - The user's prompt
 * @returns {Array<{key: string, score: number}>} - Sorted by score desc
 */
export function parsePrompt(text) {
  const lower = text.toLowerCase()
  const scores = {}

  for (const [keyword, keys] of Object.entries(KEYWORD_MAP)) {
    // Match whole word or phrase — allow partial word match too for convenience
    if (lower.includes(keyword)) {
      for (const key of keys) {
        scores[key] = (scores[key] || 0) + 1
      }
    }
  }

  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([key, score]) => ({ key, score }))
}
