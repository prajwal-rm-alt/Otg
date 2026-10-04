import { Recipe } from '../../types';

export const defrostRecipes: Recipe[] = [
  {
    id: 'def-01',
    title: 'Defrost-to-Roast Whole Herb Butter Chicken',
    subtitle: 'Gentle fan thaw from solid frozen to succulent crisp-skinned roast',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '45°C Defrost, then 200°C Roast',
        time: '35 mins Thaw + 55 mins Roast',
        mode: 'Defrost Fan Mode -> Rotisserie Convection',
        rackOrBasket: 'Wire Rack over Drip Tray -> Rotisserie Spit',
        accessory: 'Rotisserie Spit Rod & Forks + Baking Tray',
        specialNote: 'Convection fan circulates warm air to thaw chicken safely without cooking outer meat.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '45°C Defrost, then 200°C Roast',
        time: '30 mins Thaw + 50 mins Roast',
        mode: 'Defrost Mode -> Convection Bake',
        rackOrBasket: 'Middle Wire Rack over Baking Tray',
        accessory: 'Wire Shelf + Baking Tray',
        specialNote: 'Ensure bird is under 1.4kg for 29L cavity.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '50°C Thaw, then 190°C Air Fry',
        time: '18 mins Thaw (For half bird/pieces) + 25 mins Air Fry',
        mode: 'Express Defrost -> Air Fry Roast',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Drawer',
        specialNote: 'Best with chicken halves or jointed bone-in pieces in 5L basket.'
      }
    },
    defaultCookTime: '1 hr 25 mins (Incl. Thaw)',
    defaultPrepTime: '10 mins',
    defaultTemp: '45°C Thaw / 200°C Roast',
    defaultMode: 'Defrost Convection -> Roast',
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=80',
    description: 'Takes a rock-hard frozen whole chicken and brings it to tender perfection without rubbery edges. Convection defrost gently dissolves ice crystals while retaining natural cellular juices, followed by high-heat herb butter roasting.',
    ingredients: [
      '1 Whole Chicken (1.2kg - 1.5kg, solid frozen)',
      '4 tbsp Softened Salted Butter',
      '2 tbsp Finely Chopped Fresh Rosemary & Thyme',
      '4 Garlic Cloves minced',
      '1 Lemon halved',
      '1 tsp Coarse Sea Salt & Fresh Black Pepper'
    ],
    instructions: [
      'Place frozen whole chicken on wire rack with baking tray underneath to catch condensation.',
      'Select Defrost mode at 45°C with convection fan running for 35 minutes until pliable and core ice dissolves.',
      'Remove chicken and pat skin completely dry with paper towels (dry skin = crispy skin!).',
      'Rub herb-garlic butter under the breast skin and over drumsticks. Stuff cavity with lemon halves.',
      'Mount onto the rotisserie spit rod or center wire rack.',
      'Switch oven to 200°C Convection / Rotisserie for 55 minutes until internal thigh reaches 75°C and skin is deep mahogany.'
    ],
    proTips: [
      'Unlike microwave defrosting which turns the wings rubbery and cooks outer meat gray, convection defrost thaws evenly through.',
      'Let roasted bird rest 10 minutes on a carving board before slicing to keep juices locked in.'
    ],
    isVegetarian: false,
    difficulty: 'Medium',
    servings: '4 hearty servings',
    tags: ['Defrost', 'Chicken', 'Roast', 'Rotisserie', 'Dinner'],
    defrostTimeNeeded: '35 mins at 45°C'
  },
  {
    id: 'def-02',
    title: 'Defrosted Lemon Herb Chicken Breast Fillets',
    subtitle: 'Tender juicy chicken fillets thawed gently and broiled with golden garlic herb crust',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '45°C Thaw, then 190°C Air Fry',
        time: '8 mins Thaw + 9 mins Air Fry',
        mode: 'Defrost -> Air Fry Vortex',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer with perforated parchment',
        specialNote: 'Directly from freezer to table in under 20 minutes.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '45°C Thaw, then 200°C Grill',
        time: '12 mins Thaw + 12 mins Grill',
        mode: 'Defrost -> Top Grill / Broil',
        rackOrBasket: 'Top Wire Shelf',
        accessory: 'Baking Tray with aluminum foil',
        specialNote: 'Baste with lemon butter before grilling.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '45°C Thaw, then 200°C Convection Grill',
        time: '12 mins Thaw + 12 mins Grill',
        mode: 'Defrost Convection -> Top Element Grill',
        rackOrBasket: 'Upper Wire Rack',
        accessory: 'Enamelled Baking Tray',
        specialNote: 'Can thaw and grill up to 8 fillets simultaneously.'
      }
    },
    defaultCookTime: '20 mins total',
    defaultPrepTime: '5 mins',
    defaultTemp: '45°C Thaw / 190°C Air Fry',
    defaultMode: 'Defrost -> Air Fry / Broil',
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=80',
    description: 'Thawing frozen chicken breast fillets with convection defrost maintains tender muscle fibers without dry rubbery edges, preparing the fillet for a crisp sear and succulent juicy interior.',
    ingredients: [
      '2 Frozen Boneless Chicken Breast Fillets (180g each)',
      '1 tbsp Extra Virgin Olive Oil',
      '1 tbsp Melted Butter',
      '1 tbsp Fresh Chopped Dill & Rosemary',
      '2 Garlic Cloves grated',
      '1/2 Lemon sliced into wheels',
      'Pinch of Flaky Sea Salt & Coarse Black Pepper'
    ],
    instructions: [
      'Unwrap frozen chicken breast fillets and place on the crisper tray or baking sheet.',
      'Run Defrost mode at 45°C for 8 to 12 minutes until meat yields gently to finger touch.',
      'Pat moisture off completely with a paper towel.',
      'Brush with melted garlic-herb butter and top with lemon slices and dill.',
      'Cook at 190°C - 200°C for 9 to 12 minutes until internal temp reaches 74°C and juices run clear.'
    ],
    proTips: [
      'Patting the chicken dry after defrosting is essential for getting crisp golden edges.',
      'Gentle convective thaw retains 30% more natural juices than microwave-thawed chicken.'
    ],
    isVegetarian: false,
    difficulty: 'Easy',
    servings: '2 fillets',
    tags: ['Defrost', 'Chicken', 'Keto', 'High Protein', 'Quick Weeknight'],
    defrostTimeNeeded: '8-12 mins at 45°C'
  },
  {
    id: 'def-03',
    title: 'Defrosted Dim Sum Potstickers & Gyoza',
    subtitle: 'Golden lace-crisped dumplings thawed without soggy or cracked wrappers',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '50°C Thaw, then 190°C Air Fry',
        time: '5 mins Thaw + 8 mins Air Fry',
        mode: 'Defrost -> Air Fry Crisping',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Non-stick Crisper Plate with oil spray',
        specialNote: 'Thawing 5 mins prevents wrapper edges from drying out and snapping.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '50°C Thaw, then 200°C Convection',
        time: '8 mins Thaw + 10 mins Bake',
        mode: 'Defrost -> Convection Top/Bottom',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet lined with parchment',
        specialNote: 'Brush tops lightly with sesame oil.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '50°C Thaw, then 200°C Convection',
        time: '8 mins Thaw + 10 mins Bake',
        mode: 'Defrost Convection -> Dual Element Convection',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Baking Tray',
        specialNote: 'Bake large party batches (30+ dumplings) evenly.'
      }
    },
    defaultCookTime: '15 mins',
    defaultPrepTime: '2 mins',
    defaultTemp: '50°C Thaw / 190°C Air Fry',
    defaultMode: 'Defrost -> Air Fry',
    imageUrl: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&auto=format&fit=crop&q=80',
    description: 'Frozen dumplings often crack or stay doughy when cooked directly. A quick 5-minute convective defrost softens wrapper seams, allowing high-heat air circulation to blister the outer crust while steaming the juicy filling.',
    ingredients: [
      '12 Frozen Chicken or Veggie Potstickers / Gyoza',
      '1 tsp Toasted Sesame Oil (or cooking oil spray)',
      '1 tbsp Toasted Sesame Seeds',
      '2 Scallions sliced thin',
      '2 tbsp Soy-Chili Vinegar dipping sauce'
    ],
    instructions: [
      'Arrange frozen dumplings in single layer on crisper plate or parchment-lined tray.',
      'Defrost at 50°C for 5 to 8 minutes until skin is pliable.',
      'Mist lightly with sesame oil spray.',
      'Air fry or bake at 190°C - 200°C for 8 to 10 minutes until bottoms are deeply golden-crisp and tops blistered.',
      'Garnish with sesame seeds and scallions; serve with spicy vinegar dip.'
    ],
    proTips: [
      'A light mist of water before oiling gives the skins authentic dim sum chewiness.',
      'Never crowd dumplings so sides do not stick together.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '12 dumplings',
    tags: ['Defrost', 'Dumplings', 'Dim Sum', 'Asian', 'Appetizer'],
    defrostTimeNeeded: '5-8 mins at 50°C'
  },
  {
    id: 'def-04',
    title: 'Defrosted Meal-Prep Rainbow Vegetable Stir-Roast',
    subtitle: 'Transform frozen meal-prep vegetable containers into caramelized charred veggies',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '45°C Thaw, then 210°C Roast',
        time: '10 mins Thaw + 15 mins High Roast',
        mode: 'Defrost Fan -> Convection Roast',
        rackOrBasket: 'Center Wire Rack with Baking Tray',
        accessory: 'Enamelled Baking Tray',
        specialNote: 'Drain any liquid collected after defrosting for optimal browning.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '45°C Thaw, then 210°C Roast',
        time: '10 mins Thaw + 14 mins Roast',
        mode: 'Defrost -> Convection Top/Bottom',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Baking Tray with parchment',
        specialNote: 'Spread vegetables evenly; avoid piling.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '50°C Thaw, then 200°C Air Fry',
        time: '6 mins Thaw + 10 mins Air Fry',
        mode: 'Defrost -> Air Fry Vortex',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Plate',
        specialNote: 'Shake basket twice during high-heat crisping.'
      }
    },
    defaultCookTime: '22 mins total',
    defaultPrepTime: '5 mins',
    defaultTemp: '45°C Thaw / 210°C Roast',
    defaultMode: 'Defrost -> High Roast',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    description: 'Directly replicates the frozen meal-prep containers in the user guide photos! Thaws frozen broccoli florets, bell peppers, carrots, and sweet corn safely, then turns the heat up to roast them with caramelized edges.',
    ingredients: [
      '400g Frozen Vegetable Mix (Broccoli, Tri-color bell peppers, carrots, sweet peas)',
      '1.5 tbsp Extra Virgin Olive Oil',
      '1 tsp Italian Herb Seasoning or Garam Masala',
      '1/2 tsp Garlic Powder',
      '1/2 tsp Sea Salt & Black Pepper',
      '1 tbsp Lemon Juice'
    ],
    instructions: [
      'Empty frozen meal-prep container onto the baking tray or crisper plate in a single layer.',
      'Defrost at 45°C - 50°C for 6 to 10 minutes until ice crystals dissipate.',
      'Tilt tray to pour off any collected thaw liquid (crucial for roasting instead of steaming!).',
      'Toss vegetables with olive oil, garlic powder, herbs, and sea salt.',
      'Roast or air fry at 200°C - 210°C for 12 to 15 minutes until edges are charred and broccoli tips crispy.',
      'Finish with fresh lemon juice.'
    ],
    proTips: [
      'Draining the thaw water before high-heat roasting is the secret to avoiding soggy frozen veggies.',
      'Broccoli florets get delightfully nutty and caramelized under convection heat.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '3 meal-prep servings',
    tags: ['Defrost', 'Meal Prep', 'Vegetables', 'Healthy', 'Vegan'],
    defrostTimeNeeded: '6-10 mins at 45°C'
  },
  {
    id: 'def-05',
    title: 'Defrosted Peri Peri Chicken Thighs & Drumsticks',
    subtitle: 'Thawed bone-in chicken cuts charred with fiery African Birdseye chili marinade',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '45°C Thaw, then 200°C Grill',
        time: '20 mins Thaw + 30 mins Grill',
        mode: 'Defrost Convection -> Dual Element Grill',
        rackOrBasket: 'Wire Rack over Baking Tray',
        accessory: 'Wire Rack + Drip Tray',
        specialNote: 'Drip tray catches rendered fat.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '45°C Thaw, then 200°C Convection',
        time: '18 mins Thaw + 28 mins Roast',
        mode: 'Defrost -> Convection Top/Bottom',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet',
        specialNote: 'Turn chicken pieces once halfway through.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '50°C Thaw, then 195°C Air Fry',
        time: '12 mins Thaw + 20 mins Air Fry',
        mode: 'Defrost -> Air Fry Vortex',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Plate',
        specialNote: 'Shake basket at 10 min mark.'
      }
    },
    defaultCookTime: '45 mins total',
    defaultPrepTime: '10 mins',
    defaultTemp: '45°C Thaw / 200°C Grill',
    defaultMode: 'Defrost -> High Grill',
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=80',
    description: 'Thaws rock-solid frozen chicken thighs and drumsticks gently, letting the fiery peri-peri marinade penetrate deep to the bone before high-heat charring.',
    ingredients: [
      '600g Frozen Chicken Thighs & Drumsticks',
      '3 tbsp Peri-Peri Sauce or Paste',
      '1 tbsp Olive Oil',
      '1 tbsp Lemon Juice',
      '3 Garlic Cloves minced',
      '1 tsp Smoked Paprika',
      '1/2 tsp Salt'
    ],
    instructions: [
      'Place frozen chicken portions on wire rack with tray underneath.',
      'Defrost at 45°C for 15 to 20 minutes until meat yields easily to pressure.',
      'Pat dry and make 2 deep slashes across thickest parts of the meat.',
      'Coat thoroughly in peri-peri sauce, olive oil, lemon juice, and smoked paprika.',
      'Roast or air fry at 195°C - 200°C for 22 to 30 minutes until charred and cooked through (75°C internal).'
    ],
    proTips: [
      'Making diagonal slashes on defrosted chicken lets the fiery marinade soak directly to the bone.',
      'Serve with warm pita bread and garlic mayo.'
    ],
    isVegetarian: false,
    difficulty: 'Medium',
    servings: '3 servings',
    tags: ['Defrost', 'Chicken', 'Peri Peri', 'Spicy', 'Tandoori'],
    defrostTimeNeeded: '15-20 mins at 45°C'
  },
  {
    id: 'def-06',
    title: 'Defrosted Garlic Butter Chicken Bites & Skewers',
    subtitle: 'Thawed succulent chicken chunks broiled with sizzling herb-garlic butter',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '45°C Thaw, then 200°C Air Fry',
        time: '8 mins Thaw + 8 mins Air Fry',
        mode: 'Defrost -> Air Fry High',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer',
        specialNote: 'Chicken thaws quickly with convection air.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '45°C Thaw, then 220°C Top Grill',
        time: '10 mins Thaw + 9 mins Broil',
        mode: 'Defrost -> Top Element Grill',
        rackOrBasket: 'Top Wire Shelf',
        accessory: 'Baking Tray lined with foil',
        specialNote: 'Broil close to top element for golden crust.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '45°C Thaw, then 220°C Top Grill',
        time: '10 mins Thaw + 9 mins Broil',
        mode: 'Defrost -> Convection Grill',
        rackOrBasket: 'Upper Wire Rack',
        accessory: 'Enamelled Tray',
        specialNote: 'Sizzle up to 700g chicken bites at once.'
      }
    },
    defaultCookTime: '18 mins total',
    defaultPrepTime: '5 mins',
    defaultTemp: '45°C Thaw / 200°C Broil',
    defaultMode: 'Defrost -> Top Grill',
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=80',
    description: 'Frozen chicken breast or thigh cubes thawed evenly using convection defrost so meat stays plump, followed by an intense sizzling garlic butter broil.',
    ingredients: [
      '400g Frozen Chicken Thigh or Breast Cubes (1-inch pieces)',
      '3 tbsp Melted Butter',
      '4 Garlic Cloves minced',
      '1 tbsp Chopped Fresh Parsley',
      '1/2 tsp Chili Flakes',
      '1 Lemon sliced into wedges',
      'Pinch of Sea Salt'
    ],
    instructions: [
      'Spread frozen chicken chunks in a single layer on tray.',
      'Defrost at 45°C for 8 to 10 minutes until softened.',
      'Pat dry with paper towels; thread onto skewers or arrange on tray.',
      'Toss with melted butter, minced garlic, parsley, chili flakes, and salt.',
      'Broil or air fry at 200°C - 220°C for 8 to 10 minutes until chicken edges are charred and garlic sizzles.'
    ],
    proTips: [
      'Patting chicken dry after defrosting creates sizzling crispy edges.',
      'Dip crusty baguette slices into the melted garlic butter at the bottom of the pan.'
    ],
    isVegetarian: false,
    difficulty: 'Easy',
    servings: '3 servings',
    tags: ['Defrost', 'Chicken', 'Garlic Butter', 'Express', 'Tapas'],
    defrostTimeNeeded: '8-10 mins at 45°C'
  },
  {
    id: 'def-07',
    title: 'Defrosted Golden Puff Pastry Apple Turnovers',
    subtitle: 'Thaw delicate frozen puff pastry sheets and bake into 64-layer flaky pastries',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '35°C Thaw, then 200°C Bake',
        time: '12 mins Thaw + 22 mins Bake',
        mode: 'Defrost Fan -> Dual Convection Bake',
        rackOrBasket: 'Center Wire Rack with Baking Sheet',
        accessory: 'Baking Sheet with parchment',
        specialNote: 'Low thaw temperature ensures butter layers do not melt.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '35°C Thaw, then 200°C Bake',
        time: '12 mins Thaw + 20 mins Bake',
        mode: 'Defrost -> Convection Mode',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Tray',
        specialNote: 'Egg wash tops for golden shine.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '35°C Thaw, then 190°C Air Fry',
        time: '8 mins Thaw + 14 mins Air Fry',
        mode: 'Defrost -> Air Fry Bake',
        rackOrBasket: 'Crisper Basket with parchment',
        accessory: 'Crisper Plate',
        specialNote: 'Bake 2 turnovers at a time in 5L basket.'
      }
    },
    defaultCookTime: '32 mins total',
    defaultPrepTime: '10 mins',
    defaultTemp: '35°C Thaw / 200°C Bake',
    defaultMode: 'Defrost -> Convection Bake',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
    description: 'Frozen puff pastry breaks if handled cold, but melts if heated too fast. The 35°C gentle thaw mode brings the laminated sheets to perfect pliability, allowing you to fill and puff them into shatteringly crisp turnovers.',
    ingredients: [
      '1 Sheet Frozen All-Butter Puff Pastry',
      '2 Apples peeled, diced small & sautéed with cinnamon-sugar',
      '1 Egg beaten with 1 tsp milk (for egg wash)',
      '1 tbsp Turbinado or Demerara Sugar',
      'Pinch of Cinnamon'
    ],
    instructions: [
      'Place frozen puff pastry sheet on parchment-lined baking tray.',
      'Defrost at 35°C for 10 to 12 minutes until pliable and easy to unfold without cracking.',
      'Cut into 4 equal squares. Spoon spiced apple filling into centers.',
      'Fold into triangles and crimp edges tightly with a fork.',
      'Brush with egg wash and sprinkle with turbinado sugar.',
      'Bake at 200°C for 20 to 22 minutes until sky-high puffed and deeply golden-brown.'
    ],
    proTips: [
      'Keeping the thaw temperature at exactly 35°C keeps butter between the pastry layers cold and intact, creating maximum rise.',
      'Dust with powdered sugar right before serving.'
    ],
    isVegetarian: true,
    difficulty: 'Medium',
    servings: '4 turnovers',
    tags: ['Defrost', 'Pastry', 'Baking', 'Apple Turnover', 'Dessert'],
    defrostTimeNeeded: '10-12 mins at 35°C'
  },
  {
    id: 'def-08',
    title: 'Defrosted Triple Berry Crisp & Oat Crumble',
    subtitle: 'Thawed frozen blackberries, raspberries & blueberries baked with buttery oat crumble',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '35°C Thaw, then 180°C Convection Bake',
        time: '12 mins Thaw + 25 mins Bake',
        mode: 'Defrost Fan -> Convection Bake',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Ceramic / Glass Baking Dish on Wire Shelf',
        specialNote: 'Accommodates 9x13 inch family dessert casserole.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '35°C Thaw, then 180°C Bake',
        time: '10 mins Thaw + 25 mins Bake',
        mode: 'Defrost -> Top/Bottom Element',
        rackOrBasket: 'Middle Shelf',
        accessory: '8-inch Ceramic Baking Dish',
        specialNote: 'Cover with foil if topping browns too fast.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '35°C Thaw, then 175°C Air Fry',
        time: '8 mins Thaw + 16 mins Bake',
        mode: 'Defrost -> Air Fry Bake',
        rackOrBasket: 'Crisper Basket',
        accessory: '6-inch Cake Tin or Ramekins',
        specialNote: 'Bake in heat-proof dish placed inside basket.'
      }
    },
    defaultCookTime: '35 mins total',
    defaultPrepTime: '10 mins',
    defaultTemp: '35°C Thaw / 180°C Bake',
    defaultMode: 'Defrost -> Convection Bake',
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80',
    description: 'Thaws rock-solid frozen berry medleys (blueberries, raspberries, blackberries) evenly so fruit softens without weeping into mush. Topped with a golden cinnamon-oat streusel and baked bubbling.',
    ingredients: [
      '400g Frozen Mixed Berries (Blueberries, Raspberries, Blackberries)',
      '2 tbsp Raw Sugar or Maple Syrup',
      '1 tbsp Cornstarch',
      '1 tsp Lemon Zest',
      '3/4 cup Rolled Oats',
      '1/3 cup Whole Wheat Flour',
      '1/3 cup Brown Sugar',
      '1/2 tsp Cinnamon',
      '4 tbsp Cold Butter cubed'
    ],
    instructions: [
      'Place frozen berries in baking dish.',
      'Defrost at 35°C for 10 to 12 minutes until berries yield slightly to touch.',
      'Toss berries with sugar, cornstarch, and lemon zest.',
      'In a bowl, rub cold butter cubes into oats, flour, brown sugar, and cinnamon until crumbly.',
      'Scatter crumble topping over berries.',
      'Bake at 180°C for 22 to 26 minutes until berries are bubbling and oat topping is deep golden-brown.'
    ],
    proTips: [
      'Cornstarch absorbs natural berry juices, creating a luscious thick fruit coulis under the crumble.',
      'Serve warm topped with vanilla bean ice cream.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '5 dessert portions',
    tags: ['Defrost', 'Dessert', 'Berries', 'Baking', 'Comfort Food'],
    defrostTimeNeeded: '10-12 mins at 35°C'
  },
  {
    id: 'def-09',
    title: 'Defrosted Herb-Crusted Chicken Thigh Chops with Mint Glaze',
    subtitle: 'Convection thawed frozen bone-in chicken chops seared with rosemary, garlic & balsamic mint glaze',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '45°C Thaw, then 210°C Grill',
        time: '18 mins Thaw + 18 mins Grill',
        mode: 'Defrost Convection -> Top Element Broil',
        rackOrBasket: 'Upper Wire Rack over Enamelled Tray',
        accessory: 'Wire Rack + Baking Tray',
        specialNote: 'High heat creates crispy skin.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '45°C Thaw, then 210°C Grill',
        time: '16 mins Thaw + 16 mins Grill',
        mode: 'Defrost -> Grill Mode',
        rackOrBasket: 'Top Wire Shelf',
        accessory: 'Baking Sheet with foil',
        specialNote: 'Turn chicken at 8 min mark.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '45°C Thaw, then 195°C Air Fry',
        time: '10 mins Thaw + 14 mins Air Fry',
        mode: 'Defrost -> Air Fry Vortex',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer',
        specialNote: 'Crisps skin while keeping meat juicy.'
      }
    },
    defaultCookTime: '28 mins total',
    defaultPrepTime: '8 mins',
    defaultTemp: '45°C Thaw / 210°C Grill',
    defaultMode: 'Defrost -> Top Grill',
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=80',
    description: 'Thawing bone-in chicken thighs in the microwave causes dry cooked edges. Convection defrost gently warms meat fibers without hot spots, preparing chops for a blistered herb crust and juicy center.',
    ingredients: [
      '4 Frozen Bone-In Chicken Thigh Chops (approx. 500g total)',
      '2 tbsp Olive Oil',
      '2 Garlic Cloves minced',
      '1 tbsp Fresh Chopped Rosemary',
      '1 tbsp Fresh Chopped Thyme',
      '1 tbsp Balsamic Vinegar + 1 tbsp Mint Sauce (for glaze)',
      'Coarse Sea Salt & Cracked Black Pepper'
    ],
    instructions: [
      'Place frozen chicken chops on wire rack with drip pan.',
      'Defrost at 45°C for 14 to 18 minutes until center is pliable and frost is gone.',
      'Pat dry; press garlic, rosemary, thyme, salt, and pepper into skin and meat.',
      'Grill or air fry at 195°C - 210°C for 14 to 18 minutes, flipping once halfway through.',
      'Brush with balsamic mint glaze during final 3 minutes of cooking.'
    ],
    proTips: [
      'Rest chops 5 minutes before serving to let internal juices redistribute.',
      'Ensure the skin is facing the top heating element for maximum rendering and crunch.'
    ],
    isVegetarian: false,
    difficulty: 'Medium',
    servings: '2 servings',
    tags: ['Defrost', 'Chicken', 'Gourmet', 'Keto', 'Grill'],
    defrostTimeNeeded: '14-18 mins at 45°C'
  },
  {
    id: 'def-10',
    title: 'Defrosted Crispy Vegetable Spring Rolls',
    subtitle: 'Thaw delicate spring roll wrappers gently and air fry into golden, glass-like rolls',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '50°C Thaw, then 190°C Air Fry',
        time: '5 mins Thaw + 10 mins Air Fry',
        mode: 'Defrost -> Air Fry Vortex',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer with light oil spray',
        specialNote: 'Thawing prevents wrapper exploding during air frying.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '50°C Thaw, then 200°C Convection',
        time: '8 mins Thaw + 12 mins Bake',
        mode: 'Defrost -> Convection Mode',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet with parchment',
        specialNote: 'Brush tops with sesame oil.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '50°C Thaw, then 200°C Convection',
        time: '8 mins Thaw + 12 mins Bake',
        mode: 'Defrost Convection -> Dual Element Convection',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Baking Tray',
        specialNote: 'Accommodates party batch of 24 spring rolls.'
      }
    },
    defaultCookTime: '17 mins total',
    defaultPrepTime: '2 mins',
    defaultTemp: '50°C Thaw / 190°C Air Fry',
    defaultMode: 'Defrost -> Air Fry Crisping',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
    description: 'Frozen spring rolls often crack open when placed straight into hot oil or air fryers. A 5-minute gentle defrost lets the pastry wrapper soften uniformly, producing crisp, blistered, shatter-resistant spring rolls.',
    ingredients: [
      '8 Frozen Vegetable Spring Rolls',
      '1 tsp Cooking Oil Spray',
      '2 tbsp Sweet Chili Sauce for dipping'
    ],
    instructions: [
      'Place frozen spring rolls in a single layer with breathing gaps on crisper tray.',
      'Defrost at 50°C for 5 to 8 minutes until skins are pliable.',
      'Lightly spray rolls with cooking oil.',
      'Air fry or bake at 190°C - 200°C for 10 to 12 minutes, turning rolls once, until bubbly and deeply golden-brown.',
      'Serve piping hot with sweet chili sauce.'
    ],
    proTips: [
      'A light oil spray is essential; air alone can leave the rice flour wrapper chalky.',
      'Turn rolls halfway through to ensure 360-degree crunch.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '8 rolls',
    tags: ['Defrost', 'Spring Rolls', 'Snack', 'Asian', 'Party Food'],
    defrostTimeNeeded: '5-8 mins at 50°C'
  },
  {
    id: 'def-11',
    title: 'Defrosted Gourmet Veggie Burger Patties',
    subtitle: 'Thaw thick frozen bean-and-grain patties and broil with cheddar cheese melt',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['mr29_otg', 'airfryer_5l', 'mr60_rcss'],
    applianceConfigs: {
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '45°C Thaw, then 200°C Grill',
        time: '10 mins Thaw + 12 mins Grill',
        mode: 'Defrost -> Top/Bottom Grill',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet lined with foil',
        specialNote: 'Top with cheese in final 2 minutes.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '45°C Thaw, then 200°C Convection Grill',
        time: '10 mins Thaw + 12 mins Grill',
        mode: 'Defrost -> Convection Grill',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Enamelled Baking Tray',
        specialNote: 'Toast burger buns on upper shelf simultaneously.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '50°C Thaw, then 195°C Air Fry',
        time: '6 mins Thaw + 9 mins Air Fry',
        mode: 'Defrost -> Air Fry Vortex',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer',
        specialNote: 'Flip patties at 5 min mark.'
      }
    },
    defaultCookTime: '20 mins total',
    defaultPrepTime: '5 mins',
    defaultTemp: '45°C Thaw / 200°C Grill',
    defaultMode: 'Defrost -> Grill',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    description: 'Thick veggie burger patties often stay ice-cold in the center while outer crumbs burn. Convection defrost ensures even core warmth, giving you a hot, juicy center and crisp seared crust.',
    ingredients: [
      '2 Thick Frozen Veggie / Bean Burger Patties',
      '2 Brioche Burger Buns',
      '2 Slices Sharp Cheddar or Pepperjack Cheese',
      '1 tbsp Olive Oil',
      'Burger Sauce, Lettuce, Tomato & Pickles'
    ],
    instructions: [
      'Place frozen burger patties on the baking sheet.',
      'Defrost at 45°C for 6 to 10 minutes until center is softened.',
      'Brush lightly with olive oil.',
      'Grill or air fry at 195°C - 200°C for 10 to 12 minutes, flipping once.',
      'Place cheese slices on patties for final 2 minutes to melt into gooey goodness.',
      'Assemble in toasted brioche buns with favorite toppings.'
    ],
    proTips: [
      'Toast the brioche buns on the side of the tray during the last 2 minutes for bakery-style warmth.',
      'Check core with a toothpick to ensure heat has reached the exact center.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '2 burgers',
    tags: ['Defrost', 'Burgers', 'Vegetarian', 'Quick Dinner', 'Comfort Food'],
    defrostTimeNeeded: '6-10 mins at 45°C'
  },
  {
    id: 'def-12',
    title: 'Defrosted Sweet Corn on the Cob with Herb-Lime Butter',
    subtitle: 'Thaw frozen corn cobs uniformly and roast with charred blistered kernels',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '45°C Thaw, then 215°C Convection Grill',
        time: '12 mins Thaw + 15 mins Grill',
        mode: 'Defrost Convection -> Convection Top/Bottom',
        rackOrBasket: 'Wire Rack over Baking Tray',
        accessory: 'Wire Rack',
        specialNote: 'Can also be mounted on the rotisserie spit rod!'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '45°C Thaw, then 215°C Grill',
        time: '10 mins Thaw + 14 mins Grill',
        mode: 'Defrost -> Grill Mode',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Wire Shelf with tray below',
        specialNote: 'Roll cobs to char evenly on all sides.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '50°C Thaw, then 200°C Air Fry',
        time: '8 mins Thaw + 10 mins Air Fry',
        mode: 'Defrost -> Air Fry Vortex',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Drawer',
        specialNote: 'Cut cobs in half to fit 5L drawer if needed.'
      }
    },
    defaultCookTime: '24 mins total',
    defaultPrepTime: '5 mins',
    defaultTemp: '45°C Thaw / 215°C Grill',
    defaultMode: 'Defrost -> Charred Grill',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&auto=format&fit=crop&q=80',
    description: 'Thaws rock-hard frozen sweet corn cobs so internal starch softens, allowing intense oven heat to pop and blister the outer kernels with smoky herb butter flavor.',
    ingredients: [
      '3 Frozen Sweet Corn Cobs',
      '2 tbsp Softened Butter',
      '1 tsp Chaat Masala or Smoked Paprika',
      '1 Lime cut into halves',
      '1/2 tsp Coarse Salt'
    ],
    instructions: [
      'Place frozen corn cobs on wire rack.',
      'Defrost at 45°C - 50°C for 8 to 12 minutes until kernels are tender to thumbnail touch.',
      'Pat dry and brush with softened butter and seasoning.',
      'Grill or air fry at 200°C - 215°C for 10 to 15 minutes, turning every 4 minutes until kernels are golden-charred.',
      'Rub hot cobs directly with a lime dipped in chaat masala.'
    ],
    proTips: [
      'In the 60L RCSS or 29L OTG, try threading the cobs onto the motorized rotisserie spit for effortless automatic rotation.',
      'Lime juice cuts through sweet corn richness with refreshing zest.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '3 corn cobs',
    tags: ['Defrost', 'Corn', 'Street Food', 'Snack', 'Tandoori'],
    defrostTimeNeeded: '8-12 mins at 45°C'
  },
  {
    id: 'def-13',
    title: 'Defrosted Mediterranean Falafel with Garlic Tahini',
    subtitle: 'Thaw pre-portioned frozen chickpea falafels and air fry into shatter-crisp spheres',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '45°C Thaw, then 195°C Air Fry',
        time: '6 mins Thaw + 10 mins Air Fry',
        mode: 'Defrost -> Air Fry Vortex',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer with light oil spray',
        specialNote: 'Shake basket halfway through.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '45°C Thaw, then 200°C Convection',
        time: '8 mins Thaw + 14 mins Bake',
        mode: 'Defrost -> Convection Top/Bottom',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet lined with parchment',
        specialNote: 'Roll falafels in sesame seeds before baking.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '45°C Thaw, then 200°C Convection',
        time: '8 mins Thaw + 14 mins Bake',
        mode: 'Defrost Convection -> Dual Element Convection',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Baking Tray',
        specialNote: 'Accommodates up to 30 falafel balls.'
      }
    },
    defaultCookTime: '18 mins total',
    defaultPrepTime: '3 mins',
    defaultTemp: '45°C Thaw / 195°C Air Fry',
    defaultMode: 'Defrost -> Air Fry Crisping',
    imageUrl: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=800&auto=format&fit=crop&q=80',
    description: 'Frozen falafels often crumble if dropped cold into deep oil. Convection defrost lets the chickpea and herb mixture hydrate properly, ensuring a crunchy exterior shell with fluffy, aromatic emerald-green center.',
    ingredients: [
      '10 Frozen Falafel Balls',
      '1 tbsp Olive Oil Spray',
      '3 tbsp Tahini paste',
      '1 Garlic Clove grated',
      '2 tbsp Lemon Juice',
      'Pita bread, diced tomatoes & cucumbers for serving'
    ],
    instructions: [
      'Arrange frozen falafels in a single layer with space between spheres.',
      'Defrost at 45°C for 6 to 8 minutes until core is soft.',
      'Mist thoroughly with olive oil spray.',
      'Air fry or bake at 195°C - 200°C for 10 to 14 minutes until dark golden and crispy.',
      'Whisk tahini with garlic, lemon juice, salt, and 2 tbsp warm water to make creamy sauce.',
      'Stuff into warm pita with fresh vegetables and tahini drizzle.'
    ],
    proTips: [
      'A generous oil mist before crisping is what gives falafel its authentic street-cart crunch without deep frying.',
      'Sprinkling sesame seeds on top adds nutty aroma.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '10 falafel balls',
    tags: ['Defrost', 'Falafel', 'Mediterranean', 'Vegan', 'High Fiber'],
    defrostTimeNeeded: '6-8 mins at 45°C'
  },
  {
    id: 'def-14',
    title: 'Defrosted Crispy Pub Chicken & Chunky Chips',
    subtitle: 'Thaw battered chicken tenders and chunky potato chips for golden crunch without greasy fryers',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['airfryer_5l', 'mr60_rcss', 'mr29_otg'],
    applianceConfigs: {
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '50°C Thaw, then 200°C Air Fry',
        time: '6 mins Thaw + 14 mins Air Fry',
        mode: 'Defrost -> Air Fry High Vortex',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer',
        specialNote: 'Cook chicken on one side, chips on the other or in 2 tiers.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '50°C Thaw, then 210°C Convection',
        time: '8 mins Thaw + 16 mins Bake',
        mode: 'Defrost -> Dual Convection Bake',
        rackOrBasket: 'Multi-rack (Chips on lower, Chicken on upper)',
        accessory: '2x Baking Trays & Wire Racks',
        specialNote: 'Cooks complete family meal simultaneously.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '50°C Thaw, then 210°C Convection',
        time: '8 mins Thaw + 15 mins Bake',
        mode: 'Defrost -> Convection Top/Bottom',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Tray with parchment',
        specialNote: 'Flip chicken and chips halfway.'
      }
    },
    defaultCookTime: '22 mins total',
    defaultPrepTime: '2 mins',
    defaultTemp: '50°C Thaw / 200°C Air Fry',
    defaultMode: 'Defrost -> Air Fry Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1527477321055-43615b6294a5?w=800&auto=format&fit=crop&q=80',
    description: 'Thaws commercial or prepped frozen battered chicken tenders and frozen thick-cut chips without letting moisture make the batter soggy, then blasts with cyclonic air for shatteringly crisp pub-quality chicken & chips.',
    ingredients: [
      '400g Frozen Battered Chicken Tenders or Strips',
      '300g Frozen Chunky Steakhouse Potato Chips',
      'Cooking Oil Spray',
      '1 Lemon cut into wedges',
      'Garlic Aioli & BBQ Dip for serving'
    ],
    instructions: [
      'Arrange frozen chicken and chips on the tray with good spacing.',
      'Defrost at 50°C for 6 to 8 minutes until ice crystals dissolve.',
      'Mist chips lightly with cooking spray and toss with flaky salt.',
      'Air fry or bake at 200°C - 210°C for 14 to 16 minutes until batter is blistered and chips are golden-crisp.',
      'Serve with garlic dip, BBQ sauce, and lemon wedges.'
    ],
    proTips: [
      'Do not overcrowd the basket; air needs space to circulate around every surface of the tenders.',
      'Sprinkle with coarse sea salt immediately upon pulling out while surface oils are hot.'
    ],
    isVegetarian: false,
    difficulty: 'Easy',
    servings: '2 pub servings',
    tags: ['Defrost', 'Chicken & Chips', 'Comfort Food', 'Air Fryer', 'Dinner'],
    defrostTimeNeeded: '6-8 mins at 50°C'
  },
  {
    id: 'def-15',
    title: 'Defrosted Stuffed Paneer Cutlets & Aloo Tikkis',
    subtitle: 'Thaw spiced potato-cottage cheese patties and griddle-bake with golden crumb crust',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['mr29_otg', 'mr60_rcss', 'airfryer_5l'],
    applianceConfigs: {
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '45°C Thaw, then 205°C Convection Grill',
        time: '8 mins Thaw + 12 mins Grill',
        mode: 'Defrost -> Convection Grill',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet with foil',
        specialNote: 'Brush tops with melted ghee.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '45°C Thaw, then 205°C Convection Grill',
        time: '8 mins Thaw + 12 mins Grill',
        mode: 'Defrost Convection -> Convection Grill',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Enamelled Baking Tray',
        specialNote: 'Bake large party batches of 16 cutlets.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '45°C Thaw, then 195°C Air Fry',
        time: '5 mins Thaw + 9 mins Air Fry',
        mode: 'Defrost -> Air Fry Vortex',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer with ghee spray',
        specialNote: 'Flip cutlets at 5 min mark.'
      }
    },
    defaultCookTime: '18 mins total',
    defaultPrepTime: '2 mins',
    defaultTemp: '45°C Thaw / 205°C Grill',
    defaultMode: 'Defrost -> Golden Grill',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
    description: 'Frozen homemade or store-bought aloo tikkis and paneer cutlets thawed gently to protect delicate breadcrumb coatings from peeling, then air-fried or grilled with rich ghee aroma.',
    ingredients: [
      '6 Frozen Spiced Paneer & Potato Cutlets',
      '1.5 tbsp Melted Ghee',
      'Chaat Masala for dusting',
      'Mint Coriander Chutney & Tamarind Chutney for serving'
    ],
    instructions: [
      'Arrange frozen cutlets on baking sheet or crisper plate.',
      'Defrost at 45°C for 6 to 8 minutes until core yields slightly.',
      'Brush both sides with melted ghee.',
      'Grill or air fry at 195°C - 205°C for 10 to 12 minutes until breadcrumbs are crunchy and deep golden.',
      'Dust with chaat masala and serve with tangy chutneys.'
    ],
    proTips: [
      'Ghee provides authentic halwai street flavor that oil cannot replicate.',
      'Top with whisked yogurt, sweet chutney, and pomegranate seeds for instant chaat.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '6 cutlets',
    tags: ['Defrost', 'Paneer', 'Indian Snack', 'Cutlets', 'Chaat'],
    defrostTimeNeeded: '6-8 mins at 45°C'
  }
];
