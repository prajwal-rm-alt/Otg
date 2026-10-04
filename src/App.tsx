import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { DynamicIsland } from './components/DynamicIsland';
import { Header } from './components/Header';
import { RecipeBrowser } from './components/RecipeBrowser';
import { ApplianceSelector } from './components/ApplianceSelector';
import { FeaturesGuideView } from './components/FeaturesGuideView';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { ImageEditorModal } from './components/ImageEditorModal';
import { TabBar } from './components/TabBar';

const MainApp: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen bg-[#090b10] text-[#f1f3f9] pb-28 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Ambient Heat Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px]" />
      </div>

      {/* Dynamic Island Floating Notification */}
      <DynamicIsland />

      {/* iOS App Header */}
      <Header />

      {/* Main App Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        {activeTab === 'recipes' && <RecipeBrowser />}
        {activeTab === 'features' && <FeaturesGuideView />}
        {activeTab === 'appliances' && <ApplianceSelector />}
        {activeTab === 'favorites' && <RecipeBrowser />}
      </main>

      {/* Modals & Overlays */}
      <RecipeDetailModal />
      <ImageEditorModal />

      {/* iOS Bottom Floating Dock TabBar */}
      <TabBar />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
