import React, { useState } from 'react';
import { X, Send, Copy, Check, Sparkles, MessageCircle, Phone, Video, ArrowLeft } from 'lucide-react';
import { Activity, Caregiver } from '../types';

interface CaregiverWhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: Activity;
  caregivers: Caregiver[];
}

export const CaregiverWhatsAppModal: React.FC<CaregiverWhatsAppModalProps> = ({
  isOpen,
  onClose,
  activity,
  caregivers,
}) => {
  const [selectedCaregiver, setSelectedCaregiver] = useState<Caregiver>(caregivers[0]);
  const [language, setLanguage] = useState<'Hindi' | 'English'>('Hindi');
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const messageText =
    language === 'Hindi'
      ? activity.caregiverInstructions.hindi
      : activity.caregiverInstructions.english;

  const handleCopy = () => {
    navigator.clipboard?.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = () => {
    setIsSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800 flex flex-col">
        {/* Modal Top Bar */}
        <div className="p-3.5 bg-stone-900 border-b border-stone-800 flex items-center justify-between text-stone-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
            <span className="text-xs font-bold text-stone-100 uppercase tracking-wide">
              Caregiver Handoff via WhatsApp
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Caregiver selector pills */}
        <div className="p-3 bg-stone-950 border-b border-stone-800/80 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-stone-500 shrink-0 text-[11px]">Send to:</span>
          {caregivers.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCaregiver(c);
                setIsSent(false);
              }}
              className={`px-2.5 py-1 rounded-lg shrink-0 flex items-center gap-1.5 transition ${
                selectedCaregiver.id === c.id
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              <span>{c.avatar}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* WhatsApp Mobile Simulation Screen */}
        <div className="flex-1 bg-[#0b141a] text-stone-100 flex flex-col font-sans">
          {/* Simulated WhatsApp Header */}
          <div className="bg-[#202c33] px-3.5 py-2.5 flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#111b21] flex items-center justify-center text-lg border border-stone-700">
                {selectedCaregiver.avatar}
              </div>
              <div>
                <div className="text-xs font-semibold text-stone-100 flex items-center gap-1">
                  <span>{selectedCaregiver.name}</span>
                  <span className="text-[10px] text-stone-400 font-normal">({selectedCaregiver.role})</span>
                </div>
                <div className="text-[10px] text-[#00a884]">online</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-stone-400">
              <Video className="w-4 h-4" />
              <Phone className="w-4 h-4" />
            </div>
          </div>

          {/* Chat Canvas */}
          <div className="p-4 flex-1 space-y-3 min-h-[220px] bg-[#0b141a] bg-opacity-95 relative flex flex-col justify-end">
            <div className="text-center text-[10px] text-stone-500 bg-[#182229] py-0.5 px-3 rounded-full mx-auto self-center">
              TODAY
            </div>

            {/* Outgoing Message Bubble */}
            <div className="self-end max-w-[88%] bg-[#005c4b] text-stone-100 rounded-2xl rounded-tr-xs p-3 shadow-md text-xs space-y-1">
              <div className="text-[11px] font-bold text-emerald-200 mb-0.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Micro-play recommendation</span>
              </div>
              <p className="leading-relaxed">{messageText}</p>
              <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-200/70 pt-1">
                <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                <span className="text-sky-300 font-bold">✓✓</span>
              </div>
            </div>

            {/* Simulated Incoming Caregiver Reply */}
            {isSent && (
              <div className="self-start max-w-[80%] bg-[#202c33] text-stone-100 rounded-2xl rounded-tl-xs p-2.5 shadow-md text-xs space-y-0.5 animate-in slide-in-from-bottom-2 duration-300">
                <p className="text-stone-200">
                  {language === 'Hindi'
                    ? `जी दीदी! मैं 4 बजे नाश्ते के बाद वीरा के साथ यह खेल करा दूंगी।`
                    : `Sure! I will do this activity with Vira at 4 PM after her snack.`}
                </p>
                <div className="text-[10px] text-stone-400 text-right">Just now</div>
              </div>
            )}
          </div>

          {/* Controls Bar inside modal */}
          <div className="p-3 bg-[#202c33] border-t border-stone-800 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-stone-300">
              <span className="text-[11px] text-stone-400">Language:</span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setLanguage('Hindi')}
                  className={`px-2 py-0.5 rounded text-xs ${
                    language === 'Hindi' ? 'bg-[#00a884] text-white font-bold' : 'bg-stone-800 text-stone-400'
                  }`}
                >
                  Hindi
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('English')}
                  className={`px-2 py-0.5 rounded text-xs ${
                    language === 'English' ? 'bg-[#00a884] text-white font-bold' : 'bg-stone-800 text-stone-400'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Text'}</span>
              </button>

              <button
                type="button"
                onClick={handleSend}
                disabled={isSent}
                className="flex-1 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] disabled:opacity-50 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSent ? 'Sent to WhatsApp!' : 'Send Message'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
