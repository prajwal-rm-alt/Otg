import { Recipe } from '../../types';

export const bakingRecipes: Recipe[] = [
  {
    id: 'bak-01',
    title: 'Artisan Crusty Sourdough Boule',
    subtitle: 'Blistered dark mahogany crust with open gelatinized crumb and ear lift',
    category: 'baking',
    primaryFeature: 'convection_bake',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '230°C initial, then 200°C',
        time: '25 mins covered + 20 mins uncovered',
        mode: 'Bottom + Top Elements / Convection',
        rackOrBasket: 'Lowest Wire Rack with Dutch Oven or Baking Stone',
        accessory: 'Cast Iron Dutch Oven or Heavy Baking Tray',
        specialNote: 'Jumbo 60L height easily fits high-domed cast iron Dutch oven with lid on.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '220°C',
        time: '35 - 40 mins',
        mode: 'Convection Top/Bottom',
        rackOrBasket: 'Bottom Wire Shelf',
        accessory: 'Baking Tray with water steam pan below',
        specialNote: 'Place small metal dish with boiling water on floor for steam injection.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '185°C',
        time: '25 - 30 mins',
        mode: 'Air Fry Bake',
        rackOrBasket: 'Crisper Basket',
        accessory: '6-inch Round Parchment Sling',
        specialNote: 'Scale boule size down to 350g dough ball.'
      }
    },
    defaultCookTime: '45 mins',
    defaultPrepTime: '45 mins + overnight cold ferment',
    defaultTemp: '230°C / 200°C',
    defaultMode: 'Convection Top/Bottom',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
    description: 'The pinnacle of home baking. High-hydration wild sourdough fermented overnight, scored with a baker’s razor, and baked in the Morphy Richards OTG to yield a singing, crackling blistered crust and custard-like honeycomb interior.',
    ingredients: [
      '450g High-Protein Bread Flour',
      '50g Whole Wheat Flour',
      '375g Filtered Water at 26°C (75% hydration)',
      '100g Active Ripe Sourdough Starter',
      '10g Fine Sea Salt'
    ],
    instructions: [
      'Autolyse flour and water for 45 minutes; mix in starter and salt.',
      'Perform 4 sets of stretch-and-folds every 30 minutes during bulk fermentation.',
      'Shape into a tight boule, place in a floured banneton basket, and cold ferment in fridge for 14 hours.',
      'Preheat the Morphy Richards 60L or 29L OTG to 230°C with Dutch oven or baking stone inside for 30 minutes.',
      'Turn dough onto parchment, score an arc-shaped ear with a razor, and load into oven.',
      'Bake covered with lid (or steam pan) for 25 minutes to trap steam.',
      'Remove lid and bake an additional 18 to 22 minutes at 200°C until deep chestnut mahogany.',
      'Cool completely on wire rack for 2 hours before slicing.'
    ],
    proTips: [
      'Steam in the first 20 minutes keeps the dough skin soft, allowing maximum oven spring before the crust hardens.',
      'Do not cut hot sourdough; internal steam is still finishing setting the crumb gelatinization.'
    ],
    isVegetarian: true,
    difficulty: 'Chef Special',
    servings: '1 large 850g artisan loaf',
    tags: ['Baking', 'Sourdough', 'Artisan Bread', 'Vegan', 'Masterclass']
  },
  {
    id: 'bak-02',
    title: 'Wood-Fired Style 12" Margherita Pizza',
    subtitle: 'Blistered leopard-spotted crust with San Marzano tomatoes, buffalo mozzarella & basil',
    category: 'baking',
    primaryFeature: 'convection_bake',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '250°C (Max Heat)',
        time: '8 - 10 mins',
        mode: 'Convection Top & Bottom Elements Simultaneous',
        rackOrBasket: 'Center Wire Rack with Pizza Stone or Inverted Tray',
        accessory: 'Pizza Stone / Heavy Baking Tray',
        specialNote: 'Easily accommodates 12 to 14 inch family pizzas.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '250°C',
        time: '9 - 11 mins',
        mode: 'Top & Bottom Heating + Convection',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet / 10-inch Pizza Pan',
        specialNote: 'Preheat baking sheet for 15 minutes before sliding pizza on.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '200°C',
        time: '7 - 8 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer with perforated parchment',
        specialNote: 'Make personal 7-inch pizzas.'
      }
    },
    defaultCookTime: '9 mins',
    defaultPrepTime: '20 mins',
    defaultTemp: '250°C',
    defaultMode: 'Convection Max Heat',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80',
    description: 'Neapolitan-style pizza achieved in an OTG. Preheating the cavity to 250°C with dual top and bottom elements triggers instant bubble formation in the fermented dough, charring the cornicione rim while melting the fresh mozzarella.',
    ingredients: [
      '1 Fermented Pizza Dough Ball (250g, 00 Flour)',
      '1/2 cup Crushed San Marzano Tomatoes + pinch of salt',
      '125g Fresh Buffalo Mozzarella or Fior di Latte (patted dry)',
      'Fresh Basil leaves',
      '1 tbsp Extra Virgin Olive Oil',
      'Semolina flour for dusting peel'
    ],
    instructions: [
      'Preheat Morphy Richards OTG to maximum 250°C with baking tray inside for at least 20 minutes.',
      'Stretch dough ball gently with hands on a semolina-dusted board, pushing air outward to form an airy rim.',
      'Spoon crushed tomatoes in thin circles, leaving 2cm rim uncovered.',
      'Tear fresh mozzarella into chunks and scatter over sauce.',
      'Slide pizza directly onto the blazing hot baking tray.',
      'Bake at 250°C for 8 to 10 minutes until cheese is bubbling in patches and crust is charred with leopard spots.',
      'Scatter fresh basil and drizzle with olive oil.'
    ],
    proTips: [
      'Always pat fresh mozzarella dry with towels; excess whey creates watery pizza.',
      'A dusting of coarse semolina prevents dough sticking and adds authentic crunch to the bottom.'
    ],
    isVegetarian: true,
    difficulty: 'Medium',
    servings: '1 12-inch pizza (2 servings)',
    tags: ['Baking', 'Pizza', 'Italian', 'Vegetarian', 'Quick Dinner']
  },
  {
    id: 'bak-03',
    title: 'Double Chocolate Fudgy Brownies',
    subtitle: 'Crinkly shiny paper-thin crust with dense, molten fudgy chocolate center',
    category: 'baking',
    primaryFeature: 'convection_bake',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '175°C',
        time: '25 - 28 mins',
        mode: 'Bottom Element + Gentle Convection',
        rackOrBasket: 'Center Wire Rack',
        accessory: '9x13 inch or 8x8 inch Square Metal Pan',
        specialNote: 'Metal pans conduct heat better than glass for clean brownie crust.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '175°C',
        time: '24 - 26 mins',
        mode: 'Top/Bottom Bake Mode',
        rackOrBasket: 'Center Wire Shelf',
        accessory: '8x8 inch Square Baking Tin',
        specialNote: 'Rotate tin at 15 mins for even top crust.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '160°C',
        time: '18 - 22 mins',
        mode: 'Air Fry Bake',
        rackOrBasket: 'Crisper Basket',
        accessory: '6x6 inch Square or Round Pan with parchment sling',
        specialNote: 'Check center toothpick at 18 mins.'
      }
    },
    defaultCookTime: '26 mins',
    defaultPrepTime: '15 mins',
    defaultTemp: '175°C',
    defaultMode: 'Convection Bake',
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80',
    description: 'The ultimate brownie with the coveted tissue-paper shiny crinkle top. Melted 70% dark chocolate whipped with eggs and sugar until pale, producing an intensely rich, chewy, fudgy center.',
    ingredients: [
      '200g 70% Dark Bittersweet Chocolate chopped',
      '1/2 cup Unsalted Butter',
      '3 Large Eggs at room temperature',
      '1 cup Granulated White Sugar (essential for shiny crust)',
      '1/3 cup Brown Sugar',
      '1/2 cup All-Purpose Flour',
      '1/3 cup Dutch-Process Cocoa Powder',
      '1/2 tsp Espresso Powder & 1/2 tsp Flaky Salt',
      '1/2 cup Semi-Sweet Chocolate Chunks'
    ],
    instructions: [
      'Melt dark chocolate and butter together in a heatproof bowl; cool slightly.',
      'Beat eggs and white sugar with electric whisk on high for 5 full minutes until pale, thick, and ribbon-like (this forms the shiny crust!).',
      'Gently fold in chocolate-butter mixture and vanilla.',
      'Sift in flour, cocoa powder, espresso powder, and salt; fold until just combined.',
      'Fold in chocolate chunks. Pour into parchment-lined 8x8 inch metal baking tin.',
      'Bake in preheated Morphy Richards OTG at 175°C for 24 to 28 minutes until edges are set and center is soft.',
      'Cool completely in pan for 1 hour before slicing into clean squares with a warm knife.'
    ],
    proTips: [
      'Whipping eggs and white sugar for 5 minutes dissolves sugar into a meringue foam that creates the signature crinkle top.',
      'Chill in the fridge for 2 hours before slicing for razor-sharp bakery-style squares.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '16 brownie squares',
    tags: ['Baking', 'Brownies', 'Chocolate', 'Dessert', 'Fudgy']
  },
  {
    id: 'bak-04',
    title: 'Blueberry Buttermilk Streusel Muffins',
    subtitle: 'High-domed bakery muffins bursting with jammy berries and crunchy brown sugar cinnamon top',
    category: 'baking',
    primaryFeature: 'convection_bake',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '200°C for 5 mins, then 180°C for 15 mins',
        time: '20 mins total',
        mode: 'Dual Convection Mode',
        rackOrBasket: 'Center Wire Rack',
        accessory: '12-Cup Standard Muffin Tin with tulip liners',
        specialNote: 'Initial high heat creates the towering bakery muffin dome.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '190°C',
        time: '18 - 22 mins',
        mode: 'Convection Top/Bottom',
        rackOrBasket: 'Center Wire Shelf',
        accessory: '6-Cup Muffin Tin',
        specialNote: 'Fits standard 6-cup muffin tray with room to spare.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '165°C',
        time: '12 - 15 mins',
        mode: 'Air Fry Bake',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Silicone Muffin Cups placed in basket',
        specialNote: 'Fits 5 to 6 silicone cups.'
      }
    },
    defaultCookTime: '20 mins',
    defaultPrepTime: '15 mins',
    defaultTemp: '200°C / 180°C',
    defaultMode: 'Convection Dual Element',
    imageUrl: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&auto=format&fit=crop&q=80',
    description: 'Towering bakery-style muffins with tender crumb, speckled with bursting blueberries, and crowned with a golden cinnamon-butter streusel crunch.',
    ingredients: [
      '2 cups All-Purpose Flour',
      '3/4 cup Granulated Sugar',
      '2 tsp Baking Powder & 1/2 tsp Baking Soda',
      '1/2 tsp Salt & 1/4 tsp Nutmeg',
      '1 cup Buttermilk',
      '1/3 cup Melted Butter + 1/4 cup Vegetable Oil',
      '2 Large Eggs',
      '1.5 cups Fresh or Defrosted Blueberries (tossed in 1 tbsp flour)',
      'Streusel: 3 tbsp Flour, 3 tbsp Brown Sugar, 2 tbsp Cold Butter, 1/2 tsp Cinnamon'
    ],
    instructions: [
      'Whisk dry ingredients in one bowl; whisk buttermilk, melted butter, oil, and eggs in another.',
      'Gently fold wet into dry ingredients until barely combined (lumps are good!).',
      'Fold in blueberries dusted with flour (flour keeps berries from sinking to the bottom).',
      'Spoon batter high into muffin tin liners.',
      'Rub cold butter into streusel ingredients and sprinkle heavily over muffin tops.',
      'Bake at 200°C for 5 minutes, then reduce to 180°C for 15 minutes until tops spring back.',
      'Cool 5 minutes in tin, then transfer to wire rack.'
    ],
    proTips: [
      'The initial 5 minutes at 200°C activates leaveners rapidly, puffing the muffin top sky-high.',
      'Do not overmix muffin batter; mixing until just combined ensures velvety tender crumb.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '12 muffins',
    tags: ['Baking', 'Muffins', 'Blueberries', 'Breakfast', 'Bakery Style']
  },
  {
    id: 'bak-05',
    title: 'Flaky Golden French Butter Croissants',
    subtitle: 'Honeycomb laminated pastry with 27 delicate shatteringly crisp butter layers',
    category: 'baking',
    primaryFeature: 'convection_bake',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '190°C',
        time: '18 - 22 mins',
        mode: 'Dual Convection Mode',
        rackOrBasket: 'Center Wire Rack with Baking Sheet',
        accessory: 'Baking Tray with silicone baking mat',
        specialNote: 'Convection fans circulate warm air around every crescent curve.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '190°C',
        time: '18 - 20 mins',
        mode: 'Convection Top/Bottom',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet lined with parchment',
        specialNote: 'Space croissants 5cm apart to allow puffing expansion.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '175°C',
        time: '12 - 14 mins',
        mode: 'Air Fry Bake',
        rackOrBasket: 'Crisper Basket with parchment',
        accessory: 'Crisper Drawer',
        specialNote: 'Bake 2 proofed croissants at a time.'
      }
    },
    defaultCookTime: '20 mins',
    defaultPrepTime: '1 hr + chilling & lamination',
    defaultTemp: '190°C',
    defaultMode: 'Dual Convection Bake',
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80',
    description: 'Real butter lamination meets precision OTG baking. As butter melts between thin dough sheets, steam lifts each layer into an open honeycomb cross-section with an amber glazed shell.',
    ingredients: [
      '500g Bread Flour',
      '60g Sugar + 10g Salt',
      '10g Instant Yeast',
      '140g Cold Milk + 140g Cold Water',
      '250g High-Fat European Butter Block (for lamination)',
      '1 Egg beaten with 1 tbsp milk (for egg wash)'
    ],
    instructions: [
      'Mix dough, knead smooth, and chill overnight in refrigerator.',
      'Encase cold pliable butter block in dough and perform 1 double turn and 1 single turn with 1-hour rest periods in fridge.',
      'Roll dough to 4mm thickness; cut into tall triangles and roll into crescents.',
      'Proof at 26°C for 2 hours until jiggly and doubled in volume.',
      'Brush gently with egg wash, avoiding cut laminated edges so layers are free to separate.',
      'Bake at 190°C in Morphy Richards OTG for 18 to 22 minutes until deep golden-brown and feather-light.',
      'Cool on wire rack.'
    ],
    proTips: [
      'Never proof croissants above 28°C or butter will melt out onto the tray before baking.',
      'Do not brush egg wash on cut edges; dried egg seals layers together and prevents rise.'
    ],
    isVegetarian: true,
    difficulty: 'Chef Special',
    servings: '10 croissants',
    tags: ['Baking', 'Croissants', 'French Pastry', 'Butter', 'Masterclass']
  },
  {
    id: 'bak-06',
    title: 'Artisan Rosemary Sea Salt Focaccia',
    subtitle: 'Golden olive oil-slicked bread with deep dimples, rosemary needles & flaky Maldon salt',
    category: 'baking',
    primaryFeature: 'convection_bake',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '215°C',
        time: '20 - 24 mins',
        mode: 'Convection Top & Bottom Elements',
        rackOrBasket: 'Center Wire Rack',
        accessory: 'Full Enamelled Baking Tray (9x13 inch)',
        specialNote: 'Generously oil bottom of pan with olive oil for fried crust.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '210°C',
        time: '20 - 22 mins',
        mode: 'Convection Mode',
        rackOrBasket: 'Center Wire Shelf',
        accessory: '8x10 inch Baking Pan',
        specialNote: 'Ensure pan has 2-inch tall sides for dough rise.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '185°C',
        time: '14 - 16 mins',
        mode: 'Air Fry Bake',
        rackOrBasket: 'Crisper Basket',
        accessory: '7-inch Round Cake Tin placed in basket',
        specialNote: 'Bake personal focaccia round.'
      }
    },
    defaultCookTime: '22 mins',
    defaultPrepTime: '20 mins + fermentation',
    defaultTemp: '215°C',
    defaultMode: 'Convection Bake',
    imageUrl: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&auto=format&fit=crop&q=80',
    description: 'High-hydration dough bathed in fruity extra virgin olive oil. Finger-dimpled until bubbly, dotted with garlic cloves, fresh rosemary, and flaky sea salt, baked until bottom crust is fried golden and top is blistered.',
    ingredients: [
      '400g Bread Flour',
      '320g Lukewarm Water (80% hydration)',
      '1 tsp Instant Yeast & 1 tsp Honey',
      '1.5 tsp Fine Sea Salt',
      '1/3 cup Good Extra Virgin Olive Oil',
      'Fresh Rosemary sprigs & Flaky Sea Salt (Maldon)',
      '6 Garlic Cloves halved (Optional)'
    ],
    instructions: [
      'Mix flour, water, yeast, honey, and salt into a wet shaggy dough.',
      'Perform 3 coil folds at 30-minute intervals until dough is smooth and glossy.',
      'Pour 3 tbsp olive oil into baking pan, transfer dough, turn to coat, and let rise 2 hours until bubbly.',
      'Pour remaining olive oil over top. Use oiled fingertips to dimple deeply all the way to bottom of pan.',
      'Scatter fresh rosemary sprigs, garlic cloves, and flaky sea salt over dimples.',
      'Bake at 215°C in Morphy Richards OTG for 20 to 24 minutes until golden-brown and hollow-sounding when tapped.'
    ],
    proTips: [
      'A generous pool of olive oil on the pan bottom literally fries the bottom crust into golden crisp perfection.',
      'Dimpling dough all the way down creates pockets that trap warm olive oil and sea salt.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '8 focaccia squares',
    tags: ['Baking', 'Focaccia', 'Italian', 'Olive Oil', 'Bread']
  },
  {
    id: 'bak-07',
    title: 'New York Baked Vanilla Cheesecake',
    subtitle: 'Ultra-creamy velvety cream cheese custard with buttery graham crust and sour cream cap',
    category: 'baking',
    primaryFeature: 'convection_bake',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '160°C',
        time: '55 - 65 mins',
        mode: 'Bottom Element + Gentle Convection',
        rackOrBasket: 'Lowest Wire Rack with Water Bath (Bain-Marie)',
        accessory: '9-inch Springform Pan wrapped in heavy foil + Roasting Pan',
        specialNote: 'Water bath ensures silky crack-free surface.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '155°C',
        time: '50 - 60 mins',
        mode: 'Bottom Element Bake',
        rackOrBasket: 'Bottom Wire Shelf with water pan on tray below',
        accessory: '8-inch Springform Pan',
        specialNote: 'Leave cheesecake in turned-off oven with door ajar for 1 hr after baking.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '150°C',
        time: '30 - 35 mins',
        mode: 'Air Fry Bake',
        rackOrBasket: 'Crisper Basket',
        accessory: '6-inch Springform or silicone pan',
        specialNote: 'Cover top with foil for first 20 mins to prevent browning.'
      }
    },
    defaultCookTime: '60 mins',
    defaultPrepTime: '25 mins + cooling & chill',
    defaultTemp: '160°C',
    defaultMode: 'Bottom Element + Gentle Convection',
    imageUrl: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&auto=format&fit=crop&q=80',
    description: 'Rich, dense, and satiny smooth. Baked in a gentle water bath inside the Morphy Richards OTG to prevent cracking or curdling, then cooled slowly for the quintessential New York deli texture.',
    ingredients: [
      'Crust: 1.5 cups Graham Cracker / Digestive Biscuit Crumbs + 5 tbsp Melted Butter + 2 tbsp Sugar',
      'Filling: 750g Full-Fat Cream Cheese at room temperature',
      '1 cup Granulated Sugar',
      '1/2 cup Sour Cream or Heavy Cream',
      '3 Large Eggs + 1 Egg Yolk at room temperature',
      '1 tbsp Vanilla Bean Paste',
      '1 tbsp Lemon Juice & 2 tbsp Flour'
    ],
    instructions: [
      'Press crust mixture firmly into bottom and 1 inch up sides of 9-inch springform pan; blind bake 10 mins at 175°C.',
      'Beat room-temp cream cheese and sugar on low speed until smooth (do not whip air into batter).',
      'Gently blend in sour cream, vanilla, lemon juice, and flour.',
      'Add eggs one by one on lowest speed until just incorporated.',
      'Wrap outside of springform pan with 3 layers of heavy aluminum foil.',
      'Pour filling over crust; set in roasting pan filled with 1 inch of boiling water.',
      'Bake at 160°C for 55 to 65 minutes until edges are set and center 2 inches has a slight jelly wobble.',
      'Turn oven off, crack door 10cm, and let cheesecake cool inside for 1 hour; chill in fridge 6 hours before unmolding.'
    ],
    proTips: [
      'Beating on low speed prevents air bubbles that cause the cheesecake to puff up and crack upon cooling.',
      'Slow cooling inside the turned-off oven prevents thermal shock cracks.'
    ],
    isVegetarian: true,
    difficulty: 'Chef Special',
    servings: '12 slices',
    tags: ['Baking', 'Cheesecake', 'Dessert', 'New York Style', 'Gourmet']
  },
  {
    id: 'bak-08',
    title: 'Triple Chocolate Chunk Bakery Cookies',
    subtitle: 'Giant NYC-style cookies with crispy buttery edges and gooey molten puddle centers',
    category: 'baking',
    primaryFeature: 'convection_bake',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '185°C',
        time: '11 - 13 mins',
        mode: 'Dual Convection Mode',
        rackOrBasket: 'Center Wire Rack with Large Baking Sheet',
        accessory: 'Enamelled Baking Tray lined with parchment',
        specialNote: 'Bake 8 giant bakery cookies at once.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '180°C',
        time: '11 - 13 mins',
        mode: 'Convection Top/Bottom',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet with parchment',
        specialNote: 'Bake 6 cookies per batch.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '165°C',
        time: '8 - 10 mins',
        mode: 'Air Fry Bake',
        rackOrBasket: 'Crisper Basket with parchment circles',
        accessory: 'Crisper Drawer',
        specialNote: 'Bake 2 to 3 giant cookies at a time.'
      }
    },
    defaultCookTime: '12 mins',
    defaultPrepTime: '15 mins + 30 mins chill',
    defaultTemp: '185°C',
    defaultMode: 'Convection Bake',
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop&q=80',
    description: 'Colossal Levain-style cookies loaded with pools of dark chocolate, milk chocolate, and semi-sweet chunks. Convection airflow crisps the golden edges while keeping the tall center soft and melting.',
    ingredients: [
      '1 cup Cold Unsalted Butter cubed',
      '3/4 cup Brown Sugar + 1/2 cup White Sugar',
      '2 Large Eggs cold',
      '1.5 cups Cake Flour + 1.5 cups All-Purpose Flour (combination creates tender crumb)',
      '1 tsp Cornstarch & 3/4 tsp Baking Soda',
      '1/2 tsp Sea Salt',
      '1.5 cups Chopped Dark Chocolate & Milk Chocolate Bars (chunks melt into larger pools than chips!)',
      'Flaky Sea Salt for finishing'
    ],
    instructions: [
      'Cream cold cubed butter and sugars on medium speed for 3 minutes until combined but not overly fluffy.',
      'Add eggs one at a time.',
      'Stir in flours, cornstarch, baking soda, and salt until just combined.',
      'Fold in chocolate chunks. Divide dough into 100g giant balls (do not compress; keep surface rough and craggy).',
      'Freeze dough balls for 30 minutes.',
      'Place 6 balls on parchment-lined baking sheet in Morphy Richards OTG preheated to 185°C.',
      'Bake for 11 to 13 minutes until edges are golden and tops are matte but soft.',
      'Sprinkle flaky sea salt immediately upon removal; cool 15 minutes on sheet.'
    ],
    proTips: [
      'Chopping real chocolate bars instead of using factory chips creates molten pockets and chocolate ripples.',
      'Leaving dough ball tops rough and craggy creates gorgeous bakery peaks and valleys.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '8 giant cookies',
    tags: ['Baking', 'Cookies', 'Chocolate', 'Bakery', 'Comfort Food']
  }
];
