import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Clock, 
  Sparkles,
  Users
} from 'lucide-react';
import { ChildProfile } from '../../types';

interface Stage1ProfileProps {
  profile: ChildProfile;
  onUpdateProfile: (updated: ChildProfile) => void;
  onContinue: () => void;
  motherName: string;
}

const QUICK_SKILLS_2YO = [
  'Speaks 25+ single words',
  'Points to what he wants',
  'Understands simple cues',
  'Tries 2-word sounds',
  'Climbs & runs',
];

const QUICK_SKILLS_INFANT = [
  'Rolls belly to back',
  'Reaches for toys',
  'Babbles "ba-ba", "da-da"',
  'Holds objects tightly',
];

const QUICK_INTERESTS = [
  '🥄 Kitchen spoons & bowls',
  '🚗 Cars & vehicles',
  '📚 Picture books',
  '💧 Water play',
  '🦜 Balcony birds & sounds',
];

export const Stage1Profile: React.FC<Stage1ProfileProps> = ({
  profile,
  onUpdateProfile,
  onContinue,
  motherName,
}) => {
  const [name, setName] = useState(profile.name);
  const [ageYears, setAgeYears] = useState(profile.ageYears);
  const [ageMonths, setAgeMonths] = useState(profile.ageMonths);
  const [observedSkills, setObservedSkills] = useState<string[]>(profile.currentObservedSkills);
  const [interests, setInterests] = useState<string[]>(profile.interests);
  const [dailyMinutes, setDailyMinutes] = useState(profile.dailyWindowMinutes);

  const toggleSkill = (skill: string) => {
    setObservedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSaveAndProceed = () => {
    onUpdateProfile({
      ...profile,
      name: name.trim() || 'Your child',
      ageYears,
      ageMonths,
      currentObservedSkills: observedSkills,
      interests,
      dailyWindowMinutes: dailyMinutes,
    });
    onContinue();
  };

  const availableSkills = ageYears >= 1 ? QUICK_SKILLS_2YO : QUICK_SKILLS_INFANT;

  return (
    <div className="space-y-4 max-w-md mx-auto">
      {/* Screen Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            {name}&apos;s Profile
          </h1>
          <p className="text-xs text-stone-500">
            Age {ageYears}.{ageMonths} • {dailyMinutes} mins daily play
          </p>
        </div>
        <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-sm font-bold text-amber-900">
          👧🏽
        </div>
      </div>

      {/* Main Clean Card */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-xs space-y-4">
        {/* Child Name & Age Row */}
        <div className="grid grid-cols-2 gap-2.5">
          <div>
            <label className="block text-[11px] font-bold text-stone-600 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl font-semibold text-stone-900 focus:outline-none focus:border-amber-500"
              placeholder="e.g. Vira"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-stone-600 mb-1">
              Age
            </label>
            <div className="flex gap-1.5">
              <select
                value={ageYears}
                onChange={(e) => setAgeYears(Number(e.target.value))}
                className="w-1/2 px-2 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl font-semibold text-stone-900 focus:outline-none cursor-pointer"
              >
                {[0, 1, 2, 3, 4, 5].map((y) => (
                  <option key={y} value={y}>{y}y</option>
                ))}
              </select>
              <select
                value={ageMonths}
                onChange={(e) => setAgeMonths(Number(e.target.value))}
                className="w-1/2 px-2 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl font-semibold text-stone-900 focus:outline-none cursor-pointer"
              >
                {Array.from({ length: 12 }).map((_, m) => (
                  <option key={m} value={m}>{m}m</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Skills Spotted Lately */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-stone-700 block">Lately doing</span>
          <div className="flex flex-wrap gap-1.5">
            {availableSkills.map((skill) => {
              const isSelected = observedSkills.includes(skill);
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`px-2.5 py-1.5 rounded-xl text-xs transition flex items-center gap-1.5 border text-left ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 font-bold border-amber-500 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700 font-medium'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  <span>{skill}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Home Interests */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-stone-700 block">Loves right now</span>
          <div className="flex flex-wrap gap-1.5">
            {QUICK_INTERESTS.map((item) => {
              const cleanItem = item.replace(/^[^\s]+ /, '');
              const isSelected = interests.includes(cleanItem) || interests.includes(item);
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleInterest(cleanItem)}
                  className={`px-2.5 py-1 rounded-lg text-xs transition border ${
                    isSelected
                      ? 'bg-emerald-100 text-emerald-900 font-bold border-emerald-300'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Daily Time Window Pill Selector */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-stone-700">Daily play window</span>
            <span className="text-xs text-amber-700 font-bold">{dailyMinutes} mins</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[5, 10, 15].map((mins) => (
              <button
                key={mins}
                type="button"
                onClick={() => setDailyMinutes(mins)}
                className={`py-2 px-2 rounded-xl text-xs font-semibold border transition text-center ${
                  dailyMinutes === mins
                    ? 'bg-amber-50 border-amber-500 text-amber-900 ring-1 ring-amber-500'
                    : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                }`}
              >
                {mins} mins
                {mins === 10 && <span className="block text-[9px] text-amber-600 font-normal">Recommended</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Caregivers */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
          <span className="text-stone-500 text-xs font-medium">Caregiver team:</span>
          <div className="flex items-center gap-1.5">
            {profile.primaryCaregivers.map((c) => (
              <span
                key={c.id}
                className="bg-stone-100 px-2 py-0.5 rounded-full text-xs font-medium text-stone-700"
              >
                {c.avatar} {c.name.split(' ')[0]}
              </span>
            ))}
          </div>
        </div>

        {/* Primary Action Button */}
        <button
          onClick={handleSaveAndProceed}
          className="w-full py-3 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-bold text-sm rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
        >
          <span>See This Week&apos;s Focus</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
