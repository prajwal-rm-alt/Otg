import React from 'react';
import { useApp } from '../context/AppContext';
import { Search, X, Sparkles, Filter, Leaf, Check } from 'lucide-react';
import { ALL_RECIPES } from '../data/recipes';

export const Header: React.FC = () => {
  const {
    selectedApplianceId,
    setSelectedApplianceId,
    searchQuery,
    setSearchQuery,
    vegOnly,
    setVegOnly,
    dietaryFilter,
    setDietaryFilter,
    appliances
  } = useApp();

  // Recipe counts per appliance
  const getApplianceCount = (appId: string | 'all') => {
    if (appId === 'all') return ALL_RECIPES.length;
    if (appId === 'mr60_rcss' || appId === 'mr29_otg') return ALL_RECIPES.length;
    if (appId === 'airfryer_5l') {
      return ALL_RECIPES.filter(r => r.primaryFeature !== 'rotisserie').length;
    }
    return ALL_RECIPES.length;
  };

  const now = new Date();
  const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

  return (
    <header className="sticky top-0 z-30 bg-[#090b10]/80 backdrop-blur-2xl border-b border-white/[0.08]">
      {/* iOS Status Bar Simulation */}
      <div className="flex justify-between items-center px-6 pt-1 text-[11px] font-medium text-neutral-400 select-none">
        <span>{timeStr}</span>
        <div className="flex items-center gap-1.5 text-neutral-300">
          <span className="text-[10px] tracking-widest font-mono">5G</span>
          <div className="w-4 h-2.5 border border-neutral-400 rounded-sm p-0.5 flex items-center">
            <div className="h-full w-3/4 bg-emerald-400 rounded-2xs" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-3">
        {/* Top Branding Line */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-amber-500/15 border border-amber-500/30 text-amber-300">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Morphy Richards Culinary Suite
              </span>
              <span className="text-xs text-neutral-400 hidden sm:inline">· 100+ Verified Recipes</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
              Smart Kitchen Companion
            </h1>
          </div>

          {/* Quick Dietary Selector (All / Pure Veg / Chicken Non-Veg) */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 p-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
              <button
                type="button"
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  dietaryFilter === 'all'
                    ? 'bg-white/20 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter('veg')}
                className={`flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                    : 'text-neutral-400 hover:text-emerald-300'
                }`}
              >
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>Veg</span>
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter('chicken')}
                className={`flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  dietaryFilter === 'chicken'
                    ? 'bg-red-500/25 text-red-300 border border-red-500/40 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                    : 'text-neutral-400 hover:text-red-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                <span>Chicken (Non-Veg)</span>
              </button>
            </div>

            <div className="text-right hidden sm:block">
              <span className="text-xs font-bold text-amber-300">{ALL_RECIPES.length} Recipes</span>
              <span className="text-[10px] text-neutral-400 block">100+ Per Appliance</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-3">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 100+ dishes (e.g. Chicken Rotisserie, Apple Rings, Samosas, Sourdough, Tikka)..."
            className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white/[0.06] border border-white/10 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 backdrop-blur-xl transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Appliance Segmented Tabs (iOS Pill Style) */}
        <div className="flex items-center gap-1.5 p-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedApplianceId('all')}
            className={`flex-1 min-w-[110px] py-1.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 ${
              selectedApplianceId === 'all'
                ? 'bg-white/15 text-white shadow-sm border border-white/20'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5'
            }`}
          >
            <span>All Appliances</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-white/10 text-neutral-300 font-mono">
              {getApplianceCount('all')}
            </span>
          </button>

          {appliances.map(app => (
            <button
              key={app.id}
              onClick={() => setSelectedApplianceId(app.id)}
              className={`flex-1 min-w-[130px] py-1.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 ${
                selectedApplianceId === app.id
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5'
              }`}
            >
              <span className="truncate">{app.shortName}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                selectedApplianceId === app.id ? 'bg-amber-500/30 text-amber-200' : 'bg-white/10 text-neutral-400'
              }`}>
                {getApplianceCount(app.id)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
