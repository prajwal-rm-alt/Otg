import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appliance, ApplianceId, Recipe, RecipeCategory, DietaryFilter } from '../types';
import { APPLIANCES } from '../data/appliances';
import { ALL_RECIPES } from '../data/recipes';

interface CookingTimer {
  recipeId: string;
  recipeTitle: string;
  totalSeconds: number;
  remainingSeconds: number;
  isRunning: boolean;
  applianceName: string;
}

interface AppContextType {
  selectedApplianceId: ApplianceId | 'all';
  setSelectedApplianceId: (id: ApplianceId | 'all') => void;
  selectedCategory: RecipeCategory;
  setSelectedCategory: (cat: RecipeCategory) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  vegOnly: boolean;
  setVegOnly: (v: boolean) => void;
  dietaryFilter: DietaryFilter;
  setDietaryFilter: (f: DietaryFilter) => void;
  activeTab: 'recipes' | 'features' | 'appliances' | 'favorites';
  setActiveTab: (tab: 'recipes' | 'features' | 'appliances' | 'favorites') => void;
  selectedFeatureId: string | null;
  setSelectedFeatureId: (id: string | null) => void;
  favorites: string[];
  toggleFavorite: (recipeId: string) => void;
  customImages: Record<string, string>;
  updateRecipeImage: (recipeId: string, newUrl: string) => void;
  resetRecipeImage: (recipeId: string) => void;
  selectedRecipe: Recipe | null;
  setSelectedRecipe: (r: Recipe | null) => void;
  editingImageRecipe: Recipe | null;
  setEditingImageRecipe: (r: Recipe | null) => void;
  activeTimer: CookingTimer | null;
  startTimer: (recipe: Recipe, totalMinutes: number, applianceName: string) => void;
  toggleTimerPause: () => void;
  stopTimer: () => void;
  addTimerMinutes: (mins: number) => void;
  getEffectiveImage: (recipe: Recipe) => string;
  appliances: Appliance[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_FAVORITES = 'mr_culinary_favorites_v1';
const STORAGE_KEY_CUSTOM_IMAGES = 'mr_culinary_custom_images_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedApplianceId, setSelectedApplianceId] = useState<ApplianceId | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilterState] = useState<DietaryFilter>('all');
  const [vegOnly, setVegOnlyState] = useState(false);

  const setDietaryFilter = (f: DietaryFilter) => {
    setDietaryFilterState(f);
    setVegOnlyState(f === 'veg');
  };

  const setVegOnly = (v: boolean) => {
    setVegOnlyState(v);
    setDietaryFilterState(v ? 'veg' : 'all');
  };
  const [activeTab, setActiveTab] = useState<'recipes' | 'features' | 'appliances' | 'favorites'>('recipes');
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [editingImageRecipe, setEditingImageRecipe] = useState<Recipe | null>(null);
  const [activeTimer, setActiveTimer] = useState<CookingTimer | null>(null);

  // Load favorites from localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FAVORITES);
      return saved ? JSON.parse(saved) : ['rot-01', 'deh-01', 'af-01', 'bak-02', 'def-01'];
    } catch {
      return ['rot-01', 'deh-01', 'af-01'];
    }
  });

  // Load custom images from localStorage
  const [customImages, setCustomImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CUSTOM_IMAGES);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save favorites
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favorites));
    } catch (e) {
      console.warn('Could not save favorites to localStorage', e);
    }
  }, [favorites]);

  // Save custom images
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CUSTOM_IMAGES, JSON.stringify(customImages));
    } catch (e) {
      console.warn('Could not save custom images to localStorage', e);
    }
  }, [customImages]);

  // Timer tick
  useEffect(() => {
    if (!activeTimer || !activeTimer.isRunning || activeTimer.remainingSeconds <= 0) return;

    const interval = setInterval(() => {
      setActiveTimer(prev => {
        if (!prev || !prev.isRunning) return prev;
        if (prev.remainingSeconds <= 1) {
          // Play notification chime sound if supported
          try {
            const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
            osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.15); // A5
            gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.8);
          } catch {
            // Audio context blocked or unsupported
          }

          return {
            ...prev,
            remainingSeconds: 0,
            isRunning: false
          };
        }
        return {
          ...prev,
          remainingSeconds: prev.remainingSeconds - 1
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTimer]);

  const toggleFavorite = (recipeId: string) => {
    setFavorites(prev =>
      prev.includes(recipeId) ? prev.filter(id => id !== recipeId) : [...prev, recipeId]
    );
  };

  const updateRecipeImage = (recipeId: string, newUrl: string) => {
    setCustomImages(prev => ({
      ...prev,
      [recipeId]: newUrl
    }));
  };

  const resetRecipeImage = (recipeId: string) => {
    setCustomImages(prev => {
      const next = { ...prev };
      delete next[recipeId];
      return next;
    });
  };

  const getEffectiveImage = (recipe: Recipe): string => {
    return customImages[recipe.id] || recipe.imageUrl;
  };

  const startTimer = (recipe: Recipe, totalMinutes: number, applianceName: string) => {
    const totalSecs = Math.max(1, Math.round(totalMinutes * 60));
    setActiveTimer({
      recipeId: recipe.id,
      recipeTitle: recipe.title,
      totalSeconds: totalSecs,
      remainingSeconds: totalSecs,
      isRunning: true,
      applianceName
    });
  };

  const toggleTimerPause = () => {
    setActiveTimer(prev => (prev ? { ...prev, isRunning: !prev.isRunning } : null));
  };

  const stopTimer = () => {
    setActiveTimer(null);
  };

  const addTimerMinutes = (mins: number) => {
    setActiveTimer(prev => {
      if (!prev) return null;
      const added = mins * 60;
      return {
        ...prev,
        totalSeconds: prev.totalSeconds + added,
        remainingSeconds: prev.remainingSeconds + added
      };
    });
  };

  return (
    <AppContext.Provider
      value={{
        selectedApplianceId,
        setSelectedApplianceId,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        vegOnly,
        setVegOnly,
        dietaryFilter,
        setDietaryFilter,
        activeTab,
        setActiveTab,
        selectedFeatureId,
        setSelectedFeatureId,
        favorites,
        toggleFavorite,
        customImages,
        updateRecipeImage,
        resetRecipeImage,
        selectedRecipe,
        setSelectedRecipe,
        editingImageRecipe,
        setEditingImageRecipe,
        activeTimer,
        startTimer,
        toggleTimerPause,
        stopTimer,
        addTimerMinutes,
        getEffectiveImage,
        appliances: APPLIANCES
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
