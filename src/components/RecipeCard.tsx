import React from 'react';
import { Recipe } from '../types';
import { useApp } from '../context/AppContext';
import { Heart, Camera, Clock, Flame, Wind, RotateCw, Sparkles, ChefHat } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const {
    setSelectedRecipe,
    setEditingImageRecipe,
    toggleFavorite,
    favorites,
    getEffectiveImage,
    selectedApplianceId
  } = useApp();

  const isFav = favorites.includes(recipe.id);
  const imageUrl = getEffectiveImage(recipe);

  // Get active config for the selected appliance or fallback to default
  const activeConfig = selectedApplianceId !== 'all' ? recipe.applianceConfigs[selectedApplianceId] : undefined;
  const displayTime = activeConfig?.time || recipe.defaultCookTime;
  const displayTemp = activeConfig?.temp || recipe.defaultTemp;
  const displayMode = activeConfig?.mode || recipe.defaultMode;

  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case 'rotisserie':
        return <RotateCw className="w-3 h-3 text-orange-400" />;
      case 'airfry':
        return <Wind className="w-3 h-3 text-emerald-400" />;
      case 'dehydrate':
        return <Sparkles className="w-3 h-3 text-amber-400" />;
      case 'defrost':
        return <Clock className="w-3 h-3 text-cyan-400" />;
      default:
        return <Flame className="w-3 h-3 text-red-400" />;
    }
  };

  return (
    <div
      onClick={() => setSelectedRecipe(recipe)}
      className="group relative rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-amber-500/40 backdrop-blur-xl overflow-hidden transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.36)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
        <img
          src={imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80';
          }}
        />

        {/* Subtle glass gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Floating Controls */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {/* Veg / Non-Veg Indicator */}
          <div className="pointer-events-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-white">
            <span
              className={`w-2 h-2 rounded-full ${recipe.isVegetarian ? 'bg-emerald-400' : 'bg-red-500'}`}
            />
            <span>{recipe.isVegetarian ? 'Pure Veg' : 'Chicken Non-Veg'}</span>
          </div>

          <div className="pointer-events-auto flex items-center gap-1.5">
            {/* Quick Edit Image Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setEditingImageRecipe(recipe);
              }}
              title="Edit / Replace Photo"
              className="w-8 h-8 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white/90 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-200 shadow-md group/btn"
            >
              <Camera className="w-3.5 h-3.5 group-hover/btn:scale-110" />
            </button>

            {/* Favorite Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(recipe.id);
              }}
              title={isFav ? 'Remove from favorites' : 'Add to favorites'}
              className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-200 shadow-md"
            >
              <Heart
                className={`w-3.5 h-3.5 transition-colors ${
                  isFav ? 'fill-red-500 text-red-500' : 'text-white/80 hover:text-white'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Bottom Image Overlay Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 pointer-events-none">
          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 font-medium">
            {getFeatureIcon(recipe.primaryFeature)}
            <span className="capitalize">{recipe.primaryFeature.replace('_', ' ')}</span>
          </div>

          <div className="px-2.5 py-0.5 rounded-lg bg-amber-500/80 backdrop-blur-md text-black font-bold font-mono text-[10px]">
            {displayTemp}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 leading-snug">
            {recipe.title}
          </h3>
          <p className="text-xs text-neutral-400 line-clamp-2 mt-1 leading-relaxed">
            {recipe.subtitle}
          </p>
        </div>

        {/* Metadata Bar */}
        <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-neutral-500" />
            <span className="font-mono text-[11px] text-neutral-300">{displayTime}</span>
          </div>

          {/* Compatible Appliance Icons */}
          <div className="flex items-center gap-1">
            <span
              title="60L RCSS OTG Compatible"
              className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
                recipe.compatibleAppliances.includes('mr60_rcss')
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'bg-white/5 text-neutral-600'
              }`}
            >
              60L
            </span>
            <span
              title="29L OTG Compatible"
              className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
                recipe.compatibleAppliances.includes('mr29_otg')
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'bg-white/5 text-neutral-600'
              }`}
            >
              29L
            </span>
            <span
              title="5L Air Fryer Compatible"
              className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
                recipe.compatibleAppliances.includes('airfryer_5l')
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-white/5 text-neutral-600'
              }`}
            >
              5L AF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
