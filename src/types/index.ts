export type ApplianceId = 'mr29_otg' | 'mr60_rcss' | 'airfryer_5l';

export interface Appliance {
  id: ApplianceId;
  name: string;
  shortName: string;
  brand: string;
  capacity: string;
  tagline: string;
  power: string;
  tempRange: string;
  timerLimit: string;
  keyFeatures: string[];
  bestFor: string[];
  accessories: string[];
  badgeColor: string;
  accentColor: string;
  description: string;
}

export type RecipeCategory =
  | 'all'
  | 'rotisserie'
  | 'airfry'
  | 'dehydrate'
  | 'defrost_cook'
  | 'baking'
  | 'grill_tandoori'
  | 'toast_snack';

export interface RecipeApplianceConfig {
  applianceId: ApplianceId;
  temp: string;
  time: string;
  mode: string;
  rackOrBasket: string;
  accessory: string;
  specialNote?: string;
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  category: RecipeCategory;
  primaryFeature: 'rotisserie' | 'airfry' | 'dehydrate' | 'defrost' | 'convection_bake' | 'grill' | 'toast';
  compatibleAppliances: ApplianceId[];
  applianceConfigs: Partial<Record<ApplianceId, RecipeApplianceConfig>>;
  defaultCookTime: string;
  defaultPrepTime: string;
  defaultTemp: string;
  defaultMode: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  proTips: string[];
  isVegetarian: boolean;
  difficulty: 'Easy' | 'Medium' | 'Chef Special';
  servings: string;
  tags: string[];
  defrostTimeNeeded?: string;
  dehydrateThickness?: string;
  rotisserieTrussingGuide?: string;
}

export type DietaryFilter = 'all' | 'veg' | 'chicken';

export interface FeatureGuide {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  explanation: string;
  scienceBehind: string;
  visualMeaning: {
    heading: string;
    description: string;
    keyFoods: string[];
    tips: string[];
    dosAndDonts: { do: string; dont: string }[];
  };
  supportedAppliances: ApplianceId[];
  recommendedTemps: { item: string; temp: string; time: string; note: string }[];
  visualGallery: {
    title: string;
    caption: string;
    imageUrl: string;
    category: string;
  }[];
}
