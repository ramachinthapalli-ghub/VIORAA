import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Check, Sparkles, Clock, AlertCircle } from 'lucide-react';
import { Activity } from '../types';

interface ActivityWalkthroughModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: Activity;
  childName: string;
  onFinishAndReflect: () => void;
}

export const ActivityWalkthroughModal: React.FC<ActivityWalkthroughModalProps> = ({
  isOpen,
  onClose,
  activity,
  childName,
  onFinishAndReflect,
}) => {
  const totalSeconds = activity.durationMinutes * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    setTimeLeft(activity.durationMinutes * 60);
    setIsRunning(false);
    setActiveStepIndex(0);
  }, [activity]);

  useEffect(() => {
    let interval: any = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 bg-stone-900 text-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Guided Micro-Play Companion
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* Title and timing */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
              <span>{activity.effortLevel} • Everyday Household Items</span>
              <span>For {childName}</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900 font-display">
              {activity.title}
            </h2>
          </div>

          {/* Interactive Micro Timer */}
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-200/80 text-amber-900 flex items-center justify-center font-bold text-xs">
                <Clock className="w-5 h-5 text-amber-800" />
              </div>
              <div>
                <div className="text-xs text-amber-900 font-medium">Session Timer</div>
                <div className="text-2xl font-bold font-mono text-stone-900">
                  {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsRunning(!isRunning)}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition"
              >
                {isRunning ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Start Timer</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsRunning(false);
                  setTimeLeft(totalSeconds);
                }}
                className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl transition"
                title="Reset timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Household items */}
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
            <span className="font-bold text-stone-600 uppercase text-[10px] tracking-wider block mb-1">
              Grab These Right Now:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activity.householdItems.map((item, i) => (
                <span
                  key={i}
                  className="bg-white px-2.5 py-1 rounded-md border border-stone-200 font-semibold text-stone-800"
                >
                  🥣 {item}
                </span>
              ))}
            </div>
          </div>

          {/* Step-by-Step Guided Cues */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
              3 Simple Steps:
            </span>
            {activity.howToPlay.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl border text-xs cursor-pointer transition flex items-start gap-3 ${
                  activeStepIndex === idx
                    ? 'bg-amber-50/70 border-amber-300 text-stone-900 shadow-xs'
                    : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5 ${
                    activeStepIndex === idx
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  {idx + 1}
                </div>
                <div className="leading-relaxed font-medium">{step}</div>
              </div>
            ))}
          </div>

          {/* Pro tip */}
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-emerald-900 block text-[11px]">Parenting Pro Tip:</span>
              <p className="text-emerald-900/90 mt-0.5">{activity.proTip}</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-100 transition"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onFinishAndReflect();
            }}
            className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-md shadow-amber-600/20 transition flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>Finished (Wrap Up)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
