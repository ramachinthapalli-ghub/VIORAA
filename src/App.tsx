import React, { useState } from 'react';
import { PERSONA_CASES } from './data/mockData';
import { PersonaCase, Activity, ChildProfile } from './types';
import { PrototypeToolbar } from './components/PrototypeToolbar';
import { UXResearchDrawer } from './components/UXResearchDrawer';
import { Stage1Profile } from './components/stages/Stage1Profile';
import { Stage2Focus } from './components/stages/Stage2Focus';
import { Stage3Activities } from './components/stages/Stage3Activities';
import { Stage4DelegateAndReflect } from './components/stages/Stage4DelegateAndReflect';
import { ActivityWalkthroughModal } from './components/ActivityWalkthroughModal';
import { CaregiverWhatsAppModal } from './components/CaregiverWhatsAppModal';
import { Wifi, Battery, Signal, Sparkles } from 'lucide-react';

export default function App() {
  const [personas, setPersonas] = useState<PersonaCase[]>(PERSONA_CASES);
  const [selectedPersona, setSelectedPersona] = useState<PersonaCase>(PERSONA_CASES[0]);
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [deviceView, setDeviceView] = useState<'mobile' | 'desktop'>('mobile');
  const [isResearchOpen, setIsResearchOpen] = useState<boolean>(false);

  // Modals state
  const [walkthroughActivity, setWalkthroughActivity] = useState<Activity | null>(null);
  const [whatsAppActivity, setWhatsAppActivity] = useState<Activity | null>(null);

  // Active child profile state
  const [activeProfile, setActiveProfile] = useState<ChildProfile>(selectedPersona.childProfile);

  // Switch persona handler
  const handleSelectPersona = (persona: PersonaCase) => {
    setSelectedPersona(persona);
    setActiveProfile(persona.childProfile);
    setCurrentStage(1);
  };

  const handleUpdateProfile = (updated: ChildProfile) => {
    setActiveProfile(updated);
  };

  const handleOpenPlayModal = (activity: Activity) => {
    setWalkthroughActivity(activity);
  };

  const handleOpenWhatsAppModal = (activity: Activity) => {
    setWhatsAppActivity(activity);
  };

  const selectedActivityForReflect =
    whatsAppActivity || selectedPersona.recommendedActivities[0];

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Top Prototype Navigation & UX Toolbar */}
      <PrototypeToolbar
        currentStage={currentStage}
        setCurrentStage={setCurrentStage}
        selectedPersona={selectedPersona}
        personas={personas}
        onSelectPersona={handleSelectPersona}
        deviceView={deviceView}
        setDeviceView={setDeviceView}
        onOpenResearch={() => setIsResearchOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-center p-2 sm:p-6 md:p-8">
        {deviceView === 'mobile' ? (
          /* Mobile Device Frame Mockup */
          <div className="w-full max-w-[420px] my-auto">
            {/* Persona Quick Indicator pill above device */}
            <div className="mb-2 flex items-center justify-between px-2 text-xs text-stone-500">
              <span className="flex items-center gap-1.5 font-medium text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Testing as: <strong className="text-stone-800">{selectedPersona.motherName}</strong> ({selectedPersona.childName}&apos;s Mom)</span>
              </span>
              <span className="text-[10px] text-stone-400 font-mono">390 × 844</span>
            </div>

            {/* Hardware Phone Shell */}
            <div className="bg-stone-900 p-2.5 sm:p-3 rounded-[40px] sm:rounded-[44px] shadow-2xl ring-1 ring-stone-800/80 border-4 border-stone-800">
              <div className="bg-stone-50 rounded-[32px] sm:rounded-[36px] overflow-hidden min-h-[680px] max-h-[82vh] flex flex-col relative border border-stone-200">
                {/* Mobile Status Bar */}
                <div className="bg-stone-900 text-stone-100 px-5 py-2 flex items-center justify-between text-xs font-semibold shrink-0 select-none">
                  <span className="text-[11px]">9:41</span>
                  <div className="w-16 h-3.5 bg-black rounded-full mx-auto"></div>
                  <div className="flex items-center gap-1.5">
                    <Signal className="w-3 h-3" />
                    <Wifi className="w-3 h-3" />
                    <Battery className="w-3 h-3" />
                  </div>
                </div>

                {/* In-App Brand Header */}
                <div className="bg-white px-4 py-2.5 border-b border-stone-200/80 flex items-center justify-between shrink-0 shadow-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center text-stone-950 font-black text-xs shadow-xs">
                      V
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900 leading-tight">Viora</div>
                      <div className="text-[10px] text-stone-500 leading-tight">5-min daily play</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>Step {currentStage}/4</span>
                  </div>
                </div>

                {/* Mobile Screen Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {currentStage === 1 && (
                    <Stage1Profile
                      profile={activeProfile}
                      onUpdateProfile={handleUpdateProfile}
                      onContinue={() => setCurrentStage(2)}
                      motherName={selectedPersona.motherName}
                    />
                  )}
                  {currentStage === 2 && (
                    <Stage2Focus
                      profile={activeProfile}
                      focus={selectedPersona.activeFocus}
                      onContinue={() => setCurrentStage(3)}
                      onBack={() => setCurrentStage(1)}
                    />
                  )}
                  {currentStage === 3 && (
                    <Stage3Activities
                      activities={selectedPersona.recommendedActivities}
                      focus={selectedPersona.activeFocus}
                      profile={activeProfile}
                      onSelectActivityForPlay={handleOpenPlayModal}
                      onDelegateActivity={handleOpenWhatsAppModal}
                      onContinueToReflect={() => setCurrentStage(4)}
                      onBack={() => setCurrentStage(2)}
                    />
                  )}
                  {currentStage === 4 && (
                    <Stage4DelegateAndReflect
                      activity={selectedActivityForReflect}
                      profile={activeProfile}
                      onOpenWhatsAppModal={handleOpenWhatsAppModal}
                      onRestartJourney={() => setCurrentStage(1)}
                      onBack={() => setCurrentStage(3)}
                    />
                  )}
                </div>

                {/* Mobile Bottom Home Bar indicator */}
                <div className="bg-stone-100 py-1.5 border-t border-stone-200 flex justify-center shrink-0">
                  <div className="w-28 h-1 bg-stone-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Desktop / Fluid Canvas View */
          <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-stone-200/90 overflow-hidden flex flex-col">
            {/* Header banner */}
            <div className="p-5 bg-stone-900 text-stone-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950 font-black text-sm">
                  V
                </div>
                <div>
                  <h1 className="text-base font-bold text-white tracking-tight">
                    Viora
                  </h1>
                  <p className="text-xs text-stone-400">5-min daily play</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-stone-400">Step {currentStage} of 4:</span>
                <span className="bg-amber-500 text-stone-950 font-bold px-3 py-1 rounded-full text-xs">
                  {currentStage === 1 && '1. Profile'}
                  {currentStage === 2 && '2. Weekly Focus'}
                  {currentStage === 3 && '3. Activities'}
                  {currentStage === 4 && '4. Delegate & Reflect'}
                </span>
              </div>
            </div>

            {/* Active stage container */}
            <div className="p-6 sm:p-7 bg-stone-50/60 flex-1">
              {currentStage === 1 && (
                <Stage1Profile
                  profile={activeProfile}
                  onUpdateProfile={handleUpdateProfile}
                  onContinue={() => setCurrentStage(2)}
                  motherName={selectedPersona.motherName}
                />
              )}
              {currentStage === 2 && (
                <Stage2Focus
                  profile={activeProfile}
                  focus={selectedPersona.activeFocus}
                  onContinue={() => setCurrentStage(3)}
                  onBack={() => setCurrentStage(1)}
                />
              )}
              {currentStage === 3 && (
                <Stage3Activities
                  activities={selectedPersona.recommendedActivities}
                  focus={selectedPersona.activeFocus}
                  profile={activeProfile}
                  onSelectActivityForPlay={handleOpenPlayModal}
                  onDelegateActivity={handleOpenWhatsAppModal}
                  onContinueToReflect={() => setCurrentStage(4)}
                  onBack={() => setCurrentStage(2)}
                />
              )}
              {currentStage === 4 && (
                <Stage4DelegateAndReflect
                  activity={selectedActivityForReflect}
                  profile={activeProfile}
                  onOpenWhatsAppModal={handleOpenWhatsAppModal}
                  onRestartJourney={() => setCurrentStage(1)}
                  onBack={() => setCurrentStage(3)}
                />
              )}
            </div>
          </div>
        )}
      </main>

      {/* Guided Activity Companion Modal */}
      {walkthroughActivity && (
        <ActivityWalkthroughModal
          isOpen={!!walkthroughActivity}
          onClose={() => setWalkthroughActivity(null)}
          activity={walkthroughActivity}
          childName={activeProfile.name}
          onFinishAndReflect={() => {
            setWalkthroughActivity(null);
            setCurrentStage(4);
          }}
        />
      )}

      {/* WhatsApp Caregiver Delegation Modal */}
      {whatsAppActivity && (
        <CaregiverWhatsAppModal
          isOpen={!!whatsAppActivity}
          onClose={() => setWhatsAppActivity(null)}
          activity={whatsAppActivity}
          caregivers={activeProfile.primaryCaregivers}
        />
      )}

      {/* UX Research, Specs & RICE Drawer */}
      <UXResearchDrawer
        isOpen={isResearchOpen}
        onClose={() => setIsResearchOpen(false)}
      />
    </div>
  );
}
