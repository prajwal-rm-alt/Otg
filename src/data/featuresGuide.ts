import { FeatureGuide } from '../types';

export const FEATURES_GUIDE: FeatureGuide[] = [
  {
    id: 'dehydrate',
    title: 'Dehydrate Function',
    badge: '45°C - 75°C Low-Heat Moisture Extraction',
    tagline: 'Preserve natural enzymes, colors, and crunch by slowly removing 80-95% water content.',
    explanation: 'Dehydrating is NOT baking. While baking cooks foods at 160°C - 220°C, dehydrating utilizes low, continuous gentle heat (45°C - 75°C) paired with steady convection airflow. This slowly evaporates water molecules without denaturing vital vitamins, caramelizing sugars, or burning delicate fruit rings.',
    scienceBehind: 'By circulating dry warm air continuously over thin slices, moisture is drawn out through capillary action. Bacteria, yeast, and molds cannot survive without free water (water activity aw < 0.6), transforming fresh produce into shelf-stable, nutrient-dense pantry gold.',
    supportedAppliances: ['mr60_rcss', 'airfryer_5l'],
    visualMeaning: {
      heading: 'What Dehydrating Looks Like & What Foods Work Best',
      description: 'As seen in professional dehydrating guides, dehydrated food results in vibrant, papery-crisp or delightfully chewy concentric slices: translucent citrus wheels, ruby strawberry crisps, chewy mango strips, apple rings with star centers, and crunchy tomato rounds.',
      keyFoods: [
        'Apple & Pear Rings: Sliced 3-4mm thin, soaked lightly in lemon water to stop browning, dried to pliable crisp.',
        'Citrus Wheels (Orange, Lemon, Blood Orange): Dried at 55°C for 6-8 hours until brittle glass-like rounds. Perfect for artisan teas and garnish.',
        'Banana & Plantain Chips: Sliced 4mm, dried until golden and chewy-crisp without frying oil.',
        'Kiwi & Strawberry Crisps: Vibrant translucent medallions with concentrated natural sweetness and jewel-like seeds.',
        'Sun-Dried Heirloom Tomatoes: Halved cherry or sliced plum tomatoes, seasoned with sea salt & oregano, dried until leathery.',
        'Zucchini, Carrot & Beet Root Ribbons: Guilt-free vegetable crisps retaining vivid anthocyanins and carotene pigments.',
        'Shiitake & Button Mushroom Jerky: Marinated in soy sauce, smoked paprika, and maple syrup, dried until deeply savory and chewy.'
      ],
      tips: [
        'Slice uniformly (3mm - 5mm) using a mandoline for identical drying rates.',
        'In the 60L RCSS OTG, utilize all 3-4 wire racks with parchment paper for maximum yield.',
        'In the 5L Air Fryer, select the Dehydrate preset (55°C) and avoid stacking slices directly atop one another.',
        'Store fully cooled dehydrated items in airtight glass mason jars with moisture-absorbing packets for 6-12 months shelf life.'
      ],
      dosAndDonts: [
        {
          do: 'Do arrange slices in a single layer with at least 5mm air gaps between them.',
          dont: 'Do not raise temperature above 75°C to "speed it up" — this causes "case hardening" where the outside crust seals while the interior remains moist and rots.'
        },
        {
          do: 'Do test for doneness by letting a test slice cool to room temperature before judging crunch.',
          dont: 'Do not store while still warm from the oven; residual steam will cause instant condensation and spoilage.'
        }
      ]
    },
    recommendedTemps: [
      { item: 'Fresh Herbs & Flowers', temp: '40°C - 45°C', time: '2 - 4 hrs', note: 'Fragile aromatic oils break down above 50°C' },
      { item: 'Berries & Strawberries', temp: '55°C', time: '6 - 8 hrs', note: 'Slice 4mm thin for uniform drying' },
      { item: 'Apples, Pears, Bananas', temp: '55°C - 60°C', time: '6 - 9 hrs', note: 'Dry until leathery or snap-crisp' },
      { item: 'Citrus Wheels (Oranges, Lemons)', temp: '55°C - 60°C', time: '8 - 10 hrs', note: 'Brilliant translucent cocktail & tea garnishes' },
      { item: 'Tomatoes & Peppers', temp: '60°C', time: '7 - 10 hrs', note: 'Halved cherry or 5mm rounds' },
      { item: 'Dehydrated Chicken Jerky / Soy Protein', temp: '70°C', time: '5 - 7 hrs', note: 'Requires 70°C for food safety sterilization' }
    ],
    visualGallery: [
      {
        title: 'Artisan Citrus & Fruit Dehydration Bowls',
        caption: 'Dehydrated orange wheels, kiwi medallions, golden pineapple rings, and strawberry crisps ready for healthy snacking and tea infusion.',
        imageUrl: 'https://images.unsplash.com/photo-1596797882870-8c33deeac224?w=800&auto=format&fit=crop&q=80',
        category: 'Dehydrate Fruit Reference'
      },
      {
        title: 'Sun-Drying Vegetable Ribbons & Apples',
        caption: 'Neat rows of apple rings, dehydrated zucchini crisps, carrot strips, and slow-dried heirloom tomatoes on clean prep surfaces.',
        imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
        category: 'Dehydrate Veggie Reference'
      },
      {
        title: 'Shiitake & Mushroom Umami Jerky',
        caption: 'Mushroom caps dehydrated with smoky garlic and soy glaze, producing concentrated, intensely savory jerky snacks.',
        imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
        category: 'Dehydrate Jerky Reference'
      }
    ]
  },
  {
    id: 'defrost',
    title: 'Defrost Function',
    badge: '30°C - 50°C Controlled Gentle Thawing',
    tagline: 'Safely thaw frozen poultry, meat, vegetables, and meal-prep tubs without hot spots or rubbery edges.',
    explanation: 'Defrosting in an OTG or Air Fryer uses low-temperature convection circulation (30°C - 50°C) with no intense direct radiation. Unlike microwaves — which create localized boiling pockets and rubbery cooked edges while the center remains ice-cold — gentle fan thawing warms food uniformly.',
    scienceBehind: 'Water expands when freezing, forming microscopic ice crystals. Rapid microwave defrosting ruptures cellular membranes, purging cellular juices (drip loss) and leaving dry meat. Controlled convective defrosting lets ice crystals melt gently so cells reabsorb moisture, keeping proteins succulent.',
    supportedAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    visualMeaning: {
      heading: 'What Defrosting Looks Like & Meal Prep Management',
      description: 'As demonstrated in frozen meal-prep guides, defrosting handles everything from frozen chicken drumsticks, whole chicken cuts, and breast fillets to pre-portioned glass meal-prep boxes filled with frozen broccoli florets, bell pepper strips, green peas, berries, and frozen dumplings.',
      keyFoods: [
        'Whole Frozen Chicken & Poultry Roasts: Safely thaws thick breast & bone-in joints before transferring directly to rotisserie roasting.',
        'Frozen Meal Prep Containers: Glass containers with frozen diced bell peppers, broccoli, carrots, and sweet corn thawed ready for stir-fries.',
        'Frozen Chicken Portions: Chicken cutlets, drumsticks, and tenders brought to room temp for even seasoning marinade penetration.',
        'Frozen Dumplings, Samosas & Dim Sum: Thawed gently so outer wrappers do not crack when subsequently air-fried or baked.',
        'Frozen Berries & Purees: Raspberries, blackberries, and blueberries thawed without turning to mushy liquid.'
      ],
      tips: [
        'Always place frozen meats on a wire rack over a drip tray to prevent meat from sitting in thawed condensation.',
        'For 60L RCSS OTG, select Defrost mode (35°C-45°C) with convection fan active for 20-35 mins depending on weight.',
        'For 5L Air Fryer, use Express Defrost at 50°C for 6-12 mins, gently shaking the basket halfway.',
        'Cook or marinate thawed food immediately once defrosted; never re-freeze thawed raw proteins.'
      ],
      dosAndDonts: [
        {
          do: 'Do place meats on the wire rack so air reaches both top and underside.',
          dont: 'Do not leave foods defrosting at high temperatures above 60°C where bacterial growth accelerates.'
        },
        {
          do: 'Do pat defrosted meats completely dry with paper towels before roasting for maximum crispy skin.',
          dont: 'Do not defrost sealed airtight plastic bags in the oven; transfer food to an oven-safe dish or baking sheet.'
        }
      ]
    },
    recommendedTemps: [
      { item: 'Chicken Breast / Chicken Fillets (500g)', temp: '40°C', time: '12 - 18 mins', note: 'Check firmness at 12 min mark' },
      { item: 'Whole Chicken (1.2kg - 1.8kg)', temp: '45°C', time: '35 - 50 mins', note: 'Rotate bird once halfway through' },
      { item: 'Frozen Peas, Corn, Mixed Veggies', temp: '45°C', time: '8 - 12 mins', note: 'Shake once to separate frozen clusters' },
      { item: 'Frozen Dim Sum, Dumplings, Nuggets', temp: '50°C', time: '6 - 10 mins', note: 'Can transition straight to Air Fry crisping' },
      { item: 'Frozen Berries for Desserts', temp: '35°C', time: '8 - 14 mins', note: 'Keeps berry structure plump & intact' }
    ],
    visualGallery: [
      {
        title: 'Frozen Meal Prep & Freshly Thawed Cuts',
        caption: 'Frozen chicken drumsticks, breast fillets, and glass storage tubs of frozen mixed bell peppers, broccoli, and garden peas ready for thawing.',
        imageUrl: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&auto=format&fit=crop&q=80',
        category: 'Defrost Meat Reference'
      },
      {
        title: 'Fresh Frozen Garden Vegetables & Berries',
        caption: 'Frozen broccoli, baby peas, and sweet corn thawing gently in preparatory trays, preserving crisp cellular crunch and vivid emerald color.',
        imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
        category: 'Defrost Veggies Reference'
      },
      {
        title: 'Frozen Dumplings & Dim Sum Preparation',
        caption: 'Handcrafted dumplings thawed evenly without weeping moisture, priming wrappers for golden air-frying or crisp pan searing.',
        imageUrl: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&auto=format&fit=crop&q=80',
        category: 'Defrost Dumpling Reference'
      }
    ]
  },
  {
    id: 'rotisserie',
    title: 'Motorized Rotisserie',
    badge: '360° Continuous Spit Roasting',
    tagline: 'Self-basting rotating spit ensures deeply caramelized skin and incomparable internal succulence.',
    explanation: 'The motorized rotisserie rod suspends poultry or paneer/veg skewers right in the center of the cavity. As the spit turns at 3 to 4 RPM, melting surface fats and juices roll continuously around the food rather than dripping away, basting the meat in its own golden flavor.',
    scienceBehind: 'Static roasting causes bottom sogginess and uneven hot spots. 360° mechanical rotation ensures every square millimeter of surface encounters radiant heat at regular intervals, triggering the Maillard reaction uniformly while keeping the internal moisture trapped.',
    supportedAppliances: ['mr60_rcss', 'mr29_otg'],
    visualMeaning: {
      heading: 'How Rotisserie Works & Trussing Setup',
      description: 'The rotisserie assembly features a heavy-duty hexagonal spit rod with two 4-prong adjustable skewer clamps and an extraction handle. Trussing whole birds with butcher twine secures wings and drumsticks so the food spins smoothly without catching on heating elements.',
      keyFoods: [
        'Classic Whole Rotisserie Chicken: Herb-butter rubbed bird with golden crisp skin and ultra-juicy drumsticks.',
        'Paneer & Vegetable Tikka Skewers: Giant marinated paneer cubes, capsicum, and onions rotating over a drip tray.',
        'Rotisserie Tandoori Stuffed Whole Chicken: Marinated overnight in yogurt, ginger-garlic, and garam masala for 60L RCSS.',
        'Spit-Roasted Sweet Corn / Bhutta: Butter-brushed corn on the cob charred evenly on all sides.',
        'Tandoori Pineapple & Fruit Skewers: Caramelized honey-cinnamon glazed pineapple cylinders.'
      ],
      tips: [
        'Always balance the food symmetrically on the spit rod; an off-balance load strains the rotisserie motor.',
        'Always place the enameled baking tray on the bottom rack beneath the rotisserie to catch all drippings and protect the lower elements.',
        'In the 29L OTG, ideal bird weight is 1.0kg to 1.3kg. In the 60L RCSS, you can easily roast up to 2.5kg birds or large roasts.',
        'Use the supplied Rotisserie Tong to extract the scalding rod safely without burning your hands.'
      ],
      dosAndDonts: [
        {
          do: 'Do truss chicken wings and legs tightly with butcher twine so they do not hit heating rods.',
          dont: 'Do not overload the spit rod beyond the recommended weight rating (2.5kg for 60L, 1.5kg for 29L).'
        }
      ]
    },
    recommendedTemps: [
      { item: 'Whole Chicken (1.2kg)', temp: '200°C - 220°C', time: '55 - 65 mins', note: 'Internal temp 75°C at thickest thigh' },
      { item: 'Paneer Tikka Jumbo Skewer', temp: '220°C', time: '18 - 22 mins', note: 'Baste with melted ghee at 12 mins' },
      { item: 'Grand Rotisserie Stuffed Chicken (60L)', temp: '195°C', time: '65 - 75 mins', note: 'Rest 10 mins before carving' },
      { item: 'Spiced Corn Cobs', temp: '210°C', time: '15 - 20 mins', note: 'Brush with lemon-chili butter' }
    ],
    visualGallery: [
      {
        title: 'Golden Whole Rotisserie Roast Chicken',
        caption: 'Crisp mahogany herb-rubbed skin with natural self-basting juices circulating continuously on the center spit.',
        imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=80',
        category: 'Rotisserie Poultry Reference'
      },
      {
        title: 'Charred Paneer Tikka Skewer',
        caption: 'Soft spiced cottage cheese cubes with blistered bell peppers and onions rotating to smoky tandoori perfection.',
        imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&auto=format&fit=crop&q=80',
        category: 'Rotisserie Tikka Reference'
      }
    ]
  },
  {
    id: 'airfry',
    title: 'Air Fryer Rapid Vortex',
    badge: '360° Cyclonic Superheated Air',
    tagline: 'Delivers the shatteringly crisp crunch of deep-frying with up to 90% less oil.',
    explanation: 'A heavy-duty top heating element radiates intense heat while a high-velocity turbofan creates a 360-degree whirlwind cyclone in the 5L chamber. As air whips down and passes through the perforated crisper plate, food is enveloped completely in superheated dry air.',
    scienceBehind: 'The high airspeed strips moisture from the surface instantly, causing rapid dehydration of the outer skin and speeding up the Maillard reaction. This produces a glass-like crisp crust while sealing steam inside for moist interior texture.',
    supportedAppliances: ['airfryer_5l'],
    visualMeaning: {
      heading: 'Crisping Secrets & Basket Aerodynamics',
      description: 'The perforated crisper plate elevates food off the drawer base, allowing excess oils to drip away while cyclonic air circulates freely under the bottom. Shaking the basket halfway through redistributes food surfaces for 100% uniform browning.',
      keyFoods: [
        'Golden French Fries & Sweet Potato Wedges: Restaurant-grade crunch with just 1 teaspoon of oil.',
        'Crispy Peri Peri Chicken Wings: Blistered, snapping skin and succulent meat without heavy batter frying.',
        'Punjabi Samosas & Vegetable Spring Rolls: Flaky golden pastry jackets without deep-fry grease.',
        'Spiced Roasted Chickpeas & Edamame: High-protein crunchy snacks seasoned with chaat masala.',
        'Crispy Cauliflower & Broccoli Bites: Caramelized roasted florets packed with smoky flavor.'
      ],
      tips: [
        'Do not overcrowd the basket. Food needs airflow gaps to crisp instead of steaming.',
        'Always shake the basket or flip proteins halfway through the cooking cycle.',
        'A light spritz of oil with a pump spray produces 3x better crispiness than dry air frying.'
      ],
      dosAndDonts: [
        {
          do: 'Do preheat for 3 minutes for maximum sizzle when food touches the crisper plate.',
          dont: 'Do not use aerosol cooking sprays with propellants that can deteriorate non-stick coatings; use pure oil pump spray.'
        }
      ]
    },
    recommendedTemps: [
      { item: 'Hand-cut French Fries', temp: '190°C', time: '16 - 20 mins', note: 'Shake basket every 5 minutes' },
      { item: 'Chicken Wings (Crispy)', temp: '200°C', time: '18 - 22 mins', note: 'Pat skin completely dry before tossing' },
      { item: 'Frozen Samosas / Nuggets', temp: '180°C', time: '12 - 15 mins', note: 'No thawing needed; cook straight from frozen' },
      { item: 'Crispy Falafel Balls', temp: '190°C', time: '14 - 16 mins', note: 'Light spray with olive oil' }
    ],
    visualGallery: [
      {
        title: 'Golden Crispy French Fries',
        caption: 'Shatteringly crisp hand-cut fries tossed with flaky sea salt and fresh rosemary, cooked with under 1 tsp oil.',
        imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=80',
        category: 'Air Fry Fries Reference'
      },
      {
        title: 'Crispy Samosas & Savory Pastries',
        caption: 'Golden-brown samosas with delicate blistered crusts, perfectly crisped using the high-velocity air vortex.',
        imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
        category: 'Air Fry Snack Reference'
      }
    ]
  }
];
