export type CaregiverRole = 'mother' | 'partner' | 'nanny' | 'grandparent';

export interface Caregiver {
  id: string;
  name: string;
  role: CaregiverRole;
  language: 'English' | 'Hindi' | 'Hinglish';
  avatar: string;
  avatarBg?: string;
  availability: string;
}

export interface ChildProfile {
  id: string;
  name: string;
  ageYears: number;
  ageMonths: number;
  currentObservedSkills: string[];
  interests: string[];
  primaryCaregivers: Caregiver[];
  dailyWindowMinutes: number;
  preferredTimeOfDay: string;
}

export interface DevelopmentalFocus {
  id: string;
  title: string;
  domain: 'Communication & Speech' | 'Motor & Sensory' | 'Cognitive & Problem Solving' | 'Social & Emotional';
  priorityLevel: 'Core Focus for This Week' | 'Secondary Explore';
  whyItMattersNow: string;
  pediatricianNote: string;
  whatToObserve: string[];
  ageAppropriateRange: string;
  comparisonWithOldWay: {
    oldWay: string;
    newWay: string;
  };
}

export interface Activity {
  id: string;
  focusId: string;
  title: string;
  durationMinutes: number;
  effortLevel: 'Zero Prep' | '2 Min Prep';
  householdItems: string[];
  bestRoutineSlot: string;
  howToPlay: string[];
  proTip: string;
  caregiverInstructions: {
    english: string;
    hindi: string;
  };
  delegatableTo: CaregiverRole[];
  impactScore: number;
}

export interface ReflectionEntry {
  id: string;
  activityId: string;
  completedAt: string;
  completedBy: CaregiverRole;
  outcome: 'loved' | 'needed_help' | 'too_hard' | 'nanny_completed';
  childReaction: string;
  parentNote?: string;
  nextSuggestion: string;
}

export interface PersonaCase {
  id: string;
  motherName: string;
  title: string;
  companyRole: string;
  workHours: string;
  childName: string;
  childAge: string;
  childProfile: ChildProfile;
  activeFocus: DevelopmentalFocus;
  recommendedActivities: Activity[];
  researchQuote: string;
  cognitivePainPoint: string;
}
