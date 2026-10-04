import { Recipe, ApplianceId } from '../../types';
import { dehydrateRecipes } from './dehydrateRecipes';
import { defrostRecipes } from './defrostRecipes';
import { rotisserieRecipes } from './rotisserieRecipes';
import { airfryRecipes } from './airfryRecipes';
import { bakingRecipes } from './bakingRecipes';
import { grillRecipes } from './grillRecipes';
import { toastRecipes } from './toastRecipes';
import { additionalRecipes } from './additionalRecipes';
import { expandedBatch } from './expandedBatch';
import { moreRecipes } from './moreRecipes';

// 12 more verified recipes to bring total catalogue to 114+ recipes
const bonusCulinaryRecipes: Recipe[] = [
  {
    id: 'bon-01',
    title: 'Tandoori Mushroom Tikka Skewers',
    subtitle: 'Button mushrooms stuffed with spiced paneer and charred under glowing heat',
    category: 'grill_tandoori',
    primaryFeature: 'grill',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '220°C', time: '14 - 16 mins', mode: 'Convection Grill', rackOrBasket: 'Upper Wire Rack', accessory: 'Wire Rack with skewers' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '215°C', time: '12 - 15 mins', mode: 'Grill Mode', rackOrBasket: 'Top Wire Shelf', accessory: 'Baking Sheet with foil' },
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '200°C', time: '9 - 11 mins', mode: 'Air Fry Vortex', rackOrBasket: 'Crisper Basket', accessory: 'Crisper Plate' }
    },
    defaultCookTime: '14 mins',
    defaultPrepTime: '15 mins',
    defaultTemp: '220°C',
    defaultMode: 'Convection Grill',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    description: 'Juicy white button mushrooms marinated in thick spiced yogurt, mustard oil, and kasuri methi, grilled until blistered and aromatic.',
    ingredients: ['400g Button Mushrooms', '1/2 cup Hung Curd', '1 tbsp Mustard Oil', '1 tbsp Kashmiri Chili', '1 tsp Chaat Masala', 'Melted Butter'],
    instructions: ['Clean mushrooms with a damp cloth; do not wash under water.', 'Toss in tandoori yogurt marinade.', 'Thread onto skewers and grill at 220°C for 14 mins.', 'Baste with butter and dust with chaat masala.'],
    proTips: ['Wiping mushrooms instead of washing prevents them from releasing excess water.'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 servings',
    tags: ['Grill', 'Mushrooms', 'Tandoori', 'Vegetarian']
  },
  {
    id: 'bon-02',
    title: 'Dehydrated Raw Coconut Chips with Sea Salt',
    subtitle: 'Crispy toasted coconut ribbons dried at low heat without burning natural oils',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '50°C', time: '5 - 7 hrs', mode: 'Dehydrate Convection', rackOrBasket: 'Wire Racks with parchment', accessory: 'Wire Racks' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '55°C', time: '5 - 6 hrs', mode: 'Convection Low', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '50°C', time: '3 - 4 hrs', mode: 'Dehydrate Mode', rackOrBasket: 'Crisper Basket', accessory: 'Crisper Plate' }
    },
    defaultCookTime: '5 hrs',
    defaultPrepTime: '15 mins',
    defaultTemp: '50°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&auto=format&fit=crop&q=80',
    description: 'Fresh coconut meat shaved into long ribbons with a vegetable peeler, tossed with sea salt and coconut sugar, and dehydrated until snap-crisp.',
    ingredients: ['1 Fresh Mature Coconut meat shaved into ribbons', '1 tbsp Coconut Sugar or Honey', '1/2 tsp Sea Salt'],
    instructions: ['Shave coconut meat into ribbons.', 'Toss with coconut sugar and salt.', 'Dehydrate at 50°C for 5 to 7 hours until snap-crisp.'],
    proTips: ['Low temperature preserves delicate medium-chain triglycerides (MCTs).'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 servings',
    tags: ['Dehydrate', 'Coconut', 'Keto', 'Healthy Snack']
  },
  {
    id: 'bon-03',
    title: 'Defrosted Stuffed Parathas with Melting Butter',
    subtitle: 'Thaw frozen aloo or paneer parathas and crisp-bake with bubbling ghee',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['mr29_otg', 'mr60_rcss', 'airfryer_5l'],
    applianceConfigs: {
      mr29_otg: { applianceId: 'mr29_otg', temp: '45°C Thaw, then 215°C Bake', time: '5 mins Thaw + 8 mins Bake', mode: 'Defrost -> Top/Bottom Convection', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '45°C Thaw, then 215°C Bake', time: '5 mins Thaw + 8 mins Bake', mode: 'Defrost -> Dual Convection', rackOrBasket: 'Center Wire Rack', accessory: 'Baking Tray' },
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '50°C Thaw, then 200°C Air Fry', time: '3 mins Thaw + 5 mins Air Fry', mode: 'Defrost -> Air Fry Vortex', rackOrBasket: 'Crisper Basket', accessory: 'Crisper Plate' }
    },
    defaultCookTime: '12 mins total',
    defaultPrepTime: '2 mins',
    defaultTemp: '45°C Thaw / 215°C Bake',
    defaultMode: 'Defrost -> Convection Crisp',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
    description: 'Frozen prepped flatbreads thawed gently so layers do not crack, brushed with pure desi ghee, and baked until puffed with flaky golden blisters.',
    ingredients: ['2 Frozen Stuffed Parathas (Aloo or Paneer)', '2 tbsp Desi Ghee', 'Plain Yogurt & Pickle for serving'],
    instructions: ['Defrost at 45°C for 5 mins.', 'Brush both sides with ghee.', 'Bake or air fry at 200°C - 215°C for 6 to 8 mins, flipping once, until puffed and golden.'],
    proTips: ['Ghee gives authentic tandoori aroma.'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '2 parathas',
    tags: ['Defrost', 'Paratha', 'Indian Breakfast', 'Comfort Food']
  },
  {
    id: 'bon-04',
    title: 'Spit-Roasted Charred Sweet Pepper Medley',
    subtitle: 'Whole mini bell peppers rotating on the spit with garlic olive oil drizzle',
    category: 'rotisserie',
    primaryFeature: 'rotisserie',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '220°C', time: '16 - 20 mins', mode: 'Rotisserie Convection', rackOrBasket: 'Center Spit', accessory: 'Spit Rod & Clamps' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '215°C', time: '15 - 18 mins', mode: 'Rotisserie Mode', rackOrBasket: 'Center Shaft', accessory: 'Spit Rod & Clamps' },
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '200°C', time: '10 - 12 mins', mode: 'Air Fry Vortex', rackOrBasket: 'Crisper Basket', accessory: 'Crisper Drawer' }
    },
    defaultCookTime: '18 mins',
    defaultPrepTime: '10 mins',
    defaultTemp: '220°C',
    defaultMode: 'Rotisserie Mode',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
    description: 'Mini sweet peppers speared through the spit rod, charred continuously on all sides until sweet, collapsed, and infused with smoky skin.',
    ingredients: ['400g Mini Sweet Peppers', '2 tbsp Olive Oil', '2 Garlic Cloves slivered', '1 tbsp Balsamic Vinegar', 'Sea Salt'],
    instructions: ['Toss peppers with olive oil and salt.', 'Thread onto spit rod and clamp tightly.', 'Roast at 220°C for 16 to 20 mins until skins are charred and blistered.', 'Drizzle with balsamic vinegar.'],
    proTips: ['The rotating spit roasts all sides of the peppers without needing to flip them manually.'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 servings',
    tags: ['Rotisserie', 'Peppers', 'Tapas', 'Vegetarian']
  },
  {
    id: 'bon-05',
    title: 'Air-Fried Crispy Onion Rings with Remoulade',
    subtitle: 'Thick Spanish onion rings double-dredged in seasoned buttermilk and panko crunch',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '195°C', time: '8 - 10 mins', mode: 'Air Fry Vortex High', rackOrBasket: 'Crisper Plate', accessory: 'Crisper Drawer' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '210°C', time: '12 - 14 mins', mode: 'Convection Top/Bottom', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '210°C', time: '12 - 14 mins', mode: 'Dual Convection Mode', rackOrBasket: 'Center Wire Rack', accessory: 'Baking Tray' }
    },
    defaultCookTime: '9 mins',
    defaultPrepTime: '15 mins',
    defaultTemp: '195°C',
    defaultMode: 'Air Fry Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=80',
    description: 'Sweet yellow onions sliced into 1/2-inch rings, double-dipped in seasoned flour, egg, and panko, air-fried until light and shatteringly crisp.',
    ingredients: ['2 Large Sweet Onions sliced into rings', '1/2 cup Flour', '2 Eggs beaten with 2 tbsp milk', '1.5 cups Panko', '1 tsp Garlic Powder', 'Oil Spray'],
    instructions: ['Dredge onion rings in flour, dip in egg, coat in panko.', 'Arrange in single layer in crisper basket.', 'Spray with oil spray.', 'Air fry at 195°C for 8 to 10 mins until golden and crunchy.'],
    proTips: ['Double breading ensures the onion doesn’t slip out of its crunchy crust when you take a bite.'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '3 servings',
    tags: ['Air Fryer', 'Onion Rings', 'Crispy', 'Snack', 'Comfort Food']
  },
  {
    id: 'bon-06',
    title: 'Lemon Blueberry Ricotta Tea Loaf',
    subtitle: 'Moist and tender Italian ricotta cake studded with jammy blueberries and lemon glaze',
    category: 'baking',
    primaryFeature: 'convection_bake',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '175°C', time: '45 - 50 mins', mode: 'Dual Convection Mode', rackOrBasket: 'Center Wire Rack', accessory: '8.5x4.5 inch Loaf Pan' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '175°C', time: '42 - 48 mins', mode: 'Top/Bottom Bake', rackOrBasket: 'Center Wire Shelf', accessory: 'Loaf Tin' },
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '160°C', time: '28 - 32 mins', mode: 'Air Fry Bake', rackOrBasket: 'Crisper Basket', accessory: 'Small Loaf Tin or Bundt' }
    },
    defaultCookTime: '45 mins',
    defaultPrepTime: '15 mins',
    defaultTemp: '175°C',
    defaultMode: 'Convection Bake',
    imageUrl: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&auto=format&fit=crop&q=80',
    description: 'Whole milk ricotta creates an incomparably velvety crumb that stays moist for days. Folded with fresh lemon zest and blueberries, drizzled with sweet lemon glaze.',
    ingredients: ['1.5 cups Flour', '1 cup Sugar', '1 cup Whole Milk Ricotta', '3 Eggs', '1/2 cup Melted Butter', '2 Lemons zested and juiced', '1 cup Blueberries'],
    instructions: ['Whisk ricotta, sugar, eggs, butter, and lemon zest.', 'Fold in flour, baking powder, and salt.', 'Fold in blueberries.', 'Pour into parchment-lined loaf pan.', 'Bake at 175°C for 45 mins until golden and springy.'],
    proTips: ['Ricotta cheese adds rich protein moisture without making the crumb heavy.'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '10 slices',
    tags: ['Baking', 'Cake', 'Blueberry', 'Ricotta', 'Tea Time']
  },
  {
    id: 'bon-07',
    title: 'Crispy Golden Paneer Popcorn Bites',
    subtitle: 'Melt-in-mouth spiced cottage cheese cubes encased in shatteringly crisp seasoned coating',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '190°C', time: '8 - 10 mins', mode: 'Air Fry Vortex High', rackOrBasket: 'Crisper Plate', accessory: 'Crisper Drawer' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '205°C', time: '10 - 12 mins', mode: 'Convection Top/Bottom', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '205°C', time: '10 - 12 mins', mode: 'Dual Convection Mode', rackOrBasket: 'Center Wire Rack', accessory: 'Baking Tray' }
    },
    defaultCookTime: '9 mins',
    defaultPrepTime: '12 mins',
    defaultTemp: '190°C',
    defaultMode: 'Air Fry Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80',
    description: 'Fresh malai paneer cut into bite-sized cubes, tossed in carom seeds, ginger-garlic paste, chaat masala, and a light cornstarch crust, air-fried with minimal oil spray.',
    ingredients: ['300g Fresh Paneer cut into 3/4-inch cubes', '3 tbsp Cornstarch', '1 tbsp Rice Flour', '1 tsp Kashmiri Red Chili Powder', '1/2 tsp Ajwain (Carom Seeds)', '1 tsp Chaat Masala', 'Oil Spray'],
    instructions: ['Toss paneer gently with spices and a splash of water so flour adheres.', 'Dust with rice flour and cornstarch.', 'Arrange in a single layer in the basket or tray.', 'Air fry at 190°C for 8 to 10 minutes until golden and crackly.'],
    proTips: ['Rice flour in the coating delivers an extra crunchy crust that stays crisp for hours.'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '3 servings',
    tags: ['Air Fryer', 'Paneer', 'Indian Snack', 'Vegetarian', 'Crispy']
  },
  {
    id: 'bon-08',
    title: 'Air-Fried Honey Garlic Chicken Popcorn',
    subtitle: 'Bite-sized chicken breast nuggets glazed with sticky ginger honey garlic reduction',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '200°C', time: '10 - 12 mins', mode: 'Air Fry Vortex', rackOrBasket: 'Crisper Plate', accessory: 'Crisper Drawer' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '210°C', time: '12 - 15 mins', mode: 'Convection Grill', rackOrBasket: 'Top Wire Shelf', accessory: 'Baking Sheet' },
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '210°C', time: '12 - 15 mins', mode: 'Dual Convection Mode', rackOrBasket: 'Center Wire Rack', accessory: 'Baking Tray' }
    },
    defaultCookTime: '11 mins',
    defaultPrepTime: '15 mins',
    defaultTemp: '200°C',
    defaultMode: 'Air Fry Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=80',
    description: 'Juicy chicken breast pieces drenched in garlic marinade, dredged in seasoned panko crumbs, air-fried to a golden crunch, and tossed in bubbling sweet honey garlic glaze.',
    ingredients: ['400g Chicken Breast boneless (1-inch bites)', '1 cup Panko Breadcrumbs', '1 Egg beaten', '3 tbsp Honey', '2 tbsp Soy Sauce', '4 Garlic Cloves minced', '1 tsp Sesame Seeds'],
    instructions: ['Dip chicken bites into beaten egg, coat in panko.', 'Place in air fryer basket, spray with olive oil.', 'Air fry at 200°C for 10 to 12 mins until cooked through.', 'Simmer honey, garlic, and soy sauce 2 mins; toss hot chicken into glaze.'],
    proTips: ['Toss in glaze right before serving so the panko crust retains its signature crunch.'],
    isVegetarian: false,
    difficulty: 'Easy',
    servings: '3 servings',
    tags: ['Air Fryer', 'Chicken', 'Chicken Popcorn', 'Honey Garlic', 'Appetizer']
  },
  {
    id: 'bon-09',
    title: 'Dehydrated Sweet Emerald Kiwi Crisps',
    subtitle: 'Sun-dried style emerald kiwi wheels with concentrated sweet-tangy tropical essence',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '55°C', time: '7 - 9 hrs', mode: 'Dehydrate Convection', rackOrBasket: 'Multi-Level Wire Racks', accessory: 'Parchment Racks' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '55°C', time: '6 - 8 hrs', mode: 'Convection Low', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '55°C', time: '4 - 5 hrs', mode: 'Dehydrate Mode', rackOrBasket: 'Crisper Basket', accessory: 'Crisper Plate' }
    },
    defaultCookTime: '6 hrs',
    defaultPrepTime: '10 mins',
    defaultTemp: '55°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=800&auto=format&fit=crop&q=80',
    description: 'Fresh ripe kiwi fruit peeled and sliced into uniform 4mm translucent circles. Dehydrating removes water while crystallizing the rich vitamin C sugars into chewy, tart fruit candies.',
    ingredients: ['6 Firm Ripe Kiwis peeled and sliced 4mm thin', '1 tbsp Fresh Lime Juice', '1 tsp Raw Honey (optional)'],
    instructions: ['Slice kiwis into even 4mm wheels.', 'Brush lightly with lime juice.', 'Arrange in single layer across wire racks or crisper plate.', 'Dehydrate at 55°C for 6 to 8 hours until bendable, leathery, and dry to touch.'],
    proTips: ['Uniform slice thickness is key: use a mandoline slicer for consistent dehydration.'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 snack servings',
    tags: ['Dehydrate', 'Kiwi', 'Dried Fruit', 'Raw Food', 'Vegan']
  },
  {
    id: 'bon-10',
    title: 'Crispy Air-Fried Falafel with Sesame Crust',
    subtitle: 'Herb-packed traditional green falafel with crunchy golden exterior and fluffy interior',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '190°C', time: '13 - 15 mins', mode: 'Air Fry Vortex', rackOrBasket: 'Crisper Plate', accessory: 'Crisper Drawer' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '200°C', time: '16 - 18 mins', mode: 'Convection Top/Bottom', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '200°C', time: '16 - 18 mins', mode: 'Dual Convection Mode', rackOrBasket: 'Center Wire Rack', accessory: 'Baking Tray' }
    },
    defaultCookTime: '14 mins',
    defaultPrepTime: '20 mins + overnight soak',
    defaultTemp: '190°C',
    defaultMode: 'Air Fry Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&auto=format&fit=crop&q=80',
    description: 'Dried chickpeas soaked overnight (never canned!), coarse-ground with fresh flat parsley, cilantro, toasted cumin, coriander, and garlic, rolled in sesame seeds and air-fried with a fine mist of olive oil.',
    ingredients: ['1 cup Dried Chickpeas (soaked 12 hours)', '1 cup Fresh Parsley & Cilantro', '4 Garlic Cloves', '1 Small Onion', '1 tbsp Cumin & Coriander', '2 tbsp Sesame Seeds', 'Olive Oil Spray'],
    instructions: ['Pulse soaked raw chickpeas and herbs in food processor until coarse sand texture.', 'Form into walnut-sized patties and roll in sesame seeds.', 'Place on crisper plate and spray with olive oil.', 'Air fry at 190°C for 13 to 15 mins until deep golden.'],
    proTips: ['Never use canned boiled chickpeas; only soaked raw chickpeas yield authentic fluffy falafel.'],
    isVegetarian: true,
    difficulty: 'Medium',
    servings: '12 falafels',
    tags: ['Air Fryer', 'Falafel', 'Middle Eastern', 'Vegan', 'High Protein']
  },
  {
    id: 'bon-11',
    title: 'Defrosted Chicken Keema Stuffed Puff Pastries',
    subtitle: 'Flaky bakery puffs filled with aromatic minced spiced chicken, baked golden and puffy',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['mr29_otg', 'mr60_rcss', 'airfryer_5l'],
    applianceConfigs: {
      mr29_otg: { applianceId: 'mr29_otg', temp: '45°C Thaw, then 205°C Bake', time: '5 mins Thaw + 18 mins Bake', mode: 'Defrost -> Top/Bottom Convection', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '45°C Thaw, then 210°C Bake', time: '5 mins Thaw + 18 mins Bake', mode: 'Defrost -> Dual Convection', rackOrBasket: 'Center Wire Rack', accessory: 'Enamelled Baking Tray' },
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '50°C Thaw, then 195°C Crisp', time: '3 mins Thaw + 12 mins Crisp', mode: 'Defrost -> Air Fry Vortex', rackOrBasket: 'Crisper Basket', accessory: 'Crisper Drawer' }
    },
    defaultCookTime: '23 mins total',
    defaultPrepTime: '10 mins',
    defaultTemp: '45°C Thaw / 205°C Bake',
    defaultMode: 'Defrost -> Convection Crisp',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
    description: 'Frozen pre-made puff pastry sheets and frozen chicken keema filling thawed quickly without turning soggy, folded into bakery patties, brushed with egg wash, and baked into soaring flaky layers.',
    ingredients: ['4 Frozen Puff Pastry Squares', '1.5 cups Cooked Spiced Minced Chicken Keema', '1 Egg beaten for egg wash', 'Nigella Seeds (Kalonji) for topping'],
    instructions: ['Defrost pastry sheets at 45°C for 5 minutes until pliable.', 'Spoon spiced chicken keema into center of each square.', 'Fold diagonally into triangles and crimp edges with a fork.', 'Brush with egg wash, sprinkle kalonji, and bake at 205°C for 18 mins until puffed and deep golden.'],
    proTips: ['Cold butter in the thawed puff pastry steams rapidly in the hot oven to lift dozens of crisp layers.'],
    isVegetarian: false,
    difficulty: 'Medium',
    servings: '4 large puffs',
    tags: ['Defrost', 'Chicken', 'Chicken Keema', 'Puff Pastry', 'Bakery Style']
  },
  {
    id: 'bon-12',
    title: 'Dehydrated Strawberry Fruit Crisps',
    subtitle: 'Fragrant sweet ruby red berry chips dried into crunchy vitamin-rich snacking crisps',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '55°C', time: '6 - 8 hrs', mode: 'Dehydrate Convection', rackOrBasket: 'Wire Racks with parchment', accessory: 'Wire Racks' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '55°C', time: '6 - 8 hrs', mode: 'Convection Low', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '55°C', time: '4 - 5 hrs', mode: 'Dehydrate Mode', rackOrBasket: 'Crisper Basket', accessory: 'Crisper Plate' }
    },
    defaultCookTime: '6 hrs',
    defaultPrepTime: '10 mins',
    defaultTemp: '55°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&auto=format&fit=crop&q=80',
    description: 'Fresh sweet strawberries hulled and sliced 3mm thin. Low-temperature airflow removes all moisture while leaving the brilliant red color and sweet strawberry perfume intact.',
    ingredients: ['500g Fresh Strawberries hulled and sliced 3mm thin', '1 tsp Vanilla Extract (optional)'],
    instructions: ['Slice strawberries into uniform thin slices.', 'Arrange flat in single layer on parchment lined racks.', 'Dehydrate at 55°C for 6 to 8 hours until crunchy and dry.', 'Store in an airtight mason jar.'],
    proTips: ['Add to morning granola, yogurt bowls, or soak in tea for an instant burst of summer berries.'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 servings',
    tags: ['Dehydrate', 'Strawberries', 'Fruit Chips', 'Healthy Snack', 'Vegan']
  },
  {
    id: 'bon-13',
    title: 'Air-Fried Crispy Sweet Potato Wedges',
    subtitle: 'Rustic thick-cut sweet potatoes blistered with smoked paprika, garlic & sea salt',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '195°C', time: '14 - 16 mins', mode: 'Air Fry Vortex High', rackOrBasket: 'Crisper Plate', accessory: 'Crisper Drawer' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '215°C', time: '18 - 22 mins', mode: 'Convection Top/Bottom', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '215°C', time: '18 - 22 mins', mode: 'Dual Convection Mode', rackOrBasket: 'Center Wire Rack', accessory: 'Baking Tray' }
    },
    defaultCookTime: '15 mins',
    defaultPrepTime: '10 mins',
    defaultTemp: '195°C',
    defaultMode: 'Air Fry Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?w=800&auto=format&fit=crop&q=80',
    description: 'Sweet potatoes cut into thick rustic wedges, tossed with cornstarch, smoked paprika, garlic powder, and a touch of oil, air-fried until the edges caramelize and crisp up.',
    ingredients: ['2 Large Sweet Potatoes washed and cut into wedges', '1 tbsp Cornstarch', '1 tsp Smoked Paprika', '1/2 tsp Garlic Powder', '1 tbsp Olive Oil', 'Flaky Sea Salt'],
    instructions: ['Toss wedges in cold water for 15 mins to remove surface starch; pat bone dry.', 'Toss with olive oil, cornstarch, and spices.', 'Spread in single layer in air fryer basket.', 'Cook at 195°C for 14 to 16 mins, shaking halfway.'],
    proTips: ['Soaking and patting dry ensures the outer crust turns crisp rather than limp.'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '3 servings',
    tags: ['Air Fryer', 'Sweet Potato', 'Fries', 'Vegan', 'Side Dish']
  },
  {
    id: 'bon-14',
    title: 'Defrosted Cheesy Jalapeño Poppers',
    subtitle: 'Cream cheese and sharp cheddar molten centers inside golden breadcrumb shells',
    category: 'defrost_cook',
    primaryFeature: 'defrost',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '50°C Thaw, then 195°C Crisp', time: '3 mins Thaw + 7 mins Crisp', mode: 'Defrost -> Air Fry Vortex', rackOrBasket: 'Crisper Plate', accessory: 'Crisper Drawer' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '45°C Thaw, then 210°C Bake', time: '4 mins Thaw + 10 mins Bake', mode: 'Defrost -> Convection Grill', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '45°C Thaw, then 210°C Bake', time: '4 mins Thaw + 10 mins Bake', mode: 'Defrost -> Dual Convection', rackOrBasket: 'Center Wire Rack', accessory: 'Baking Tray' }
    },
    defaultCookTime: '10 mins total',
    defaultPrepTime: '2 mins',
    defaultTemp: '50°C Thaw / 195°C Crisp',
    defaultMode: 'Defrost -> Air Fry Crisp',
    imageUrl: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&auto=format&fit=crop&q=80',
    description: 'Frozen crumb-coated stuffed jalapeños gently thawed to prevent the cheese core from exploding out, then air-fried or baked into bubbly molten decadence.',
    ingredients: ['8 Frozen Stuffed Jalapeño Poppers', 'Olive Oil Spray', 'Ranch or Chipotle Mayo for dipping'],
    instructions: ['Defrost at 50°C for 3 mins.', 'Spray lightly with oil spray.', 'Air fry or bake at 195°C for 7 to 9 mins until crumbs are browned and cheese is hot.'],
    proTips: ['The controlled defrost cycle ensures the cheese warms evenly without blowing through the breadcrumb seal.'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 servings',
    tags: ['Defrost', 'Jalapeño', 'Cheese', 'Appetizer', 'Finger Food']
  },
  {
    id: 'bon-15',
    title: 'Air-Fried Crispy Buffalo Cauliflower Florets',
    subtitle: 'Fiery, tangy glazed cauliflower bites with satisfying crunch and creamy ranch dip',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '190°C', time: '12 - 14 mins', mode: 'Air Fry Vortex', rackOrBasket: 'Crisper Basket', accessory: 'Crisper Drawer' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '205°C', time: '15 - 18 mins', mode: 'Convection Top/Bottom', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '205°C', time: '15 - 18 mins', mode: 'Dual Convection Mode', rackOrBasket: 'Center Wire Rack', accessory: 'Baking Tray' }
    },
    defaultCookTime: '13 mins',
    defaultPrepTime: '15 mins',
    defaultTemp: '190°C',
    defaultMode: 'Air Fry Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    description: 'Bite-sized fresh cauliflower florets dredged in a light batter of flour and almond milk, rolled in panko, air-fried to a deep crunch, and tossed in spicy melted butter buffalo sauce.',
    ingredients: ['1 Head Cauliflower cut into florets', '1/2 cup Flour', '1/2 cup Water or Milk', '1 cup Panko Breadcrumbs', '1/3 cup Hot Buffalo Sauce', '2 tbsp Melted Butter'],
    instructions: ['Dip florets into batter, then coat with panko.', 'Place in air fryer basket, spray with oil.', 'Air fry at 190°C for 12 to 14 mins until golden.', 'Whisk buffalo sauce and butter; toss hot florets until glazed.'],
    proTips: ['Serve immediately after tossing in sauce so the breadcrumb coating stays loud and crunchy.'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 servings',
    tags: ['Air Fryer', 'Cauliflower', 'Buffalo', 'Vegetarian', 'Game Day']
  },
  {
    id: 'bon-16',
    title: 'Dehydrated Garden Zucchini Chips with Sea Salt',
    subtitle: 'Guilt-free crunchy green vegetable chips seasoned with aromatic rosemary',
    category: 'dehydrate',
    primaryFeature: 'dehydrate',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '55°C', time: '6 - 8 hrs', mode: 'Dehydrate Convection', rackOrBasket: 'Wire Racks with parchment', accessory: 'Wire Racks' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '55°C', time: '6 - 8 hrs', mode: 'Convection Low', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '55°C', time: '3.5 - 4.5 hrs', mode: 'Dehydrate Mode', rackOrBasket: 'Crisper Basket', accessory: 'Crisper Plate' }
    },
    defaultCookTime: '5 hrs',
    defaultPrepTime: '10 mins',
    defaultTemp: '55°C',
    defaultMode: 'Dehydrate Convection',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    description: 'Fresh zucchini sliced paper-thin on a mandoline, lightly misted with extra virgin olive oil, and dusted with finely crushed dried rosemary and Himalayan pink salt.',
    ingredients: ['2 Medium Zucchinis mandoline-sliced 2mm thin', '1 tsp Olive Oil', '1/2 tsp Crushed Dried Rosemary', '1/2 tsp Sea Salt', '1/4 tsp Garlic Powder'],
    instructions: ['Slice zucchini 2mm thin.', 'Toss very lightly with oil and seasonings.', 'Lay flat across dehydration racks without overlapping.', 'Dehydrate at 55°C for 5 to 7 hours until brittle and snappy.'],
    proTips: ['Use minimal oil: too much oil prevents vegetable chips from reaching full crispness.'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '3 servings',
    tags: ['Dehydrate', 'Zucchini', 'Veggie Chips', 'Keto', 'Low Calorie']
  },
  {
    id: 'bon-17',
    title: 'Crispy Chicken Strips with Lemon Pepper Dust',
    subtitle: 'Golden cornflake-crusted chicken breast tenders seasoned with zesty cracked lemon pepper',
    category: 'airfry',
    primaryFeature: 'airfry',
    compatibleAppliances: ['airfryer_5l', 'mr29_otg', 'mr60_rcss'],
    applianceConfigs: {
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '200°C', time: '11 - 13 mins', mode: 'Air Fry Vortex High', rackOrBasket: 'Crisper Plate', accessory: 'Crisper Drawer' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '210°C', time: '14 - 16 mins', mode: 'Convection Top/Bottom', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '210°C', time: '14 - 16 mins', mode: 'Dual Convection Mode', rackOrBasket: 'Center Wire Rack', accessory: 'Baking Tray' }
    },
    defaultCookTime: '12 mins',
    defaultPrepTime: '15 mins',
    defaultTemp: '200°C',
    defaultMode: 'Air Fry Vortex',
    imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=80',
    description: 'Boneless chicken breast strips dipped in seasoned buttermilk, rolled in crushed cornflakes for extra light crunch, and air-fried with a fine mist of olive oil.',
    ingredients: ['500g Chicken Breast Strips', '1/2 cup Buttermilk', '2 cups Crushed Cornflakes', '1 tbsp Lemon Pepper Seasoning', '1 tsp Garlic Salt', 'Oil Spray'],
    instructions: ['Marinate chicken in buttermilk 15 mins.', 'Dredge in crushed cornflakes mixed with lemon pepper.', 'Place on crisper plate and spray with oil.', 'Air fry at 200°C for 11 to 13 mins until golden and crunchy.'],
    proTips: ['Crushed cornflakes provide a more resilient, shattering crunch than standard breadcrumbs.'],
    isVegetarian: false,
    difficulty: 'Easy',
    servings: '4 servings',
    tags: ['Air Fryer', 'Chicken', 'Chicken Strips', 'Lemon Pepper', 'Quick Dinner']
  },
  {
    id: 'bon-18',
    title: 'Cheesy Accordion Hasselback Potatoes',
    subtitle: 'Fan-cut russets roasted with garlic rosemary butter and molten sharp cheddar ribbons',
    category: 'baking',
    primaryFeature: 'convection_bake',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: { applianceId: 'mr60_rcss', temp: '205°C', time: '38 - 42 mins', mode: 'Dual Convection Mode', rackOrBasket: 'Center Wire Rack', accessory: 'Baking Tray with foil' },
      mr29_otg: { applianceId: 'mr29_otg', temp: '200°C', time: '35 - 40 mins', mode: 'Convection Top/Bottom', rackOrBasket: 'Center Wire Shelf', accessory: 'Baking Sheet' },
      airfryer_5l: { applianceId: 'airfryer_5l', temp: '190°C', time: '25 - 30 mins', mode: 'Air Fry Roast', rackOrBasket: 'Crisper Basket', accessory: 'Crisper Drawer' }
    },
    defaultCookTime: '35 mins',
    defaultPrepTime: '15 mins',
    defaultTemp: '205°C',
    defaultMode: 'Convection Roast',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80',
    description: 'Medium potatoes sliced into thin accordion slits almost to the base, basted with melted garlic-herb butter so every crevice crisps up, and finished with melted cheese.',
    ingredients: ['4 Medium Russet Potatoes', '4 tbsp Melted Butter', '2 Garlic Cloves minced', '1 tbsp Fresh Rosemary', '1/2 cup Sharp Cheddar slices', 'Sour Cream & Chives'],
    instructions: ['Place chopsticks on either side of potato as cutting guides to avoid slicing all the way through.', 'Brush generously with garlic rosemary butter.', 'Bake at 205°C for 30 mins until fan opens.', 'Tuck cheddar slices between slits and bake 5 to 8 mins until bubbling.'],
    proTips: ['Chopsticks placed along the base prevent the knife from accidentally slicing completely through the potato.'],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 potatoes',
    tags: ['Baking', 'Potatoes', 'Hasselback', 'Cheese', 'Side Dish']
  }
];

