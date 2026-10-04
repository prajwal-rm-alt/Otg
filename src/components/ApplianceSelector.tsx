import React from 'react';
import { useApp } from '../context/AppContext';
import { ChefHat, Wind, RotateCw, Sparkles, Check, ChevronRight, Info, ShieldCheck, Flame } from 'lucide-react';
import { ALL_RECIPES } from '../data/recipes';

export const ApplianceSelector: React.FC = () => {
  const { appliances, selectedApplianceId, setSelectedApplianceId, setActiveTab } = useApp();

  const getRecipeCount = (appId: string) => {
    if (appId === 'airfryer_5l') {
      return ALL_RECIPES.filter(r => r.primaryFeature !== 'rotisserie').length;
    }
    return ALL_RECIPES.length;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-white/[0.08] pb-4">
        <div>
          <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
            Hardware Master Specifications
          </span>
          <h2 className="text-2xl font-extrabold text-white tracking-tight mt-0.5">
            Supported Culinary Appliances
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Tap any appliance to filter 100+ compatible recipes, or explore specialized accessories.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {appliances.map(app => {
          const isSelected = selectedApplianceId === app.id;
          const recipeCount = getRecipeCount(app.id);

          return (
            <div
              key={app.id}
              onClick={() => setSelectedApplianceId(app.id)}
              className={`group relative rounded-3xl p-6 backdrop-blur-2xl transition-all duration-300 cursor-pointer border ${
                isSelected
                  ? 'bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-amber-500/50 shadow-[0_8px_32px_rgba(245,158,11,0.2)]'
                  : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.05]'
              }`}
            >
              {/* Active Badge */}
              {isSelected && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-black shadow-lg">
                  <Check className="w-3.5 h-3.5" />
                  <span>Active Filter</span>
                </div>
              )}

              {/* Title & Brand */}
              <div className="pr-12">
                <span className="text-xs font-semibold text-neutral-400 tracking-wide">
                  {app.brand}
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                  {app.name}
                </h3>
                <p className="text-xs font-medium text-amber-300 mt-1">
                  {app.capacity} · {app.power}
                </p>
              </div>

              {/* Highlight Tagline */}
              <p className="text-xs text-neutral-300 leading-relaxed mt-3 pb-3 border-b border-white/[0.08]">
                {app.tagline}
              </p>

              {/* Key Features Bullet List */}
              <div className="mt-4 space-y-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-400">
                  Key Capabilities:
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-300">
                  {app.keyFeatures.slice(0, 4).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Included Accessories */}
              <div className="mt-4 pt-3 border-t border-white/[0.08]">
                <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-400 block mb-1.5">
                  Standard Accessories:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {app.accessories.slice(0, 3).map((acc, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-neutral-300"
                    >
                      {acc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400">Recipe Catalog:</span>
                  <p className="text-sm font-bold text-white">{recipeCount}+ Verified Dishes</p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedApplianceId(app.id);
                    setActiveTab('recipes');
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                    isSelected
                      ? 'bg-amber-500 text-black hover:bg-amber-400'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span>Browse Recipes</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
