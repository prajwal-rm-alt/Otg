import React from 'react';
import { useApp } from '../context/AppContext';
import { Utensils, BookOpen, Layers, Heart } from 'lucide-react';

export const TabBar: React.FC = () => {
  const { activeTab, setActiveTab, favorites } = useApp();

  const tabs = [
    {
      id: 'recipes' as const,
      label: 'Recipes',
      icon: Utensils,
      badge: '114'
    },
    {
      id: 'features' as const,
      label: 'Masterclass',
      sublabel: 'Dehydrate & Defrost',
      icon: BookOpen
    },
    {
      id: 'appliances' as const,
      label: 'Appliances',
      sublabel: 'Specs & Cavity',
      icon: Layers
    },
    {
      id: 'favorites' as const,
      label: 'Favorites',
      icon: Heart,
      badge: favorites.length > 0 ? favorites.length.toString() : undefined
    }
  ];

  return (
    <div className="fixed bottom-3 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto h-16 px-3 bg-neutral-900/90 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.8)] flex items-center gap-1 sm:gap-2 transition-all">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative h-12 px-3.5 sm:px-5 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 ${
                isActive
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5'
              }`}
            >
              <div className="relative">
                <Icon className={`w-4 h-4 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                {tab.badge && (
                  <span className="absolute -top-1.5 -right-2 px-1 min-w-[14px] h-3.5 rounded-full bg-amber-500 text-black text-[9px] font-bold flex items-center justify-center font-mono">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-semibold mt-1 tracking-tight">
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
