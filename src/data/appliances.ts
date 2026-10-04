import { Appliance } from '../types';

export const APPLIANCES: Appliance[] = [
  {
    id: 'mr60_rcss',
    name: 'Morphy Richards 60L RCSS OTG',
    shortName: '60L RCSS OTG',
    brand: 'Morphy Richards',
    capacity: '60 Litres (Grand Master)',
    tagline: 'Rotisserie Convection Stainless Steel jumbo culinary workstation',
    power: '2000W Heavy-Duty Dual Heating Elements',
    tempRange: '0°C to 250°C Precision Thermostat',
    timerLimit: '120 Minutes with Stay-On & Bell Alert',
    keyFeatures: [
      'Motorized Rotisserie with Multi-Prong Spit Rod',
      'Dual Convection Fans for 360° Heat Distribution',
      'Low-Temp Dehydrate Mode (Multi-rack fruit & jerky drying)',
      'Defrost Fan-Assisted Thaw Function',
      'Food Grade Stainless Steel Cavity & Outer Body',
      'Illuminated Double Glass Door for Heat Insulation',
      'Dual Element Selector (Top, Bottom, or Both elements simultaneously)'
    ],
    bestFor: [
      'Whole Chicken & Turkey Rotisserie Roasts',
      'Large Multi-Tray Fruit & Herb Dehydration (4 Trays)',
      '12-14 inch Family Pizzas & Artisan Sourdough Breads',
      'Bulk Cookie & Cake Batch Baking'
    ],
    accessories: [
      'Heavy-duty Rotisserie Spit Rod & Forks',
      'Rotisserie Extraction Tong',
      'Enamelled Baking Tray',
      '2x Chrome Plated Wire Racks',
      'Removable Crumb Tray',
      'Baking Tray Handle'
    ],
    badgeColor: 'from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30',
    accentColor: '#f59e0b',
    description: 'The heavyweight culinary flagship. With a cavernous 60-litre volume, it easily handles whole rotisserie poultry, multi-rack fruit dehydration, defrosting large frozen meat cuts, and commercial-grade baking batches.'
  },
  {
    id: 'mr29_otg',
    name: 'Morphy Richards 29L OTG',
    shortName: '29L OTG',
    brand: 'Morphy Richards',
    capacity: '29 Litres (Family Size)',
    tagline: 'Compact motorized rotisserie & convection baking master',
    power: '1600W High Efficiency Quartz Heating',
    tempRange: '60°C to 250°C Temperature Control',
    timerLimit: '60 Minutes with Auto Cut-Off & Keep Warm',
    keyFeatures: [
      'Motorized Rotisserie Spit for evenly roasted skewers & chicken',
      'Convection Air Circulation for crisp crusts',
      'Defrost & Gentle Warm-up Function',
      'High-Grade Galvanized Iron Cavity for heat retention',
      'Top & Bottom Heating Selection with Grill Mode',
      'Mirror Finish Toughened Glass Door'
    ],
    bestFor: [
      '1 to 1.5kg Whole Chicken Rotisserie',
      '8 to 9 inch Celebration Cakes & Brownies',
      'Paneer Tikka, Tandoori Kebabs & Sizzlers',
      'Toasted Garlic Breads & Open Melts'
    ],
    accessories: [
      'Motorized Rotisserie Rod & Skewer Clamps',
      'Rotisserie Tong Handle',
      'Non-Stick Baking Tray',
      'Grill Rack / Wire Shelf',
      'Crumb Catch Tray',
      'Tray Removal Handle'
    ],
    badgeColor: 'from-blue-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30',
    accentColor: '#06b6d4',
    description: 'The everyday kitchen hero. Perfect balance of kitchen counter footprint and full-fledged OTG power. Delivers succulent rotisserie roasts, tikkas, daily baking, and rapid defrosting.'
  },
  {
    id: 'airfryer_5l',
    name: '5L Digital Vortex Air Fryer',
    shortName: '5L Air Fryer',
    brand: 'Morphy Richards & Smart Fryer',
    capacity: '5 Litres (Air Crisper)',
    tagline: '360° Superheated Rapid Air cyclone with 90% less oil',
    power: '1500W High Velocity Heat Vortex',
    tempRange: '40°C to 200°C Digital Touch Control',
    timerLimit: '60 Minutes Digital Auto Shut-off (Dehydrate up to 8 hrs)',
    keyFeatures: [
      'Turbo Air Vortex Technology for maximum crunch without deep frying',
      'Dedicated Dehydrate Setting (40°C-70°C for veggie crisps & fruit slices)',
      'Express Defrost & Reheat for frozen fries, nuggets, and dumplings',
      'Non-stick Food Safe Crisper Basket with Shake Alert',
      'Pre-programmed 1-Touch Presets (Fries, Chicken, Fish, Cake, Dehydrate)'
    ],
    bestFor: [
      'Ultra-crisp French Fries, Wedges & Sweet Potato Chips',
      'Samosas, Spring Rolls & Falafel with minimal oil',
      'Quick Fruit Dehydration (Banana chips, Apple crisps)',
      'Defrosting & Crisping Frozen Prepped Foods directly'
    ],
    accessories: [
      'Non-Stick 5L Crisper Drawer',
      'Removable Perforated Airflow Crisper Plate',
      'Silicone Mat & Tongs',
      'Multi-Skewer Roasting Grill Insert'
    ],
    badgeColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30',
    accentColor: '#10b981',
    description: 'Fast, guilt-free crunch. Uses rapid cyclonic convection air to crisp exterior food surfaces while locking in natural juiciness with minimal oil. Ideal for quick weeknight dinners, rapid thawing of frozen snacks, and small-batch dehydration.'
  }
];
