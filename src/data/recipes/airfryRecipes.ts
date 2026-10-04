import { Recipe } from '../../types';

export const airfryRecipes: Recipe[] = [
  {
    id: 'af-01',
    title: 'Ultra-Crispy Truffle & Herb French Fries',
    subtitle: 'Golden shattering crunch with fluffy interior using under 1 teaspoon of oil',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr60_rcss', 'mr29_otg'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '195°C',
        time: '18 - 22 mins',
        mode: 'Air Fry Vortex High-Speed',
        rackOrBasket: 'Perforated Crisper Basket',
        accessory: 'Crisper Drawer',
        specialNote: 'Shake basket vigorously every 5 minutes for uniform crisping.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '220°C',
        time: '24 - 28 mins',
        mode: 'Dual Convection Mode',
        rackOrBasket: 'Wire Rack with Baking Sheet beneath',
        accessory: 'Wire Rack (Elevates fries for 360° airflow)',
        specialNote: 'Spread fries in a single layer across the large wire rack.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '215°C',
        time: '22 - 26 mins',
        mode: 'Convection Top/Bottom Element',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet lined with parchment',
        specialNote: 'Flip fries halfway using tongs.'
      }
    },
    defaultCookTime: '20 mins',
    defaultPrepTime: '20 mins (incl. cold water soak)',
    defaultTemp: '195°C',
    defaultMode: 'Air Fry Cyclone Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=80',
    description: 'The holy grail of air frying. Russet potato batons soaked in cold water to strip surface starches, tossed in minimal oil, and crisped in the 5L high-velocity heat cyclone until shattering crisp on the outside and steamy-soft inside.',
    ingredients: [
      '3 Large Russet Potatoes (Peeled & cut into 8mm x 8mm batons)',
      '1 tsp Olive Oil or Avocado Oil Spray',
      '1 tsp Cornstarch (Secret for glass-like crunch)',
      '1 tsp White Truffle Oil (or garlic oil) for finishing',
      '1 tbsp Fresh Chopped Rosemary',
      'Flaky Sea Salt & Coarse Black Pepper'
    ],
    instructions: [
      'Cut potatoes into uniform 8mm batons. Submerge in an ice-water bath for 20 minutes to leach excess starch.',
      'Drain and dry meticulously between kitchen towels (any residual surface moisture prevents crisping).',
      'Dust lightly with cornstarch, then toss with 1 tsp oil until glossy.',
      'Preheat Air Fryer to 195°C for 3 minutes.',
      'Add fries to the crisper basket in an even layer.',
      'Air fry at 195°C for 18 to 22 minutes, shaking the basket vigorously every 5 minutes.',
      'Dump hot fries into a metal bowl, drizzle with truffle oil, rosemary, and flaky sea salt; toss immediately.'
    ],
    proTips: [
      'The cold water soak and cornstarch dust are the culinary twin keys to restaurant-grade crispness without deep-frying.',
      'Never overcrowd the basket beyond 2/3 capacity; air must whip freely around every fry.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '3 servings',
    tags: ['Air Fryer', 'French Fries', 'Crispy', 'Snack', 'Comfort Food']
  },
  {
    id: 'af-02',
    title: 'Fiery Peri-Peri Crispy Chicken Wings',
    subtitle: 'Blistered, snapping skin and succulent meat with zero added oil frying',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr60_rcss', 'mr29_otg'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '200°C',
        time: '18 - 22 mins',
        mode: 'Air Fry Vortex High',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Drawer',
        specialNote: 'Shake at 10 and 15 minute marks.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '220°C',
        time: '25 - 30 mins',
        mode: 'Dual Convection Grill',
        rackOrBasket: 'Upper Wire Rack over Drip Tray',
        accessory: 'Wire Rack + Enamelled Tray',
        specialNote: 'Cooks up to 1.5kg wings at once.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '215°C',
        time: '24 - 28 mins',
        mode: 'Convection Top/Bottom',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet with wire rack insert',
        specialNote: 'Turn wings once at 14 mins.'
      }
    },
    defaultCookTime: '20 mins',
    defaultPrepTime: '10 mins',
    defaultTemp: '200°C',
    defaultMode: 'Air Fry Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1527477321055-43615b6294a5?w=800&auto=format&fit=crop&q=80',
    description: 'Chicken wings naturally possess rendered skin fat. The intense 360° air cyclone in the 5L air fryer renders this fat completely, creating crackling blistered skin without a single drop of frying oil.',
    ingredients: [
      '600g Chicken Wings (Split into drumettes and flats)',
      '1 tsp Baking Powder (Aluminum-free; alters skin pH for insane crunch)',
      '1 tsp Smoked Paprika',
      '1 tsp Garlic Powder & 1/2 tsp Onion Powder',
      '3 tbsp Peri-Peri Sauce or Buffalo Sauce',
      '1 tbsp Melted Butter',
      '1/2 tsp Sea Salt'
    ],
    instructions: [
      'Pat wings bone-dry with paper towels.',
      'Toss dry wings with baking powder, smoked paprika, garlic powder, onion powder, and sea salt.',
      'Arrange in a single layer in the crisper basket.',
      'Air fry at 200°C for 20 minutes, shaking the basket at 10 and 15 minutes.',
      'Whisk peri-peri sauce with melted butter.',
      'Toss piping hot blistered wings in the sauce and serve with celery and blue cheese or ranch.'
    ],
    proTips: [
      'Aluminum-free baking powder draws moisture to the skin surface where it quickly evaporates, creating micro-bubbles that snap like fried crackling.',
      'Keep the sauce warm so it coats the hot wings without making them soggy.'
    ],
    isVegetarian: false,
    difficulty: 'Easy',
    servings: '3 servings',
    tags: ['Air Fryer', 'Chicken Wings', 'Keto', 'Spicy', 'Game Day']
  },
  {
    id: 'af-03',
    title: 'Golden Flaky Punjabi Samosas',
    subtitle: 'Crisp blistered pastry shells stuffed with spiced potatoes & peas with 85% less oil',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '180°C',
        time: '14 - 16 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Basket with light oil spray',
        specialNote: 'Brush or spray samosas with oil for authentic halwai color.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '190°C',
        time: '20 - 24 mins',
        mode: 'Convection Top/Bottom',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet with parchment',
        specialNote: 'Flip samosas at 12 mins.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '190°C',
        time: '20 - 24 mins',
        mode: 'Dual Convection Mode',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Enamelled Baking Tray',
        specialNote: 'Bake large party batches of 16 samosas.'
      }
    },
    defaultCookTime: '15 mins',
    defaultPrepTime: '30 mins',
    defaultTemp: '180°C',
    defaultMode: 'Air Fry Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
    description: 'Enjoy India’s favorite street snack without the heavy greasy oil. The air fryer cyclonic convection bakes the ajwain-spiced pastry into a crisp, flaky jacket while the cumin potato-pea filling stays steamy and fragrant.',
    ingredients: [
      '6 Freshly Assembled or Frozen Samosas',
      '1 tbsp Oil or Ghee Spray',
      'Mint-Coriander Chutney & Saunth Tamarind Chutney for serving'
    ],
    instructions: [
      'Lightly brush or spray assembled samosas on all sides with oil or melted ghee.',
      'Place standing upright or in a single layer in the 5L air fryer crisper basket.',
      'Air fry at 180°C for 14 to 16 minutes until shells are blistered, golden-brown, and crisp.',
      'Serve piping hot with sweet tamarind chutney and spicy green chutney.'
    ],
    proTips: [
      'Lightly brushing ghee on the pastry before air frying imparts that signature traditional dhaba aroma.',
      'If cooking from frozen, cook directly at 180°C for 16 minutes with no prior thawing needed.'
    ],
    isVegetarian: true,
    difficulty: 'Medium',
    servings: '6 samosas',
    tags: ['Air Fryer', 'Samosa', 'Indian Snack', 'Chutney', 'Low Oil']
  },
  {
    id: 'af-04',
    title: 'Crunchy Falafel with Garlic Tahini',
    subtitle: 'Golden sesame-dusted falafel spheres with fluffy herb center and crisp shell',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '190°C',
        time: '12 - 15 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer with olive oil mist',
        specialNote: 'Shake basket at 8 min mark.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '200°C',
        time: '16 - 20 mins',
        mode: 'Convection Mode',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet with parchment',
        specialNote: 'Flip at 10 mins.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '200°C',
        time: '16 - 20 mins',
        mode: 'Dual Convection Mode',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Enamelled Tray',
        specialNote: 'Bake 24 falafels evenly.'
      }
    },
    defaultCookTime: '14 mins',
    defaultPrepTime: '20 mins',
    defaultTemp: '190°C',
    defaultMode: 'Air Fry Cyclone',
    imageUrl: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=800&auto=format&fit=crop&q=80',
    description: 'Ground soaked chickpeas blended with fresh parsley, cilantro, garlic, and cumin, shaped into spheres, misted with olive oil, and air-fried until the shell crackles like glass while the emerald interior stays fluffy.',
    ingredients: [
      '1 cup Dried Chickpeas (Soaked overnight, never canned)',
      '1 cup Fresh Parsley & Cilantro leaves',
      '4 Garlic Cloves & 1 Small Onion',
      '1 tbsp Cumin Powder & 1 tbsp Coriander Powder',
      '1 tsp Salt & 1/2 tsp Baking Soda',
      '2 tbsp Toasted Sesame Seeds',
      'Olive Oil Spray'
    ],
    instructions: [
      'Pulse soaked chickpeas, herbs, garlic, onion, and spices in a food processor until finely minced like coarse sand.',
      'Chill mixture in fridge for 30 minutes, then roll into ping-pong sized balls.',
      'Roll outside lightly in sesame seeds and mist generously with olive oil spray.',
      'Place in the 5L air fryer crisper basket leaving 1cm gaps.',
      'Air fry at 190°C for 12 to 15 minutes, shaking halfway, until deep golden-brown.'
    ],
    proTips: [
      'Never use canned cooked chickpeas; they contain too much water and turn mushy. Soaked raw chickpeas are essential.',
      'A pinch of baking soda creates that airy, fluffy interior texture.'
    ],
    isVegetarian: true,
    difficulty: 'Medium',
    servings: '12 falafels',
    tags: ['Air Fryer', 'Falafel', 'Vegan', 'High Protein', 'Mediterranean']
  },
  {
    id: 'af-05',
    title: 'Spanish Cinnamon Sugar Churros',
    subtitle: 'Golden ridged churro batons air-fried crisp and rolled in cinnamon sugar with chocolate dip',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '185°C',
        time: '10 - 12 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Plate with parchment strip',
        accessory: 'Crisper Drawer with light oil spray',
        specialNote: 'Spray pastry with oil before cooking for crisp ridges.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '195°C',
        time: '14 - 18 mins',
        mode: 'Convection Top/Bottom',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet lined with parchment',
        specialNote: 'Pipe in straight 4-inch lines.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '195°C',
        time: '14 - 18 mins',
        mode: 'Dual Convection Mode',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Enamelled Tray',
        specialNote: 'Bake 20 churros at once.'
      }
    },
    defaultCookTime: '12 mins',
    defaultPrepTime: '20 mins',
    defaultTemp: '185°C',
    defaultMode: 'Air Fry Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&auto=format&fit=crop&q=80',
    description: 'Churros made without hot splattering oil! Piped choux dough with star ridges air-fried to golden hollow crispness, brushed with melted butter, and rolled in fragrant cinnamon sugar.',
    ingredients: [
      '1 cup Water',
      '4 tbsp Butter',
      '2 tbsp Sugar + 1 pinch Salt',
      '1 cup All-Purpose Flour',
      '1 Large Egg at room temperature',
      '1 tsp Vanilla Extract',
      '1/2 cup Granulated Sugar + 1.5 tsp Cinnamon for coating',
      '1/2 cup Dark Chocolate Ganache for dipping'
    ],
    instructions: [
      'Bring water, butter, sugar, and salt to a boil in a saucepan.',
      'Stir in flour all at once until a smooth dough ball forms and pulls away from sides.',
      'Let cool 5 minutes, then beat in egg and vanilla until glossy and thick.',
      'Transfer dough to a piping bag fitted with a closed star tip.',
      'Pipe 4-inch strips onto a parchment sheet, freeze for 10 minutes to hold shape.',
      'Mist with oil spray and air fry at 185°C for 10 to 12 minutes until deeply golden.',
      'Roll immediately in cinnamon sugar while warm; serve with hot chocolate ganache.'
    ],
    proTips: [
      'Freezing piped strips for 10 minutes prevents them from losing their defined star ridges during air frying.',
      'The star tip ridges are essential because they maximize surface area for crunch.'
    ],
    isVegetarian: true,
    difficulty: 'Medium',
    servings: '12 churros',
    tags: ['Air Fryer', 'Churros', 'Dessert', 'Spanish', 'Sweet Treat']
  },
  {
    id: 'af-06',
    title: 'Crispy Buffalo Cauliflower Bites',
    subtitle: 'Crunchy panko-crusted cauliflower florets drenched in spicy buffalo butter glaze',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr60_rcss', 'mr29_otg'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '195°C',
        time: '14 - 16 mins',
        mode: 'Air Fry Vortex High',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Plate',
        specialNote: 'Shake basket at 8 min mark.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '215°C',
        time: '18 - 22 mins',
        mode: 'Dual Convection Mode',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Baking Tray with parchment',
        specialNote: 'Roast entire head of cauliflower florets.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '210°C',
        time: '18 - 20 mins',
        mode: 'Convection Top/Bottom',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet with parchment',
        specialNote: 'Turn florets halfway.'
      }
    },
    defaultCookTime: '15 mins',
    defaultPrepTime: '15 mins',
    defaultTemp: '195°C',
    defaultMode: 'Air Fry Cyclone',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    description: 'The ultimate plant-based wing substitute. Cauliflower florets dipped in a light seasoned batter, rolled in toasted panko, air-fried until crackling, and tossed in spicy tangy buffalo sauce.',
    ingredients: [
      '1 Medium Head Cauliflower (Cut into bite-sized florets)',
      '1/2 cup Flour + 1/2 cup Milk or Water',
      '1 tsp Garlic Powder & 1 tsp Smoked Paprika',
      '1 cup Panko Breadcrumbs',
      '1/3 cup Frank’s RedHot or Buffalo Sauce',
      '2 tbsp Melted Butter',
      'Ranch dressing for dipping'
    ],
    instructions: [
      'Whisk flour, milk, garlic powder, paprika, and salt into a smooth batter.',
      'Dip florets into batter, let excess drip off, then roll in panko breadcrumbs.',
      'Arrange in a single layer in the 5L air fryer crisper basket.',
      'Air fry at 195°C for 14 to 16 minutes, shaking halfway, until panko is deeply golden-brown.',
      'Toss warm florets in melted butter-buffalo sauce; serve immediately with cool ranch.'
    ],
    proTips: [
      'Panko breadcrumbs create significantly lighter and crispier flakes than regular fine breadcrumbs.',
      'Toss in sauce immediately before serving so the panko stays crunchy.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 snack servings',
    tags: ['Air Fryer', 'Cauliflower', 'Buffalo Wings', 'Vegetarian', 'Appetizer']
  },
  {
    id: 'af-07',
    title: 'Crispy Garlic Parmesan Zucchini Fries',
    subtitle: 'Golden herb-crusted zucchini batons with savory cheese crunch and marinara dip',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '200°C',
        time: '10 - 12 mins',
        mode: 'Air Fry Vortex High',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer with light oil spray',
        specialNote: 'Shake basket at 6 min mark.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '210°C',
        time: '14 - 16 mins',
        mode: 'Convection Top/Bottom',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet with parchment',
        specialNote: 'Space fries 1cm apart.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '210°C',
        time: '14 - 16 mins',
        mode: 'Dual Convection Mode',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Baking Tray',
        specialNote: 'Bake large batch on wire rack.'
      }
    },
    defaultCookTime: '12 mins',
    defaultPrepTime: '15 mins',
    defaultTemp: '200°C',
    defaultMode: 'Air Fry Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    description: 'Zucchini fries often turn soggy if baked in conventional ovens. The 5L air fryer’s rapid airflow evaporates surface water instantly, crisping the parmesan-panko crust before the tender zucchini center breaks down.',
    ingredients: [
      '2 Medium Zucchini (Cut into 10cm x 1cm batons)',
      '1 Egg beaten',
      '1/2 cup Grated Parmesan Cheese',
      '1/2 cup Italian Seasoned Panko Breadcrumbs',
      '1/2 tsp Garlic Powder',
      'Warm Marinara sauce for dipping'
    ],
    instructions: [
      'Cut zucchini into batons and pat dry with paper towels.',
      'Dip batons in beaten egg, then press into parmesan-panko breadcrumb mixture.',
      'Place in a single layer in the air fryer crisper basket.',
      'Mist lightly with olive oil spray.',
      'Air fry at 200°C for 10 to 12 minutes until cheese is browned and crunchy.',
      'Serve immediately with warm marinara dipping sauce.'
    ],
    proTips: [
      'Patting zucchini completely dry before breading prevents the coating from slipping off.',
      'Grated real parmesan cheese melts and crisps into a savory lace crust.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '3 servings',
    tags: ['Air Fryer', 'Zucchini Fries', 'Keto Friendly', 'Snack', 'Low Carb']
  },
  {
    id: 'af-08',
    title: 'Gooey Melting Mozzarella Sticks',
    subtitle: 'Golden crumb-crusted cheese batons with dramatic pull and crunchy shell',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '200°C',
        time: '5 - 6 mins',
        mode: 'Air Fry Vortex High',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer with light oil spray',
        specialNote: 'Sticks MUST be frozen solid before air frying to prevent blowout.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '220°C Top Grill',
        time: '6 - 8 mins',
        mode: 'Top Element Grill / Broil',
        rackOrBasket: 'Upper Wire Shelf',
        accessory: 'Baking Sheet lined with foil & oiled',
        specialNote: 'Keep frozen until the second they enter oven.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '220°C Convection Grill',
        time: '6 - 8 mins',
        mode: 'Top Convection Grill',
        rackOrBasket: 'Upper Wire Rack',
        accessory: 'Enamelled Tray',
        specialNote: 'Bake 16 mozzarella sticks together.'
      }
    },
    defaultCookTime: '6 mins',
    defaultPrepTime: '15 mins + 2 hrs freezing',
    defaultTemp: '200°C',
    defaultMode: 'Air Fry Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=800&auto=format&fit=crop&q=80',
    description: 'Double-breaded mozzarella string cheese frozen solid and blasted with high-velocity 200°C cyclonic air. Creates an instant crunchy shell while the cheese inside transforms into luscious, stretchy, molten perfection.',
    ingredients: [
      '6 Whole Mozzarella String Cheese Sticks (Cut in half)',
      '1/2 cup All-Purpose Flour',
      '2 Eggs beaten with 1 tbsp milk',
      '1 cup Italian Herb Panko Breadcrumbs',
      '1/2 tsp Garlic Salt',
      'Cooking Oil Spray & Warm Marinara for dipping'
    ],
    instructions: [
      'Double coat cheese: Dredge cheese halves in flour, dip in egg, roll in breadcrumbs; then repeat in egg and breadcrumbs again (double coat is crucial!).',
      'Freeze breaded sticks on a plate for at least 2 hours until rock hard.',
      'Preheat air fryer to 200°C.',
      'Spray crisper plate and breaded sticks generously with cooking spray.',
      'Air fry at 200°C for exactly 5 to 6 minutes until crumbs are golden and cheese is just about to bubble through.',
      'Rest 1 minute and serve with marinara.'
    ],
    proTips: [
      'Double breading and freezing rock solid are non-negotiable; otherwise the cheese melts into a puddle before the crumbs brown.',
      'Watch closely at the 5-minute mark; remove the moment a speck of white cheese appears.'
    ],
    isVegetarian: true,
    difficulty: 'Medium',
    servings: '12 mozzarella sticks',
    tags: ['Air Fryer', 'Mozzarella Sticks', 'Cheese Pull', 'Comfort Food', 'Party Snack']
  }
];
