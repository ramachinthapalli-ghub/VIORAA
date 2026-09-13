import { PersonaCase, DevelopmentalFocus, Activity } from '../types';

export const PERSONA_CASES: PersonaCase[] = [
  {
    id: 'ria',
    motherName: 'Ria',
    title: 'Working Mother',
    companyRole: 'Product Leader',
    workHours: '9:30 AM – 7:30 PM',
    childName: 'Vira',
    childAge: '2.6 Years (30 months)',
    researchQuote:
      '"I want to know what to focus on with Vira without getting lost in 40 different milestones on Google. And I want something simple I can share directly with Vijju, our nanny, so she can do it during the day."',
    cognitivePainPoint:
      'High decision fatigue from fragmented milestone lists. Overwhelmed by 30+ generic activities that take too much setup.',
    childProfile: {
      id: 'vira-p1',
      name: 'Vira',
      ageYears: 2,
      ageMonths: 6,
      currentObservedSkills: [
        'Speaks 25+ single words',
        'Points to wanted items',
        'Runs and stacks 4 blocks',
        'Starting to imitate household words',
      ],
      interests: ['Cars & auto rickshaws', 'Steel kitchen utensils', 'Water play', 'Animal sounds'],
      primaryCaregivers: [
        {
          id: 'c1',
          name: 'Vijju Didi',
          role: 'nanny',
          language: 'Hindi',
          avatar: '👩🏽',
          availability: '9:30 AM – 5:30 PM (Daily)',
        },
        {
          id: 'c2',
          name: 'Dadi',
          role: 'grandparent',
          language: 'Hindi',
          avatar: '👵🏽',
          availability: 'Afternoon play (2:00 PM – 4:00 PM)',
        },
        {
          id: 'c3',
          name: 'Papa',
          role: 'partner',
          language: 'English',
          avatar: '👨🏽',
          availability: 'Evenings (7:30 PM – 8:30 PM)',
        },
      ],
      dailyWindowMinutes: 10,
      preferredTimeOfDay: 'Evening wind-down (7:45 PM)',
    },
    activeFocus: {
      id: 'focus-speech-2yo',
      title: 'Connecting 2 Words into Action Phrases',
      domain: 'Communication & Speech',
      priorityLevel: 'Core Focus for This Week',
      whyItMattersNow:
        'Vira has mastered single words ("car", "water", "ball"). At 2.6 years, children begin linking actions to nouns ("car go", "more paani"). Focusing on this reduces frustration and builds verbal confidence.',
      pediatricianNote:
        'Developmental Tip: "No flashcards needed. Simply model 2-word pairs in daily routines. If Vira says \'Gaddi\', say \'Gaddi fast!\'"',
      whatToObserve: [
        'Does she pair any two words without prompting? (e.g. "big doggie", "bye papa")',
        'Does she repeat the 2nd word when you model it back to her?',
      ],
      ageAppropriateRange: '28 – 34 Months',
      comparisonWithOldWay: {
        oldWay: 'Reading 12 articles on toddler speech milestones, feeling anxious about 50 words vs 100 words, and downloading a 40-page PDF tracker.',
        newWay: 'One clear developmental goal for 7 days, backed by 2 zero-prep moments embedded in your evening chai or bedtime routine.',
      },
    },
    recommendedActivities: [
      {
        id: 'act-101',
        focusId: 'focus-speech-2yo',
        title: 'The Kitchen "Katori Tap" Sound Game',
        durationMinutes: 8,
        effortLevel: 'Zero Prep',
        householdItems: ['2 Steel Katoris (bowls)', '1 Steel spoon'],
        bestRoutineSlot: 'While heating evening milk or cooking (7:30 PM)',
        howToPlay: [
          'Hand Vira a steel spoon and place one katori upside down on the counter or table.',
          'Tap the bowl twice saying rhythmic pairs: "Tap fast!" or "Tap slow!".',
          'Pause expectantly for 4 seconds so she mimics your phrase or makes the sound back.',
          'Try word pairs: "Loud noise!", "Stop now!", "More tap!".',
        ],
        proTip: 'Steel bowls provide instant acoustic satisfaction. The pause is key—wait 4 full seconds before speaking again.',
        caregiverInstructions: {
          english:
            'Hi Vijju didi! During Vira\'s 4 PM snack time, please do this 5-minute steel spoon game. When she taps, say "Tez bajao" or "Ruk jao" so she practices combining two words. Thank you!',
          hindi:
            'विज्जू दीदी, वीरा के साथ शाम 4 बजे 5 मिनट यह खेल खेलिए। स्टील की कटोरी और चम्मच लेकर जब वह बजाए तो उसे दो शब्द बोलिए जैसे "तेज़ बजाओ", "और बजाओ", "वीरा बजाए"। वह आपके पीछे दो शब्द दोहराने की कोशिश करेगी। धन्यवाद!',
        },
        delegatableTo: ['nanny', 'grandparent', 'partner'],
        impactScore: 94,
      },
      {
        id: 'act-102',
        focusId: 'focus-speech-2yo',
        title: 'Car Garage "Go & Stop" Barrier',
        durationMinutes: 7,
        effortLevel: 'Zero Prep',
        householdItems: ['1 Toy car or auto-rickshaw', '1 Cushion or book as ramp'],
        bestRoutineSlot: 'Living room floor wind-down (8:10 PM)',
        howToPlay: [
          'Prop a sofa cushion on the floor to make a gentle slope.',
          'Hold Vira\'s car at the top. Say: "Ready... 1, 2, 3... CAR GO!" and release it.',
          'At the bottom, catch it with your hands and say "CAR STOP!".',
          'On the 3rd turn, hold the car at the top and wait. Encourage Vira to shout "Car go!" to release it.',
        ],
        proTip: 'Anticipation is the fastest trigger for spontaneous speech. If she only says "Go!", celebrate it!',
        caregiverInstructions: {
          english:
            'Vijju didi / Papa: during play with Vira, use her toy car with a cushion ramp. Wait at the top until she says "Car go!" before letting it zoom down. Takes 5 mins and works on her speech.',
          hindi:
            'विज्जू दीदी: वीरा के साथ तकिये की ढलान बनाकर खिलौना कार चलाएं। जब वीरा "कार जाओ" या "गो कार" कहे तभी कार छोड़ें। इससे दो शब्दों की समझ बढ़ती है।',
        },
        delegatableTo: ['partner', 'nanny'],
        impactScore: 91,
      },
      {
        id: 'act-103',
        focusId: 'focus-speech-2yo',
        title: 'Laundry Basket "Where is it?" Peek',
        durationMinutes: 6,
        effortLevel: 'Zero Prep',
        householdItems: ['1 Clean dupatta or towel', 'Vira\'s favorite toy'],
        bestRoutineSlot: 'While folding dry laundry (6:30 PM)',
        howToPlay: [
          'Hide Vira\'s toy under the dupatta with a corner sticking out.',
          'Ask with wide eyes: "Where car? Look inside!"',
          'When she pulls it out, model: "Found it! Blue car!"',
        ],
        proTip: 'Combines chores you are already doing with active verbal reinforcement.',
        caregiverInstructions: {
          english:
            'Vijju didi / Dadi, while folding clothes with Vira, hide her toy under a dupatta and encourage her to ask "Kahan hai?" and find it. She loves this!',
          hindi:
            'विज्जू दीदी / दादी जी, कपड़े समेटते समय वीरा का खिलौना दुपट्टे के नीचे छुपाइए और उससे पूछिए "कहाँ गया?"। जब वो निकाले तो कहिए "मिल गया!"।',
        },
        delegatableTo: ['grandparent', 'nanny'],
        impactScore: 88,
      },
    ],
  },
  {
    id: 'harinee',
    motherName: 'Harinee',
    title: 'Digitally Fatigued First-Time Mother',
    companyRole: 'Senior Product Manager',
    workHours: '9:00 AM – 7:30 PM',
    childName: 'Ananya',
    childAge: '6 Months (26 weeks)',
    researchQuote:
      '"I am exhausted from high work stress and postpartum recovery. I downloaded 4 baby milestone apps and they all send 10 notifications a day asking me to log every pee and nap. I just want someone to tell me one simple thing to do with my baby today."',
    cognitivePainPoint:
      'Digital fatigue, manual logging chore burden, feeling guilty about not doing structured tummy time activities.',
    childProfile: {
      id: 'ananya-p2',
      name: 'Ananya',
      ageYears: 0,
      ageMonths: 6,
      currentObservedSkills: [
        'Rolls from tummy to back',
        'Transfers objects from hand to hand occasionally',
        'Babbles consonants like "ba-ba", "da-da"',
        'Watches faces intently',
      ],
      interests: ['Reflective surfaces', 'High contrast sounds', 'Mother’s voice singing lullabies'],
      primaryCaregivers: [
        {
          id: 'c4',
          name: 'Anita Didi',
          role: 'nanny',
          language: 'Hindi',
          avatar: '👩🏽',
          avatarBg: '#FEF3C7',
          availability: '9:00 AM – 5:00 PM',
        },
        {
          id: 'c5',
          name: 'Nikhil',
          role: 'partner',
          language: 'English',
          avatar: '👨🏽',
          avatarBg: '#E0E7FF',
          availability: 'Mornings (7:30 AM – 8:30 AM)',
        },
      ],
      dailyWindowMinutes: 8,
      preferredTimeOfDay: 'Morning wake-up window (7:45 AM)',
    },
    activeFocus: {
      id: 'focus-motor-6mo',
      title: 'Active Reaching & Pincer Grasp Foundation',
      domain: 'Motor & Sensory',
      priorityLevel: 'Core Focus for This Week',
      whyItMattersNow:
        'At 6 months, babies shift from reflexive grasping to intentional reaching with open palms. Strengthening shoulder stability and palm orientation now prepares Ananya for self-feeding finger foods and independent sitting.',
      pediatricianNote:
        'Developmental Milestone: "Do not worry about sitting independently yet. Focus on keeping her motivated to reach across her midline while on her tummy or supported sitting."',
      whatToObserve: [
        'Does she reach with both left and right hands equally?',
        'Does she open her fingers before grabbing the object?',
      ],
      ageAppropriateRange: '5.5 – 7 Months',
      comparisonWithOldWay: {
        oldWay: 'Logging 8 daily tummy time sessions in minutes, tracking milestone percentages, comparing against online milestone percentiles.',
        newWay: 'One gentle weekly focus: 2 micro-play moments using things already next to the bed or sofa.',
      },
    },
    recommendedActivities: [
      {
        id: 'act-201',
        focusId: 'focus-motor-6mo',
        title: 'The Shiny Steel Thali Mirror Reach',
        durationMinutes: 6,
        effortLevel: 'Zero Prep',
        householdItems: ['1 Clean polished stainless steel thali or serving plate'],
        bestRoutineSlot: 'Morning tummy time on mattress (8:00 AM)',
        howToPlay: [
          'Place Ananya on her tummy propped comfortably on your chest or a firm mattress.',
          'Hold a shiny steel thali vertically 8 inches in front of her face so she sees her own reflection.',
          'Gently tilt it so the light shifts. When she reaches her hand out to touch the "baby in the plate", praise her warmly.',
        ],
        proTip: 'Babies at 6 months are fascinated by high-contrast metallic reflections. This doubles tummy time duration without tears.',
        caregiverInstructions: {
          english:
            'Anita Didi: During Ananya\'s morning wake window, hold a clean steel thali in front of her for 5 minutes during tummy time so she reaches out to touch her reflection. Keep a soft cloth nearby.',
          hindi:
            'अनीता दीदी: सुबह अनन्य को पेट के बल लेटाकर उसके सामने स्टील की चमकदार थाली रखें ताकि वह अपना चेहरा देखकर हाथ आगे बढ़ाए। इससे उसके हाथों की ताकत बढ़ती है। 5 मिनट काफी है।',
        },
        delegatableTo: ['nanny', 'partner'],
        impactScore: 96,
      },
      {
        id: 'act-202',
        focusId: 'focus-motor-6mo',
        title: 'Crinkly Dupatta Pull',
        durationMinutes: 5,
        effortLevel: 'Zero Prep',
        householdItems: ['1 Silk or cotton dupatta with bright texture'],
        bestRoutineSlot: 'Post-bath diaper time (11:30 AM)',
        howToPlay: [
          'While Ananya is on her back, drape the end of a soft dupatta within her hand reach.',
          'Gently pull the other end away in a soft tug-of-war while smiling.',
          'Notice how she tightens her grip and giggles at the tension.',
        ],
        proTip: 'Builds bilateral finger grip strength essential for holding spoons and crackers.',
        caregiverInstructions: {
          english:
            'Nikhil: While changing Ananya this morning, play 3 minutes of gentle dupatta pull to exercise her grip strength.',
          hindi:
            'निखिल: सुबह अनन्य के साथ दुपट्टे को धीरे से खींचकर पकड़ने का खेल खेलें, इससे उसकी उंगलियों की पकड़ मजबूत होती है।',
        },
        delegatableTo: ['partner', 'nanny'],
        impactScore: 89,
      },
    ],
  },
];

