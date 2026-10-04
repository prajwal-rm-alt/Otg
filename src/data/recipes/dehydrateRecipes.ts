import { Recipe } from '../../types';

export const dehydrateRecipes: Recipe[] = [
  {
    id: 'deh-01',
    title: 'Cinnamon Spiced Apple Rings',
    subtitle: 'Crisp, naturally sweet apple chips with delicate warm spice',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'airfryer_5l', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '55°C',
        time: '6 - 8 hours',
        mode: 'Dehydrate Convection Low-Fan',
        rackOrBasket: 'All 3 Wire Racks with parchment paper',
        accessory: 'Wire Racks (Up to 4 tiers)',
        specialNote: 'Rotate rack positions after 4 hours for even drying across all tiers.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '60°C (Lowest setting)',
        time: '5 - 7 hours',
        mode: 'Convection Keep-Warm / Low Air',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Wire Shelf + Baking Tray with parchment',
        specialNote: 'Crack oven door open slightly with wooden spoon if temp exceeds 65°C.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '55°C',
        time: '4 - 5 hours',
        mode: 'Dehydrate Preset',
        rackOrBasket: 'Crisper Plate (Single layer)',
        accessory: 'Perforated Crisper Basket',
        specialNote: 'Flip slices halfway through dehydration cycle.'
      }
    },
    defaultCookTime: '6 hrs',
    defaultPrepTime: '15 mins',
    defaultTemp: '55°C',
    defaultMode: 'Dehydrate Low-Fan',
    imageUrl: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&auto=format&fit=crop&q=80',
    description: 'Crisp, papery concentric apple rings retaining pure natural sweetness. Soaked lightly in lemon water to stop browning, dusted with Ceylon cinnamon, and slowly dehydrated.',
    ingredients: [
      '4 large Crisp Honeycrisp or Gala Apples',
      '2 tbsp Fresh Lemon Juice',
      '2 cups Cold Filtered Water',
      '1 tsp Ground Ceylon Cinnamon',
      '1/4 tsp Ground Nutmeg'
    ],
    instructions: [
      'Core the apples and slice uniformly into 3mm - 4mm rounds using a mandoline.',
      'Submerge slices in lemon water bath for 5 minutes to prevent enzymatic oxidation browning.',
      'Pat completely dry on both sides with clean kitchen towels.',
      'Dust lightly with cinnamon and nutmeg.',
      'Arrange on wire racks with 5mm gaps between rings for optimal air circulation.',
      'Dehydrate at 55°C for 6 to 8 hours until leathery and snap-crisp when cooled.'
    ],
    proTips: [
      'Always test crispness after letting a test ring cool for 5 minutes; hot rings remain pliable.',
      'Store in sealed glass mason jars with a food-safe desiccant pouch for up to 6 months.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '6 snack servings',
    tags: ['Dehydrate', 'Vegan', 'Oil Free', 'Healthy Snack', 'Fruit Chips'],
    dehydrateThickness: '3mm'
  },
  {
    id: 'deh-02',
    title: 'Translucent Citrus Wheels (Oranges & Lemons)',
    subtitle: 'Stunning stained-glass citrus wheels for artisan tea infusions & cocktail garnish',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'airfryer_5l', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '55°C',
        time: '8 - 10 hours',
        mode: 'Dehydrate Convection',
        rackOrBasket: 'Multi-tier Wire Racks with silicone mesh',
        accessory: 'Wire Racks (Tiers 1, 2, 3)',
        specialNote: 'Accommodates up to 8 sliced oranges at once across multiple racks.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '60°C',
        time: '7 - 9 hours',
        mode: 'Low Convection Heat',
        rackOrBasket: 'Center Wire Rack with parchment',
        accessory: 'Wire Rack',
        specialNote: 'Check after 7 hours for crisp translucency.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '55°C',
        time: '5 - 7 hours',
        mode: 'Dehydrate Preset',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Basket',
        specialNote: 'Do not overlap wheels for uniform drying.'
      }
    },
    defaultCookTime: '8 hrs',
    defaultPrepTime: '15 mins',
    defaultTemp: '55°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1596797882870-8c33deeac224?w=800&auto=format&fit=crop&q=80',
    description: 'Vibrant, brittle citrus medallions with glowing translucent pulp. Perfect for simmering spiced mulled cider, dropping in herbal teas, or gourmet cake decoration.',
    ingredients: [
      '3 Navel Oranges',
      '2 Blood Oranges',
      '2 Eureka Lemons',
      '1 Lime'
    ],
    instructions: [
      'Scrub citrus skins thoroughly and pat dry.',
      'Slice into exact 4mm uniform rounds, discarding ends and seeds.',
      'Press lightly between paper towels to absorb surface citrus juices.',
      'Arrange on dehydrator wire racks without overlapping.',
      'Dry at 55°C for 8 to 10 hours until pulp feels completely dry and rind is brittle.',
      'Cool completely before packaging in airtight glass jars.'
    ],
    proTips: [
      'Thinner slices (3mm) will turn glass-brittle, while 5mm slices retain a slight chewy citrus core.',
      'Dropping one dehydrated blood orange wheel into sparkling tonic creates an instant gourmet mocktail.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '35 citrus wheels',
    tags: ['Dehydrate', 'Tea Infusion', 'Cocktail Garnish', 'Citrus', 'Zero Waste'],
    dehydrateThickness: '4mm'
  },
  {
    id: 'deh-03',
    title: 'Sun-Dried Italian Heirloom Tomatoes',
    subtitle: 'Rich umami-packed leathery tomato rounds with sea salt & wild oregano',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '60°C',
        time: '7 - 10 hours',
        mode: 'Dehydrate Convection',
        rackOrBasket: 'Multi-tier Wire Racks with parchment paper',
        accessory: 'Baking Trays & Wire Racks',
        specialNote: 'Parchment paper prevents tomato acid from reacting with aluminum.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '65°C',
        time: '6 - 9 hours',
        mode: 'Convection Low',
        rackOrBasket: 'Middle Rack',
        accessory: 'Baking Tray lined with parchment',
        specialNote: 'Check firmness at 6 hours.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '60°C',
        time: '4 - 6 hours',
        mode: 'Dehydrate Mode',
        rackOrBasket: 'Crisper Plate with perforated parchment',
        accessory: 'Crisper Drawer',
        specialNote: 'Cut cherry tomatoes in half skin-side down.'
      }
    },
    defaultCookTime: '8 hrs',
    defaultPrepTime: '20 mins',
    defaultTemp: '60°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
    description: 'Concentrated tomato umami with deep red ruby color. Ideal for tossing into pasta, blending into pestos, or topping sourdough focaccia.',
    ingredients: [
      '1 kg Ripe Plum / Roma Tomatoes or Sweet Cherry Tomatoes',
      '1 tsp Coarse Flaky Sea Salt',
      '1 tbsp Dried Wild Oregano',
      '1/2 tsp Freshly Cracked Black Pepper',
      'Extra Virgin Olive Oil (for jar preservation)'
    ],
    instructions: [
      'Halve cherry tomatoes or slice Roma tomatoes into 6mm thick rounds.',
      'Gently scoop out excess wet seed pulp with a small spoon to speed drying.',
      'Place cut-side up on parchment-lined wire racks.',
      'Sprinkle lightly with sea salt and dried oregano.',
      'Dehydrate at 60°C for 7 to 10 hours until deep crimson, flexible, and free of liquid pockets.',
      'Pack into sterilized glass jars submerged under quality olive oil with fresh rosemary.'
    ],
    proTips: [
      'Seeding the tomatoes cuts dehydration time by nearly 40%.',
      'The flavored olive oil in the jar becomes an incredible dipping oil for sourdough crusts.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '1 large jar',
    tags: ['Dehydrate', 'Italian', 'Pantry Staple', 'Umami', 'Tomatoes'],
    dehydrateThickness: '6mm rounds'
  },
  {
    id: 'deh-04',
    title: 'Natural Chewy Banana & Plantain Chips',
    subtitle: 'Golden, oil-free banana coins naturally sweetened and slow-dried',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'airfryer_5l', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '55°C',
        time: '7 - 9 hours',
        mode: 'Dehydrate Convection',
        rackOrBasket: 'Wire Racks with non-stick silicone mats',
        accessory: 'Wire Racks (Tiers 1 & 3)',
        specialNote: 'Bananas can stick; silicone mesh mats ensure effortless release.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '60°C',
        time: '6 - 8 hours',
        mode: 'Convection Low',
        rackOrBasket: 'Center Wire Rack with parchment',
        accessory: 'Wire Shelf',
        specialNote: 'Dust with cinnamon or fine salt before drying.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '55°C',
        time: '4 - 6 hours',
        mode: 'Dehydrate Preset',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Perforated plate',
        specialNote: 'Lightly oil plate with coconut oil spray.'
      }
    },
    defaultCookTime: '7 hrs',
    defaultPrepTime: '10 mins',
    defaultTemp: '55°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&auto=format&fit=crop&q=80',
    description: 'Unlike commercial fried banana chips soaked in palm oil and sugar syrup, these are 100% pure fruit, developing a chewy, candy-like sweetness through slow moisture loss.',
    ingredients: [
      '5 Firm, Barely Ripe Yellow Bananas (No brown speckles)',
      '1 tbsp Lemon Juice',
      '1/4 tsp Ground Cardamom or Cinnamon (Optional)',
      '1 pinch Pink Himalayan Salt'
    ],
    instructions: [
      'Peel bananas and slice into uniform 4mm discs.',
      'Toss gently with lemon juice in a bowl to prevent dark oxidation.',
      'Lay slices flat in a single layer on parchment or silicone mesh.',
      'Sprinkle with a pinch of cardamom or sea salt.',
      'Dehydrate at 55°C for 7 to 9 hours until firm, leathery, and dry to the touch.',
      'Let cool completely on racks before storing in an airtight container.'
    ],
    proTips: [
      'Use firm yellow bananas; overly ripe bananas become too sticky and gooey to dehydrate cleanly.',
      'For plantain chips, slice thinly on diagonal (2mm) and season with chili lime seasoning.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 servings',
    tags: ['Dehydrate', 'Snack', 'Oil Free', 'Gluten Free', 'Kid Friendly'],
    dehydrateThickness: '4mm discs'
  },
  {
    id: 'deh-05',
    title: 'Ruby Strawberry & Kiwi Medallions',
    subtitle: 'Vibrant, tart-sweet jewel snacks with crunchy seeds and concentrated fruit flavor',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'airfryer_5l', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '55°C',
        time: '6 - 8 hours',
        mode: 'Dehydrate Convection Low-Fan',
        rackOrBasket: 'Multi-rack with parchment',
        accessory: '3x Wire Shelves',
        specialNote: 'Strawberries contain high sugar; parchment prevents sticking.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '60°C',
        time: '6 - 7 hours',
        mode: 'Convection Keep-Warm',
        rackOrBasket: 'Middle Wire Rack',
        accessory: 'Wire Shelf + Baking Tray',
        specialNote: 'Slice strawberries lengthwise for gorgeous heart shapes.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '55°C',
        time: '4 - 5 hours',
        mode: 'Dehydrate Mode',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Air flow tray',
        specialNote: 'Avoid overlapping delicate berry slices.'
      }
    },
    defaultCookTime: '7 hrs',
    defaultPrepTime: '15 mins',
    defaultTemp: '55°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&auto=format&fit=crop&q=80',
    description: 'Brilliant ruby-red strawberry slices and emerald-green kiwi discs. Chewy, intense natural candy packed with Vitamin C and antioxidant fiber.',
    ingredients: [
      '500g Fresh Firm Ripe Strawberries',
      '4 Firm Green Kiwis',
      '1 tsp Raw Honey or Maple Syrup (Optional)'
    ],
    instructions: [
      'Hull strawberries and slice lengthwise into 4mm uniform hearts.',
      'Peel kiwis and slice crosswise into 4mm round emerald discs.',
      'Arrange on lined dehydrator trays leaving space around each slice.',
      'Dehydrate at 55°C for 6 to 8 hours until bendable with no damp center.',
      'Allow to cool 10 minutes to test final chewiness.'
    ],
    proTips: [
      'Add to morning granola bowls, oatmeal, or fold into homemade dark chocolate bars.',
      'Keep kiwi slices slightly thicker (4-5mm) as they shrink significantly.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '5 snack jars',
    tags: ['Dehydrate', 'Berry', 'Snack', 'Vitamins', 'Raw Food'],
    dehydrateThickness: '4mm'
  },
  {
    id: 'deh-06',
    title: 'Shiitake & King Oyster Mushroom Umami Jerky',
    subtitle: 'Deeply savory plant-based jerky glazed with tamari, smoked paprika & maple',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'airfryer_5l', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '65°C',
        time: '5 - 7 hours',
        mode: 'Dehydrate Convection',
        rackOrBasket: 'Wire Racks with baking parchment',
        accessory: 'Wire Racks (Tiers 2 & 3)',
        specialNote: 'Accommodates 1kg fresh mushrooms across dual racks.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '65°C',
        time: '5 - 6 hours',
        mode: 'Convection Low',
        rackOrBasket: 'Center Rack',
        accessory: 'Wire Shelf + Crumb Tray',
        specialNote: 'Catch any marinade drips with tray below.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '65°C',
        time: '3 - 4 hours',
        mode: 'Dehydrate Preset',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Drawer',
        specialNote: 'Toss gently at 2-hour mark.'
      }
    },
    defaultCookTime: '6 hrs',
    defaultPrepTime: '20 mins + 30 mins marinate',
    defaultTemp: '65°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    description: 'Chewy, smoky, umami-rich mushroom jerky with an authentic cured jerky chew. Made with meaty shiitake or oyster mushrooms soaked in a bold marinade.',
    ingredients: [
      '500g Fresh Shiitake or King Oyster Mushrooms (Cleaned & sliced 5mm)',
      '3 tbsp Tamari or Soy Sauce',
      '1 tbsp Pure Maple Syrup',
      '1 tbsp Toasted Sesame Oil',
      '1 tsp Smoked Paprika',
      '1/2 tsp Garlic Powder',
      '1/4 tsp Ground Cayenne Pepper'
    ],
    instructions: [
      'Whisk tamari, maple syrup, sesame oil, paprika, garlic powder, and cayenne in a bowl.',
      'Toss mushroom strips in marinade and let absorb for 25 minutes.',
      'Drain excess marinade and arrange mushroom strips in a single layer on parchment-lined racks.',
      'Dehydrate at 65°C for 5 to 7 hours until deeply browned, chewy, and flexible without moisture beads.',
      'Cool completely; store in an airtight jar.'
    ],
    proTips: [
      'King oyster mushroom stems sliced into ribbons create long, authentic jerky strips.',
      'Excellent high-fiber protein snack for hikes and road trips.'
    ],
    isVegetarian: true,
    difficulty: 'Medium',
    servings: '6 jerky portions',
    tags: ['Dehydrate', 'Vegan Jerky', 'High Umami', 'Mushroom', 'Keto Friendly'],
    dehydrateThickness: '5mm strips'
  },
  {
    id: 'deh-07',
    title: 'Zucchini, Carrot & Beet Root Ribbons',
    subtitle: 'Colorful rainbow vegetable crisps seasoned with nutritional yeast & rosemary',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'airfryer_5l', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '55°C',
        time: '6 - 8 hours',
        mode: 'Dehydrate Convection',
        rackOrBasket: '3 Tiers Wire Racks',
        accessory: 'Chrome Wire Shelves',
        specialNote: 'Great for bulk garden harvest processing.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '60°C',
        time: '5 - 7 hours',
        mode: 'Convection Mode',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Wire Rack with baking paper',
        specialNote: 'Check crispness at 5 hours.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '55°C',
        time: '3.5 - 5 hours',
        mode: 'Dehydrate Setting',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Perforated Drawer',
        specialNote: 'Do not layer thickly; do two smaller batches if needed.'
      }
    },
    defaultCookTime: '6 hrs',
    defaultPrepTime: '15 mins',
    defaultTemp: '55°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    description: 'Vivid emerald zucchini slices, amber carrot coins, and ruby beetroot chips. Sliced paper-thin and slow-dried to snap-crisp perfection.',
    ingredients: [
      '2 Medium Zucchini',
      '2 Large Carrots',
      '2 Medium Red Beets',
      '1 tbsp Nutritional Yeast',
      '1/2 tsp Garlic Powder',
      '1/2 tsp Fine Sea Salt',
      '1/2 tsp Dried Rosemary crushed'
    ],
    instructions: [
      'Using a mandoline, slice zucchini, carrots, and beets into 2mm to 3mm thin translucent coins.',
      'Place zucchini slices between towels for 10 minutes to press out excess vegetable moisture.',
      'Toss lightly with sea salt, garlic powder, crushed rosemary, and nutritional yeast.',
      'Spread in a single layer over lined racks.',
      'Dehydrate at 55°C for 6 to 8 hours until completely brittle and snapping crisp.'
    ],
    proTips: [
      'Keep beet slices on a separate tray or parchment to prevent beet juice from staining zucchini.',
      'Beet chips become intensely sweet as their natural sugars concentrate.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 vegetable chip bowls',
    tags: ['Dehydrate', 'Veggie Chips', 'Low Calorie', 'Keto', 'Antioxidants'],
    dehydrateThickness: '2mm - 3mm'
  },
  {
    id: 'deh-08',
    title: 'Dehydrated Golden Mango Strips',
    subtitle: 'Tropical chewy Alphonso / Kesar mango spears bursting with sunny aroma',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'airfryer_5l', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '55°C',
        time: '8 - 10 hours',
        mode: 'Dehydrate Convection',
        rackOrBasket: 'Wire Racks with non-stick silicone mats',
        accessory: 'Wire Shelves',
        specialNote: 'Accommodates 6 whole mangoes sliced into strips.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '60°C',
        time: '7 - 9 hours',
        mode: 'Convection Keep-Warm',
        rackOrBasket: 'Center Rack',
        accessory: 'Wire Shelf + Parchment',
        specialNote: 'Check texture; should be bendable like fruit leather.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '55°C',
        time: '5 - 7 hours',
        mode: 'Dehydrate Function',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Non-stick basket',
        specialNote: 'Turn strips halfway through.'
      }
    },
    defaultCookTime: '8 hrs',
    defaultPrepTime: '20 mins',
    defaultTemp: '55°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&auto=format&fit=crop&q=80',
    description: 'Pure sun in a bite. Sweet, aromatic mango sliced into spears and dehydrated until flexible, chewy, and naturally candy-sweet without added sugar or sulfur preservatives.',
    ingredients: [
      '4 Firm Ripe Mangoes (Alphonso, Kesar, or Kent)',
      '1 tbsp Lime Juice',
      'Pinch of Chili Powder (Optional for spicy mango)'
    ],
    instructions: [
      'Peel mangoes and slice lengthwise along the pit into 5mm thick spears.',
      'Brush lightly with lime juice (and chili powder if desired).',
      'Arrange on dehydrating racks with space between spears.',
      'Dehydrate at 55°C for 8 to 10 hours until strips are flexible and non-tacky.',
      'Cool completely; store in airtight glass jars.'
    ],
    proTips: [
      'Do not use overripe stringy mangoes; select firm fruit that gives slightly to gentle thumb pressure.',
      'A light dusting of chaat masala transforms these into gourmet Indian street snacks.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '6 snack portions',
    tags: ['Dehydrate', 'Mango', 'Tropical', 'Natural Candy', 'Preservative Free'],
    dehydrateThickness: '5mm spears'
  },
  {
    id: 'deh-09',
    title: 'Dehydrated Pineapple Rings with Chili-Lime',
    subtitle: 'Chewy golden sunshine rings dusted with tangy Tajín or chaat masala',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'airfryer_5l', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '55°C',
        time: '8 - 11 hours',
        mode: 'Dehydrate Convection',
        rackOrBasket: '3x Wire Racks',
        accessory: 'Wire Racks with parchment paper',
        specialNote: 'High natural pineapple juice requires parchment paper.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '60°C',
        time: '7 - 9 hours',
        mode: 'Convection Low',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Wire Shelf',
        specialNote: 'Blot surface juice thoroughly before loading.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '55°C',
        time: '5 - 7 hours',
        mode: 'Dehydrate Mode',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Air flow drawer',
        specialNote: 'Flip rings at 3 hour mark.'
      }
    },
    defaultCookTime: '8 hrs',
    defaultPrepTime: '20 mins',
    defaultTemp: '55°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&auto=format&fit=crop&q=80',
    description: 'Sweet, tropical pineapple rings dehydrated to a delightful chewy candy texture. As water evaporates, the pineapple sugars caramelize gently into golden flower discs.',
    ingredients: [
      '1 Whole Fresh Golden Pineapple',
      '1 tbsp Fresh Lime Juice',
      '1 tsp Chili Powder or Tajín Seasoning'
    ],
    instructions: [
      'Cut top and base off pineapple, carve away rind and eyes.',
      'Slice into 5mm thick wheels and remove center core with a small round cutter.',
      'Press with paper towels to absorb excess juice.',
      'Brush lightly with lime juice and dust with seasoning.',
      'Dehydrate at 55°C for 8 to 11 hours until pliable and chewy like gummies.'
    ],
    proTips: [
      'Pineapple core is edible but tough; removing it creates gorgeous uniform flower rings.',
      'Rehydrate a ring in sparkling water or rum for an instant tropical cocktail upgrade.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '12 pineapple flower rings',
    tags: ['Dehydrate', 'Pineapple', 'Chewy Candy', 'Snack', 'Tropical'],
    dehydrateThickness: '5mm rings'
  },
  {
    id: 'deh-10',
    title: 'Artisan Herb Blend (Oregano, Thyme & Rosemary)',
    subtitle: 'Preserve backyard fresh herbs with vibrant green color and explosive aromatics',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '40°C - 45°C',
        time: '2 - 4 hours',
        mode: 'Dehydrate Convection Lowest Fan',
        rackOrBasket: 'Chrome Wire Racks with fine mesh screen',
        accessory: 'Wire Racks with cheesecloth or fine screen',
        specialNote: 'Keep heat under 45°C to preserve delicate volatile essential oils.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '45°C',
        time: '2 - 3.5 hours',
        mode: 'Keep Warm / Fan Assisted',
        rackOrBasket: 'Center Rack',
        accessory: 'Wire Rack with parchment',
        specialNote: 'Door cracked open 1cm if oven runs hot.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '45°C',
        time: '1.5 - 2.5 hours',
        mode: 'Dehydrate Preset',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Weigh down with metal rack to prevent fan blowing leaves',
        specialNote: 'Place a small wire rack over herbs so fan circulation does not blow them into heating element.'
      }
    },
    defaultCookTime: '3 hrs',
    defaultPrepTime: '10 mins',
    defaultTemp: '40°C',
    defaultMode: 'Dehydrate Low-Fan',
    imageUrl: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=800&auto=format&fit=crop&q=80',
    description: 'Commercial dried herbs in grocery stores are often brown and flavorless. Home-dehydrating herbs at low temperatures seals in vivid emerald pigments and pungent aromatic oils.',
    ingredients: [
      '2 Bunches Fresh Greek Oregano',
      '2 Bunches Fresh Garden Thyme',
      '1 Bunch Fresh Rosemary sprigs',
      '1 Bunch Fresh Sage leaves'
    ],
    instructions: [
      'Rinse herb sprigs gently in cold water and spin completely dry in a salad spinner.',
      'Strip leaves from tough stems or dry small sprigs whole.',
      'Spread in a loose single layer on mesh-lined dehydrating trays.',
      'Dehydrate at 40°C - 45°C for 2 to 4 hours until leaves crumble easily between fingertips.',
      'Crush lightly into airtight glass spice jars; store away from direct sunlight.'
    ],
    proTips: [
      'Fragile herbs like basil, dill, and parsley dry faster (2 hours); woody herbs like rosemary take 3 to 4 hours.',
      'Whole dried leaves retain flavor 3x longer than pre-powdered herbs.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '3 spice jars',
    tags: ['Dehydrate', 'Herbs', 'Pantry Staple', 'Aromatics', 'Gardening'],
    dehydrateThickness: 'Whole leaves'
  },
  {
    id: 'deh-11',
    title: 'Crispy Garlic Flakes & Golden Onion Crisps',
    subtitle: 'Crunchy aromatic pantry seasoning for curries, noodles, and avocado toast',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '55°C',
        time: '6 - 8 hours',
        mode: 'Dehydrate Convection',
        rackOrBasket: 'Parchment lined Wire Racks',
        accessory: 'Wire Racks (2 Racks)',
        specialNote: 'Ensure good room ventilation as onion aromas will be strong.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '60°C',
        time: '5 - 7 hours',
        mode: 'Convection Mode',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking sheet + parchment',
        specialNote: 'Spread onions thinly.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '55°C',
        time: '4 - 5 hours',
        mode: 'Dehydrate Mode',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Basket with parchment liner',
        specialNote: 'Stir flakes once during drying.'
      }
    },
    defaultCookTime: '6 hrs',
    defaultPrepTime: '20 mins',
    defaultTemp: '55°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&auto=format&fit=crop&q=80',
    description: 'Crisp, savory garlic and onion flakes that dissolve on the tongue with sweet allium punch. Grind into homemade garlic powder or sprinkle over ramen bowls.',
    ingredients: [
      '20 Large Garlic Cloves (Peeled & sliced 2mm)',
      '3 Large Red or Yellow Onions (Halved & sliced 3mm)',
      '1/2 tsp Sea Salt'
    ],
    instructions: [
      'Slice garlic cloves uniformly into 2mm paper-thin chips.',
      'Slice onions into 3mm half-moons and separate the layers.',
      'Spread garlic and onion on separate lined trays.',
      'Dehydrate at 55°C for 6 to 8 hours until completely dry, brittle, and crisp.',
      'Cool completely; pulse in a spice grinder for fresh onion/garlic powder or keep as flakes.'
    ],
    proTips: [
      'Garlic burns easily if temperature exceeds 65°C; keep strictly between 50°C - 55°C.',
      'Homemade garlic powder made from dehydrated flakes has 10x more punch than store-bought powder.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '2 spice jars',
    tags: ['Dehydrate', 'Alliums', 'Garlic Flakes', 'Seasoning', 'Pantry Hero'],
    dehydrateThickness: '2mm - 3mm'
  },
  {
    id: 'deh-12',
    title: 'Spiced Dehydrated Soya Chunks & Plant Protein Crisps',
    subtitle: 'Crunchy high-protein savory snack seasoned with tandoori chaat masala',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'airfryer_5l', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '65°C',
        time: '5 - 6 hours',
        mode: 'Dehydrate Convection',
        rackOrBasket: 'Wire Racks with baking parchment',
        accessory: 'Wire Racks',
        specialNote: 'Squeeze water thoroughly from boiled soya chunks.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '65°C',
        time: '4.5 - 5.5 hours',
        mode: 'Convection Low',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Tray',
        specialNote: 'Check crunchiness at 4.5 hours.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '65°C',
        time: '3 - 4 hours',
        mode: 'Dehydrate Mode',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Perforated plate',
        specialNote: 'Shake basket every hour.'
      }
    },
    defaultCookTime: '5 hrs',
    defaultPrepTime: '15 mins',
    defaultTemp: '65°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
    description: 'High-protein soya chunks boiled, squeezed dry, tossed in tandoori spices, and dehydrated into crunchy, oil-free high-protein bites for fitness enthusiasts.',
    ingredients: [
      '2 cups Textured Soya Chunks',
      '1 tsp Tandoori Masala',
      '1/2 tsp Chaat Masala',
      '1/2 tsp Cumin Powder',
      '1/2 tsp Turmeric',
      '1 tsp Lemon Juice',
      '1/2 tsp Pink Salt'
    ],
    instructions: [
      'Boil soya chunks in salted water for 5 minutes until soft and plump.',
      'Rinse in cold water and squeeze out all absorbed water repeatedly until completely dry.',
      'Slice large chunks into bite-sized halves.',
      'Toss thoroughly with lemon juice, tandoori masala, cumin, turmeric, and pink salt.',
      'Spread across dehydrator wire racks.',
      'Dehydrate at 65°C for 5 to 6 hours until snap-crisp and lightweight.'
    ],
    proTips: [
      'Squeezing all moisture out prior to seasoning is the secret to maximum crunch.',
      'Provides over 25g plant protein per serving with zero cholesterol.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 protein snack packs',
    tags: ['Dehydrate', 'High Protein', 'Soya', 'Snack', 'Fitness'],
    dehydrateThickness: 'Bite-sized halves'
  },
  {
    id: 'deh-13',
    title: 'Dehydrated Spicy Ginger & Turmeric Chips',
    subtitle: 'Pungent zesty herbal chips for immune booster teas and wellness broths',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '50°C',
        time: '5 - 7 hours',
        mode: 'Dehydrate Convection',
        rackOrBasket: 'Wire Racks with fine parchment',
        accessory: 'Wire Shelves',
        specialNote: 'Low heat preserves gingerol and curcumin potency.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '55°C',
        time: '5 - 6 hours',
        mode: 'Convection Low',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Wire Rack',
        specialNote: 'Slice paper-thin using a vegetable peeler or mandoline.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '50°C',
        time: '3.5 - 5 hours',
        mode: 'Dehydrate Setting',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Air flow tray',
        specialNote: 'Check crispness at 3.5 hrs.'
      }
    },
    defaultCookTime: '5 hrs',
    defaultPrepTime: '15 mins',
    defaultTemp: '50°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&auto=format&fit=crop&q=80',
    description: 'Thin shavings of raw organic ginger and fresh turmeric root dried into spicy, aromatic chips. Drop into boiling water with honey for instant soothing tea.',
    ingredients: [
      '200g Fresh Ginger Root (Washed & thinly sliced 2mm)',
      '150g Fresh Raw Turmeric Root (Peeled & sliced 2mm)',
      '1 tbsp Lemon Juice'
    ],
    instructions: [
      'Wash ginger and turmeric roots thoroughly; scrub skin with a brush.',
      'Slice into paper-thin 2mm coins.',
      'Toss lightly with lemon juice to brighten hue.',
      'Spread on lined dehydrating trays with breathing gaps.',
      'Dehydrate at 50°C for 5 to 7 hours until brittle and snapping dry.',
      'Store in airtight glass jars.'
    ],
    proTips: [
      'Wear gloves when handling fresh turmeric to prevent bright orange hands.',
      'Drop 3 chips into boiling green tea for an invigorating anti-inflammatory kick.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '2 spice jars',
    tags: ['Dehydrate', 'Ginger', 'Turmeric', 'Ayurveda', 'Wellness Tea'],
    dehydrateThickness: '2mm shavings'
  },
  {
    id: 'deh-14',
    title: 'Dehydrated Bell Pepper Paprika Strips',
    subtitle: 'Sweet dehydrated red and yellow pepper strips for stews and homemade sweet paprika',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'airfryer_5l', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '55°C',
        time: '7 - 9 hours',
        mode: 'Dehydrate Convection',
        rackOrBasket: 'Wire Racks with parchment',
        accessory: 'Wire Shelves (Tiers 1 & 2)',
        specialNote: 'Ideal for dehydrating 6 whole bell peppers.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '60°C',
        time: '6 - 8 hours',
        mode: 'Convection Low',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Wire Rack',
        specialNote: 'Slice peppers skin-side down on rack.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '55°C',
        time: '4.5 - 6 hours',
        mode: 'Dehydrate Setting',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Plate',
        specialNote: 'Shake gently once.'
      }
    },
    defaultCookTime: '7 hrs',
    defaultPrepTime: '15 mins',
    defaultTemp: '55°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
    description: 'Vibrant red, orange, and yellow bell pepper strips dehydrated until sweet and leathery. Pulverize into your own sweet paprika or rehydrate directly in simmered sauces.',
    ingredients: [
      '3 Red Bell Peppers (Seeded & sliced into 5mm ribbons)',
      '2 Yellow Bell Peppers (Seeded & sliced 5mm ribbons)',
      '1/2 tsp Sea Salt'
    ],
    instructions: [
      'De-seed and wash bell peppers, trimming away white internal ribs.',
      'Slice into uniform 5mm ribbons.',
      'Arrange skin-side down on dehydrator wire racks.',
      'Dehydrate at 55°C for 7 to 9 hours until leathery-dry with no sticky moisture pockets.',
      'Grind into pure homemade paprika or keep whole for soups.'
    ],
    proTips: [
      'Skin-side down allows moisture from the inner flesh to evaporate freely into the convection airstream.',
      'Adds immense sweetness when reconstituted in minestrone or chili.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 servings',
    tags: ['Dehydrate', 'Peppers', 'Paprika', 'Vitamins', 'Meal Prep'],
    dehydrateThickness: '5mm ribbons'
  },
  {
    id: 'deh-15',
    title: 'Dehydrated Spiced Chickpea & Green Pea Crunchies',
    subtitle: 'Addictive high-fiber crunchy party snack with chaat masala & black salt',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'airfryer_5l', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '65°C',
        time: '6 - 8 hours',
        mode: 'Dehydrate Convection',
        rackOrBasket: 'Wire Racks with silicone mesh/parchment',
        accessory: 'Baking Tray & Wire Racks',
        specialNote: 'Ensure chickpeas are patted completely dry before seasoning.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '65°C',
        time: '5 - 7 hours',
        mode: 'Convection Mode',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Wire Rack with parchment',
        specialNote: 'Shake tray at 3 hours.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '65°C',
        time: '3.5 - 5 hours',
        mode: 'Dehydrate Mode',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Plate',
        specialNote: 'Shake basket every hour.'
      }
    },
    defaultCookTime: '6 hrs',
    defaultPrepTime: '15 mins',
    defaultTemp: '65°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    description: 'Tender cooked chickpeas and sweet green peas seasoned with tangy chaat masala and dehydrated into hollow, light, shattering party snacks without oil frying.',
    ingredients: [
      '2 cups Cooked Chickpeas (Drained & patted dry)',
      '1 cup Sweet Green Peas (Blanched & dried)',
      '1 tsp Chaat Masala',
      '1/2 tsp Cumin Powder',
      '1/4 tsp Kala Namak (Black Salt)',
      '1/2 tsp Kashmiri Red Chili Powder',
      '1 tsp Olive Oil (Light spray)'
    ],
    instructions: [
      'Roll cooked chickpeas and peas between kitchen towels until skins are bone-dry.',
      'Toss lightly with oil spray and spice mixture until evenly coated.',
      'Spread in a single layer on parchment-lined racks.',
      'Dehydrate at 65°C for 6 to 8 hours until completely crunchy all the way through.',
      'Store in airtight containers.'
    ],
    proTips: [
      'If chickpeas feel dense or chewy inside, return to dehydrator for another 1-2 hours until airy-crisp.',
      'Great healthy substitute for roasted peanuts.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '6 party snack bowls',
    tags: ['Dehydrate', 'Chickpeas', 'High Fiber', 'Crunchy Snack', 'Healthy'],
    dehydrateThickness: 'Whole legumes'
  }
];
