import { Recipe } from '../../types';

export const rotisserieRecipes: Recipe[] = [
  {
    id: 'rot-01',
    title: 'Classic Butter-Basted Whole Rotisserie Chicken',
    subtitle: 'Golden mahogany skin with juices continuously rolling around the bird',
    category: 'rotisserie',
    primaryFeature: 'rotisserie',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '210°C',
        time: '60 - 70 mins',
        mode: 'Rotisserie + Convection Dual Element',
        rackOrBasket: 'Center Rotisserie Spit Rod',
        accessory: 'Rotisserie Spit Rod & Forks + Drip Tray below',
        specialNote: 'Accommodates large 2.0kg to 2.5kg family roasters easily.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '200°C',
        time: '55 - 65 mins',
        mode: 'Rotisserie Function',
        rackOrBasket: 'Center Motorized Spit Rod',
        accessory: 'Spit Rod & Clamps + Enamelled Tray at bottom',
        specialNote: 'Best with whole chicken between 1.0kg and 1.3kg.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '190°C',
        time: '45 - 55 mins',
        mode: 'Air Fry Roast Vortex',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Drawer (Breast side down first 25 mins, then flip)',
        specialNote: 'Fits up to 1.3kg bird inside 5L basket.'
      }
    },
    defaultCookTime: '65 mins',
    defaultPrepTime: '20 mins',
    defaultTemp: '210°C',
    defaultMode: 'Rotisserie + Convection',
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=80',
    description: 'The definitive rotisserie experience. As the bird rotates 360° continuously in the oven, the melting butter and rendered chicken fat self-baste the meat every few seconds, sealing in incredible succulence.',
    ingredients: [
      '1 Whole Chicken (1.2kg - 1.8kg)',
      '4 tbsp Softened Butter',
      '1 tbsp Extra Virgin Olive Oil',
      '1 tbsp Fresh Chopped Rosemary',
      '1 tbsp Fresh Chopped Thyme',
      '4 Garlic Cloves minced',
      '1 Lemon halved',
      '1.5 tsp Sea Salt & 1 tsp Coarse Black Pepper'
    ],
    instructions: [
      'Pat the chicken completely dry inside and out with paper towels.',
      'Mix butter with herbs, garlic, salt, and pepper. Gently separate breast skin with fingers and rub butter directly onto the meat and over the skin.',
      'Stuff cavity with lemon halves and herb sprigs.',
      'Truss the bird tightly with butcher twine: tie wings close to breast and cross drumsticks.',
      'Push the rotisserie spit rod through the cavity; tighten both 4-prong forks securely so the bird turns as one piece without slipping.',
      'Insert spit rod into the drive socket inside the OTG. Place the drip tray on the lowest level.',
      'Set temperature to 200°C - 210°C and switch to Rotisserie Convection mode for 60 to 70 minutes until skin is deeply bronze and internal temp reaches 75°C.'
    ],
    proTips: [
      'Always truss the chicken tightly; loose wings will drop and hit the heating rods as the spit turns.',
      'Place quartered baby potatoes in the bottom drip tray so they roast in rich chicken drippings!'
    ],
    isVegetarian: false,
    difficulty: 'Medium',
    servings: '4 servings',
    tags: ['Rotisserie', 'Chicken', 'Roast', 'Sunday Roast', 'Gluten Free'],
    rotisserieTrussingGuide: 'Truss wings flat against breast and cross drumsticks with butcher twine'
  },
  {
    id: 'rot-02',
    title: 'Tandoori Whole Murgh on the Spit',
    subtitle: 'Fiery crimson yogurt & mustard oil marinade charred on the rotating spit',
    category: 'rotisserie',
    primaryFeature: 'rotisserie',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '220°C',
        time: '50 - 60 mins',
        mode: 'Rotisserie + Top/Bottom Grill Elements',
        rackOrBasket: 'Center Rotisserie Rod',
        accessory: 'Rotisserie Spit + Drip Tray',
        specialNote: 'Baste with melted ghee at 30 mins and 45 mins.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '215°C',
        time: '50 - 55 mins',
        mode: 'Rotisserie Convection',
        rackOrBasket: 'Center Rotisserie Shaft',
        accessory: 'Spit Rod & Prongs + Crumb Tray',
        specialNote: 'Ensure 1.1kg - 1.3kg bird size.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '200°C',
        time: '40 - 45 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Drawer',
        specialNote: 'Flip bird at 25 min mark.'
      }
    },
    defaultCookTime: '55 mins',
    defaultPrepTime: '25 mins + 4 hrs marination',
    defaultTemp: '220°C',
    defaultMode: 'Rotisserie + High Grill',
    imageUrl: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=800&auto=format&fit=crop&q=80',
    description: 'Brings authentic clay oven tandoori char to your kitchen. Whole chicken scored deeply, marinated in hung curd, Kashmiri deggi mirch, kasuri methi, and raw mustard oil, roasted continuously on the rotisserie spit.',
    ingredients: [
      '1 Whole Chicken (1.2kg, skinless, scored deeply)',
      '1 cup Hung Curd / Greek Yogurt',
      '2 tbsp Raw Mustard Oil',
      '2 tbsp Ginger-Garlic Paste',
      '2 tbsp Kashmiri Red Chili Powder (for natural vibrant red color)',
      '1 tbsp Garam Masala',
      '1 tbsp Kasuri Methi (crushed)',
      '1 tbsp Lemon Juice & 1.5 tsp Salt',
      'Melted Ghee for basting'
    ],
    instructions: [
      'Make deep incisions across breast and legs.',
      'First marinade: Rub chicken with lemon juice, 1 tbsp Kashmiri chili powder, and salt for 20 minutes.',
      'Second marinade: Whisk hung curd, mustard oil, ginger-garlic paste, garam masala, remaining chili powder, and kasuri methi.',
      'Coat chicken thoroughly, forcing marinade into incisions; marinate for at least 4 hours.',
      'Truss legs and wings, mount firmly onto the rotisserie spit rod with both clamps.',
      'Roast at 215°C - 220°C with Rotisserie function active for 50 to 55 minutes.',
      'Brush with melted ghee during the final 10 minutes for irresistible smoky glaze.'
    ],
    proTips: [
      'Raw mustard oil whisked with Kashmiri chili is the secret to rich restaurant color without artificial food dyes.',
      'Serve sprinkled with chaat masala and sliced pickled onions.'
    ],
    isVegetarian: false,
    difficulty: 'Chef Special',
    servings: '4 servings',
    tags: ['Rotisserie', 'Tandoori', 'Indian', 'Spicy', 'Smoky'],
    rotisserieTrussingGuide: 'Secure skinless legs firmly across spit with food-safe butcher string'
  },
  {
    id: 'rot-03',
    title: 'Charred Tandoori Paneer Tikka Skewer',
    subtitle: 'Thick marinated cottage cheese cubes, bell peppers & red onions rotating over glowing coils',
    category: 'rotisserie',
    primaryFeature: 'rotisserie',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '225°C',
        time: '18 - 22 mins',
        mode: 'Rotisserie Convection Mode',
        rackOrBasket: 'Center Rotisserie Rod',
        accessory: 'Rotisserie Spit Rod & Skewer Forks + Drip Tray',
        specialNote: 'Tightly clamp paneer between onion petals to prevent spinning.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '220°C',
        time: '16 - 20 mins',
        mode: 'Rotisserie Mode',
        rackOrBasket: 'Center Rotisserie Shaft',
        accessory: 'Spit Rod & Clamps',
        specialNote: 'Baste with melted butter at 12 mins.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '200°C',
        time: '12 - 14 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Basket on Metal Skewers',
        accessory: 'Skewer Grill Rack Insert',
        specialNote: 'Rotate skewers once at 7 mins.'
      }
    },
    defaultCookTime: '20 mins',
    defaultPrepTime: '20 mins + 30 mins marination',
    defaultTemp: '225°C',
    defaultMode: 'Rotisserie + Convection',
    imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&auto=format&fit=crop&q=80',
    description: 'Jumbo succulent paneer cubes marinated in spiced yogurt and roasted on the motorized spit rod. As the skewer turns, the edges char to smoky tandoori perfection while the interior stays meltingly tender.',
    ingredients: [
      '400g Fresh Malai Paneer (Cut into 1.5-inch thick cubes)',
      '1 Large Red Bell Pepper (Cut into 1.5-inch squares)',
      '1 Large Green Bell Pepper (Cut into squares)',
      '2 Red Onions (Cut into petals)',
      '3/4 cup Thick Hung Curd',
      '1.5 tbsp Roasted Besan (Gram Flour)',
      '1 tbsp Mustard Oil',
      '1 tbsp Ginger-Garlic Paste',
      '1 tsp Ajwain (Carom Seeds)',
      '1 tbsp Kashmiri Chili Powder & 1 tsp Garam Masala',
      'Chaat Masala and melted butter for finishing'
    ],
    instructions: [
      'In a wide bowl, mix mustard oil, roasted besan, hung curd, ginger-garlic paste, ajwain, chili, and salt.',
      'Gently fold in paneer cubes, peppers, and onion petals; coat delicately without breaking paneer.',
      'Thread alternatively onto the rotisserie spit rod: onion petal, pepper, paneer, pepper, onion.',
      'Tighten the rotisserie forks firmly on both ends to compress the ingredients so they turn together with the rod.',
      'Mount onto the rotisserie drive in the preheated OTG at 225°C.',
      'Roast for 18 to 22 minutes until edges are blistered and charred.',
      'Brush with melted butter and dust generously with chaat masala before sliding off.'
    ],
    proTips: [
      'Roasted besan is the binding agent that keeps the spicy yogurt crust glued to the paneer as it spins.',
      'Always use dense malai paneer so it stays firm on the rotisserie rod.'
    ],
    isVegetarian: true,
    difficulty: 'Medium',
    servings: '4 tikka servings',
    tags: ['Rotisserie', 'Paneer', 'Tandoori', 'Vegetarian', 'Party Starter'],
    rotisserieTrussingGuide: 'Anchor both ends with thick onion bulbs clamped by the 4-prong forks'
  },
  {
    id: 'rot-04',
    title: 'Spit-Roasted Honey-Chili Glazed Pineapple',
    subtitle: 'Whole caramelized pineapple cylinder infused with cinnamon, honey & smoky chili',
    category: 'rotisserie',
    primaryFeature: 'rotisserie',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '200°C',
        time: '35 - 45 mins',
        mode: 'Rotisserie + Top Heating Element',
        rackOrBasket: 'Center Rotisserie Spit',
        accessory: 'Rotisserie Spit Rod & Forks + Drip Tray',
        specialNote: 'Drip tray catches bubbling caramel honey.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '195°C',
        time: '30 - 40 mins',
        mode: 'Rotisserie Function',
        rackOrBasket: 'Center Spit Shaft',
        accessory: 'Spit Rod & Clamps + Enamelled Tray',
        specialNote: 'Trim pineapple ends to fit cavity width.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '190°C',
        time: '20 - 25 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Basket (Cut into wedges)',
        accessory: 'Crisper Drawer with parchment',
        specialNote: 'Air fry pineapple spears with same glaze.'
      }
    },
    defaultCookTime: '40 mins',
    defaultPrepTime: '15 mins',
    defaultTemp: '200°C',
    defaultMode: 'Rotisserie + Grill',
    imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&auto=format&fit=crop&q=80',
    description: 'Inspired by Brazilian churrascaria steakhouse roasts. A whole peeled pineapple is speared on the rotisserie rod and basted with spiced honey-cinnamon syrup as it spins, creating a sticky, bubbling caramelized crust.',
    ingredients: [
      '1 Whole Ripe Golden Pineapple (Top, bottom and rind carved off)',
      '3 tbsp Pure Honey or Brown Sugar',
      '2 tbsp Melted Butter',
      '1 tsp Ground Cinnamon',
      '1/2 tsp Kashmiri Chili Powder or Smoked Paprika',
      '1 pinch Flaky Sea Salt'
    ],
    instructions: [
      'Carve eyes out of the peeled pineapple in diagonal spirals.',
      'Mix honey, melted butter, cinnamon, chili powder, and sea salt into a warm glaze.',
      'Push the spit rod lengthwise through the center core of the pineapple; secure prongs tightly.',
      'Mount onto the rotisserie drive inside the OTG with drip tray underneath.',
      'Roast at 200°C with rotisserie rotation for 35 to 45 minutes.',
      'Brush with honey glaze every 10 minutes as it spins until bubbling and deeply bronzed.',
      'Carve warm translucent slices directly off the spit onto dessert plates.'
    ],
    proTips: [
      'The pineapple core is sturdy and provides the perfect natural anchor for the spit rod.',
      'Serve warm slices with a scoop of vanilla bean ice cream or coconut sorbet.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '6 dessert servings',
    tags: ['Rotisserie', 'Pineapple', 'Dessert', 'Caramelized', 'Gluten Free'],
    rotisserieTrussingGuide: 'Spear through natural tough center core; lock forks into top and base'
  },
  {
    id: 'rot-05',
    title: 'Persian Joojeh Kebab Saffron Chicken Skewers',
    subtitle: 'Golden saffron-infused yogurt chicken skewers roasted over glowing elements',
    category: 'rotisserie',
    primaryFeature: 'rotisserie',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '220°C',
        time: '22 - 26 mins',
        mode: 'Rotisserie + Convection',
        rackOrBasket: 'Center Rotisserie Spit',
        accessory: 'Rotisserie Spit Rod & Forks',
        specialNote: 'Baste with melted saffron butter at 15 mins.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '215°C',
        time: '20 - 24 mins',
        mode: 'Rotisserie Mode',
        rackOrBasket: 'Center Shaft',
        accessory: 'Spit Rod & Clamps',
        specialNote: 'Ensure meat is balanced symmetrically.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '200°C',
        time: '14 - 16 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Plate on metal skewers',
        specialNote: 'Turn skewers once halfway.'
      }
    },
    defaultCookTime: '24 mins',
    defaultPrepTime: '20 mins + 2 hrs marination',
    defaultTemp: '220°C',
    defaultMode: 'Rotisserie Convection',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
    description: 'Tender chicken marinated in blooming Persian saffron, lemon juice, grated onion, and thick yogurt, roasted on the rotating spit until glowing golden-orange with charred tips.',
    ingredients: [
      '600g Boneless Chicken Thighs (cut into 2-inch chunks)',
      '1/2 tsp Saffron Threads bloomed in 3 tbsp warm water',
      '1/2 cup Greek Yogurt',
      '1 Large Yellow Onion grated and juice extracted',
      '3 tbsp Fresh Lemon Juice',
      '2 tbsp Olive Oil',
      '1.5 tsp Salt & 1/2 tsp Black Pepper',
      '3 tbsp Melted Butter with saffron for basting'
    ],
    instructions: [
      'Combine bloomed saffron water, yogurt, onion juice, lemon juice, olive oil, and salt.',
      'Toss chicken chunks and marinate for at least 2 hours.',
      'Thread chicken chunks onto the rotisserie spit rod, packing them closely.',
      'Secure tightly with rotisserie prong clamps.',
      'Roast at 220°C with rotisserie rotation for 22 to 26 minutes.',
      'Baste with warm saffron butter during the last 5 minutes.',
      'Slide onto warm basmati rice and lavash flatbread.'
    ],
    proTips: [
      'Grated onion juice tenderizes chicken naturally without leaving burnt raw onion bits.',
      'Saffron aroma blossoms exponentially as it heats under the radiant coils.'
    ],
    isVegetarian: false,
    difficulty: 'Medium',
    servings: '4 servings',
    tags: ['Rotisserie', 'Persian', 'Saffron', 'Kebab', 'Gourmet'],
    rotisserieTrussingGuide: 'Thread chunks tightly along spit rod, locked with end clamps'
  },
  {
    id: 'rot-06',
    title: 'Tandoori Soya Chaap Spit Roast',
    subtitle: 'Juicy soybean protein rolls layered with spicy mustard curd and charred on the spit',
    category: 'rotisserie',
    primaryFeature: 'rotisserie',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '220°C',
        time: '20 - 25 mins',
        mode: 'Rotisserie + Convection Grill',
        rackOrBasket: 'Center Rotisserie Rod',
        accessory: 'Rotisserie Spit + Drip Tray',
        specialNote: 'Pierce chaap sticks securely with spit.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '215°C',
        time: '18 - 22 mins',
        mode: 'Rotisserie Mode',
        rackOrBasket: 'Center Shaft',
        accessory: 'Spit Rod & Clamps',
        specialNote: 'Baste with butter at 12 mins.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '200°C',
        time: '12 - 15 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Drawer',
        specialNote: 'Cut chaap into rings or air fry on mini skewers.'
      }
    },
    defaultCookTime: '22 mins',
    defaultPrepTime: '20 mins + 1 hr marination',
    defaultTemp: '220°C',
    defaultMode: 'Rotisserie + High Grill',
    imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&auto=format&fit=crop&q=80',
    description: 'A vegetarian culinary masterclass. Soy protein chaap marinated in rich spiced yogurt and mustard oil, rotated continuously on the rotisserie rod until deeply charred, then tossed in spiced butter and cream.',
    ingredients: [
      '6 Fresh Soya Chaap Sticks (wooden sticks removed)',
      '3/4 cup Hung Curd',
      '2 tbsp Mustard Oil',
      '1.5 tbsp Ginger-Garlic Paste',
      '1 tbsp Kashmiri Chili Powder',
      '1 tsp Garam Masala',
      '1 tsp Chaat Masala & 1 tbsp Kasuri Methi',
      'Melted Butter and Fresh Cream for finishing'
    ],
    instructions: [
      'Boil soya chaap in salted water for 5 minutes, rinse in cold water, and drain completely.',
      'Make light cuts along the spiral layers so marinade penetrates deep inside.',
      'Mix hung curd with mustard oil, ginger-garlic paste, and spices.',
      'Coat chaap thoroughly; marinate for 1 hour.',
      'Thread onto the rotisserie spit rod like a column and tighten the end forks.',
      'Roast at 220°C for 20 to 25 minutes until blistering and dark red.',
      'Remove, cut into bite-sized discs, and toss in melted butter, cream, and chaat masala.'
    ],
    proTips: [
      'Boiling the chaap first opens up its spiral layers so spices seep into every fold.',
      'Tossing hot roasted chaap in melted butter and cream creates Delhi dhaba street magic.'
    ],
    isVegetarian: true,
    difficulty: 'Medium',
    servings: '4 servings',
    tags: ['Rotisserie', 'Soya Chaap', 'Vegetarian', 'Tandoori', 'High Protein'],
    rotisserieTrussingGuide: 'Mount chaap lengthwise along spit rod, locked securely by both forks'
  },
  {
    id: 'rot-07',
    title: 'Spit-Roasted Greek Souvlaki Lemon Herb Chicken Skewers',
    subtitle: 'Marinated in wild oregano, lemon zest, garlic & olive oil with charred crust',
    category: 'rotisserie',
    primaryFeature: 'rotisserie',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '215°C',
        time: '25 - 30 mins',
        mode: 'Rotisserie + Convection',
        rackOrBasket: 'Center Rotisserie Spit',
        accessory: 'Rotisserie Spit Rod & Forks',
        specialNote: 'Drip tray underneath catches savory olive oil drippings.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '210°C',
        time: '22 - 26 mins',
        mode: 'Rotisserie Mode',
        rackOrBasket: 'Center Shaft',
        accessory: 'Spit Rod & Clamps',
        specialNote: 'Baste with lemon herb oil.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '200°C',
        time: '14 - 18 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Drawer on bamboo skewers',
        specialNote: 'Flip skewers halfway.'
      }
    },
    defaultCookTime: '26 mins',
    defaultPrepTime: '20 mins',
    defaultTemp: '215°C',
    defaultMode: 'Rotisserie Convection',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
    description: 'Juicy cubes of chicken breast or boneless thigh marinated with Greek oregano, garlic, red wine vinegar, and extra virgin olive oil, slow-roasted on the motorized spit.',
    ingredients: [
      '600g Boneless Chicken Breast or Thighs (Cut into 1.5-inch cubes)',
      '1/4 cup Extra Virgin Olive Oil',
      '2 tbsp Fresh Lemon Juice + 1 tbsp Red Wine Vinegar',
      '4 Garlic Cloves minced',
      '1.5 tbsp Dried Greek Oregano',
      '1 tsp Sea Salt & 1/2 tsp Black Pepper',
      'Warm Pita bread and Tzatziki sauce for serving'
    ],
    instructions: [
      'Whisk olive oil, lemon juice, vinegar, garlic, oregano, salt, and pepper.',
      'Coat meat cubes and marinate for 1 to 2 hours.',
      'Thread cubes onto the rotisserie spit rod, compressing gently together.',
      'Clamp tightly with both rotisserie forks.',
      'Roast at 215°C with rotisserie rotation for 24 to 28 minutes until browned with crisp edges.',
      'Slice directly into warm pita bread with shredded lettuce, tomatoes, and cold tzatziki.'
    ],
    proTips: [
      'Packing the cubes closely together prevents them from drying out during rotation.',
      'Greek oregano dried on the branch has far superior aromatics to standard supermarket oregano.'
    ],
    isVegetarian: false,
    difficulty: 'Medium',
    servings: '4 souvlaki wraps',
    tags: ['Rotisserie', 'Greek', 'Souvlaki', 'Mediterranean', 'Wrap'],
    rotisserieTrussingGuide: 'Compress cubes together along rod so outer crust chars while centers remain succulent'
  },
  {
    id: 'rot-08',
    title: 'Rotisserie Sweet Corn on the Cob (Spit Bhutta)',
    subtitle: 'Motorized rotisserie charred street-style corn cobs basted with chili-lime butter',
    category: 'rotisserie',
    primaryFeature: 'rotisserie',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '220°C',
        time: '18 - 22 mins',
        mode: 'Rotisserie + Top Grill Element',
        rackOrBasket: 'Center Rotisserie Rod',
        accessory: 'Rotisserie Spit Rod & Forks + Drip Tray',
        specialNote: 'Spear 2 corn cobs end-to-end on the spit.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '215°C',
        time: '16 - 20 mins',
        mode: 'Rotisserie Function',
        rackOrBasket: 'Center Shaft',
        accessory: 'Spit Rod & Clamps',
        specialNote: 'Spear 1 large or 2 trimmed cobs.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '200°C',
        time: '12 - 15 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Drawer',
        specialNote: 'Turn cobs every 4 minutes.'
      }
    },
    defaultCookTime: '20 mins',
    defaultPrepTime: '5 mins',
    defaultTemp: '220°C',
    defaultMode: 'Rotisserie + High Grill',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&auto=format&fit=crop&q=80',
    description: 'An ingenious way to make street-style bhutta at home without coal stoves. Spearing corn cobs right onto the motorized rotisserie spit rod guarantees 100% even charring on all sides.',
    ingredients: [
      '2 Whole Fresh Sweet Corn Cobs (Husked & silk removed)',
      '2 tbsp Salted Butter melted',
      '1 tsp Chaat Masala',
      '1/2 tsp Kashmiri Chili Powder',
      '1 Juicy Lime cut into halves'
    ],
    instructions: [
      'Push the hexagonal spit rod directly through the central pith of the corn cobs.',
      'Lock in place firmly with the two end fork clamps.',
      'Mount onto the rotisserie drive inside the preheated OTG at 220°C.',
      'Roast for 18 to 22 minutes as the cobs rotate continuously under the glowing heating rods.',
      'Kernels will begin to pop and develop gorgeous golden-charred specks.',
      'Extract with the rotisserie handle and rub immediately with lime halves dipped in chili butter and chaat masala.'
    ],
    proTips: [
      'The central cob core grips the spit rod firmly so it never wobbles.',
      'Listening for light popping sounds is the sign that the sweet corn sugars are caramelizing.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '2 corn cobs',
    tags: ['Rotisserie', 'Corn', 'Bhutta', 'Street Food', 'Vegetarian'],
    rotisserieTrussingGuide: 'Spear directly through center pith; fork prongs hold outer ends securely'
  }
];
