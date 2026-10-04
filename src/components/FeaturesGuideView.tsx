import React, { useState } from 'react';
import { FEATURES_GUIDE } from '../data/featuresGuide';
import { useApp } from '../context/AppContext';
import { Sparkles, Thermometer, Clock, CheckCircle2, XCircle, ArrowRight, BookOpen, Layers } from 'lucide-react';

export const FeaturesGuideView: React.FC = () => {
  const { setSelectedCategory, setActiveTab } = useApp();
  const [activeFeatureId, setActiveFeatureId] = useState<string>('dehydrate');

  const currentFeature = FEATURES_GUIDE.find(f => f.id === activeFeatureId) || FEATURES_GUIDE[0];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
          Visual Culinary Masterclass
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-0.5">
          Understanding Core Appliance Technologies
        </h2>
        <p className="text-sm text-neutral-400 mt-1 max-w-3xl">
          Visual guides explaining what <span className="text-amber-300 font-semibold">Dehydrate</span>, <span className="text-cyan-300 font-semibold">Defrost</span>, <span className="text-orange-300 font-semibold">Rotisserie</span>, and <span className="text-emerald-300 font-semibold">Air Fry</span> actually do, why low temperatures preserve nutrients, and how to replicate professional results at home.
        </p>
      </div>

      {/* Feature Selector Tabs (iOS Segmented Pills) */}
      <div className="flex gap-2 p-1.5 bg-black/50 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-x-auto no-scrollbar">
        {FEATURES_GUIDE.map(feat => {
          const isActive = activeFeatureId === feat.id;
          return (
            <button
              key={feat.id}
              onClick={() => setActiveFeatureId(feat.id)}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex flex-col items-center justify-center gap-0.5 ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-200 shadow-[0_4px_20px_rgba(245,158,11,0.25)]'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5'
              }`}
            >
              <span>{feat.title}</span>
              <span className="text-[10px] font-normal text-neutral-400 truncate max-w-[120px]">
                {feat.badge.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Feature Content Showcase */}
      <div className="rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl p-6 sm:p-8 space-y-8">
        {/* Banner */}
        <div className="border-b border-white/[0.08] pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 border border-amber-500/30 text-amber-300">
              {currentFeature.badge}
            </span>
            <span className="text-xs text-neutral-400">
              Supported on: {currentFeature.supportedAppliances.map(id => id === 'mr60_rcss' ? '60L RCSS' : id === 'mr29_otg' ? '29L OTG' : '5L Air Fryer').join(' · ')}
            </span>
          </div>
          <h3 className="text-2xl font-black text-white tracking-tight">
            {currentFeature.title}
          </h3>
          <p className="text-sm font-medium text-amber-300/90 mt-1">
            {currentFeature.tagline}
          </p>
          <p className="text-sm text-neutral-300 leading-relaxed mt-3">
            {currentFeature.explanation}
          </p>
        </div>

        {/* The Science Behind It */}
        <div className="bg-amber-500/[0.04] border border-amber-500/20 rounded-2xl p-5">
          <h4 className="text-xs font-bold tracking-wider uppercase text-amber-300 flex items-center gap-2 mb-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            The Culinary Physics & Food Science
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {currentFeature.scienceBehind}
          </p>
        </div>

        {/* Visual Gallery: Exactly what it means in photos */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-bold text-white tracking-tight">
              {currentFeature.visualMeaning.heading}
            </h4>
            <span className="text-xs text-neutral-400">Visual References</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {currentFeature.visualMeaning.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {currentFeature.visualGallery.map((img, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-lg"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-white/10">
                    {img.category}
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    {img.title}
                  </h5>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal Foods Breakdown */}
        <div className="space-y-3 pt-4 border-t border-white/[0.08]">
          <h4 className="text-sm font-bold tracking-wider uppercase text-neutral-300 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-400" />
            Foods Specially Suited for {currentFeature.title}:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentFeature.visualMeaning.keyFoods.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-neutral-300 flex items-start gap-2.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dos and Don'ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
          {currentFeature.visualMeaning.dosAndDonts.map((rule, idx) => (
            <React.Fragment key={idx}>
              <div className="p-4 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/20 text-xs space-y-1.5">
                <span className="font-bold text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Golden Rule (Do):
                </span>
                <p className="text-neutral-300 leading-relaxed pl-5">
                  {rule.do}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-red-500/[0.06] border border-red-500/20 text-xs space-y-1.5">
                <span className="font-bold text-red-300 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-red-400" />
                  Common Mistake (Don&apos;t):
                </span>
                <p className="text-neutral-300 leading-relaxed pl-5">
                  {rule.dont}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Temperature & Timing Cheat Sheet */}
        <div className="pt-4 border-t border-white/[0.08] space-y-3">
          <h4 className="text-sm font-bold tracking-wider uppercase text-neutral-300 flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-amber-400" />
            Recommended Temperature & Timing Matrix:
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-neutral-400">
                  <th className="py-2.5 px-3 font-semibold">Ingredient / Dish</th>
                  <th className="py-2.5 px-3 font-semibold">Target Temp</th>
                  <th className="py-2.5 px-3 font-semibold">Duration</th>
                  <th className="py-2.5 px-3 font-semibold">Chef&apos;s Pro Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-neutral-300">
                {currentFeature.recommendedTemps.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="py-2.5 px-3 font-medium text-white">{row.item}</td>
                    <td className="py-2.5 px-3 text-amber-300 font-mono">{row.temp}</td>
                    <td className="py-2.5 px-3 font-mono text-neutral-300">{row.time}</td>
                    <td className="py-2.5 px-3 text-neutral-400">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Jump to matching recipes button */}
        <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
          <div>
            <span className="text-xs text-neutral-400">Ready to cook with {currentFeature.title}?</span>
            <p className="text-sm font-bold text-white">Explore verified matching recipes</p>
          </div>
          <button
            onClick={() => {
              if (currentFeature.id === 'dehydrate') setSelectedCategory('dehydrate');
              else if (currentFeature.id === 'defrost') setSelectedCategory('defrost_cook');
              else if (currentFeature.id === 'rotisserie') setSelectedCategory('rotisserie');
              else if (currentFeature.id === 'airfry') setSelectedCategory('airfry');
              setActiveTab('recipes');
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-black hover:bg-amber-400 flex items-center gap-1.5 transition-all shadow-md"
          >
            <span>View {currentFeature.title} Recipes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
