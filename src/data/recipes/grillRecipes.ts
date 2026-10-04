import { Recipe } from '../../types';

export const grillRecipes: Recipe[] = [
  {
    id: 'grl-01',
    title: 'Smoky Tandoori Chicken Tikka Sizzler',
    subtitle: 'Succulent boneless chicken chunks charred with crimson spices on a smoking sizzler plate',
    category: 'grill_tandoori',
    primaryFeature: 'grill',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '230°C',
        time: '15 - 18 mins',
        mode: 'Top Element High Grill + Convection',
        rackOrBasket: 'Upper Wire Rack with Baking Tray below',
        accessory: 'Wire Rack with skewers',
        specialNote: 'Broil close to top elements for authentic tandoori char.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '225°C',
        time: '14 - 17 mins',
        mode: 'Grill Mode (Top Element Active)',
        rackOrBasket: 'Top Wire Shelf',
        accessory: 'Baking Sheet lined with foil',
        specialNote: 'Baste with melted butter at 10 mins.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '200°C',
        time: '10 - 12 mins',
        mode: 'Air Fry Vortex High',
        rackOrBasket: 'Crisper Plate on metal skewers',
        accessory: 'Crisper Drawer with light oil spray',
        specialNote: 'Shake or turn at 6 min mark.'
      }
    },
    defaultCookTime: '16 mins',
    defaultPrepTime: '20 mins + 2 hrs marination',
    defaultTemp: '230°C',
    defaultMode: 'Top Element High Grill',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80',
    description: 'Bite-sized chicken thigh chunks marinated in double layers of yogurt, raw mustard oil, Kashmiri deggi mirch, kasuri methi, and black salt, grilled under glowing top quartz elements until deeply charred with succulent centers.',
    ingredients: [
      '500g Boneless Chicken Thighs cut into 1.5-inch chunks',
      '1/2 cup Hung Greek Curd',
      '1.5 tbsp Mustard Oil',
      '1.5 tbsp Ginger-Garlic Paste',
      '1.5 tbsp Kashmiri Red Chili Powder',
      '1 tsp Garam Masala & 1 tsp Kasuri Methi',
      '1 tbsp Lemon Juice & 1 tsp Salt',
      '2 tbsp Melted Butter for basting',
      'Sizzler plate with sliced cabbage, onions & capsicum'
    ],
    instructions: [
      'Toss chicken with lemon juice, salt, and 1 tsp chili powder; rest 15 minutes.',
      'Whisk hung curd, mustard oil, ginger-garlic, remaining chili, garam masala, and crushed kasuri methi.',
      'Marinate chicken chunks for at least 2 hours.',
      'Thread onto metal skewers with pieces touching gently.',
      'Preheat Morphy Richards OTG to 230°C on Grill / Broil mode.',
      'Place skewers on upper wire rack over a foil-lined baking sheet.',
      'Grill for 14 to 17 minutes, turning once and brushing with melted butter, until edges are charred black in spots.',
      'Transfer to a hot cast-iron sizzler plate over a bed of shredded cabbage and capsicum with a knob of butter.'
    ],
    proTips: [
      'Chicken thighs remain moist under intense broiler heat where chicken breasts would dry out.',
      'Basting with butter while the meat is sizzling seals in the juices.'
    ],
    isVegetarian: false,
    difficulty: 'Medium',
    servings: '3 servings',
    tags: ['Grill', 'Tandoori', 'Chicken Tikka', 'Sizzler', 'Party Starter']
  },
  {
    id: 'grl-02',
    title: 'Tandoori Malai Broccoli & Cauliflower Tikka',
    subtitle: 'Creamy cashew-cheese marinated florets grilled until charred, nutty, and meltingly tender',
    category: 'grill_tandoori',
    primaryFeature: 'grill',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '220°C',
        time: '14 - 16 mins',
        mode: 'Convection Grill (Top Element + Fan)',
        rackOrBasket: 'Upper Wire Rack with Baking Sheet',
        accessory: 'Wire Rack + Baking Tray with foil',
        specialNote: 'Blanch broccoli for exactly 90 seconds before marinating.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '215°C',
        time: '12 - 15 mins',
        mode: 'Grill Mode',
        rackOrBasket: 'Top Wire Shelf',
        accessory: 'Baking Sheet with foil',
        specialNote: 'Brush with melted butter at 8 mins.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '195°C',
        time: '8 - 10 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Drawer with light oil spray',
        specialNote: 'Shake gently halfway.'
      }
    },
    defaultCookTime: '14 mins',
    defaultPrepTime: '20 mins',
    defaultTemp: '220°C',
    defaultMode: 'Convection Grill',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    description: 'A royal vegetarian masterpiece. Large broccoli and cauliflower florets coated in a silky marinade of processed cheese, cashew paste, fresh cream, green cardamom, and white pepper, grilled until the edges blister nutty and golden.',
    ingredients: [
      '1 Large Head Broccoli & 1/2 Head Cauliflower (Cut into large florets)',
      '1/2 cup Processed Cheese or Cream Cheese grated fine',
      '1/4 cup Cashew Nut Paste (Cashews soaked & blended smooth)',
      '1/4 cup Thick Fresh Cream',
      '1 tbsp Hung Curd',
      '1 tbsp Ginger-Green Chili Paste',
      '1/2 tsp Green Cardamom Powder',
      '1/2 tsp White Pepper Powder & 1/2 tsp Salt',
      'Chaat Masala and Lemon juice for dusting'
    ],
    instructions: [
      'Blanch florets in salted boiling water for 90 seconds, plunge into ice water, and drain completely on towels.',
      'Blend cream cheese, cashew paste, cream, hung curd, ginger-chili paste, cardamom, white pepper, and salt until satiny.',
      'Gently coat florets in the rich white marinade; let rest 20 minutes.',
      'Arrange on skewers or wire rack lined with foil in the upper section of preheated OTG at 220°C.',
      'Grill for 12 to 16 minutes until edges are blistered and speckled with amber brown spots.',
      'Sprinkle with chaat masala and fresh lemon juice.'
    ],
    proTips: [
      'Blanching first ensures the thick broccoli stems cook through before the creamy cheese marinade burns.',
      'Green cardamom and white pepper provide an aristocratic Mughlai fragrance.'
    ],
    isVegetarian: true,
    difficulty: 'Medium',
    servings: '4 servings',
    tags: ['Grill', 'Broccoli', 'Malai Tikka', 'Vegetarian', 'Royal Mughlai']
  },
  {
    id: 'grl-03',
    title: 'Lemon Garlic Herb Grilled Chicken Skewers',
    subtitle: 'Tender chicken skewers charred with garlic herb butter, chili flakes & fresh lemon juice',
    category: 'grill_tandoori',
    primaryFeature: 'grill',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '225°C',
        time: '14 - 16 mins',
        mode: 'Top Grill / Broil',
        rackOrBasket: 'Upper Wire Rack with Enamelled Tray',
        accessory: 'Wire Rack with metal skewers',
        specialNote: 'Broil high and fast so edges blister while meat stays succulent.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '220°C',
        time: '12 - 15 mins',
        mode: 'Grill Mode',
        rackOrBasket: 'Top Wire Shelf',
        accessory: 'Baking Sheet with foil',
        specialNote: 'Turn skewers at 7 mins.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '200°C',
        time: '10 - 12 mins',
        mode: 'Air Fry Vortex High',
        rackOrBasket: 'Crisper Plate',
        accessory: 'Crisper Drawer on mini skewers',
        specialNote: 'Turn skewers at 6 mins.'
      }
    },
    defaultCookTime: '14 mins',
    defaultPrepTime: '15 mins',
    defaultTemp: '225°C',
    defaultMode: 'Top Element High Grill',
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=80',
    description: 'Tender chicken breast or thigh cubes marinated in extra virgin olive oil, minced garlic, lemon zest, oregano, and parsley, grilled under glowing quartz heating coils until edges are blistered and juicy.',
    ingredients: [
      '450g Boneless Chicken Breast or Thighs (cut into 1.5-inch cubes)',
      '3 tbsp Melted Butter + 1 tbsp Olive Oil',
      '5 Garlic Cloves minced fine',
      '1 tbsp Chopped Fresh Parsley & Thyme',
      '1/2 tsp Red Chili Flakes',
      '1 Lemon zested and juiced',
      'Flaky Sea Salt & Black Pepper'
    ],
    instructions: [
      'Thread chicken cubes onto metal or soaked bamboo skewers.',
      'Toss chicken skewers with olive oil, melted butter, garlic, lemon zest, chili flakes, salt, and pepper.',
      'Arrange on top wire rack or baking sheet.',
      'Grill at 220°C - 225°C in Morphy Richards OTG for 12 to 15 minutes until charred and cooked through.',
      'Squeeze fresh lemon juice over the hot chicken and sprinkle with chopped parsley.'
    ],
    proTips: [
      'Basting with lemon butter at the halfway mark seals in the juices and creates crackly golden edges.',
      'Serve with warm pita bread or fluffy garlic butter rice.'
    ],
    isVegetarian: false,
    difficulty: 'Easy',
    servings: '3 servings',
    tags: ['Grill', 'Chicken', 'Garlic Butter', 'Express', 'Tapas']
  },
  {
    id: 'grl-04',
    title: 'Spicy Tandoori Aloo Shashlik Skewers',
    subtitle: 'Baby potatoes parboiled, tossed in tangy tandoori spices and charred on skewers',
    category: 'grill_tandoori',
    primaryFeature: 'grill',
    compatibleAppliances: ['mr60_rcss', 'mr29_otg', 'airfryer_5l'],
    applianceConfigs: {
      mr60_rcss: {
        applianceId: 'mr60_rcss',
        temp: '220°C',
        time: '18 - 22 mins',
        mode: 'Convection Grill (Top Element + Fan)',
        rackOrBasket: 'Center Wire Rack with Baking Tray below',
        accessory: 'Wire Rack with metal skewers',
        specialNote: 'Piercing potatoes with a fork lets marinade soak in.'
      },
      mr29_otg: {
        applianceId: 'mr29_otg',
        temp: '215°C',
        time: '16 - 20 mins',
        mode: 'Grill Mode',
        rackOrBasket: 'Center Wire Shelf',
        accessory: 'Baking Sheet with foil',
        specialNote: 'Brush with mustard oil at 10 mins.'
      },
      airfryer_5l: {
        applianceId: 'airfryer_5l',
        temp: '200°C',
        time: '12 - 15 mins',
        mode: 'Air Fry Vortex',
        rackOrBasket: 'Crisper Basket',
        accessory: 'Crisper Drawer with light oil spray',
        specialNote: 'Shake basket every 4 mins.'
      }
    },
    defaultCookTime: '18 mins',
    defaultPrepTime: '20 mins',
    defaultTemp: '220°C',
    defaultMode: 'Convection Grill',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
    description: 'Baby potatoes parboiled, pricked all over, marinated in fiery spiced yogurt with capsicum and red onions, and grilled on skewers until skins are blistered and crisp.',
    ingredients: [
      '500g Baby Potatoes (Parboiled 8 mins in salted water until knife-tender)',
      '1 Red Onion cut into petals',
      '1 Green Bell Pepper cut into squares',
      '1/2 cup Hung Curd',
      '1 tbsp Mustard Oil',
      '1 tbsp Ginger-Garlic Paste',
      '1 tbsp Kashmiri Chili Powder & 1 tsp Chaat Masala',
      '1/2 tsp Ajwain & 1 tsp Kasuri Methi'
    ],
    instructions: [
      'Parboil baby potatoes, drain, let steam dry, and prick all over with a toothpick.',
      'Mix hung curd, mustard oil, ginger-garlic paste, and spices into a thick marinade.',
      'Toss potatoes, onions, and capsicum in marinade; rest 20 minutes.',
      'Thread onto skewers alternating potato, onion, and capsicum.',
      'Grill at 220°C for 16 to 20 minutes, turning once, until blistered and crispy.',
      'Dust with chaat masala and lemon juice.'
    ],
    proTips: [
      'Pricking potatoes allows the spiced yogurt marinade to penetrate all the way to the core.',
      'Mustard oil provides the unmistakable pungent dhaba aroma.'
    ],
    isVegetarian: true,
    difficulty: 'Easy',
    servings: '4 servings',
    tags: ['Grill', 'Potatoes', 'Tandoori', 'Vegetarian', 'Street Food']
  }
];
