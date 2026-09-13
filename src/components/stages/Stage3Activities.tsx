import React, { useState } from 'react';
import { 
  Clock, 
  Play, 
  MessageCircle, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Activity, DevelopmentalFocus, ChildProfile } from '../../types';

interface Stage3ActivitiesProps {
  activities: Activity[];
  focus: DevelopmentalFocus;
  profile: ChildProfile;
  onSelectActivityForPlay: (activity: Activity) => void;
  onDelegateActivity: (activity: Activity) => void;
  onContinueToReflect: () => void;
  onBack: () => void;
}

export const Stage3Activities: React.FC<Stage3ActivitiesProps> = ({
  activities,
  focus,
  profile,
  onSelectActivityForPlay,
  onDelegateActivity,
  onContinueToReflect,
  onBack,
}) => {
  const [completedIds, setCompletedIds] = useState<string[]>([]);

  const nanny = profile.primaryCaregivers.find((c) => c.role === 'nanny') || profile.primaryCaregivers[0];
  const nannyFirstName = nanny ? nanny.name.split(' ')[0] : 'Vijju';

  const toggleDone = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      {/* Screen Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold tracking-wider uppercase text-amber-600">
            5-Minute Play
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            Pick 1 for Today
          </h1>
        </div>
        <span className="text-xs text-stone-500 font-medium">Zero prep</span>
      </div>

      {/* Activity Cards List */}
      <div className="space-y-3">
        {activities.map((act) => {
          const isDone = completedIds.includes(act.id);
          return (
            <div
              key={act.id}
              className={`bg-white rounded-2xl border p-4 transition shadow-xs ${
                isDone ? 'border-emerald-300 bg-emerald-50/20' : 'border-stone-200 hover:border-amber-300'
              }`}
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center text-xs">
                    {act.title.includes('Katori') ? '🥣' : act.title.includes('Car') ? '🚗' : '🧺'}
                  </span>
                  <span>{act.title}</span>
                </span>
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                  {act.durationMinutes} mins
                </span>
              </div>

              {/* Items & timing */}
              <div className="text-[11px] text-stone-500 mb-2 flex items-center gap-2">
                <span>{act.bestRoutineSlot.split('(')[0].trim()}</span>
                <span>•</span>
                <span>{act.householdItems.join(', ')}</span>
              </div>

              {/* 1-sentence prompt */}
              <p className="text-xs text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-150 mb-3 leading-relaxed">
                {act.howToPlay[0]}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onSelectActivityForPlay(act)}
                  className="flex-1 py-2 px-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>Play (5m)</span>
                </button>

                <button
                  type="button"
                  onClick={() => onDelegateActivity(act)}
                  className="py-2 px-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  title={`Send instructions to ${nannyFirstName} via WhatsApp`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span>WhatsApp {nannyFirstName}</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => toggleDone(act.id, e)}
                  className={`p-2 rounded-xl border text-xs transition ${
                    isDone
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-stone-200 text-stone-400 hover:bg-stone-100'
                  }`}
                  title="Mark as done"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="pt-2 flex gap-2">
        <button
          onClick={onBack}
          className="w-1/3 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold transition"
        >
          Back
        </button>
        <button
          onClick={onContinueToReflect}
          className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
        >
          <span>Next: Delegate & 10s Check-in</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
