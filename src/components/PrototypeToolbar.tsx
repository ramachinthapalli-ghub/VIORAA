import React from 'react';
import { 
  Sparkles, 
  Smartphone, 
  Monitor, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight,
  UserCheck,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';
import { PersonaCase } from '../types';

interface PrototypeToolbarProps {
  currentStage: number;
  setCurrentStage: (stage: number) => void;
  selectedPersona: PersonaCase;
  personas: PersonaCase[];
  onSelectPersona: (p: PersonaCase) => void;
  deviceView: 'mobile' | 'desktop';
  setDeviceView: (v: 'mobile' | 'desktop') => void;
  onOpenResearch: () => void;
}

const STAGES = [
  { id: 1, label: '1. Profile' },
  { id: 2, label: '2. Focus' },
  { id: 3, label: '3. Play' },
  { id: 4, label: '4. Done' },
];

export const PrototypeToolbar: React.FC<PrototypeToolbarProps> = ({
  currentStage,
  setCurrentStage,
  selectedPersona,
  personas,
  onSelectPersona,
  deviceView,
  setDeviceView,
  onOpenResearch,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-md">
      {/* Top Banner: Prototype context & UX switches */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-amber-500 flex items-center justify-center text-stone-950 font-black text-xs">
              V
            </div>
            <div>
              <span className="font-bold text-stone-100 text-sm tracking-tight">Viora</span>
              <span className="text-stone-400 text-[11px] ml-1.5 hidden sm:inline">• Working mother's companion</span>
            </div>
          </div>
        </div>

        {/* Persona quick select & Research drawer button */}
        <div className="flex items-center gap-2">
          {/* Persona selector */}
          <div className="flex items-center gap-1.5 bg-stone-800 px-2.5 py-1 rounded-lg border border-stone-700">
            <span className="text-stone-400 text-[11px]">Testing as:</span>
            <select
              value={selectedPersona.id}
              onChange={(e) => {
                const found = personas.find((p) => p.id === e.target.value);
                if (found) onSelectPersona(found);
              }}
              className="bg-transparent text-amber-300 font-semibold focus:outline-none cursor-pointer text-xs"
            >
              {personas.map((p) => (
                <option key={p.id} value={p.id} className="bg-stone-900 text-stone-100">
                  {p.motherName} ({p.childName}, {p.childAge.split(' ')[0]})
                </option>
              ))}
            </select>
          </div>

          {/* Viewport switch */}
          <div className="flex items-center bg-stone-800 rounded-lg p-0.5 border border-stone-700">
            <button
              onClick={() => setDeviceView('mobile')}
              title="Mobile View (390px)"
              className={`p-1 rounded ${
                deviceView === 'mobile'
                  ? 'bg-amber-500 text-stone-950 font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceView('desktop')}
              title="Wide Canvas View"
              className={`p-1 rounded ${
                deviceView === 'desktop'
                  ? 'bg-amber-500 text-stone-950 font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Research & Journey Specs button */}
          <button
            onClick={onOpenResearch}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition text-[11px]"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium hidden sm:inline">Research & Specs</span>
          </button>
        </div>
      </div>

      {/* Guided Journey Stages Bar */}
      <div className="bg-stone-950/70 border-t border-stone-800/80 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-2 scrollbar-none">
          <div className="flex items-center gap-1 sm:gap-2">
            {STAGES.map((s, idx) => {
              const isActive = currentStage === s.id;
              const isPast = currentStage > s.id;
              return (
                <React.Fragment key={s.id}>
                  <button
                    onClick={() => setCurrentStage(s.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-left transition whitespace-nowrap ${
                      isActive
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : isPast
                        ? 'text-stone-300 hover:bg-stone-800/50'
                        : 'text-stone-500 hover:text-stone-300 hover:bg-stone-900/50'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                        isActive
                          ? 'bg-amber-400 text-stone-950'
                          : isPast
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-stone-800 text-stone-400'
                      }`}
                    >
                      {isPast ? '✓' : s.id}
                    </div>
                    <div>
                      <div className="text-xs font-semibold leading-tight">{s.label}</div>
                    </div>
                  </button>
                  {idx < STAGES.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Quick next step button */}
          {currentStage < 4 && (
            <button
              onClick={() => setCurrentStage(currentStage + 1)}
              className="flex items-center gap-1.5 text-xs font-medium text-amber-300 hover:text-amber-200 bg-amber-950/40 hover:bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-500/30 transition shrink-0 ml-auto"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
