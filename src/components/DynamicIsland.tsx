import React from 'react';
import { useApp } from '../context/AppContext';
import { Flame, Timer, Play, Pause, X, Sparkles, CheckCircle2 } from 'lucide-react';

export const DynamicIsland: React.FC = () => {
  const { activeTimer, toggleTimerPause, stopTimer, selectedApplianceId, appliances } = useApp();

  const currentAppliance = appliances.find(a => a.id === selectedApplianceId);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!activeTimer) {
    return (
      <div className="flex justify-center pt-2 pb-1 px-4 sticky top-0 z-40 pointer-events-none">
        <div className="pointer-events-auto h-7 px-4 rounded-full bg-neutral-900/90 backdrop-blur-2xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.6)] flex items-center gap-2 text-[11px] font-medium tracking-tight text-neutral-300 transition-all duration-300 hover:border-amber-500/40">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-neutral-400">Morphy Richards OS</span>
          <span className="text-neutral-600">·</span>
          <span className="text-amber-300 font-semibold truncate max-w-[160px]">
            {currentAppliance ? currentAppliance.shortName : '3 Appliances Ready'}
          </span>
        </div>
      </div>
    );
  }

  const isDone = activeTimer.remainingSeconds <= 0;

  return (
    <div className="flex justify-center pt-2 pb-1 px-4 sticky top-0 z-50">
      <div
        className={`w-full max-w-md px-4 py-2.5 rounded-3xl backdrop-blur-2xl border shadow-[0_8px_32px_rgba(0,0,0,0.8)] flex items-center justify-between gap-3 transition-all duration-300 ${
          isDone
            ? 'bg-amber-500/20 border-amber-500/50 text-amber-200 animate-pulse'
            : 'bg-neutral-900/95 border-white/15 text-white'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDone ? 'bg-amber-500 text-black' : 'bg-amber-500/20 text-amber-400'}`}>
            {isDone ? <CheckCircle2 className="w-5 h-5" /> : <Timer className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold truncate text-white leading-tight">
              {activeTimer.recipeTitle}
            </p>
            <p className="text-[10px] text-neutral-400 truncate">
              {isDone ? 'Cooking Complete! Ready to serve' : activeTimer.applianceName}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`font-mono text-sm font-bold tracking-wider px-2.5 py-1 rounded-full ${isDone ? 'bg-amber-500 text-black' : 'bg-white/10 text-amber-300'}`}>
            {formatTime(activeTimer.remainingSeconds)}
          </span>

          {!isDone && (
            <button
              onClick={toggleTimerPause}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              title={activeTimer.isRunning ? 'Pause Timer' : 'Resume Timer'}
            >
              {activeTimer.isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
          )}

          <button
            onClick={stopTimer}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-red-500/30 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
            title="Dismiss Timer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
