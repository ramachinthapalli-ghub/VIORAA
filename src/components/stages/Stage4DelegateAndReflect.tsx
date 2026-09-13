import React, { useState } from 'react';
import { 
  Share2, 
  Send, 
  Copy, 
  Check, 
  RotateCcw, 
  Sparkles
} from 'lucide-react';
import { Activity, ChildProfile, Caregiver } from '../../types';

interface Stage4DelegateAndReflectProps {
  activity: Activity;
  profile: ChildProfile;
  onOpenWhatsAppModal: (activity: Activity) => void;
  onRestartJourney: () => void;
  onBack: () => void;
}

export const Stage4DelegateAndReflect: React.FC<Stage4DelegateAndReflectProps> = ({
  activity,
  profile,
  onOpenWhatsAppModal,
  onRestartJourney,
  onBack,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<'Hindi' | 'English'>('Hindi');
  const [copied, setCopied] = useState(false);
  const [selectedCaregiver, setSelectedCaregiver] = useState<Caregiver>(profile.primaryCaregivers[0]);
  const [reflectionStatus, setReflectionStatus] = useState<string | null>(null);
  const [reflectionFeedback, setReflectionFeedback] = useState<string | null>(null);

  const whatsappMessage =
    selectedLanguage === 'Hindi'
      ? activity.caregiverInstructions.hindi
      : activity.caregiverInstructions.english;

  const handleCopy = () => {
    navigator.clipboard?.writeText(whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectReflection = (type: string) => {
    setReflectionStatus(type);
    if (type === 'loved') {
      setReflectionFeedback(`Great! ${profile.name} engaged well. Tomorrow builds on this.`);
    } else if (type === 'nanny_done') {
      setReflectionFeedback(`Done! ${selectedCaregiver.name} completed it today.`);
    } else if (type === 'skipped') {
      setReflectionFeedback(`Zero guilt! Every day is different. Everyday life is play.`);
    }
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold tracking-wider uppercase text-amber-600">
            Handoff & Done
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            Share or Wrap Up
          </h1>
        </div>
        <span className="text-xs text-stone-500 font-medium">10 seconds</span>
      </div>

      {/* 1. Quick WhatsApp Handoff */}
      <div className="bg-white rounded-2xl border border-stone-200/90 p-4 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-stone-900">Send to Caregiver</span>
            <span className="text-[11px] text-stone-500">({selectedCaregiver.name})</span>
          </div>
          <div className="flex gap-1 text-xs">
            <button
              type="button"
              onClick={() => setSelectedLanguage('Hindi')}
              className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition ${
                selectedLanguage === 'Hindi'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-100 text-stone-600'
              }`}
            >
              Hindi
            </button>
            <button
              type="button"
              onClick={() => setSelectedLanguage('English')}
              className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition ${
                selectedLanguage === 'English'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-100 text-stone-600'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Message preview */}
        <div className="bg-[#EFEAE2] p-3 rounded-xl border border-stone-300/70 text-xs text-stone-800 space-y-2">
          <p className="leading-relaxed line-clamp-2">{whatsappMessage}</p>
          <div className="flex items-center justify-between pt-1 border-t border-stone-300/40">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1 text-[11px] font-semibold text-stone-700 hover:text-stone-900 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenWhatsAppModal(activity)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-bold transition shadow-xs cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Send WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Simple Check-in */}
      <div className="bg-white rounded-2xl border border-stone-200/90 p-4 shadow-xs space-y-2.5">
        <h2 className="text-xs font-bold text-stone-800">
          How did it go today?
        </h2>

        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => handleSelectReflection('loved')}
            className={`p-2.5 rounded-xl border text-center text-xs transition flex flex-col items-center gap-1 ${
              reflectionStatus === 'loved'
                ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500'
                : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
            }`}
          >
            <span className="text-xl">🌟</span>
            <span className="font-semibold text-xs leading-tight">Loved it</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectReflection('nanny_done')}
            className={`p-2.5 rounded-xl border text-center text-xs transition flex flex-col items-center gap-1 ${
              reflectionStatus === 'nanny_done'
                ? 'bg-blue-50 border-blue-500 text-blue-950 font-bold ring-1 ring-blue-500'
                : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
            }`}
          >
            <span className="text-xl">🤝</span>
            <span className="font-semibold text-xs leading-tight">{selectedCaregiver.name.split(' ')[0]} did it</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectReflection('skipped')}
            className={`p-2.5 rounded-xl border text-center text-xs transition flex flex-col items-center gap-1 ${
              reflectionStatus === 'skipped'
                ? 'bg-purple-50 border-purple-500 text-purple-950 font-bold ring-1 ring-purple-500'
                : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
            }`}
          >
            <span className="text-xl">☕</span>
            <span className="font-semibold text-xs leading-tight">Skipped</span>
          </button>
        </div>

        {/* Short feedback */}
        {reflectionFeedback && (
          <div className="p-2.5 rounded-xl bg-stone-900 text-stone-100 text-xs flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-stone-200 text-xs">{reflectionFeedback}</span>
          </div>
        )}
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
          onClick={onRestartJourney}
          className="flex-1 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
          <span>New Week</span>
        </button>
      </div>
    </div>
  );
};
