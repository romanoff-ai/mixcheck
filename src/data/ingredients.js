export const INGREDIENTS_DB = {
  // ============================================================
  // SPIRITS (30)
  // ============================================================
  "mezcal": {
    category: "spirit", subcategory: "agave",
    flavors: ["smoke", "agave", "earth", "pepper", "mineral"],
    pairs_well: ["lime", "grapefruit", "honey", "agave_syrup", "chili", "mango", "pineapple", "guava", "aperol", "campari", "chocolate", "passion_fruit", "tamarind", "watermelon", "cucumber", "ginger", "cilantro", "jalapeño"],
    pairs_ok: ["lemon", "orange", "orgeat", "simple_syrup", "angostura_bitters", "maraschino", "velvet_falernum"],
    clashes: ["cream", "milk", "heavy_cream", "baileys", "kahlua", "demerara_syrup"],
    taste_profile: { smoky: 9, spirit_forward: 8, citrus: 2, sweet: 1, bitter: 3, herbal: 4 }
  },
  "tequila_blanco": {
    category: "spirit", subcategory: "agave",
    flavors: ["agave", "citrus", "pepper", "fresh", "floral"],
    pairs_well: ["lime", "grapefruit", "orange", "mango", "pineapple", "guava", "passion_fruit", "watermelon", "cucumber", "jalapeño", "cilantro", "salt", "agave_syrup", "cointreau", "triple_sec", "aperol", "campari", "honey"],
    pairs_ok: ["lemon", "simple_syrup", "orgeat", "ginger", "mint", "basil", "elderflower_liqueur"],
    clashes: ["cream", "milk", "heavy_cream", "cola"],
    taste_profile: { smoky: 1, spirit_forward: 7, citrus: 4, sweet: 2, bitter: 2, herbal: 3 }
  },
  "tequila_reposado": {
    category: "spirit", subcategory: "agave",
    flavors: ["agave", "oak", "vanilla", "caramel", "pepper"],
    pairs_well: ["lime", "orange", "grapefruit", "agave_syrup", "cointreau", "honey", "mango", "pineapple", "guava", "cinnamon", "chili", "chocolate", "aperol"],
    pairs_ok: ["lemon", "simple_syrup", "ginger", "angostura_bitters"],
    clashes: ["cream", "milk"],
    taste_profile: { smoky: 2, spirit_forward: 8, citrus: 3, sweet: 3, bitter: 2, herbal: 2 }
  },
  "bourbon": {
    category: "spirit", subcategory: "whiskey",
    flavors: ["vanilla", "caramel", "oak", "grain", "cherry", "spice"],
    pairs_well: ["lemon", "orange", "honey", "maple_syrup", "peach", "cherry", "angostura_bitters", "peychauds_bitters", "ginger", "cinnamon", "apple", "pear", "amaro", "amaretto", "demerara_syrup", "chocolate"],
    pairs_ok: ["lime", "grapefruit", "simple_syrup", "mint", "fig", "apricot", "benedictine"],
    clashes: ["tropical_juice", "cream", "melon"],
    taste_profile: { smoky: 2, spirit_forward: 9, citrus: 1, sweet: 4, bitter: 2, herbal: 1 }
  },
  "rye_whiskey": {
    category: "spirit", subcategory: "whiskey",
    flavors: ["spice", "grain", "pepper", "mint", "oak"],
    pairs_well: ["lemon", "orange", "angostura_bitters", "peychauds_bitters", "honey", "maple_syrup", "cherry", "ginger", "amaro", "demerara_syrup", "apple", "pear", "vermouth_sweet", "benedictine"],
    pairs_ok: ["lime", "simple_syrup", "mint", "fig", "chocolate"],
    clashes: ["cream", "tropical_juice"],
    taste_profile: { smoky: 1, spirit_forward: 9, citrus: 1, sweet: 3, bitter: 3, herbal: 2 }
  },
  "scotch_blended": {
    category: "spirit", subcategory: "whiskey",
    flavors: ["smoke", "grain", "honey", "vanilla", "oak"],
    pairs_well: ["honey", "lemon", "ginger", "apple", "pear", "orange", "angostura_bitters", "amaro", "vermouth_sweet", "benedictine", "cherry"],
    pairs_ok: ["simple_syrup", "mint", "fig", "chocolate", "amaretto"],
    clashes: ["cream", "tropical_juice", "lime"],
    taste_profile: { smoky: 5, spirit_forward: 9, citrus: 1, sweet: 3, bitter: 2, herbal: 2 }
  },
  "gin_london_dry": {
    category: "spirit", subcategory: "gin",
    flavors: ["juniper", "botanical", "citrus", "pine", "coriander"],
    pairs_well: ["lime", "lemon", "grapefruit", "cucumber", "elderflower_liqueur", "tonic_water", "mint", "basil", "rosemary", "vermouth_dry", "campari", "aperol", "ginger", "raspberry", "strawberry", "blackberry"],
    pairs_ok: ["orange", "simple_syrup", "honey", "violet_liqueur", "maraschino"],
    clashes: ["cream", "cola", "heavy_sweet", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 7, citrus: 4, sweet: 1, bitter: 4, herbal: 9 }
  },
  "gin_old_tom": {
    category: "spirit", subcategory: "gin",
    flavors: ["juniper", "botanical", "sweet", "floral"],
    pairs_well: ["lemon", "maraschino", "vermouth_dry", "elderflower_liqueur", "cucumber", "mint", "violet_liqueur", "orange", "raspberry", "simple_syrup"],
    pairs_ok: ["lime", "grapefruit", "honey", "ginger"],
    clashes: ["cream", "cola"],
    taste_profile: { smoky: 0, spirit_forward: 6, citrus: 3, sweet: 4, bitter: 2, herbal: 7 }
  },
  "vodka": {
    category: "spirit", subcategory: "neutral",
    flavors: ["neutral", "clean", "slight_grain"],
    pairs_well: ["lime", "lemon", "grapefruit", "orange", "cranberry", "pineapple", "peach", "mango", "passion_fruit", "guava", "raspberry", "strawberry", "cucumber", "mint", "ginger", "espresso", "coffee_liqueur", "elderflower_liqueur"],
    pairs_ok: ["simple_syrup", "honey", "tonic_water", "ginger_beer", "soda"],
    clashes: [],
    taste_profile: { smoky: 0, spirit_forward: 6, citrus: 2, sweet: 1, bitter: 0, herbal: 0 }
  },
  "rum_white": {
    category: "spirit", subcategory: "rum",
    flavors: ["cane", "light", "fresh", "citrus"],
    pairs_well: ["lime", "pineapple", "coconut", "mango", "passion_fruit", "guava", "grapefruit", "mint", "simple_syrup", "orgeat", "maraschino", "ginger_beer", "elderflower_liqueur"],
    pairs_ok: ["lemon", "orange", "honey", "raspberry", "strawberry"],
    clashes: ["cream", "chocolate", "heavy_spirits"],
    taste_profile: { smoky: 0, spirit_forward: 6, citrus: 3, sweet: 3, tropical: 7, bitter: 1, herbal: 2 }
  },
  "rum_dark": {
    category: "spirit", subcategory: "rum",
    flavors: ["molasses", "caramel", "vanilla", "oak", "banana", "spice"],
    pairs_well: ["lime", "orange", "pineapple", "coconut", "banana", "mango", "honey", "orgeat", "chocolate", "angostura_bitters", "velvet_falernum", "allspice", "cinnamon", "ginger"],
    pairs_ok: ["lemon", "simple_syrup", "apple", "amaro", "maraschino"],
    clashes: ["cream", "tonic_water"],
    taste_profile: { smoky: 1, spirit_forward: 7, citrus: 2, sweet: 5, tropical: 6, bitter: 1, herbal: 2 }
  },
  "rum_agricole": {
    category: "spirit", subcategory: "rum",
    flavors: ["grassy", "vegetal", "cane", "funky", "fresh"],
    pairs_well: ["lime", "grapefruit", "passion_fruit", "guava", "mango", "orgeat", "simple_syrup", "velvet_falernum", "campari", "aperol", "cucumber", "mint"],
    pairs_ok: ["lemon", "pineapple", "coconut", "elderflower_liqueur"],
    clashes: ["cream", "cola"],
    taste_profile: { smoky: 0, spirit_forward: 7, citrus: 4, sweet: 2, tropical: 6, bitter: 2, herbal: 5 }
  },
  "cognac": {
    category: "spirit", subcategory: "brandy",
    flavors: ["grape", "oak", "vanilla", "dried_fruit", "floral"],
    pairs_well: ["lemon", "orange", "honey", "cointreau", "amaretto", "cherry", "peach", "apricot", "angostura_bitters", "simple_syrup", "vermouth_sweet", "chocolate"],
    pairs_ok: ["lime", "grapefruit", "ginger", "fig", "amaro"],
    clashes: ["cream", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 8, citrus: 2, sweet: 4, bitter: 2, herbal: 1 }
  },
  "pisco": {
    category: "spirit", subcategory: "brandy",
    flavors: ["grape", "floral", "fresh", "citrus"],
    pairs_well: ["lime", "lemon", "grapefruit", "passion_fruit", "pineapple", "strawberry", "peach", "apricot", "simple_syrup", "honey", "elderflower_liqueur", "egg_white"],
    pairs_ok: ["orange", "mango", "guava", "angostura_bitters"],
    clashes: ["cream", "cola"],
    taste_profile: { smoky: 0, spirit_forward: 7, citrus: 4, sweet: 3, tropical: 4, bitter: 1, herbal: 2 }
  },
  "absinthe": {
    category: "spirit", subcategory: "anise",
    flavors: ["anise", "fennel", "wormwood", "herbal", "licorice"],
    pairs_well: ["lemon", "grapefruit", "simple_syrup", "sugar", "elderflower_liqueur", "cucumber", "mint", "basil"],
    pairs_ok: ["lime", "orange", "honey", "maraschino"],
    clashes: ["cream", "tropical", "heavy_sweet"],
    taste_profile: { smoky: 0, spirit_forward: 8, citrus: 2, sweet: 1, bitter: 5, herbal: 10 }
  },
  "whiskey_irish": {
    category: "spirit", subcategory: "whiskey",
    flavors: ["grain", "malt", "smooth", "light_oak", "honey"],
    pairs_well: ["honey", "lemon", "orange", "ginger", "coffee", "cream", "chocolate", "apple", "amaretto", "angostura_bitters", "simple_syrup"],
    pairs_ok: ["lime", "grapefruit", "mint", "amaro", "benedictine"],
    clashes: [],
    taste_profile: { smoky: 0, spirit_forward: 8, citrus: 2, sweet: 4, bitter: 1, herbal: 1 }
  },
  "champagne": {
    category: "spirit", subcategory: "sparkling_wine",
    flavors: ["yeast", "apple", "citrus", "mineral", "bread"],
    pairs_well: ["elderflower_liqueur", "lychee", "peach", "strawberry", "raspberry", "passion_fruit", "orange", "grapefruit", "st_germain", "aperol", "cassis", "cointreau", "simple_syrup", "lemon"],
    pairs_ok: ["lime", "honey", "cucumber", "mint"],
    clashes: ["cream", "heavy_spirits", "dark_rum"],
    taste_profile: { smoky: 0, spirit_forward: 3, citrus: 4, sweet: 2, bitter: 2, herbal: 1 }
  },
  "prosecco": {
    category: "spirit", subcategory: "sparkling_wine",
    flavors: ["apple", "pear", "floral", "light_citrus", "fresh"],
    pairs_well: ["elderflower_liqueur", "peach", "strawberry", "raspberry", "orange", "aperol", "st_germain", "lemon", "grapefruit", "passion_fruit", "lychee", "cassis"],
    pairs_ok: ["lime", "simple_syrup", "honey", "mint"],
    clashes: ["cream", "heavy_spirits"],
    taste_profile: { smoky: 0, spirit_forward: 2, citrus: 3, sweet: 3, bitter: 1, herbal: 1 }
  },
  "sake": {
    category: "spirit", subcategory: "rice_wine",
    flavors: ["rice", "floral", "light", "mineral", "umami"],
    pairs_well: ["yuzu", "lychee", "ginger", "cucumber", "elderflower_liqueur", "lemon", "lime", "coconut", "mango", "pineapple", "honey"],
    pairs_ok: ["orange", "grapefruit", "simple_syrup", "mint"],
    clashes: ["cream", "heavy_spirits"],
    taste_profile: { smoky: 0, spirit_forward: 3, citrus: 2, sweet: 2, bitter: 0, herbal: 2 }
  },
  "rhum_jamaican": {
    category: "spirit", subcategory: "rum",
    flavors: ["funky", "banana", "molasses", "overripe_fruit", "spice"],
    pairs_well: ["lime", "pineapple", "coconut", "mango", "guava", "passion_fruit", "orgeat", "velvet_falernum", "angostura_bitters", "ginger_beer", "honey", "allspice"],
    pairs_ok: ["lemon", "orange", "chocolate", "amaretto"],
    clashes: ["cream", "tonic_water"],
    taste_profile: { smoky: 1, spirit_forward: 8, citrus: 2, sweet: 4, tropical: 9, bitter: 2, herbal: 2 }
  },
  "aquavit": {
    category: "spirit", subcategory: "nordic",
    flavors: ["caraway", "dill", "anise", "herbal", "grain"],
    pairs_well: ["lemon", "grapefruit", "cucumber", "dill", "elderflower_liqueur", "simple_syrup", "honey", "aquafaba", "egg_white"],
    pairs_ok: ["lime", "orange", "mint", "ginger"],
    clashes: ["cream", "tropical", "heavy_sweet"],
    taste_profile: { smoky: 0, spirit_forward: 7, citrus: 3, sweet: 1, bitter: 3, herbal: 9 }
  },
  "calvados": {
    category: "spirit", subcategory: "brandy",
    flavors: ["apple", "pear", "oak", "spice", "floral"],
    pairs_well: ["lemon", "orange", "honey", "cinnamon", "ginger", "apple", "pear", "vermouth_dry", "amaro", "benedictine", "simple_syrup"],
    pairs_ok: ["lime", "angostura_bitters", "mint", "elderflower_liqueur"],
    clashes: ["cream", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 8, citrus: 2, sweet: 4, bitter: 2, herbal: 2 }
  },
  "grappa": {
    category: "spirit", subcategory: "brandy",
    flavors: ["grape", "floral", "earthy", "rustic"],
    pairs_well: ["lemon", "honey", "simple_syrup", "elderflower_liqueur", "amaro", "orange"],
    pairs_ok: ["lime", "grapefruit", "ginger", "angostura_bitters"],
    clashes: ["cream", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 8, citrus: 2, sweet: 2, bitter: 3, herbal: 3 }
  },
  "baijiu": {
    category: "spirit", subcategory: "chinese",
    flavors: ["grain", "floral", "earthy", "fermented", "funky"],
    pairs_well: ["lime", "lemon", "ginger", "honey", "cucumber", "elderflower_liqueur"],
    pairs_ok: ["orange", "simple_syrup", "mint"],
    clashes: ["cream", "tropical"],
    taste_profile: { smoky: 2, spirit_forward: 10, citrus: 1, sweet: 1, bitter: 3, herbal: 4 }
  },
  "armagnac": {
    category: "spirit", subcategory: "brandy",
    flavors: ["grape", "prune", "oak", "vanilla", "dried_fruit"],
    pairs_well: ["lemon", "orange", "prune", "fig", "honey", "angostura_bitters", "vermouth_sweet", "cherry", "chocolate"],
    pairs_ok: ["lime", "ginger", "amaro", "cointreau"],
    clashes: ["cream", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 9, citrus: 1, sweet: 4, bitter: 2, herbal: 1 }
  },
  "overproof_rum": {
    category: "spirit", subcategory: "rum",
    flavors: ["intense_cane", "funky", "raw", "spice"],
    pairs_well: ["lime", "pineapple", "grapefruit", "orgeat", "falernum", "angostura_bitters", "mint", "coconut"],
    pairs_ok: ["lemon", "mango", "honey", "ginger_beer"],
    clashes: ["cream", "tonic_water"],
    taste_profile: { smoky: 1, spirit_forward: 10, citrus: 2, sweet: 2, tropical: 7, bitter: 2, herbal: 1 }
  },
  "shochu": {
    category: "spirit", subcategory: "japanese",
    flavors: ["rice", "mild", "clean", "slightly_sweet"],
    pairs_well: ["yuzu", "lemon", "lime", "cucumber", "ginger", "elderflower_liqueur", "honey", "lychee"],
    pairs_ok: ["orange", "grapefruit", "simple_syrup", "mint"],
    clashes: ["cream", "heavy_sweet"],
    taste_profile: { smoky: 0, spirit_forward: 5, citrus: 2, sweet: 2, bitter: 0, herbal: 2 }
  },
  "genever": {
    category: "spirit", subcategory: "gin",
    flavors: ["malt", "juniper", "grain", "botanical"],
    pairs_well: ["lemon", "orange", "vermouth_dry", "maraschino", "elderflower_liqueur", "simple_syrup", "honey", "angostura_bitters"],
    pairs_ok: ["lime", "grapefruit", "mint", "ginger"],
    clashes: ["cream", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 7, citrus: 2, sweet: 3, bitter: 3, herbal: 6 }
  },
  "sloe_gin": {
    category: "spirit", subcategory: "gin",
    flavors: ["sloe_berry", "almond", "plum", "juniper", "sweet"],
    pairs_well: ["lemon", "ginger", "apple", "grapefruit", "elderflower_liqueur", "simple_syrup", "blackberry", "mint"],
    pairs_ok: ["lime", "orange", "honey", "angostura_bitters"],
    clashes: ["cream", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 5, citrus: 3, sweet: 5, bitter: 2, herbal: 4 }
  },
  "sotol": {
    category: "spirit", subcategory: "agave",
    flavors: ["grassy", "mineral", "earthy", "light_agave"],
    pairs_well: ["lime", "grapefruit", "cucumber", "cilantro", "jalapeño", "honey", "agave_syrup", "campari", "aperol"],
    pairs_ok: ["lemon", "orange", "ginger", "simple_syrup"],
    clashes: ["cream", "heavy_sweet"],
    taste_profile: { smoky: 2, spirit_forward: 7, citrus: 3, sweet: 1, bitter: 3, herbal: 6 }
  },

  // ============================================================
  // LIQUEURS & AMARI (30)
  // ============================================================
  "campari": {
    category: "liqueur", subcategory: "amaro",
    flavors: ["bitter", "citrus", "herbal", "cherry", "orange_peel"],
    pairs_well: ["gin_london_dry", "vodka", "prosecco", "champagne", "grapefruit", "orange", "blood_orange", "lemon", "aperol", "vermouth_sweet", "bourbon", "tequila_blanco", "mezcal", "rum_white"],
    pairs_ok: ["lime", "simple_syrup", "elderflower_liqueur", "pineapple"],
    clashes: ["cream", "milk", "coconut", "heavy_sweet"],
    taste_profile: { smoky: 0, spirit_forward: 5, citrus: 5, sweet: 3, bitter: 9, herbal: 7 }
  },
  "aperol": {
    category: "liqueur", subcategory: "amaro",
    flavors: ["bitter_orange", "herbal", "sweet", "floral", "rhubarb"],
    pairs_well: ["prosecco", "champagne", "gin_london_dry", "vodka", "grapefruit", "orange", "blood_orange", "lemon", "campari", "tequila_blanco", "mezcal", "elderflower_liqueur"],
    pairs_ok: ["lime", "simple_syrup", "pineapple", "strawberry"],
    clashes: ["cream", "milk", "heavy_sweet"],
    taste_profile: { smoky: 0, spirit_forward: 3, citrus: 5, sweet: 6, bitter: 5, herbal: 4 }
  },
  "cointreau": {
    category: "liqueur", subcategory: "triple_sec",
    flavors: ["orange_peel", "citrus", "sweet", "clean"],
    pairs_well: ["lime", "lemon", "grapefruit", "tequila_blanco", "tequila_reposado", "cognac", "vodka", "gin_london_dry", "rum_white", "cranberry", "orange", "blood_orange", "raspberry", "strawberry"],
    pairs_ok: ["simple_syrup", "honey", "pineapple", "mango"],
    clashes: ["cream", "heavy_spirits"],
    taste_profile: { smoky: 0, spirit_forward: 3, citrus: 8, sweet: 7, bitter: 1, herbal: 1 }
  },
  "elderflower_liqueur": {
    category: "liqueur", subcategory: "floral",
    flavors: ["floral", "elderflower", "light_citrus", "honey", "sweet"],
    pairs_well: ["gin_london_dry", "vodka", "prosecco", "champagne", "lemon", "lime", "grapefruit", "cucumber", "mint", "pear", "peach", "lychee", "raspberry", "strawberry", "tequila_blanco"],
    pairs_ok: ["orange", "honey", "simple_syrup", "rum_white", "pisco"],
    clashes: ["cream", "heavy_spirits", "smoky"],
    taste_profile: { smoky: 0, spirit_forward: 2, citrus: 3, sweet: 8, bitter: 0, herbal: 5 }
  },
  "st_germain": {
    category: "liqueur", subcategory: "floral",
    flavors: ["elderflower", "floral", "lychee", "pear", "honey"],
    pairs_well: ["gin_london_dry", "vodka", "prosecco", "champagne", "lemon", "lime", "grapefruit", "cucumber", "mint", "pear", "peach", "lychee", "raspberry", "strawberry", "tequila_blanco", "rum_agricole"],
    pairs_ok: ["orange", "honey", "simple_syrup", "pineapple"],
    clashes: ["cream", "heavy_spirits", "smoky"],
    taste_profile: { smoky: 0, spirit_forward: 2, citrus: 3, sweet: 8, bitter: 0, herbal: 5 }
  },
  "amaro_nonino": {
    category: "liqueur", subcategory: "amaro",
    flavors: ["bitter", "orange", "herbal", "spice", "floral"],
    pairs_well: ["bourbon", "rye_whiskey", "lemon", "orange", "grapefruit", "campari", "vermouth_sweet", "cognac", "angostura_bitters"],
    pairs_ok: ["lime", "honey", "simple_syrup", "gin_london_dry"],
    clashes: ["cream", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 5, citrus: 4, sweet: 4, bitter: 7, herbal: 7 }
  },
  "amaro_averna": {
    category: "liqueur", subcategory: "amaro",
    flavors: ["bitter", "caramel", "licorice", "citrus", "herbal"],
    pairs_well: ["bourbon", "rye_whiskey", "scotch_blended", "lemon", "orange", "cherry", "chocolate", "coffee", "angostura_bitters"],
    pairs_ok: ["lime", "honey", "ginger"],
    clashes: ["cream", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 4, citrus: 3, sweet: 5, bitter: 8, herbal: 8 }
  },
  "fernet_branca": {
    category: "liqueur", subcategory: "amaro",
    flavors: ["intense_bitter", "menthol", "herbal", "saffron", "myrrh"],
    pairs_well: ["bourbon", "rye_whiskey", "lemon", "ginger_beer", "coffee", "chocolate", "mint"],
    pairs_ok: ["lime", "orange", "cola", "simple_syrup"],
    clashes: ["cream", "tropical", "floral", "sweet"],
    taste_profile: { smoky: 0, spirit_forward: 5, citrus: 2, sweet: 1, bitter: 10, herbal: 10 }
  },
  "chartreuse_green": {
    category: "liqueur", subcategory: "herbal",
    flavors: ["herbal", "complex", "anise", "mint", "floral", "130_plants"],
    pairs_well: ["lemon", "lime", "grapefruit", "gin_london_dry", "vodka", "maraschino", "honey", "yellow_chartreuse", "elderflower_liqueur", "pineapple", "cucumber"],
    pairs_ok: ["orange", "simple_syrup", "rum_white", "tequila_blanco"],
    clashes: ["cream", "cola", "heavy_sweet"],
    taste_profile: { smoky: 0, spirit_forward: 6, citrus: 3, sweet: 4, bitter: 5, herbal: 10 }
  },
  "yellow_chartreuse": {
    category: "liqueur", subcategory: "herbal",
    flavors: ["herbal", "honey", "saffron", "mild_anise", "floral"],
    pairs_well: ["lemon", "lime", "grapefruit", "gin_london_dry", "vodka", "honey", "elderflower_liqueur", "chartreuse_green", "pineapple", "cucumber", "peach"],
    pairs_ok: ["orange", "simple_syrup", "rum_white"],
    clashes: ["cream", "cola"],
    taste_profile: { smoky: 0, spirit_forward: 5, citrus: 3, sweet: 6, bitter: 3, herbal: 8 }
  },
  "amaretto": {
    category: "liqueur", subcategory: "nut",
    flavors: ["almond", "sweet", "marzipan", "stone_fruit"],
    pairs_well: ["bourbon", "cognac", "lemon", "orange", "coffee", "chocolate", "cherry", "peach", "amaretto", "cream", "orgeat"],
    pairs_ok: ["lime", "simple_syrup", "rum_dark", "irish_whiskey"],
    clashes: ["campari", "fernet_branca", "herbal", "botanical"],
    taste_profile: { smoky: 0, spirit_forward: 3, citrus: 2, sweet: 9, bitter: 1, herbal: 0 }
  },
  "maraschino": {
    category: "liqueur", subcategory: "cherry",
    flavors: ["cherry", "almond", "clean", "floral", "slight_bitter"],
    pairs_well: ["gin_london_dry", "vodka", "lemon", "lime", "grapefruit", "chartreuse_green", "violet_liqueur", "rum_white", "cognac", "pisco", "elderflower_liqueur"],
    pairs_ok: ["orange", "simple_syrup", "campari"],
    clashes: ["cream", "heavy_sweet"],
    taste_profile: { smoky: 0, spirit_forward: 3, citrus: 3, sweet: 7, bitter: 3, herbal: 3 }
  },
  "coffee_liqueur": {
    category: "liqueur", subcategory: "coffee",
    flavors: ["coffee", "roast", "dark", "slightly_sweet"],
    pairs_well: ["vodka", "rum_dark", "bourbon", "irish_whiskey", "cream", "chocolate", "vanilla", "espresso", "chocolate_bitters"],
    pairs_ok: ["tequila_blanco", "mezcal", "simple_syrup", "amaretto"],
    clashes: ["campari", "aperol", "fernet_branca", "herbal"],
    taste_profile: { smoky: 1, spirit_forward: 3, citrus: 0, sweet: 7, bitter: 6, herbal: 1 }
  },
  "cassis": {
    category: "liqueur", subcategory: "berry",
    flavors: ["blackcurrant", "berry", "tart", "floral"],
    pairs_well: ["champagne", "prosecco", "vodka", "gin_london_dry", "lemon", "lime", "raspberry", "blackberry", "blueberry", "elderflower_liqueur"],
    pairs_ok: ["orange", "simple_syrup", "honey"],
    clashes: ["cream", "heavy_spirits"],
    taste_profile: { smoky: 0, spirit_forward: 2, citrus: 4, sweet: 6, bitter: 3, herbal: 2 }
  },
  "triple_sec": {
    category: "liqueur", subcategory: "triple_sec",
    flavors: ["orange", "citrus", "sweet", "slightly_bitter"],
    pairs_well: ["lime", "lemon", "grapefruit", "tequila_blanco", "vodka", "rum_white", "gin_london_dry", "cranberry", "orange", "pineapple", "mango"],
    pairs_ok: ["honey", "simple_syrup", "cointreau"],
    clashes: ["cream", "heavy_spirits"],
    taste_profile: { smoky: 0, spirit_forward: 3, citrus: 8, sweet: 7, bitter: 2, herbal: 1 }
  },
  "violet_liqueur": {
    category: "liqueur", subcategory: "floral",
    flavors: ["violet", "floral", "sweet", "perfumed"],
    pairs_well: ["gin_london_dry", "lemon", "lime", "elderflower_liqueur", "maraschino", "simple_syrup", "grapefruit", "raspberry", "blueberry"],
    pairs_ok: ["vodka", "honey", "mint", "cucumber"],
    clashes: ["cream", "heavy_spirits", "smoky"],
    taste_profile: { smoky: 0, spirit_forward: 2, citrus: 3, sweet: 8, bitter: 1, herbal: 5 }
  },
  "benedictine": {
    category: "liqueur", subcategory: "herbal",
    flavors: ["honey", "herbal", "spice", "complex", "saffron"],
    pairs_well: ["cognac", "bourbon", "rye_whiskey", "lemon", "orange", "ginger", "vermouth_dry", "angostura_bitters", "chartreuse_green"],
    pairs_ok: ["lime", "honey", "simple_syrup"],
    clashes: ["cream", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 4, citrus: 2, sweet: 7, bitter: 4, herbal: 8 }
  },
  "velvet_falernum": {
    category: "liqueur", subcategory: "tiki",
    flavors: ["clove", "almond", "lime", "ginger", "vanilla"],
    pairs_well: ["rum_dark", "rum_white", "rhum_jamaican", "rum_agricole", "lime", "lemon", "pineapple", "grapefruit", "orgeat", "angostura_bitters", "mango", "coconut"],
    pairs_ok: ["tequila_blanco", "ginger_beer", "passion_fruit"],
    clashes: ["cream", "herbal"],
    taste_profile: { smoky: 0, spirit_forward: 2, citrus: 4, sweet: 7, bitter: 1, herbal: 4 }
  },
  "campari_aperol_mix": {
    category: "liqueur", subcategory: "amaro",
    flavors: ["bitter", "citrus", "sweet", "herbal"],
    pairs_well: ["prosecco", "gin_london_dry", "orange", "grapefruit", "lemon", "elderflower_liqueur"],
    pairs_ok: ["vodka", "simple_syrup"],
    clashes: ["cream"],
    taste_profile: { smoky: 0, spirit_forward: 4, citrus: 5, sweet: 5, bitter: 7, herbal: 6 }
  },
  "drambuie": {
    category: "liqueur", subcategory: "whisky",
    flavors: ["honey", "scotch", "herbal", "spice"],
    pairs_well: ["scotch_blended", "lemon", "orange", "ginger", "honey", "apple", "angostura_bitters"],
    pairs_ok: ["lime", "simple_syrup", "bourbon"],
    clashes: ["cream", "tropical"],
    taste_profile: { smoky: 2, spirit_forward: 4, citrus: 2, sweet: 7, bitter: 2, herbal: 5 }
  },
  "frangelico": {
    category: "liqueur", subcategory: "nut",
    flavors: ["hazelnut", "chocolate", "vanilla", "sweet"],
    pairs_well: ["vodka", "bourbon", "coffee_liqueur", "chocolate", "cream", "espresso", "amaretto", "vanilla"],
    pairs_ok: ["lemon", "orange", "simple_syrup"],
    clashes: ["campari", "aperol", "herbal"],
    taste_profile: { smoky: 0, spirit_forward: 2, citrus: 0, sweet: 9, bitter: 2, herbal: 1 }
  },
  "midori": {
    category: "liqueur", subcategory: "melon",
    flavors: ["melon", "honeydew", "sweet", "artificial"],
    pairs_well: ["vodka", "rum_white", "lime", "lemon", "pineapple", "coconut", "simple_syrup"],
    pairs_ok: ["orange", "gin_london_dry"],
    clashes: ["campari", "aperol", "herbal", "heavy_spirits"],
    taste_profile: { smoky: 0, spirit_forward: 2, citrus: 2, sweet: 10, bitter: 0, herbal: 0 }
  },
  "malibu": {
    category: "liqueur", subcategory: "coconut",
    flavors: ["coconut", "sweet", "rum", "tropical"],
    pairs_well: ["rum_white", "pineapple", "mango", "passion_fruit", "guava", "lime", "orange", "coconut_cream"],
    pairs_ok: ["vodka", "simple_syrup", "grapefruit"],
    clashes: ["campari", "aperol", "herbal"],
    taste_profile: { smoky: 0, spirit_forward: 2, citrus: 2, sweet: 9, bitter: 0, tropical: 9 }
  },
  "kahlua": {
    category: "liqueur", subcategory: "coffee",
    flavors: ["coffee", "rum", "caramel", "sweet"],
    pairs_well: ["vodka", "rum_dark", "bourbon", "cream", "chocolate", "espresso", "vanilla", "coffee_liqueur"],
    pairs_ok: ["tequila_blanco", "amaretto", "simple_syrup"],
    clashes: ["campari", "aperol", "herbal", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 2, citrus: 0, sweet: 9, bitter: 4, herbal: 0 }
  },
  "pimms": {
    category: "liqueur", subcategory: "fruit",
    flavors: ["spiced_gin", "citrus", "fruit", "herbal", "ginger"],
    pairs_well: ["lemon", "orange", "ginger_beer", "cucumber", "strawberry", "mint", "elderflower_liqueur", "prosecco"],
    pairs_ok: ["lime", "simple_syrup", "apple"],
    clashes: ["cream", "heavy_spirits"],
    taste_profile: { smoky: 0, spirit_forward: 3, citrus: 4, sweet: 5, bitter: 3, herbal: 6 }
  },
  "amaro_montenegro": {
    category: "liqueur", subcategory: "amaro",
    flavors: ["orange_peel", "herbal", "floral", "vanilla", "light_bitter"],
    pairs_well: ["bourbon", "rye_whiskey", "lemon", "orange", "grapefruit", "vermouth_sweet", "angostura_bitters", "cognac"],
    pairs_ok: ["lime", "honey", "simple_syrup", "gin_london_dry"],
    clashes: ["cream", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 4, citrus: 4, sweet: 5, bitter: 6, herbal: 7 }
  },
  "cynar": {
    category: "liqueur", subcategory: "amaro",
    flavors: ["artichoke", "herbal", "bitter", "caramel", "earthy"],
    pairs_well: ["bourbon", "rye_whiskey", "orange", "grapefruit", "vermouth_sweet", "campari", "angostura_bitters", "lemon"],
    pairs_ok: ["lime", "honey", "prosecco", "gin_london_dry"],
    clashes: ["cream", "tropical", "sweet"],
    taste_profile: { smoky: 0, spirit_forward: 4, citrus: 3, sweet: 4, bitter: 8, herbal: 9 }
  },
  "suze": {
    category: "liqueur", subcategory: "amaro",
    flavors: ["gentian", "bitter", "floral", "earthy", "citrus"],
    pairs_well: ["gin_london_dry", "vodka", "grapefruit", "lemon", "lime", "tonic_water", "elderflower_liqueur", "cucumber", "champagne"],
    pairs_ok: ["orange", "simple_syrup", "honey"],
    clashes: ["cream", "tropical", "heavy_sweet"],
    taste_profile: { smoky: 0, spirit_forward: 4, citrus: 4, sweet: 3, bitter: 9, herbal: 8 }
  },
  "luxardo_maraschino": {
    category: "liqueur", subcategory: "cherry",
    flavors: ["cherry", "almond", "dry", "clean"],
    pairs_well: ["gin_london_dry", "vodka", "lemon", "lime", "grapefruit", "chartreuse_green", "violet_liqueur", "rum_white", "pisco", "elderflower_liqueur"],
    pairs_ok: ["orange", "simple_syrup"],
    clashes: ["cream", "heavy_sweet"],
    taste_profile: { smoky: 0, spirit_forward: 3, citrus: 3, sweet: 7, bitter: 3, herbal: 3 }
  },
  "vermouth_dry": {
    category: "liqueur", subcategory: "vermouth",
    flavors: ["dry", "herbal", "wine", "botanical", "crisp"],
    pairs_well: ["gin_london_dry", "vodka", "olive", "lemon", "grapefruit", "campari", "aperol", "orange_bitters"],
    pairs_ok: ["tequila_blanco", "elderflower_liqueur", "cucumber"],
    clashes: ["cream", "sweet", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 3, citrus: 3, sweet: 1, bitter: 5, herbal: 8 }
  },
  "vermouth_sweet": {
    category: "liqueur", subcategory: "vermouth",
    flavors: ["sweet", "herbal", "wine", "spice", "cherry"],
    pairs_well: ["bourbon", "rye_whiskey", "campari", "angostura_bitters", "orange_bitters", "cherry", "orange", "lemon", "cognac"],
    pairs_ok: ["gin_london_dry", "amaro_nonino", "amaretto"],
    clashes: ["cream", "tropical"],
    taste_profile: { smoky: 0, spirit_forward: 3, citrus: 2, sweet: 6, bitter: 3, herbal: 7 }
  },

  // ============================================================
  // FRUITS (40)
  // ============================================================
  "lime": {
    category: "citrus", subcategory: "citrus",
    flavors: ["tart", "citrus", "bright", "zesty"],
    pairs_well: ["tequila_blanco", "mezcal", "rum_white", "vodka", "gin_london_dry", "grapefruit", "mango", "pineapple", "guava", "passion_fruit", "jalapeño", "cilantro", "agave_syrup", "honey", "simple_syrup", "mint", "ginger_beer", "coconut"],
    pairs_ok: ["lemon", "orange", "bourbon", "campari", "aperol"],
    clashes: ["cream", "milk"],
    taste_profile: { citrus: 10, tart: 9, sweet: 1, bitter: 2 }
  },
  "lemon": {
    category: "citrus", subcategory: "citrus",
    flavors: ["tart", "citrus", "bright", "floral"],
    pairs_well: ["gin_london_dry", "vodka", "bourbon", "rye_whiskey", "cognac", "elderflower_liqueur", "simple_syrup", "honey", "mint", "ginger", "raspberry", "strawberry", "peach", "blueberry", "maraschino"],
    pairs_ok: ["lime", "grapefruit", "rum_white", "campari", "aperol"],
    clashes: ["cream", "milk", "chocolate"],
    taste_profile: { citrus: 10, tart: 8, sweet: 2, bitter: 1 }
  },
  "grapefruit": {
    category: "citrus", subcategory: "citrus",
    flavors: ["tart", "bitter", "citrus", "floral"],
    pairs_well: ["tequila_blanco", "mezcal", "gin_london_dry", "vodka", "rum_agricole", "campari", "aperol", "cointreau", "salt", "honey", "ginger", "rosemary", "jalapeño"],
    pairs_ok: ["lime", "lemon", "bourbon", "simple_syrup"],
    clashes: ["cream", "chocolate", "heavy_sweet"],
    taste_profile: { citrus: 9, tart: 7, sweet: 2, bitter: 6 }
  },
  "orange": {
    category: "citrus", subcategory: "citrus",
    flavors: ["sweet", "citrus", "floral", "tropical"],
    pairs_well: ["bourbon", "cognac", "rum_dark", "tequila_reposado", "cointreau", "campari", "aperol", "chocolate", "vanilla", "cinnamon", "honey", "ginger"],
    pairs_ok: ["gin_london_dry", "vodka", "lime", "lemon", "simple_syrup"],
    clashes: ["cream"],
    taste_profile: { citrus: 8, sweet: 6, tart: 3, bitter: 2 }
  },
  "blood_orange": {
    category: "citrus", subcategory: "citrus",
    flavors: ["citrus", "berry", "tart", "complex", "slightly_bitter"],
    pairs_well: ["gin_london_dry", "vodka", "campari", "aperol", "prosecco", "champagne", "elderflower_liqueur", "tequila_blanco", "simple_syrup", "honey"],
    pairs_ok: ["rum_white", "lime", "lemon", "orange", "rosemary"],
    clashes: ["cream", "heavy_sweet"],
    taste_profile: { citrus: 9, sweet: 4, tart: 6, bitter: 4 }
  },
  "yuzu": {
    category: "citrus", subcategory: "citrus",
    flavors: ["complex_citrus", "floral", "tart", "unique"],
    pairs_well: ["gin_london_dry", "vodka", "sake", "shochu", "elderflower_liqueur", "simple_syrup", "honey", "cucumber", "ginger", "lychee", "pear"],
    pairs_ok: ["lime", "lemon", "tequila_blanco", "rum_white"],
    clashes: ["cream", "heavy_sweet"],
    taste_profile: { citrus: 10, tart: 7, sweet: 2, bitter: 3 }
  },
  "mango": {
    category: "fruit", subcategory: "tropical",
    flavors: ["tropical", "sweet", "stone_fruit", "floral"],
    pairs_well: ["tequila_blanco", "mezcal", "rum_white", "vodka", "lime", "chili", "jalapeño", "tajin", "ginger", "passion_fruit", "pineapple", "guava", "coconut", "mint"],
    pairs_ok: ["lemon", "grapefruit", "honey", "simple_syrup", "cointreau"],
    clashes: ["cream", "bourbon", "scotch"],
    taste_profile: { sweet: 8, tropical: 9, citrus: 3, tart: 2 }
  },
  "pineapple": {
    category: "fruit", subcategory: "tropical",
    flavors: ["tropical", "sweet", "tart", "bright"],
    pairs_well: ["rum_white", "rum_dark", "vodka", "tequila_blanco", "mezcal", "coconut", "lime", "mango", "guava", "ginger", "jalapeño", "mint", "orgeat", "velvet_falernum"],
    pairs_ok: ["lemon", "grapefruit", "honey", "simple_syrup", "campari"],
    clashes: ["cream", "bourbon", "scotch"],
    taste_profile: { sweet: 7, tropical: 9, citrus: 4, tart: 5 }
  },
  "guava": {
    category: "fruit", subcategory: "tropical",
    flavors: ["tropical", "floral", "sweet", "musky"],
    pairs_well: ["mezcal", "tequila_blanco", "rum_white", "vodka", "lime", "lemon", "grapefruit", "mint", "jalapeño", "ginger", "coconut", "passion_fruit", "pineapple", "mango"],
    pairs_ok: ["honey", "simple_syrup", "elderflower_liqueur"],
    clashes: ["cream", "bourbon"],
    taste_profile: { sweet: 8, tropical: 10, citrus: 3, tart: 4 }
  },
  "passion_fruit": {
    category: "fruit", subcategory: "tropical",
    flavors: ["tropical", "tart", "floral", "intense", "exotic"],
    pairs_well: ["rum_white", "rum_agricole", "vodka", "prosecco", "champagne", "lime", "mango", "pineapple", "guava", "coconut", "elderflower_liqueur", "simple_syrup", "ginger"],
    pairs_ok: ["lemon", "grapefruit", "tequila_blanco", "honey"],
    clashes: ["cream", "bourbon", "scotch"],
    taste_profile: { sweet: 7, tropical: 10, citrus: 5, tart: 7 }
  },
  "coconut": {
    category: "fruit", subcategory: "tropical",
    flavors: ["creamy", "sweet", "tropical", "nutty"],
    pairs_well: ["rum_white", "rum_dark", "rhum_jamaican", "vodka", "pineapple", "mango", "guava", "lime", "passion_fruit", "orgeat", "velvet_falernum"],
    pairs_ok: ["lemon", "orange", "simple_syrup", "honey"],
    clashes: ["gin_london_dry", "campari", "aperol", "herbal", "smoky"],
    taste_profile: { sweet: 7, tropical: 9, citrus: 0, tart: 0, creamy: 7 }
  },
  "watermelon": {
    category: "fruit", subcategory: "melon",
    flavors: ["sweet", "fresh", "light", "aqueous"],
    pairs_well: ["vodka", "tequila_blanco", "mezcal", "rum_white", "lime", "mint", "jalapeño", "basil", "elderflower_liqueur", "simple_syrup", "ginger"],
    pairs_ok: ["lemon", "grapefruit", "honey"],
    clashes: ["cream", "bourbon", "scotch"],
    taste_profile: { sweet: 7, tropical: 5, citrus: 1, tart: 1 }
  },
  "strawberry": {
    category: "fruit", subcategory: "berry",
    flavors: ["berry", "sweet", "floral", "slightly_tart"],
    pairs_well: ["vodka", "gin_london_dry", "prosecco", "champagne", "lemon", "lime", "basil", "mint", "balsamic", "elderflower_liqueur", "simple_syrup", "cointreau"],
    pairs_ok: ["rum_white", "tequila_blanco", "honey", "ginger", "black_pepper"],
    clashes: ["cream", "herbal"],
    taste_profile: { sweet: 8, berry: 9, citrus: 2, tart: 4 }
  },
  "raspberry": {
    category: "fruit", subcategory: "berry",
    flavors: ["berry", "tart", "bright", "floral"],
    pairs_well: ["vodka", "gin_london_dry", "prosecco", "champagne", "lemon", "lime", "elderflower_liqueur", "cassis", "simple_syrup", "mint", "basil", "rose_water"],
    pairs_ok: ["rum_white", "tequila_blanco", "honey", "ginger"],
    clashes: ["cream", "herbal"],
    taste_profile: { sweet: 6, berry: 9, citrus: 3, tart: 7 }
  },
  "blackberry": {
    category: "fruit", subcategory: "berry",
    flavors: ["berry", "tart", "earthy", "dark"],
    pairs_well: ["gin_london_dry", "bourbon", "vodka", "lemon", "lime", "cassis", "elderflower_liqueur", "simple_syrup", "mint", "sage", "thyme"],
    pairs_ok: ["rum_dark", "honey", "ginger"],
    clashes: ["cream"],
    taste_profile: { sweet: 6, berry: 9, citrus: 2, tart: 7 }
  },
  "blueberry": {
    category: "fruit", subcategory: "berry",
    flavors: ["berry", "sweet", "mild", "floral"],
    pairs_well: ["vodka", "gin_london_dry", "lemon", "lime", "elderflower_liqueur", "simple_syrup", "lavender", "basil", "mint"],
    pairs_ok: ["rum_white", "honey", "ginger"],
    clashes: ["cream"],
    taste_profile: { sweet: 7, berry: 8, citrus: 2, tart: 4 }
  },
  "peach": {
    category: "fruit", subcategory: "stone_fruit",
    flavors: ["stone_fruit", "sweet", "floral", "juicy"],
    pairs_well: ["bourbon", "vodka", "prosecco", "champagne", "lemon", "elderflower_liqueur", "basil", "mint", "ginger", "raspberry", "simple_syrup", "honey"],
    pairs_ok: ["lime", "rum_white", "tequila_blanco", "amaretto"],
    clashes: ["cream"],
    taste_profile: { sweet: 8, tropical: 4, citrus: 2, tart: 3 }
  },
  "cherry": {
    category: "fruit", subcategory: "stone_fruit",
    flavors: ["stone_fruit", "sweet", "slight_tart", "almond"],
    pairs_well: ["bourbon", "cognac", "rye_whiskey", "amaretto", "maraschino", "vermouth_sweet", "chocolate", "angostura_bitters", "lemon"],
    pairs_ok: ["rum_dark", "orange", "simple_syrup", "vanilla"],
    clashes: ["cream", "tropical"],
    taste_profile: { sweet: 8, berry: 7, citrus: 1, tart: 4 }
  },
  "apple": {
    category: "fruit", subcategory: "pome",
    flavors: ["crisp", "sweet_tart", "fresh", "mild"],
    pairs_well: ["bourbon", "rye_whiskey", "calvados", "elderflower_liqueur", "ginger", "cinnamon", "lemon", "honey", "simple_syrup", "vermouth_dry"],
    pairs_ok: ["gin_london_dry", "rum_dark", "lime", "orange"],
    clashes: ["cream"],
    taste_profile: { sweet: 6, citrus: 2, tart: 5, herbal: 2 }
  },
  "pear": {
    category: "fruit", subcategory: "pome",
    flavors: ["delicate", "sweet", "floral", "light"],
    pairs_well: ["gin_london_dry", "vodka", "elderflower_liqueur", "calvados", "lemon", "ginger", "honey", "simple_syrup", "vermouth_dry", "chartreuse_green"],
    pairs_ok: ["lime", "rum_white", "tequila_blanco", "cinnamon"],
    clashes: ["cream", "smoky"],
    taste_profile: { sweet: 7, citrus: 1, tart: 3, herbal: 2 }
  },
  "lychee": {
    category: "fruit", subcategory: "exotic",
    flavors: ["floral", "sweet", "exotic", "delicate"],
    pairs_well: ["vodka", "gin_london_dry", "sake", "elderflower_liqueur", "lemon", "lime", "ginger", "rose_water", "raspberry", "champagne", "prosecco"],
    pairs_ok: ["rum_white", "honey", "simple_syrup", "coconut"],
    clashes: ["cream", "smoky", "heavy_spirits"],
    taste_profile: { sweet: 8, tropical: 6, citrus: 2, tart: 2 }
  },
  "cranberry": {
    category: "fruit", subcategory: "berry",
    flavors: ["tart", "berry", "astringent", "slightly_sweet"],
    pairs_well: ["vodka", "gin_london_dry", "rum_white", "lime", "orange", "cointreau", "elderflower_liqueur", "ginger"],
    pairs_ok: ["lemon", "simple_syrup", "honey"],
    clashes: ["cream", "herbal", "smoky"],
    taste_profile: { sweet: 3, berry: 8, citrus: 4, tart: 9 }
  },
  "tamarind": {
    category: "fruit", subcategory: "tropical",
    flavors: ["tart", "sweet_sour", "tropical", "complex"],
    pairs_well: ["mezcal", "tequila_blanco", "rum_dark", "lime", "chili", "ginger", "mango", "jalapeño", "agave_syrup", "honey"],
    pairs_ok: ["lemon", "orange", "simple_syrup"],
    clashes: ["cream", "gin"],
    taste_profile: { sweet: 5, tropical: 7, citrus: 3, tart: 9 }
  },
  "fig": {
    category: "fruit", subcategory: "exotic",
    flavors: ["honey", "earthy", "sweet", "complex"],
    pairs_well: ["bourbon", "cognac", "rum_dark", "honey", "vanilla", "cinnamon", "orange", "lemon", "thyme", "rosemary"],
    pairs_ok: ["gin_london_dry", "simple_syrup", "amaro"],
    clashes: ["cream", "tropical"],
    taste_profile: { sweet: 8, tropical: 2, citrus: 1, tart: 2 }
  },
  "pomegranate": {
    category: "fruit", subcategory: "exotic",
    flavors: ["tart", "sweet", "floral", "tannic"],
    pairs_well: ["vodka", "gin_london_dry", "rum_white", "tequila_blanco", "lime", "lemon", "orange", "grenadine", "elderflower_liqueur", "ginger"],
    pairs_ok: ["simple_syrup", "honey", "prosecco"],
    clashes: ["cream", "herbal"],
    taste_profile: { sweet: 6, berry: 7, citrus: 4, tart: 7 }
  },

  // ============================================================
  // HERBS & SPICES (20)
  // ============================================================
  "mint": {
    category: "herb", subcategory: "fresh_herb",
    flavors: ["cool", "fresh", "aromatic", "slightly_sweet"],
    pairs_well: ["rum_white", "bourbon", "gin_london_dry", "vodka", "lime", "lemon", "grapefruit", "cucumber", "pineapple", "watermelon", "pea", "simple_syrup", "elderflower_liqueur"],
    pairs_ok: ["tequila_blanco", "ginger", "honey"],
    clashes: ["cream", "coffee", "herbal_bitter"],
    taste_profile: { herbal: 9, sweet: 2, bitter: 2, citrus: 1 }
  },
  "basil": {
    category: "herb", subcategory: "fresh_herb",
    flavors: ["herbal", "sweet", "floral", "peppery"],
    pairs_well: ["gin_london_dry", "vodka", "lemon", "lime", "grapefruit", "strawberry", "watermelon", "peach", "simple_syrup", "elderflower_liqueur"],
    pairs_ok: ["tequila_blanco", "rum_white", "honey", "balsamic"],
    clashes: ["cream", "bourbon", "smoky"],
    taste_profile: { herbal: 8, sweet: 3, bitter: 2, citrus: 2 }
  },
  "rosemary": {
    category: "herb", subcategory: "fresh_herb",
    flavors: ["pine", "herbal", "resinous", "aromatic"],
    pairs_well: ["gin_london_dry", "vodka", "grapefruit", "lemon", "honey", "simple_syrup", "blood_orange", "blackberry", "peach"],
    pairs_ok: ["tequila_blanco", "bourbon", "thyme"],
    clashes: ["cream", "sweet", "tropical"],
    taste_profile: { herbal: 9, sweet: 1, bitter: 3, citrus: 2 }
  },
  "thyme": {
    category: "herb", subcategory: "fresh_herb",
    flavors: ["earthy", "herbal", "floral", "subtle"],
    pairs_well: ["gin_london_dry", "vodka", "lemon", "grapefruit", "honey", "simple_syrup", "blackberry", "fig", "peach"],
    pairs_ok: ["tequila_blanco", "bourbon", "rosemary"],
    clashes: ["cream", "tropical"],
    taste_profile: { herbal: 8, sweet: 2, bitter: 2, citrus: 2 }
  },
  "cilantro": {
    category: "herb", subcategory: "fresh_herb",
    flavors: ["citrus", "herbal", "fresh", "polarizing"],
    pairs_well: ["mezcal", "tequila_blanco", "rum_white", "lime", "jalapeño", "grapefruit", "mango", "cucumber", "agave_syrup"],
    pairs_ok: ["vodka", "gin_london_dry", "simple_syrup"],
    clashes: ["cream", "bourbon", "sweet"],
    taste_profile: { herbal: 8, citrus: 5, sweet: 0, bitter: 2 }
  },
  "jalapeño": {
    category: "herb", subcategory: "chili",
    flavors: ["heat", "vegetal", "fresh_pepper"],
    pairs_well: ["mezcal", "tequila_blanco", "rum_white", "vodka", "lime", "grapefruit", "mango", "pineapple", "cucumber", "watermelon", "agave_syrup", "honey"],
    pairs_ok: ["lemon", "orange", "simple_syrup"],
    clashes: ["cream", "bourbon", "sweet_liqueur"],
    taste_profile: { herbal: 3, citrus: 1, sweet: 0, bitter: 1, spicy: 9 }
  },
  "ginger": {
    category: "herb", subcategory: "spice",
    flavors: ["spice", "warmth", "pungent", "slightly_sweet"],
    pairs_well: ["rum_dark", "bourbon", "vodka", "gin_london_dry", "lime", "lemon", "mango", "pineapple", "turmeric", "honey", "simple_syrup", "ginger_beer"],
    pairs_ok: ["tequila_blanco", "mezcal", "orange", "cointreau"],
    clashes: ["cream"],
    taste_profile: { herbal: 5, spicy: 7, sweet: 3, citrus: 2 }
  },
  "cucumber": {
    category: "herb", subcategory: "vegetable",
    flavors: ["fresh", "cool", "green", "aqueous"],
    pairs_well: ["gin_london_dry", "vodka", "elderflower_liqueur", "lemon", "lime", "mint", "basil", "dill", "simple_syrup", "tonic_water"],
    pairs_ok: ["tequila_blanco", "rum_white", "honey", "watermelon"],
    clashes: ["cream", "bourbon", "smoky"],
    taste_profile: { herbal: 5, sweet: 1, bitter: 1, citrus: 1 }
  },
  "lavender": {
    category: "herb", subcategory: "floral",
    flavors: ["floral", "herbal", "perfumed", "slightly_sweet"],
    pairs_well: ["gin_london_dry", "vodka", "lemon", "lime", "elderflower_liqueur", "honey", "simple_syrup", "blueberry", "lavender_syrup"],
    pairs_ok: ["prosecco", "champagne", "rum_white"],
    clashes: ["cream", "bourbon", "heavy_spirits"],
    taste_profile: { herbal: 8, sweet: 3, bitter: 1, citrus: 1 }
  },
  "black_pepper": {
    category: "herb", subcategory: "spice",
    flavors: ["spice", "heat", "pungent", "earthy"],
    pairs_well: ["strawberry", "peach", "mango", "bourbon", "rye_whiskey", "gin_london_dry", "lemon", "honey"],
    pairs_ok: ["rum_dark", "vodka", "simple_syrup"],
    clashes: ["cream", "sweet_liqueur"],
    taste_profile: { spicy: 7, herbal: 4, sweet: 0, bitter: 2 }
  },
  "cinnamon": {
    category: "herb", subcategory: "spice",
    flavors: ["warm_spice", "sweet", "woody"],
    pairs_well: ["bourbon", "rum_dark", "cognac", "apple", "orange", "honey", "orgeat", "demerara_syrup", "chocolate", "vanilla"],
    pairs_ok: ["tequila_reposado", "simple_syrup", "ginger"],
    clashes: ["cream", "tropical"],
    taste_profile: { spicy: 5, sweet: 4, herbal: 3, bitter: 1 }
  },
  "cardamom": {
    category: "herb", subcategory: "spice",
    flavors: ["floral", "spice", "complex", "aromatic"],
    pairs_well: ["gin_london_dry", "vodka", "rum_dark", "coffee", "honey", "simple_syrup", "lemon", "orange", "rose_water"],
    pairs_ok: ["bourbon", "cognac", "ginger"],
    clashes: ["cream"],
    taste_profile: { spicy: 6, sweet: 3, herbal: 7, bitter: 2 }
  },
  "chili": {
    category: "herb", subcategory: "chili",
    flavors: ["heat", "earthy", "fruity"],
    pairs_well: ["mezcal", "tequila_blanco", "vodka", "mango", "pineapple", "lime", "tamarind", "honey", "chocolate"],
    pairs_ok: ["rum_dark", "lemon", "grapefruit", "simple_syrup"],
    clashes: ["cream", "sweet_liqueur"],
    taste_profile: { spicy: 8, herbal: 3, sweet: 1, bitter: 2 }
  },
  "dill": {
    category: "herb", subcategory: "fresh_herb",
    flavors: ["fresh", "herbal", "anise_light", "green"],
    pairs_well: ["gin_london_dry", "vodka", "aquavit", "cucumber", "lemon", "elderflower_liqueur", "simple_syrup"],
    pairs_ok: ["tequila_blanco", "rum_white"],
    clashes: ["cream", "bourbon", "sweet"],
    taste_profile: { herbal: 8, sweet: 1, bitter: 1, citrus: 2 }
  },
  "star_anise": {
    category: "herb", subcategory: "spice",
    flavors: ["licorice", "anise", "sweet", "warm"],
    pairs_well: ["rum_dark", "bourbon", "vodka", "orange", "ginger", "honey", "simple_syrup", "chocolate"],
    pairs_ok: ["tequila_reposado", "cinnamon", "clove"],
    clashes: ["cream", "tropical"],
    taste_profile: { spicy: 4, sweet: 4, herbal: 7, bitter: 2 }
  },
  "turmeric": {
    category: "herb", subcategory: "spice",
    flavors: ["earthy", "bitter", "warm", "peppery"],
    pairs_well: ["ginger", "lemon", "honey", "coconut", "mango", "pineapple", "vodka", "rum_white"],
    pairs_ok: ["lime", "simple_syrup"],
    clashes: ["cream", "bourbon"],
    taste_profile: { spicy: 3, sweet: 1, herbal: 6, bitter: 4 }
  },
  "vanilla": {
    category: "herb", subcategory: "spice",
    flavors: ["sweet", "creamy", "warm", "floral"],
    pairs_well: ["bourbon", "rum_dark", "cognac", "chocolate", "coffee", "cream", "honey", "simple_syrup", "cinnamon", "peach", "strawberry"],
    pairs_ok: ["vodka", "amaretto", "orgeat"],
    clashes: ["campari", "fernet_branca", "herbal_bitter"],
    taste_profile: { sweet: 8, herbal: 2, bitter: 0, citrus: 0 }
  },
  "sage": {
    category: "herb", subcategory: "fresh_herb",
    flavors: ["herbal", "earthy", "slightly_bitter", "woody"],
    pairs_well: ["gin_london_dry", "vodka", "bourbon", "lemon", "grapefruit", "honey", "simple_syrup", "apple", "pear"],
    pairs_ok: ["rum_white", "tequila_blanco"],
    clashes: ["cream", "tropical"],
    taste_profile: { herbal: 9, sweet: 1, bitter: 3, citrus: 1 }
  },
  "lemongrass": {
    category: "herb", subcategory: "fresh_herb",
    flavors: ["citrus", "herbal", "fresh", "floral"],
    pairs_well: ["vodka", "gin_london_dry", "rum_white", "lime", "lemon", "ginger", "coconut", "mango", "elderflower_liqueur", "simple_syrup"],
    pairs_ok: ["tequila_blanco", "honey"],
    clashes: ["cream", "bourbon"],
    taste_profile: { herbal: 7, citrus: 6, sweet: 2, bitter: 1 }
  },
  "clove": {
    category: "herb", subcategory: "spice",
    flavors: ["warm_spice", "intense", "aromatic", "numbing"],
    pairs_well: ["rum_dark", "bourbon", "orgeat", "orange", "cinnamon", "ginger", "honey", "velvet_falernum"],
    pairs_ok: ["cognac", "simple_syrup"],
    clashes: ["cream", "tropical"],
    taste_profile: { spicy: 7, sweet: 3, herbal: 5, bitter: 3 }
  },

  // ============================================================
  // SYRUPS & SWEETENERS (20)
  // ============================================================
  "simple_syrup": {
    category: "sweetener", subcategory: "syrup",
    flavors: ["neutral_sweet", "clean"],
    pairs_well: ["lime", "lemon", "grapefruit", "mint", "cucumber", "most_spirits"],
    pairs_ok: ["orange", "honey", "agave_syrup"],
    clashes: [],
    taste_profile: { sweet: 8, bitter: 0, citrus: 0 }
  },
  "demerara_syrup": {
    category: "sweetener", subcategory: "syrup",
    flavors: ["rich", "molasses", "caramel", "brown_sugar"],
    pairs_well: ["bourbon", "rye_whiskey", "rum_dark", "cognac", "lemon", "orange", "angostura_bitters", "ginger", "cinnamon"],
    pairs_ok: ["mezcal", "tequila_reposado", "lime"],
    clashes: ["cream"],
    taste_profile: { sweet: 9, bitter: 0, citrus: 0 }
  },
  "honey": {
    category: "sweetener", subcategory: "natural",
    flavors: ["floral", "sweet", "complex", "natural"],
    pairs_well: ["bourbon", "gin_london_dry", "vodka", "rum_white", "lemon", "lime", "ginger", "mint", "lavender", "thyme", "grapefruit"],
    pairs_ok: ["tequila_blanco", "mezcal", "orange", "elderflower_liqueur"],
    clashes: ["cream"],
    taste_profile: { sweet: 9, herbal: 3, bitter: 0, citrus: 0 }
  },
  "agave_syrup": {
    category: "sweetener", subcategory: "natural",
    flavors: ["clean_sweet", "mild_agave", "floral"],
    pairs_well: ["tequila_blanco", "mezcal", "tequila_reposado", "lime", "grapefruit", "jalapeño", "cilantro", "orange", "pineapple", "mango"],
    pairs_ok: ["vodka", "gin_london_dry", "lemon"],
    clashes: ["cream"],
    taste_profile: { sweet: 8, herbal: 2, bitter: 0, citrus: 0 }
  },
  "orgeat": {
    category: "sweetener", subcategory: "syrup",
    flavors: ["almond", "sweet", "floral", "vanilla"],
    pairs_well: ["rum_white", "rum_dark", "rhum_jamaican", "bourbon", "cognac", "lime", "lemon", "orange", "grapefruit", "velvet_falernum", "angostura_bitters", "pineapple", "coconut"],
    pairs_ok: ["tequila_blanco", "vodka", "amaretto"],
    clashes: ["herbal", "campari", "gin"],
    taste_profile: { sweet: 9, herbal: 1, bitter: 0, citrus: 0 }
  },
  "grenadine": {
    category: "sweetener", subcategory: "syrup",
    flavors: ["pomegranate", "sweet", "tart", "floral"],
    pairs_well: ["rum_white", "vodka", "tequila_blanco", "gin_london_dry", "lemon", "lime", "orange", "grapefruit", "cointreau", "elderflower_liqueur"],
    pairs_ok: ["simple_syrup", "pineapple"],
    clashes: ["herbal", "cream"],
    taste_profile: { sweet: 8, berry: 5, citrus: 3, bitter: 0 }
  },
  "maple_syrup": {
    category: "sweetener", subcategory: "natural",
    flavors: ["maple", "rich", "caramel", "earthy"],
    pairs_well: ["bourbon", "rye_whiskey", "apple", "lemon", "orange", "ginger", "cinnamon", "angostura_bitters"],
    pairs_ok: ["rum_dark", "cognac", "vanilla"],
    clashes: ["cream", "tropical"],
    taste_profile: { sweet: 9, herbal: 1, bitter: 0, citrus: 0 }
  },
  "lavender_syrup": {
    category: "sweetener", subcategory: "syrup",
    flavors: ["floral", "lavender", "sweet", "herbal"],
    pairs_well: ["gin_london_dry", "vodka", "lemon", "lime", "elderflower_liqueur", "blueberry", "lavender"],
    pairs_ok: ["rum_white", "honey", "prosecco"],
    clashes: ["cream", "bourbon"],
    taste_profile: { sweet: 8, herbal: 7, bitter: 0, citrus: 1 }
  },
  "rose_water": {
    category: "sweetener", subcategory: "floral",
    flavors: ["rose", "floral", "delicate", "perfumed"],
    pairs_well: ["gin_london_dry", "vodka", "lychee", "raspberry", "elderflower_liqueur", "lemon", "lime", "honey"],
    pairs_ok: ["rum_white", "prosecco"],
    clashes: ["cream", "bourbon", "smoky"],
    taste_profile: { sweet: 4, herbal: 5, bitter: 0, citrus: 1 }
  },
  "falernum": {
    category: "sweetener", subcategory: "tiki_syrup",
    flavors: ["clove", "almond", "lime", "ginger", "spice"],
    pairs_well: ["rum_white", "rum_dark", "rhum_jamaican", "lime", "pineapple", "grapefruit", "orgeat", "angostura_bitters", "mango", "coconut"],
    pairs_ok: ["tequila_blanco", "ginger_beer", "passion_fruit"],
    clashes: ["cream", "herbal"],
    taste_profile: { sweet: 7, spicy: 4, citrus: 3, bitter: 1 }
  },
  "passion_fruit_syrup": {
    category: "sweetener", subcategory: "syrup",
    flavors: ["tropical", "tart", "floral", "exotic"],
    pairs_well: ["rum_white", "vodka", "lime", "pineapple", "coconut", "mango", "guava", "elderflower_liqueur"],
    pairs_ok: ["tequila_blanco", "grapefruit", "honey"],
    clashes: ["cream", "bourbon"],
    taste_profile: { sweet: 7, tropical: 9, citrus: 4, bitter: 0 }
  },
  "ginger_syrup": {
    category: "sweetener", subcategory: "syrup",
    flavors: ["ginger", "warm", "spice", "sweet"],
    pairs_well: ["bourbon", "gin_london_dry", "vodka", "lime", "lemon", "mango", "pineapple", "honey"],
    pairs_ok: ["rum_dark", "tequila_blanco", "orange"],
    clashes: ["cream"],
    taste_profile: { sweet: 7, spicy: 6, herbal: 3, citrus: 2 }
  },
  "honey_syrup": {
    category: "sweetener", subcategory: "syrup",
    flavors: ["honey", "floral", "smooth", "sweet"],
    pairs_well: ["bourbon", "gin_london_dry", "vodka", "rum_white", "lemon", "lime", "ginger", "mint", "lavender", "thyme"],
    pairs_ok: ["tequila_blanco", "mezcal", "orange"],
    clashes: ["cream"],
    taste_profile: { sweet: 9, herbal: 3, bitter: 0, citrus: 0 }
  },
  "hibiscus_syrup": {
    category: "sweetener", subcategory: "syrup",
    flavors: ["floral", "tart", "berry", "sweet"],
    pairs_well: ["mezcal", "tequila_blanco", "vodka", "gin_london_dry", "lime", "grapefruit", "lemon", "elderflower_liqueur"],
    pairs_ok: ["rum_white", "honey", "simple_syrup"],
    clashes: ["cream", "bourbon"],
    taste_profile: { sweet: 6, berry: 6, citrus: 4, bitter: 3 }
  },
  "cinnamon_syrup": {
    category: "sweetener", subcategory: "syrup",
    flavors: ["cinnamon", "warm", "sweet", "spice"],
    pairs_well: ["bourbon", "rum_dark", "cognac", "apple", "orange", "lemon", "angostura_bitters"],
    pairs_ok: ["tequila_reposado", "ginger", "honey"],
    clashes: ["cream"],
    taste_profile: { sweet: 8, spicy: 5, herbal: 2, citrus: 0 }
  },
  "tamarind_syrup": {
    category: "sweetener", subcategory: "syrup",
    flavors: ["tart", "sweet_sour", "tropical", "complex"],
    pairs_well: ["mezcal", "tequila_blanco", "rum_dark", "lime", "chili", "ginger", "mango", "agave_syrup"],
    pairs_ok: ["lemon", "vodka", "simple_syrup"],
    clashes: ["cream", "gin"],
    taste_profile: { sweet: 5, tropical: 7, citrus: 3, tart: 9 }
  },
  "velvet_falernum_syrup": {
    category: "sweetener", subcategory: "tiki_syrup",
    flavors: ["clove", "almond", "lime", "ginger", "spice"],
    pairs_well: ["rum_white", "rum_dark", "rhum_jamaican", "lime", "pineapple", "orgeat"],
    pairs_ok: ["tequila_blanco", "coconut"],
    clashes: ["cream"],
    taste_profile: { sweet: 7, spicy: 4, citrus: 3, bitter: 1 }
  },
  "pineapple_syrup": {
    category: "sweetener", subcategory: "syrup",
    flavors: ["tropical", "sweet", "tart", "pineapple"],
    pairs_well: ["rum_white", "vodka", "tequila_blanco", "lime", "coconut", "jalapeño", "ginger"],
    pairs_ok: ["rum_dark", "lemon", "simple_syrup"],
    clashes: ["cream", "bourbon"],
    taste_profile: { sweet: 8, tropical: 9, citrus: 3, bitter: 0 }
  },
  "coconut_cream": {
    category: "sweetener", subcategory: "cream",
    flavors: ["coconut", "sweet", "creamy", "tropical"],
    pairs_well: ["rum_white", "rum_dark", "vodka", "pineapple", "mango", "lime", "orgeat"],
    pairs_ok: ["tequila_blanco", "orange"],
    clashes: ["gin_london_dry", "campari", "herbal"],
    taste_profile: { sweet: 8, tropical: 9, citrus: 0, bitter: 0, creamy: 9 }
  },
  "simple_syrup_rich": {
    category: "sweetener", subcategory: "syrup",
    flavors: ["rich", "sweet", "clean", "viscous"],
    pairs_well: ["lime", "lemon", "grapefruit", "mint", "most_spirits"],
    pairs_ok: ["orange", "honey", "agave_syrup"],
    clashes: [],
    taste_profile: { sweet: 10, bitter: 0, citrus: 0 }
  },

  // ============================================================
  // MIXERS (20)
  // ============================================================
  "tonic_water": {
    category: "mixer", subcategory: "carbonated",
    flavors: ["bitter", "quinine", "slight_sweet", "carbonated"],
    pairs_well: ["gin_london_dry", "vodka", "tequila_blanco", "elderflower_liqueur", "cucumber", "lime", "lemon", "grapefruit"],
    pairs_ok: ["rum_white", "mezcal", "campari"],
    clashes: ["cream", "bourbon", "heavy_spirits"],
    taste_profile: { bitter: 5, sweet: 3, citrus: 2 }
  },
  "soda_water": {
    category: "mixer", subcategory: "carbonated",
    flavors: ["neutral", "carbonated", "refreshing"],
    pairs_well: ["any_spirit", "lime", "lemon", "bitters", "most_ingredients"],
    pairs_ok: [],
    clashes: ["cream"],
    taste_profile: { bitter: 0, sweet: 0, citrus: 0 }
  },
  "ginger_beer": {
    category: "mixer", subcategory: "carbonated",
    flavors: ["ginger", "spice", "sweet", "carbonated"],
    pairs_well: ["vodka", "bourbon", "rum_dark", "mezcal", "tequila_blanco", "lime", "lemon", "ginger", "mint", "cucumber"],
    pairs_ok: ["gin_london_dry", "rum_white", "orange"],
    clashes: ["cream", "floral_liqueur"],
    taste_profile: { spicy: 6, sweet: 4, citrus: 2 }
  },
  "ginger_ale": {
    category: "mixer", subcategory: "carbonated",
    flavors: ["ginger", "sweet", "mild", "carbonated"],
    pairs_well: ["bourbon", "vodka", "rum_dark", "lime", "lemon", "angostura_bitters"],
    pairs_ok: ["gin_london_dry", "rum_white", "orange"],
    clashes: ["cream"],
    taste_profile: { spicy: 3, sweet: 5, citrus: 2 }
  },
  "cola": {
    category: "mixer", subcategory: "carbonated",
    flavors: ["caramel", "vanilla", "spice", "sweet", "carbonated"],
    pairs_well: ["rum_dark", "bourbon", "vodka", "lime", "lemon"],
    pairs_ok: ["tequila_blanco", "gin_london_dry"],
    clashes: ["mezcal", "campari", "herbal"],
    taste_profile: { sweet: 8, spicy: 2, citrus: 1 }
  },
  "cranberry_juice": {
    category: "mixer", subcategory: "juice",
    flavors: ["tart", "berry", "slightly_sweet"],
    pairs_well: ["vodka", "gin_london_dry", "rum_white", "lime", "orange", "cointreau"],
    pairs_ok: ["tequila_blanco", "simple_syrup"],
    clashes: ["cream", "herbal", "smoky"],
    taste_profile: { sweet: 3, berry: 8, citrus: 4, tart: 9 }
  },
  "pineapple_juice": {
    category: "mixer", subcategory: "juice",
    flavors: ["tropical", "sweet", "tart"],
    pairs_well: ["rum_white", "rum_dark", "vodka", "coconut", "lime", "ginger_beer"],
    pairs_ok: ["tequila_blanco", "gin_london_dry"],
    clashes: ["cream", "bourbon"],
    taste_profile: { sweet: 7, tropical: 9, citrus: 4, bitter: 0 }
  },
  "orange_juice": {
    category: "mixer", subcategory: "juice",
    flavors: ["citrus", "sweet", "tart", "fresh"],
    pairs_well: ["vodka", "gin_london_dry", "champagne", "prosecco", "rum_white", "cointreau", "grenadine"],
    pairs_ok: ["tequila_blanco", "bourbon", "aperol"],
    clashes: ["cream", "smoky"],
    taste_profile: { sweet: 6, citrus: 8, tart: 4, bitter: 1 }
  },
  "coconut_water": {
    category: "mixer", subcategory: "juice",
    flavors: ["light", "sweet", "tropical", "mineral"],
    pairs_well: ["vodka", "rum_white", "tequila_blanco", "lime", "pineapple", "mango", "mint"],
    pairs_ok: ["gin_london_dry", "elderflower_liqueur"],
    clashes: ["cream", "bourbon"],
    taste_profile: { sweet: 4, tropical: 6, citrus: 1 }
  },
  "cold_brew": {
    category: "mixer", subcategory: "coffee",
    flavors: ["coffee", "bitter", "rich", "smooth"],
    pairs_well: ["vodka", "rum_dark", "bourbon", "coffee_liqueur", "chocolate", "vanilla", "simple_syrup"],
    pairs_ok: ["tequila_reposado", "mezcal", "honey"],
    clashes: ["campari", "aperol", "tropical"],
    taste_profile: { bitter: 8, sweet: 2, citrus: 0 }
  },
  "espresso": {
    category: "mixer", subcategory: "coffee",
    flavors: ["intense_coffee", "bitter", "roasted"],
    pairs_well: ["vodka", "rum_dark", "bourbon", "coffee_liqueur", "chocolate", "vanilla", "simple_syrup", "amaretto"],
    pairs_ok: ["tequila_reposado", "mezcal"],
    clashes: ["campari", "aperol", "tropical"],
    taste_profile: { bitter: 9, sweet: 1, citrus: 0 }
  },
  "coconut_milk": {
    category: "mixer", subcategory: "cream",
    flavors: ["creamy", "coconut", "sweet", "tropical"],
    pairs_well: ["rum_white", "rum_dark", "vodka", "pineapple", "mango", "lime", "orgeat"],
    pairs_ok: ["tequila_blanco"],
    clashes: ["gin_london_dry", "campari", "herbal", "bourbon"],
    taste_profile: { sweet: 5, tropical: 8, citrus: 0, creamy: 8 }
  },
  "aquafaba": {
    category: "mixer", subcategory: "foam",
    flavors: ["neutral", "vegan_egg", "light"],
    pairs_well: ["gin_london_dry", "vodka", "pisco", "rum_white", "lemon", "lime", "simple_syrup"],
    pairs_ok: ["bourbon", "tequila_blanco"],
    clashes: ["cream"],
    taste_profile: { sweet: 0, bitter: 0, citrus: 0 }
  },
  "egg_white": {
    category: "mixer", subcategory: "foam",
    flavors: ["neutral", "silky", "slight_savory"],
    pairs_well: ["gin_london_dry", "vodka", "pisco", "rum_white", "bourbon", "lemon", "lime", "simple_syrup", "orgeat"],
    pairs_ok: ["tequila_blanco", "cognac"],
    clashes: ["cream", "ginger_beer"],
    taste_profile: { sweet: 0, bitter: 0, citrus: 0 }
  },
  "cream": {
    category: "mixer", subcategory: "cream",
    flavors: ["rich", "creamy", "sweet", "dairy"],
    pairs_well: ["vodka", "bourbon", "irish_whiskey", "coffee_liqueur", "amaretto", "vanilla", "chocolate", "honey"],
    pairs_ok: ["rum_dark", "brandy"],
    clashes: ["campari", "aperol", "citrus", "gin", "mezcal", "tequila"],
    taste_profile: { sweet: 5, creamy: 10, bitter: 0, citrus: 0 }
  },
  "honey_water": {
    category: "mixer", subcategory: "diluted",
    flavors: ["honey", "floral", "sweet", "light"],
    pairs_well: ["bourbon", "gin_london_dry", "vodka", "lemon", "lime"],
    pairs_ok: ["rum_white", "tequila_blanco"],
    clashes: [],
    taste_profile: { sweet: 7, herbal: 2, bitter: 0, citrus: 0 }
  },
  "green_tea": {
    category: "mixer", subcategory: "tea",
    flavors: ["green", "herbal", "slightly_bitter", "delicate"],
    pairs_well: ["vodka", "gin_london_dry", "sake", "lemon", "honey", "elderflower_liqueur", "lychee", "ginger"],
    pairs_ok: ["rum_white", "simple_syrup"],
    clashes: ["cream", "bourbon"],
    taste_profile: { sweet: 1, herbal: 7, bitter: 4, citrus: 2 }
  },
  "sparkling_wine": {
    category: "mixer", subcategory: "wine",
    flavors: ["yeast", "citrus", "mineral", "fresh", "carbonated"],
    pairs_well: ["elderflower_liqueur", "peach", "strawberry", "raspberry", "aperol", "cassis", "cointreau", "lemon", "grapefruit"],
    pairs_ok: ["honey", "simple_syrup"],
    clashes: ["cream", "heavy_spirits"],
    taste_profile: { sweet: 2, citrus: 4, bitter: 2, herbal: 1 }
  },
  "red_wine": {
    category: "mixer", subcategory: "wine",
    flavors: ["tannic", "fruity", "berry", "earthy"],
    pairs_well: ["bourbon", "cognac", "blackberry", "cherry", "orange", "cinnamon", "angostura_bitters"],
    pairs_ok: ["rum_dark", "simple_syrup"],
    clashes: ["cream", "tropical", "citrus"],
    taste_profile: { sweet: 3, berry: 7, citrus: 2, bitter: 5 }
  },
  "kombucha": {
    category: "mixer", subcategory: "fermented",
    flavors: ["tart", "fermented", "slightly_sweet", "earthy"],
    pairs_well: ["vodka", "gin_london_dry", "rum_white", "lime", "ginger", "elderflower_liqueur"],
    pairs_ok: ["tequila_blanco", "simple_syrup"],
    clashes: ["cream", "bourbon"],
    taste_profile: { sweet: 3, tart: 6, herbal: 4, bitter: 3 }
  },

  // ============================================================
  // BITTERS & ACCENTS (15)
  // ============================================================
  "angostura_bitters": {
    category: "bitters", subcategory: "aromatic",
    flavors: ["aromatic", "spice", "bitter", "clove", "gentian"],
    pairs_well: ["bourbon", "rye_whiskey", "rum_dark", "rum_white", "cognac", "orange", "lemon", "cherry", "vermouth_sweet"],
    pairs_ok: ["gin_london_dry", "tequila_blanco", "mezcal"],
    clashes: ["cream", "tropical"],
    taste_profile: { bitter: 9, spicy: 6, herbal: 8, citrus: 1 }
  },
  "peychauds_bitters": {
    category: "bitters", subcategory: "aromatic",
    flavors: ["anise", "floral", "light_bitter", "cherry"],
    pairs_well: ["rye_whiskey", "bourbon", "cognac", "absinthe", "lemon", "cherry", "vermouth_sweet"],
    pairs_ok: ["rum_dark", "gin_london_dry"],
    clashes: ["cream", "tropical"],
    taste_profile: { bitter: 7, spicy: 3, herbal: 7, citrus: 2 }
  },
  "orange_bitters": {
    category: "bitters", subcategory: "citrus",
    flavors: ["orange_peel", "bitter", "citrus", "spice"],
    pairs_well: ["gin_london_dry", "vodka", "bourbon", "vermouth_dry", "vermouth_sweet", "cognac", "orange", "lemon"],
    pairs_ok: ["rum_dark", "tequila_blanco"],
    clashes: ["cream"],
    taste_profile: { bitter: 7, citrus: 8, herbal: 5, sweet: 1 }
  },
  "chocolate_bitters": {
    category: "bitters", subcategory: "dessert",
    flavors: ["chocolate", "bitter", "cacao", "dark"],
    pairs_well: ["bourbon", "rum_dark", "cognac", "mezcal", "coffee", "orange", "cherry", "vanilla", "angostura_bitters"],
    pairs_ok: ["vodka", "tequila_reposado"],
    clashes: ["cream", "tropical"],
    taste_profile: { bitter: 8, sweet: 3, herbal: 4, citrus: 0 }
  },
  "mole_bitters": {
    category: "bitters", subcategory: "complex",
    flavors: ["chili", "chocolate", "spice", "complex"],
    pairs_well: ["mezcal", "tequila_reposado", "rum_dark", "bourbon", "chocolate", "orange", "chili", "vanilla"],
    pairs_ok: ["vodka", "coffee_liqueur"],
    clashes: ["cream", "tropical", "floral"],
    taste_profile: { bitter: 7, spicy: 7, herbal: 5, sweet: 2 }
  },

  // ============================================================
  // GARNISHES (10)
  // ============================================================
  "salt": {
    category: "garnish", subcategory: "mineral",
    flavors: ["saline", "mineral", "savory"],
    pairs_well: ["mezcal", "tequila_blanco", "grapefruit", "watermelon", "lime", "jalapeño", "cucumber"],
    pairs_ok: ["vodka", "rum_white"],
    clashes: ["cream", "sweet"],
    taste_profile: { savory: 9, bitter: 0, sweet: 0, citrus: 0 }
  },
  "tajin": {
    category: "garnish", subcategory: "spice",
    flavors: ["chili_lime", "salt", "spice", "citrus"],
    pairs_well: ["mezcal", "tequila_blanco", "mango", "watermelon", "pineapple", "cucumber", "lime", "grapefruit"],
    pairs_ok: ["vodka", "rum_white"],
    clashes: ["cream", "sweet"],
    taste_profile: { spicy: 7, savory: 6, citrus: 5, sweet: 0 }
  },
  "edible_flowers": {
    category: "garnish", subcategory: "floral",
    flavors: ["floral", "delicate", "visual"],
    pairs_well: ["gin_london_dry", "vodka", "elderflower_liqueur", "prosecco", "champagne", "cucumber", "lavender"],
    pairs_ok: ["rum_white", "tequila_blanco"],
    clashes: ["bourbon", "scotch", "mezcal"],
    taste_profile: { sweet: 2, herbal: 4, bitter: 0, citrus: 1 }
  },
  "coconut_flakes": {
    category: "garnish", subcategory: "tropical",
    flavors: ["coconut", "sweet", "toasted"],
    pairs_well: ["rum_white", "rum_dark", "vodka", "pineapple", "mango", "lime"],
    pairs_ok: ["tequila_blanco"],
    clashes: ["gin_london_dry", "campari", "herbal"],
    taste_profile: { sweet: 6, tropical: 8, bitter: 0, citrus: 0 }
  },
  "lime_wheel": {
    category: "garnish", subcategory: "citrus",
    flavors: ["citrus", "aromatic", "fresh"],
    pairs_well: ["rum_white", "tequila_blanco", "mezcal", "vodka", "gin_london_dry"],
    pairs_ok: ["most_spirits"],
    clashes: [],
    taste_profile: { citrus: 8, tart: 6, sweet: 0 }
  },
  "lemon_twist": {
    category: "garnish", subcategory: "citrus",
    flavors: ["citrus_oils", "bright", "aromatic"],
    pairs_well: ["gin_london_dry", "vodka", "bourbon", "cognac", "vermouth_dry"],
    pairs_ok: ["most_spirits"],
    clashes: [],
    taste_profile: { citrus: 8, sweet: 0, bitter: 2 }
  },
  "orange_slice": {
    category: "garnish", subcategory: "citrus",
    flavors: ["sweet_citrus", "aromatic"],
    pairs_well: ["bourbon", "cognac", "rum_dark", "campari", "aperol"],
    pairs_ok: ["most_spirits"],
    clashes: [],
    taste_profile: { citrus: 7, sweet: 5, bitter: 1 }
  },
  "mint_sprig": {
    category: "garnish", subcategory: "herb",
    flavors: ["cool", "aromatic", "fresh"],
    pairs_well: ["rum_white", "bourbon", "gin_london_dry", "vodka", "lime"],
    pairs_ok: ["most_spirits"],
    clashes: [],
    taste_profile: { herbal: 7, sweet: 1, bitter: 1, citrus: 0 }
  },
  "rosemary_sprig": {
    category: "garnish", subcategory: "herb",
    flavors: ["pine", "herbal", "aromatic"],
    pairs_well: ["gin_london_dry", "vodka", "grapefruit", "lemon"],
    pairs_ok: ["bourbon", "tequila_blanco"],
    clashes: [],
    taste_profile: { herbal: 8, sweet: 0, bitter: 2, citrus: 1 }
  },
  "dehydrated_citrus": {
    category: "garnish", subcategory: "citrus",
    flavors: ["concentrated_citrus", "slightly_bitter", "aromatic"],
    pairs_well: ["gin_london_dry", "vodka", "tequila_blanco", "rum_white", "most_spirits"],
    pairs_ok: [],
    clashes: [],
    taste_profile: { citrus: 9, bitter: 3, sweet: 2 }
  },
};

// Helper: get all ingredient keys as array
export const ALL_INGREDIENT_KEYS = Object.keys(INGREDIENTS_DB);

// Helper: get display name from key
export const getDisplayName = (key) =>
  key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

// Helper: get category color
export const getCategoryColor = (category) => {
  const colors = {
    spirit: '#8b5cf6',
    liqueur: '#ec4899',
    citrus: '#f59e0b',
    fruit: '#10b981',
    herb: '#6ee7b7',
    sweetener: '#fbbf24',
    mixer: '#60a5fa',
    bitters: '#f87171',
    garnish: '#a78bfa',
  };
  return colors[category] || '#6b7280';
};
