import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DevelopmentalFocus, ChildProfile } from '../../types';

interface Stage2FocusProps {
  profile: ChildProfile;
  focus: DevelopmentalFocus;
  onContinue: () => void;
  onBack: () => void;
}

export const Stage2Focus: React.FC<Stage2FocusProps> = ({
  profile,
  focus,
  onContinue,
  onBack,
}) => {
  return (
    <div className="space-y-4 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold tracking-wider uppercase text-amber-600">
            This Week&apos;s Focus
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            Two-Word Phrases
          </h1>
        </div>
        <span className="px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-full text-xs font-bold">
          {profile.name} • 2.6y
        </span>
      </div>

      {/* Main Focus Card */}
      <div className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-xs space-y-4">
        {/* Visual Topic Pill */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-lg">
            🗣️
          </div>
          <div>
            <div className="text-sm font-bold text-stone-900 leading-tight">
              Action + Noun
            </div>
            <div className="text-[11px] text-stone-500">
              e.g. &ldquo;car go&rdquo;, &ldquo;more paani&rdquo;, &ldquo;big ball&rdquo;
            </div>
          </div>
        </div>

        {/* 1 Plain-Language Sentence */}
        <div className="bg-stone-50 rounded-xl p-3 border border-stone-200 text-xs text-stone-700 leading-relaxed">
          At 2.6 years, pairing an action with a noun helps {profile.name} speak clearly and prevents toddler frustration.
        </div>

        {/* 1 Golden Rule */}
        <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3 flex items-start gap-2.5 text-xs">
          <span className="text-base">💡</span>
          <div>
            <strong className="text-emerald-950 font-bold block">Quick Rule</strong>
            <p className="text-emerald-900 text-xs mt-0.5">
              When {profile.name} says <strong>1 word</strong>, repeat back with <strong>2 words</strong>.
            </p>
            <p className="text-emerald-800 text-[11px] mt-1 italic">
              She says &ldquo;Gaddi&rdquo; → You say &ldquo;Gaddi fast!&rdquo;
            </p>
          </div>
        </div>

        {/* What to listen for */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-stone-700 block">Listen for</span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200 text-stone-700">
              <span className="font-semibold text-stone-900 block">✓ Any 2 words</span>
              <span className="text-[11px] text-stone-500">&ldquo;Bye papa&rdquo;, &ldquo;Red car&rdquo;</span>
            </div>
            <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200 text-stone-700">
              <span className="font-semibold text-stone-900 block">✓ Mimicking</span>
              <span className="text-[11px] text-stone-500">Echoing your 2nd word</span>
            </div>
          </div>
        </div>

        {/* Navigation Action Buttons */}
        <div className="pt-2 flex gap-2">
          <button
            onClick={onBack}
            className="w-1/3 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold transition"
          >
            Back
          </button>
          <button
            onClick={onContinue}
            className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>See 2 Activities (5m)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