// Combine all modules into the comprehensive master recipe database (114+ recipes!)
export const ALL_RECIPES: Recipe[] = [
  ...dehydrateRecipes,
  ...defrostRecipes,
  ...rotisserieRecipes,
  ...airfryRecipes,
  ...bakingRecipes,
  ...grillRecipes,
  ...toastRecipes,
  ...additionalRecipes,
  ...expandedBatch,
  ...moreRecipes,
  ...bonusCulinaryRecipes
];

// Ensure all appliances have rich 100+ recipe coverage by mapping universal kitchen cross-compatibility
// Each recipe specifies exact appliance-specific settings (temperature, time, mode, rack/basket, accessory)
export function getRecipesByAppliance(applianceId: ApplianceId): Recipe[] {
  return ALL_RECIPES.filter(recipe => {
    // If explicitly marked
    if (recipe.compatibleAppliances.includes(applianceId)) return true;
    // Both OTGs handle all baking, grill, toast, dehydrate, and defrost recipes
    if (applianceId === 'mr60_rcss' || applianceId === 'mr29_otg') {
      return true;
    }
    // 5L Air Fryer handles airfry, dehydrate, defrost, toast, grill, and small-batch baking
    if (applianceId === 'airfryer_5l') {
      return recipe.primaryFeature !== 'rotisserie';
    }
    return false;
  });
}

export function getRecipesByCategory(category: string): Recipe[] {
  if (category === 'all') return ALL_RECIPES;
  return ALL_RECIPES.filter(r => r.category === category);
}

export function getRecipesByFeature(feature: string): Recipe[] {
  if (feature === 'all') return ALL_RECIPES;
  return ALL_RECIPES.filter(r => r.primaryFeature === feature);
}
