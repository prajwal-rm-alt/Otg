import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_RECIPES } from '../data/recipes';
import { RecipeCard } from './RecipeCard';
import { RecipeCategory } from '../types';
import { Search, RotateCcw, Sparkles, Wind, RotateCw, Clock, Flame, Cookie, Sandwich, Utensils } from 'lucide-react';

export const RecipeBrowser: React.FC = () => {
  const {
    selectedApplianceId,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    vegOnly,
    dietaryFilter,
    favorites,
    activeTab,
    appliances
  } = useApp();

  const categories: { id: RecipeCategory; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'All Recipes', icon: Utensils },
    { id: 'dehydrate', label: 'Dehydrate', icon: Sparkles },
    { id: 'defrost_cook', label: 'Defrost & Cook', icon: Clock },
    { id: 'rotisserie', label: 'Rotisserie Spit', icon: RotateCw },
    { id: 'airfry', label: 'Air Fry Vortex', icon: Wind },
    { id: 'baking', label: 'Baking & Pastry', icon: Cookie },
    { id: 'grill_tandoori', label: 'Grill & Tandoori', icon: Flame },
    { id: 'toast_snack', label: 'Toast & Melts', icon: Sandwich }
  ];

  // Filter recipes based on:
  // 1. activeTab (if 'favorites', only show favorites)
  // 2. selectedApplianceId
  // 3. selectedCategory
  // 4. vegOnly
  // 5. searchQuery
  const filteredRecipes = useMemo(() => {
    return ALL_RECIPES.filter(recipe => {
      // Favorites tab check
      if (activeTab === 'favorites' && !favorites.includes(recipe.id)) {
        return false;
      }

      // Appliance compatibility check
      if (selectedApplianceId !== 'all') {
        if (!recipe.compatibleAppliances.includes(selectedApplianceId)) {
          // If OTG, allow universal baking/grill/toast/dehydrate
          if (selectedApplianceId === 'mr60_rcss' || selectedApplianceId === 'mr29_otg') {
            // all recipes supported
          } else if (selectedApplianceId === 'airfryer_5l' && recipe.primaryFeature === 'rotisserie') {
            return false;
          }
        }
      }

      // Category filter
      if (selectedCategory !== 'all' && recipe.category !== selectedCategory) {
        return false;
      }

      // Dietary filter (All / Veg / Chicken Non-Veg)
      if (dietaryFilter === 'veg' && !recipe.isVegetarian) {
        return false;
      }
      if (dietaryFilter === 'chicken' && recipe.isVegetarian) {
        return false;
      }
      if (vegOnly && !recipe.isVegetarian) {
        return false;
      }

      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = recipe.title.toLowerCase().includes(q);
        const matchesSub = recipe.subtitle.toLowerCase().includes(q);
        const matchesDesc = recipe.description.toLowerCase().includes(q);
        const matchesTags = recipe.tags.some(t => t.toLowerCase().includes(q));
        const matchesIngredients = recipe.ingredients.some(i => i.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSub && !matchesDesc && !matchesTags && !matchesIngredients) {
          return false;
        }
      }

      return true;
    });
  }, [activeTab, favorites, selectedApplianceId, selectedCategory, vegOnly, searchQuery]);

  const currentAppliance = appliances.find(a => a.id === selectedApplianceId);

  return (
    <div className="space-y-6">
      {/* Category Horizontal Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {categories.map(cat => {
          const isSelected = selectedCategory === cat.id;
          const Icon = cat.icon;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                isSelected
                  ? 'bg-amber-500 text-black border-amber-500 shadow-[0_4px_20px_rgba(245,158,11,0.35)]'
                  : 'bg-white/[0.04] text-neutral-300 border-white/[0.08] hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-sm">
            {filteredRecipes.length} {filteredRecipes.length === 1 ? 'Dish' : 'Dishes'} Available
          </span>
          {currentAppliance && (
            <span className="text-amber-300/90 font-medium">
              for {currentAppliance.shortName}
            </span>
          )}
          {selectedCategory !== 'all' && (
            <span className="text-neutral-400 font-medium capitalize">
              in {selectedCategory.replace('_', ' ')}
            </span>
          )}
        </div>

        {(searchQuery || selectedCategory !== 'all' || vegOnly || selectedApplianceId !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="flex items-center gap-1 text-[11px] text-neutral-400 hover:text-amber-300 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear Filters</span>
          </button>
        )}
      </div>

      {/* Recipe Cards Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl bg-white/[0.02] border border-white/[0.06] p-12 text-center space-y-4 max-w-md mx-auto">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-neutral-400">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">No Recipes Match Your Filters</h3>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              Try clearing search terms or selecting &ldquo;All Appliances&rdquo; to browse the complete 114-recipe catalog.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-black hover:bg-amber-400 transition-all inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};
