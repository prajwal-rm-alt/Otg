import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Upload, Link, Check, RotateCcw, Image as ImageIcon, Sparkles } from 'lucide-react';

export const ImageEditorModal: React.FC = () => {
  const { editingImageRecipe, setEditingImageRecipe, updateRecipeImage, resetRecipeImage, getEffectiveImage } = useApp();

  const [imageUrlInput, setImageUrlInput] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [activeTab, setActiveTab] = useState<'url' | 'upload' | 'presets'>('url');
  const [successToast, setSuccessToast] = useState(false);

  if (!editingImageRecipe) return null;

  const currentImage = getEffectiveImage(editingImageRecipe);

  // Preset alternatives based on dish category
  const getPresets = () => {
    return [
      {
        label: 'Gourmet Plated Top View',
        url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80'
      },
      {
        label: 'Rustic Wood Table Setting',
        url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80'
      },
      {
        label: 'Crisp Golden Close-Up',
        url: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=80'
      },
      {
        label: 'Artisan Glass / Herb Countertop',
        url: 'https://images.unsplash.com/photo-1596797882870-8c33deeac224?w=800&auto=format&fit=crop&q=80'
      }
    ];
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB. Please choose a smaller image.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPreviewUrl(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApply = () => {
    const target = previewUrl || imageUrlInput;
    if (target) {
      updateRecipeImage(editingImageRecipe.id, target);
      setSuccessToast(true);
      setTimeout(() => {
        setSuccessToast(false);
        setEditingImageRecipe(null);
      }, 700);
    }
  };

  const handleReset = () => {
    resetRecipeImage(editingImageRecipe.id);
    setPreviewUrl('');
    setImageUrlInput('');
    setSuccessToast(true);
    setTimeout(() => {
      setSuccessToast(false);
      setEditingImageRecipe(null);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
      <div className="relative w-full max-w-lg bg-[#0d0f17] border border-white/15 rounded-3xl shadow-[0_16px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div>
            <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">
              Photo Customizer
            </span>
            <h3 className="text-base font-bold text-white tracking-tight truncate max-w-xs">
              Edit Photo: {editingImageRecipe.title}
            </h3>
          </div>
          <button
            onClick={() => setEditingImageRecipe(null)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Live Preview Card */}
          <div>
            <span className="text-xs font-semibold text-neutral-300 block mb-2">
              Current / New Preview:
            </span>
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-inner">
              <img
                src={previewUrl || imageUrlInput || currentImage}
                alt={editingImageRecipe.title}
                className="w-full h-full object-cover transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = editingImageRecipe.imageUrl;
                }}
              />
              <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[11px] font-semibold text-white border border-white/10">
                {previewUrl || imageUrlInput ? '✨ Custom Image Staged' : 'Default Culinary Image'}
              </div>
            </div>
          </div>

          {/* Source Tabs */}
          <div className="flex gap-1.5 p-1 bg-white/[0.05] rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('url')}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                activeTab === 'url' ? 'bg-amber-500 text-black shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Link className="w-3.5 h-3.5" />
              <span>Image URL</span>
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                activeTab === 'upload' ? 'bg-amber-500 text-black shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload File</span>
            </button>
            <button
              onClick={() => setActiveTab('presets')}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                activeTab === 'presets' ? 'bg-amber-500 text-black shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Presets</span>
            </button>
          </div>

          {/* Tab 1: Direct URL Input */}
          {activeTab === 'url' && (
            <div className="space-y-2">
              <label className="text-xs text-neutral-300 block">
                Paste direct image link (JPEG, PNG, WebP):
              </label>
              <input
                type="url"
                value={imageUrlInput}
                onChange={(e) => {
                  setImageUrlInput(e.target.value);
                  setPreviewUrl(e.target.value);
                }}
                placeholder="https://images.unsplash.com/... or your image URL"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
              <p className="text-[11px] text-neutral-400">
                You can copy any culinary image URL from Unsplash or Google images.
              </p>
            </div>
          )}

          {/* Tab 2: Upload File */}
          {activeTab === 'upload' && (
            <div className="space-y-3">
              <label className="text-xs text-neutral-300 block">
                Select a photo from your computer or phone:
              </label>
              <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-white/20 rounded-2xl cursor-pointer hover:border-amber-500/50 hover:bg-white/[0.02] transition-colors">
                <Upload className="w-8 h-8 text-neutral-400 mb-2" />
                <span className="text-xs font-semibold text-white">Click to choose image</span>
                <span className="text-[10px] text-neutral-400 mt-1">PNG, JPG, or WEBP up to 5MB</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          )}

          {/* Tab 3: Presets */}
          {activeTab === 'presets' && (
            <div className="space-y-2">
              <span className="text-xs text-neutral-300 block">
                Curated Alternative Angles:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {getPresets().map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setPreviewUrl(preset.url);
                      setImageUrlInput(preset.url);
                    }}
                    className="p-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/50 text-left transition-all group flex flex-col gap-1.5"
                  >
                    <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-neutral-800">
                      <img src={preset.url} alt={preset.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <span className="text-[11px] font-medium text-neutral-300 group-hover:text-amber-300 truncate">
                      {preset.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setEditingImageRecipe(null)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleApply}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-500 text-black hover:bg-amber-400 flex items-center gap-1.5 transition-all shadow-md"
            >
              {successToast ? <Check className="w-4 h-4 text-black" /> : null}
              <span>{successToast ? 'Saved!' : 'Save New Photo'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
