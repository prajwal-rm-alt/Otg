import { Recipe } from '../../types';

export const toastRecipes: Recipe[] = [
  {
    id: 'tst-01',
    title: 'Ultimate 3-Cheese Chili Garlic Melt',
    subtitle: 'Crisp sourdough toast topped with bubbling sharp cheddar, mozzarella & spicy green chilies',
    category: 'toast_snack',
    primaryFeature: 'toast',
    compatibleAppliances: ['mr29_otg', 'mr60_rcss', 'airfryer_5l'],
    applianceConfigs: {
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '220°C Top Grill',
        time: '5 - 7 mins',
        mode: 'Toast / Top Grill Mode',
        rackOrBasket: 'Upper Wire Shelf',
        accessory: 'Baking Sheet with foil',
        specialNote: 'Broil close to top element until cheese bubbles with brown specks.'
      },
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '220°C Top Grill',
        time: '5 - 7 mins',
        mode: 'Toast / Top Element Broil',
        rackOrBasket: 'Upper Wire Rack',
        accessory: 'Enamelled Baking Tray',
        specialNote: 'Toast 6 large slices simultaneously.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '190°C',
        time: '4 - 5 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer with parchment',
        specialNote: 'Melts cheese rapidly in 4 minutes.'
      }
    },
    defaultCookTime: '6 mins',
    defaultPrepTime: '10 mins',
    defaultTemp: '220°C',
    defaultMode: 'Top Element Toast / Grill',
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop&q=80',
    description: 'Thick artisan bread toasted on the bottom, slathered with roasted garlic butter, piled with shredded sharp cheddar and mozzarella, and studded with spicy green chilies, broiled until blistered and bubbling.',
    ingredients: [
      '4 Thick Slices Sourdough or French Baguette',
      '3 tbsp Softened Butter + 3 Garlic Cloves grated',
      '1 cup Shredded Sharp Cheddar Cheese',
      '1 cup Shredded Whole Milk Mozzarella',
      '2 Indian Green Chilies or Jalapenos finely chopped',
      '1/4 cup Finely Diced Red Bell Pepper',
      '1/2 tsp Dried Oregano & 1/2 tsp Chili Flakes'
    ],
    instructions: [
      'Mix softened butter with grated garlic and a pinch of salt.',
      'Spread garlic butter generously on one side of bread slices.',
      'In a bowl, toss cheddar, mozzarella, chopped green chilies, bell peppers, and oregano.',
      'Pile the cheese mixture high on each buttered bread slice.',
      'Place on baking sheet in upper section of preheated Morphy Richards OTG at 220°C.',
      'Toast / grill for 5 to 7 minutes until cheese is completely melted, bubbling furiously, and browned in patches.'
    ],
    proTips: [
      'Pre-toasting the bottom of the bread for 2 minutes guarantees a crisp foundation that never goes soggy.',
      'The combination of sharp cheddar (for flavor) and mozzarella (for stretch) is unbeatable.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 toast slices',
    tags: ['Toast', 'Chili Cheese', 'Snack', 'Comfort Food', 'Melt']
  },
  {
    id: 'tst-02',
    title: 'Loaded Tex-Mex Cheesy Sheet Pan Nachos',
    subtitle: 'Crunchy tortilla chips layered with black beans, jalapeños, molten cheese & pico de gallo',
    category: 'toast_snack',
    primaryFeature: 'toast',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '200°C',
        time: '8 - 10 mins',
        mode: 'Dual Convection Mode',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Full Enamelled Baking Tray (Huge party spread!)',
        specialNote: 'Cooks gigantic sheet-pan nachos for game day.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '200°C',
        time: '7 - 9 mins',
        mode: 'Top/Bottom Toast Bake',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet with parchment',
        specialNote: 'Layer cheese twice so every chip has melted cheese.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '185°C',
        time: '5 - 6 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Drawer with parchment liner',
        specialNote: 'Make personal 2-layer batch.'
      }
    },
    defaultCookTime: '8 mins',
    defaultPrepTime: '10 mins',
    defaultTemp: '200°C',
    defaultMode: 'Top/Bottom Toast Bake',
    imageUrl: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&auto=format&fit=crop&q=80',
    description: 'Crisp corn tortilla chips layered with seasoned black beans, sweet corn, pickled jalapeños, and a mountain of pepper jack and cheddar cheese, baked until molten and bubbling.',
    ingredients: [
      '200g Good Quality Corn Tortilla Chips',
      '1 cup Black Beans rinsed and drained',
      '1/2 cup Sweet Corn kernels',
      '2 cups Shredded Mexican Blend / Cheddar & Pepper Jack Cheese',
      '2 tbsp Pickled Jalapeño slices',
      'Toppings: Sour Cream, Guacamole, Fresh Pico de Gallo & Cilantro'
    ],
    instructions: [
      'Line baking tray with parchment paper.',
      'Spread half the tortilla chips in an even layer.',
      'Scatter half the black beans, corn, jalapeños, and half the shredded cheese.',
      'Add second layer of chips, remaining toppings, and cover generously with remaining cheese (two layers prevents bare chips!).',
      'Bake at 200°C for 7 to 9 minutes until cheese is completely melted and bubbly.',
      'Top with sour cream, guacamole, pico de gallo, and cilantro; serve immediately right on the tray.'
    ],
    proTips: [
      'Layering chips and cheese twice ensures you never end up with bare dry chips at the bottom.',
      'Always line the tray with parchment paper for instant, effortless cleanup.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 party servings',
    tags: ['Toast', 'Nachos', 'Party Food', 'Mexican', 'Cheesy']
  }
];
