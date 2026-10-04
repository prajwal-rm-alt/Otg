import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ApplianceId } from '../types';
import { X, Heart, Camera, Clock, Flame, Wind, RotateCw, Sparkles, ChefHat, Play, CheckCircle2, AlertCircle, Bookmark, Share2 } from 'lucide-react';

export const RecipeDetailModal: React.FC = () => {
  const {
    selectedRecipe,
    setSelectedRecipe,
    setEditingImageRecipe,
    toggleFavorite,
    favorites,
    getEffectiveImage,
    startTimer,
    appliances
  } = useApp();

  const [activeApplianceTab, setActiveApplianceTab] = useState<ApplianceId>('mr60_rcss');
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);

  if (!selectedRecipe) return null;

  const isFav = favorites.includes(selectedRecipe.id);
  const imageUrl = getEffectiveImage(selectedRecipe);

  // Active appliance config
  const activeConfig = selectedRecipe.applianceConfigs[activeApplianceTab] || selectedRecipe.applianceConfigs.mr60_rcss || selectedRecipe.applianceConfigs.mr29_otg || selectedRecipe.applianceConfigs.airfryer_5l;
  const currentApplianceObj = appliances.find(a => a.id === activeApplianceTab);

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  // Parse cook time for the timer (e.g. "20 mins" -> 20, "1 hr 25 mins" -> 85)
  const extractMinutes = (timeStr: string) => {
    let total = 20;
    const hrMatch = timeStr.match(/(\d+)\s*(?:hr|hour)/i);
    const minMatch = timeStr.match(/(\d+)\s*(?:min|minute)/i);
    if (hrMatch) total = parseInt(hrMatch[1], 10) * 60;
    if (minMatch) {
      const mins = parseInt(minMatch[1], 10);
      total = hrMatch ? total + mins : mins;
    }
    return total;
  };

  const handleStartTimer = () => {
    const mins = extractMinutes(activeConfig?.time || selectedRecipe.defaultCookTime);
    startTimer(selectedRecipe, mins, currentApplianceObj?.shortName || 'Morphy Richards');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-2xl overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0b0d14] border border-white/15 rounded-3xl sm:rounded-[32px] shadow-[0_24px_80px_rgba(0,0,0,0.95)] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Sticky Header */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setEditingImageRecipe(selectedRecipe)}
            className="px-3 py-1.5 rounded-full bg-black/70 hover:bg-amber-500 hover:text-black text-white/90 backdrop-blur-xl border border-white/15 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-lg"
          >
            <Camera className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Change Photo</span>
          </button>

          <button
            type="button"
            onClick={() => toggleFavorite(selectedRecipe.id)}
            className="w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-xl border border-white/15 flex items-center justify-center transition-all shadow-lg"
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : 'text-white'}`} />
          </button>

          <button
            type="button"
            onClick={() => setSelectedRecipe(null)}
            className="w-9 h-9 rounded-full bg-black/70 hover:bg-white/20 text-white backdrop-blur-xl border border-white/15 flex items-center justify-center transition-all shadow-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Hero Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
            <img
              src={imageUrl}
              alt={selectedRecipe.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-[#0b0d14]/40 to-transparent" />

            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {selectedRecipe.category.replace('_', ' ')}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white ${selectedRecipe.isVegetarian ? 'bg-emerald-500/30' : 'bg-red-500/30'}`}>
                  {selectedRecipe.isVegetarian ? 'Pure Vegetarian' : 'Chicken (Non-Veg)'}
                </span>
                <span className="text-xs text-neutral-300">
                  Difficulty: {selectedRecipe.difficulty}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                {selectedRecipe.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
                {selectedRecipe.subtitle}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Description */}
            <p className="text-sm text-neutral-300 leading-relaxed">
              {selectedRecipe.description}
            </p>

            {/* Appliance-Specific Configuration Matrix */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Appliance Cooking Profile & Settings
                </span>
                <span className="text-[11px] text-neutral-400">
                  Switch appliance for tailored dials:
                </span>
              </div>

              {/* Segmented Appliance Switcher inside Recipe */}
              <div className="grid grid-cols-3 gap-2">
                {appliances.map(app => {
                  const isSupported = selectedRecipe.compatibleAppliances.includes(app.id);
                  const isCurrent = activeApplianceTab === app.id;

                  return (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => setActiveApplianceTab(app.id)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold flex flex-col items-center justify-center transition-all border ${
                        isCurrent
                          ? 'bg-amber-500/20 text-amber-200 border-amber-500/50 shadow-md'
                          : isSupported
                          ? 'bg-white/[0.03] text-neutral-300 border-white/[0.08] hover:bg-white/[0.08]'
                          : 'bg-transparent text-neutral-500 border-white/[0.04] opacity-50'
                      }`}
                    >
                      <span className="truncate">{app.shortName}</span>
                      <span className="text-[9px] font-normal opacity-80 mt-0.5">
                        {isSupported ? 'Optimal Mode' : 'Adaptive'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Appliance Parameters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                  <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                    Thermostat / Heat
                  </span>
                  <span className="text-sm font-bold text-amber-300 font-mono mt-0.5 block">
                    {activeConfig?.temp || selectedRecipe.defaultTemp}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                  <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                    Cooking Time
                  </span>
                  <span className="text-sm font-bold text-white font-mono mt-0.5 block">
                    {activeConfig?.time || selectedRecipe.defaultCookTime}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                  <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                    Function Mode
                  </span>
                  <span className="text-xs font-bold text-white mt-0.5 block truncate">
                    {activeConfig?.mode || selectedRecipe.defaultMode}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                  <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                    Accessory / Rack
                  </span>
                  <span className="text-xs font-bold text-neutral-300 mt-0.5 block truncate">
                    {activeConfig?.accessory || 'Wire Rack / Tray'}
                  </span>
                </div>
              </div>

              {activeConfig?.specialNote && (
                <div className="p-3 rounded-xl bg-amber-500/[0.08] border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{activeConfig.specialNote}</span>
                </div>
              )}

              {/* Start Timer Button */}
              <button
                type="button"
                onClick={handleStartTimer}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(245,158,11,0.35)] transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>
                  Start {activeConfig?.time || selectedRecipe.defaultCookTime} Cooking Timer in Dynamic Island
                </span>
              </button>
            </div>

            {/* Special Rotisserie / Dehydrate / Defrost Notice */}
            {selectedRecipe.rotisserieTrussingGuide && (
              <div className="p-4 rounded-2xl bg-orange-500/[0.08] border border-orange-500/30 text-xs space-y-1">
                <span className="font-bold text-orange-300 flex items-center gap-1.5">
                  <RotateCw className="w-4 h-4" />
                  Rotisserie Spit & Trussing Setup:
                </span>
                <p className="text-neutral-300 leading-relaxed pl-5">
                  {selectedRecipe.rotisserieTrussingGuide}
                </p>
              </div>
            )}

            {selectedRecipe.dehydrateThickness && (
              <div className="p-4 rounded-2xl bg-amber-500/[0.08] border border-amber-500/30 text-xs space-y-1">
                <span className="font-bold text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Dehydration Slice Thickness Guide:
                </span>
                <p className="text-neutral-300 leading-relaxed pl-5">
                  Uniform {selectedRecipe.dehydrateThickness} slice thickness is vital to ensure all pieces dry at the exact same rate.
                </p>
              </div>
            )}

            {selectedRecipe.defrostTimeNeeded && (
              <div className="p-4 rounded-2xl bg-cyan-500/[0.08] border border-cyan-500/30 text-xs space-y-1">
                <span className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  Convective Defrost Cycle:
                </span>
                <p className="text-neutral-300 leading-relaxed pl-5">
                  Pre-thaw frozen ingredients for {selectedRecipe.defrostTimeNeeded} using fan circulation before transitioning to high-heat roasting.
                </p>
              </div>
            )}

            {/* Ingredients Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-300 flex items-center justify-between">
                <span>Ingredients & Pantry List ({selectedRecipe.ingredients.length})</span>
                <span className="text-xs font-normal text-neutral-500">Tap to cross off</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedRecipe.ingredients.map((ing, idx) => {
                  const isChecked = checkedIngredients.includes(idx);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleIngredient(idx)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 text-xs ${
                        isChecked
                          ? 'bg-white/[0.02] border-white/[0.04] text-neutral-500 line-through'
                          : 'bg-white/[0.04] border-white/[0.08] text-neutral-200 hover:bg-white/[0.06]'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? 'bg-amber-500 border-amber-500 text-black'
                            : 'border-white/30 bg-transparent'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="leading-snug">{ing}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Instructions Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-300">
                Step-by-Step Culinary Method
              </h3>

              <div className="space-y-3">
                {selectedRecipe.instructions.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3.5"
                  >
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chef Pro Tips */}
            {selectedRecipe.proTips.length > 0 && (
              <div className="p-5 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/20 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-emerald-400" />
                  Chef&apos;s Secrets & Best Practices:
                </span>
                <ul className="space-y-1.5 pl-6 text-xs text-neutral-300 list-disc leading-relaxed">
                  {selectedRecipe.proTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
