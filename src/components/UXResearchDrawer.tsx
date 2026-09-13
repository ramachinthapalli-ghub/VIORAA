import React, { useState } from 'react';
import { 
  X, 
  Target, 
  BarChart3, 
  Lightbulb, 
  HeartHandshake, 
  Users, 
  ShieldCheck, 
  Sparkles,
  CheckCircle,
  HelpCircle,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { UX_RESEARCH_INSIGHTS } from '../data/mockData';

interface UXResearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UXResearchDrawer: React.FC<UXResearchDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'problem' | 'rice' | 'interviews' | 'uxprinciples'>('problem');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-2xl bg-stone-900 text-stone-100 h-full flex flex-col shadow-2xl border-l border-stone-800 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-950">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                Product Discovery & UX Research
              </span>
            </div>
            <h2 className="text-lg font-bold text-stone-100 mt-1">
              P0 User Journey Design Specs
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-800 px-4 bg-stone-900/90 text-xs overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('problem')}
            className={`py-3 px-3 border-b-2 font-medium transition whitespace-nowrap ${
              activeTab === 'problem'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            P0 Problem & Journey
          </button>
          <button
            onClick={() => setActiveTab('rice')}
            className={`py-3 px-3 border-b-2 font-medium transition whitespace-nowrap ${
              activeTab === 'rice'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            RICE Prioritization (62.5)
          </button>
          <button
            onClick={() => setActiveTab('interviews')}
            className={`py-3 px-3 border-b-2 font-medium transition whitespace-nowrap ${
              activeTab === 'interviews'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            User Research & Personas
          </button>
          <button
            onClick={() => setActiveTab('uxprinciples')}
            className={`py-3 px-3 border-b-2 font-medium transition whitespace-nowrap ${
              activeTab === 'uxprinciples'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            Anti-Fatigue UX Architecture
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-5 text-sm space-y-6 text-stone-300 leading-relaxed">
          {activeTab === 'problem' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30">
                <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
                  <Target className="w-4 h-4" />
                  <span>The Refined P0 Hypothesis</span>
                </div>
                <p className="text-stone-200 text-xs sm:text-sm">
                  &ldquo;Working mothers experience mental load in childcare areas where they continue to own the thinking — understanding what their child needs, deciding what to do, planning it, and making sure it happens — even when they have people (nanny, grandparents, partner) or apps helping with execution.&rdquo;
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase font-bold tracking-wider text-stone-400 mb-2">
                  Why Learning & Developmental Planning Was Picked
                </h3>
                <p className="text-xs text-stone-300 mb-3">
                  Compared across 4 areas (Meals, Development, Caregiver Delegation, Emotional Wellbeing). While meals are recurring, mothers (like Ria) already use meal prep hacks. Learning & development created high cognitive anxiety without a clear dominant solution.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-stone-800/60 rounded-lg border border-stone-700">
                    <span className="text-stone-400 block text-[11px]">Frequency & Severity</span>
                    <span className="font-semibold text-stone-200">High (Score: 22/25)</span>
                  </div>
                  <div className="p-3 bg-stone-800/60 rounded-lg border border-stone-700">
                    <span className="text-stone-400 block text-[11px]">Key Friction</span>
                    <span className="font-semibold text-stone-200">Too much noise, no clear next step</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase font-bold tracking-wider text-stone-400 mb-2">
                  The 4-Stage P0 Guided Path
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      step: '1. Understand My Child',
                      detail: 'Zero questionnaire fatigue. Captures 3 gentle signals (Age, current emerging skill, household context).',
                    },
                    {
                      step: '2. Tell Me What Matters Now',
                      detail: 'Next Best Focus: 1 prioritized weekly domain with transparent "Why now" reassurance.',
                    },
                    {
                      step: '3. Help Me Act On It',
                      detail: '2-3 zero-prep activities using everyday Indian household items (steel katoris, spoons, dupattas).',
                    },
                    {
                      step: '4. Fit Into Life & Delegate',
                      detail: '1-tap WhatsApp instructions for Nanny/Grandparent/Partner + 10-second zero-guilt check-in.',
                    },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 p-2.5 bg-stone-800/40 rounded-lg border border-stone-800">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-stone-200 text-xs">{s.step}</div>
                        <div className="text-[11px] text-stone-400">{s.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rice' && (
            <div className="space-y-4">
              <div className="p-3 bg-stone-800/40 rounded-lg text-xs">
                <p className="text-stone-300">
                  Calculated using <span className="font-semibold text-amber-300">(Reach × Impact × Confidence) / Effort</span> on a 1–5 scale.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-stone-950 text-stone-400 border-b border-stone-800 uppercase text-[10px]">
                    <tr>
                      <th className="p-2.5">Feature</th>
                      <th className="p-2.5">R × I × C / E</th>
                      <th className="p-2.5">RICE</th>
                      <th className="p-2.5">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800">
                    {UX_RESEARCH_INSIGHTS.riceScoreBreakdown.map((row, i) => (
                      <tr key={i} className="hover:bg-stone-800/30">
                        <td className="p-2.5 font-medium text-stone-200">
                          {row.feature}
                          <span className="block text-[10px] text-stone-400">{row.detail}</span>
                        </td>
                        <td className="p-2.5 text-stone-400">
                          {row.reach}×{row.impact}×{row.confidence}/{row.effort}
                        </td>
                        <td className="p-2.5 font-bold text-amber-400">{row.score}</td>
                        <td className="p-2.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            row.status.includes('P0') 
                              ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' 
                              : 'bg-stone-700/50 text-stone-300'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-stone-800/50 rounded-xl text-xs space-y-1.5 border border-stone-700">
                <span className="font-bold text-stone-200">Key Scoping Decision:</span>
                <p className="text-stone-400">
                  We strictly rejected building a generic milestone library (RICE 15.0) or an over-engineered weekly calendar planner (RICE 12.0) because mothers explicitly stated that maintenance causes app abandonment.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'interviews' && (
            <div className="space-y-4">
              <div className="p-3 bg-stone-800/50 rounded-lg border border-stone-700">
                <span className="text-xs font-bold text-amber-300">Target Persona: Working Mother (2.6yo baby Vira, Nanny Vijju)</span>
                <p className="text-xs text-stone-300 mt-1 italic">
                  &ldquo;I work full time. Nutrition and day routines are managed with our nanny Vijju, but I have immense uncertainty about whether Vira is talking enough or if I should be doing developmental activities. I want a 1-tap focus that I can also share directly with Vijju.&rdquo;
                </p>
                <div className="mt-2 text-[11px] text-stone-400 flex gap-4">
                  <span>• Working Mother</span>
                  <span>• Support: Nanny Vijju + Family</span>
                  <span>• Pain: Research fatigue & cognitive guilt</span>
                </div>
              </div>

              <div className="p-3 bg-stone-800/50 rounded-lg border border-stone-700">
                <span className="text-xs font-bold text-amber-300">Target Persona: Harinee (6mo daughter Ananya)</span>
                <p className="text-xs text-stone-300 mt-1 italic">
                  &ldquo;I am digitally fatigued. The moment an app asks me to log times or fill out 10 pages, I delete it. Just tell me one thing that matters today.&rdquo;
                </p>
                <div className="mt-2 text-[11px] text-stone-400 flex gap-4">
                  <span>• Senior PM</span>
                  <span>• Solo operator with nanny support</span>
                  <span>• Pain: App fatigue</span>
                </div>
              </div>

              <div className="p-3 bg-stone-800/50 rounded-lg border border-stone-700">
                <span className="text-xs font-bold text-amber-300">Insight from Chaitra (Nanny Delegation Success)</span>
                <p className="text-xs text-stone-300 mt-1">
                  Chaitra successfully reduced her mental load because she trained her nanny to operate independently. Therefore, our P0 prototype incorporates caregiver-ready WhatsApp instructions so mothers don&apos;t have to repeatedly teach or remind.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'uxprinciples' && (
            <div className="space-y-4">
              {UX_RESEARCH_INSIGHTS.coreUXPillars.map((p, i) => (
                <div key={i} className="p-3.5 bg-stone-800/40 rounded-xl border border-stone-700/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs">
                    <CheckCircle className="w-4 h-4 text-amber-400" />
                    <span>{p.title}</span>
                  </div>
                  <p className="text-xs text-stone-300">{p.description}</p>
                  <div className="text-[11px] text-amber-200/80 bg-amber-500/10 px-2 py-1 rounded mt-1 border border-amber-500/20">
                    <span className="font-semibold">UX Impact:</span> {p.benefit}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-950 flex items-center justify-between text-xs text-stone-400">
          <span>P0 Interactive Prototype</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-lg transition"
          >
            Back to Interactive Flow
          </button>
        </div>
      </div>
    </div>
  );
};