export const UX_RESEARCH_INSIGHTS = {
  problemStatement:
    'Working mothers of young children in India carry heavy cognitive mental load because they remain the "default decision maker" for their child\'s development, even when caregivers (nannies, grandparents, partners) help execute.',
  coreUXPillars: [
    {
      title: 'Zero Decision Paralysis ("Next Best Focus")',
      description:
        'Instead of exposing 50 milestones and 100 activity libraries, curate strictly 1–2 high-priority focal skills for this week. Eliminate the research rabbit hole.',
      benefit: 'Reduces decision friction from 20 mins of late-night Googling to 30 seconds of reassurance.',
    },
    {
      title: 'Ready-to-Use with Zero-Prep Household Items',
      description:
        'No Montessori kit purchases or 30-minute craft setups. Every activity uses what is already on an Indian kitchen counter or living room (steel katoris, spoons, dupattas).',
      benefit: 'Fits into real routines (while making chai, folding laundry, or bedtime wind-down).',
    },
    {
      title: 'Caregiver Delegation with 1-Tap WhatsApp Card',
      description:
        'Working mothers cannot execute every activity. They need to effortlessly hand off instructions to Nannies (Hindi/regional) and partners without having to write long instructional paragraphs.',
      benefit: 'Transfers cognitive ownership so the mother does not have to supervise.',
    },
    {
      title: 'Anti-App Fatigue (Zero Daily Logging Chores)',
      description:
        'Replaces tedious checklists and percentiles with a 10-second reflection check-in that gives immediate closure and adapts future suggestions automatically.',
      benefit: 'Zero guilt. No alerts saying "You missed logging yesterday".',
    },
  ],
  riceScoreBreakdown: [
    {
      feature: 'Next Best Focus',
      reach: 5,
      impact: 5,
      confidence: 5,
      effort: 2,
      score: 62.5,
      status: 'P0 Core',
      detail: 'Eliminates anxiety: what matters today.',
    },
    {
      feature: 'Ready-to-Use Activities',
      reach: 5,
      impact: 5,
      confidence: 4,
      effort: 2,
      score: 50.0,
      status: 'P0 Core',
      detail: 'Household items, fits existing daily slots.',
    },
    {
      feature: 'Child Developmental Profile',
      reach: 5,
      impact: 4,
      confidence: 4,
      effort: 2,
      score: 40.0,
      status: 'P0 Enabler',
      detail: 'Ultra-lightweight 3-point context.',
    },
    {
      feature: 'Caregiver WhatsApp Handoff',
      reach: 3,
      impact: 4,
      confidence: 3,
      effort: 2,
      score: 18.0,
      status: 'P1 Delegator',
      detail: 'Enables asynchronous support.',
    },
    {
      feature: '10-Sec Progress Reflection',
      reach: 4,
      impact: 4,
      confidence: 3,
      effort: 3,
      score: 16.0,
      status: 'P1 Feedback Loop',
      detail: 'Adapts plan without chore overhead.',
    },
  ],
};
