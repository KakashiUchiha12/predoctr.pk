import React from 'react';
import { FileQuestion, Book, Archive, ClipboardList, BarChart3, PlayCircle, Brain, Target, TrendingUp, Shield, Clock, Users, Award, Sparkles, Lightbulb, Star, CheckCircle, Zap, Eye, Video } from 'lucide-react';

export interface EnhancedFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  keyStatistic: {
    value: string;
    label: string;
    trend?: string;
  };
  subFeatures: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    metric?: string;
  }>;
  color: string;
  bgGradient: string;
  interactiveData?: {
    downloads?: string;
    activeUsers?: string;
    successRate?: string;
    timeSpent?: string;
  };
}

export const enhancedFeatures: EnhancedFeature[] = [
  {
    id: "video-lectures",
    icon: <PlayCircle className="h-6 w-6" />,
    title: "Expert Video Lectures",
    subtitle: "Professional Educational Content",
    description: "Learn directly from subject experts with our exclusive video lecture series. Our comprehensive library of educational videos features experienced professors and subject matter experts delivering in-depth explanations of complex topics.",
    images: [
      `${import.meta.env.BASE_URL}Feature6 VideoLectures/1.webp`,
      `${import.meta.env.BASE_URL}Feature6 VideoLectures/2.webp`,
      `${import.meta.env.BASE_URL}Feature6 VideoLectures/3.webp`,
      `${import.meta.env.BASE_URL}Feature6 VideoLectures/4.webp`,
      `${import.meta.env.BASE_URL}Feature6 VideoLectures/5.webp`,
      `${import.meta.env.BASE_URL}Feature6 VideoLectures/6.webp`,
      `${import.meta.env.BASE_URL}Feature6 VideoLectures/7.webp`
    ],
    keyStatistic: {
      value: "200+",
      label: "Hours Content",
      trend: "+20 weekly"
    },
    color: "crypto-indigo",
    bgGradient: "from-indigo-500/20 to-purple-500/20",
    subFeatures: [
      {
        icon: <Award className="h-4 w-4" />,
        title: "Exclusive Access to Recorded Lectures",
        description: "Gain access to hours of expert-led lectures tailored for MDCAT preparation. Premium educational content featuring the most qualified and experienced medical educators in Pakistan delivering structured, comprehensive lessons. • High-quality video production • Professional audio clarity • Interactive visual aids • Downloadable lecture notes • Bookmark favorite sections • Speed control options • Mobile-friendly viewing • Offline access capability • Progress tracking • Certificate of completion",
        metric: "Premium content"
      },
      {
        icon: <PlayCircle className="h-4 w-4" />,
        title: "Biology Lectures",
        description: "Detailed lectures on all biology topics, taught by experienced educators. Comprehensive coverage of biological sciences including detailed explanations of complex processes, visual demonstrations, and practical applications. • Cell biology fundamentals • Genetics and molecular biology • Human anatomy systems • Physiology and homeostasis • Plant biology and taxonomy • Ecology and environmental science • Biotechnology applications • Microbiology and immunology • Evolution and biodiversity • Neurobiology and endocrinology",
        metric: "Comprehensive coverage"
      },
      {
        icon: <Users className="h-4 w-4" />,
        title: "Physics Lectures",
        description: "In-depth video lectures covering all essential physics concepts. Master fundamental principles through visual demonstrations, mathematical derivations, and real-world applications explained by expert physicists. • Mechanics and kinematics • Thermodynamics and heat • Electromagnetism principles • Waves and oscillations • Optics and light phenomena • Modern physics concepts • Nuclear and particle physics • Astrophysics fundamentals • Fluid mechanics applications • Electronics and circuits",
        metric: "Complete syllabus"
      },
      {
        icon: <Sparkles className="h-4 w-4" />,
        title: "Chemistry Lectures",
        description: "Learn complex chemistry topics through clear and concise video lessons. Detailed explanations of chemical reactions, molecular structures, and laboratory techniques delivered by experienced chemistry professors. • Physical chemistry principles • Inorganic chemistry concepts • Organic chemistry mechanisms • Analytical chemistry techniques • Environmental chemistry • Industrial chemistry applications • Biochemistry fundamentals • Pharmaceutical chemistry • Polymer chemistry basics • Surface chemistry and colloids",
        metric: "Expert instruction"
      },
      {
        icon: <Eye className="h-4 w-4" />,
        title: "English Lectures",
        description: "Master English proficiency with our structured video lectures covering all essential communication and grammar skills. Comprehensive lessons tailored for MDCAT success. • Key Vocabulary • Tenses • Passage Comprehension • Sentence Structure and Types of Sentences • Parts of Speech • Infinitive and Gerunds • Punctuation • Active and Passive Voice • Direct and Indirect Speech • Fill in the Blanks • Identify Errors in Sentences • Grammar • Figurative Language - Irony, Parody etc",
        metric: "Language proficiency"
      },
      {
        icon: <Lightbulb className="h-4 w-4" />,
        title: "Logical Reasoning Lectures",
        description: "Develop strong analytical skills with targeted logical reasoning lessons. Expert guidance to help you recognize patterns, evaluate arguments, and solve complex problems efficiently. • Critical Thinking • Letter and Symbol Series • Logical Deductions • Logical Problems • Course of Action • Cause and Effect",
        metric: "Analytical skills"
      }
    ],
    interactiveData: {
      downloads: "22,000+",
      activeUsers: "11,200+",
      successRate: "94%",
      timeSpent: "5.2hrs/week"
    }
  },
  {
    id: "mcq-bank",
    icon: <FileQuestion className="h-6 w-6" />,
    title: "65,000+ Smart MCQ Bank",
    subtitle: "Comprehensive Question Collection",
    description: "Unlock an extensive collection of MCQs across all major subjects, designed to boost your MDCAT preparation. Our comprehensive question bank covers every topic you'll encounter in the MDCAT exam, ensuring you're fully prepared for test day.",
    images: [
      `${import.meta.env.BASE_URL}Feature 1/Biology MCQs-min.webp`,
      `${import.meta.env.BASE_URL}Feature 1/Chemsitry MCQs-min.webp`,
      `${import.meta.env.BASE_URL}Feature 1/Physics MCQs-min.webp`,
      `${import.meta.env.BASE_URL}Feature 1/English MCQs-min.webp`,
      `${import.meta.env.BASE_URL}Feature 1/Logical Reasoning MCQs-min.webp`
    ],
    keyStatistic: {
      value: "65,000+",
      label: "MCQs Available",
      trend: "+1,200 weekly"
    },
    color: "crypto-purple",
    bgGradient: "from-purple-500/20 to-pink-500/20",
    subFeatures: [
      {
        icon: <Brain className="h-4 w-4" />,
        title: "Biology MCQs",
        description: "Explore a wide range of biology topics with our comprehensive collection of over 11,000 questions: • Acellular Life – Viruses, HIV/AIDS • Bioenergetics – Cellular respiration and energy transfer • Biological Molecules – Carbohydrates, proteins, lipids, RNA, and DNA • Cell Structure & Function – Prokaryotic vs. eukaryotic cells, cytoplasmic organelles • Coordination & Control – Nervous system, reflexes, and hormonal regulation • Enzymes – Structure, function, and action mechanisms • Evolution – Lamarckism, Darwinism, and natural selection • Reproduction – Human reproductive system, menstrual cycle, and STDs • Support & Movement – Skeleton, muscles, joints, and arthritis • Inheritance – Mendel’s laws, gene linkage, and sex-linked traits • Circulation – Human heart, blood vessels, and lymphatic system • Immunity – Specific defense mechanisms • Respiration – Gas exchange, effects of smoking • Digestion – Digestive system functions and disorders • Homeostasis – Kidney function, thermoregulation, and excretion • Biotechnology – Vaccines, disease diagnosis, and treatment products\n\nMaster every aspect of biological sciences and advance your knowledge with detailed MCQs across various fields.",
        metric: "11000+ MCQs"
      },
      {
        icon: <Target className="h-4 w-4" />,
        title: "Physics MCQs",
        description: "Master key concepts in physics with a comprehensive collection of over 10,000 questions: • Vectors & Equilibrium – Vector addition, product of vectors, equilibrium conditions • Force & Motion – Displacement, velocity, projectile motion, Newton’s laws, collisions • Work & Energy – Work-energy theorem, kinetic energy, power, energy losses • Rotational Motion – Angular displacement, velocity, and relation between linear and angular quantities • Fluid Dynamics – Terminal velocity, Bernoulli’s equation, fluid flow • Waves – Wave motion, sound, interference, stationary waves, SHM • Thermodynamics – Heat transfer, specific heat, thermodynamic laws • Electrostatics – Coulomb’s law, electric fields, capacitors • Current Electricity – Ohm’s law, resistance, power transfer • Electromagnetism – Magnetic fields, Faraday’s law, transformers • Alternating Current – AC through resistors, capacitors, and inductors • Electronics – Rectification, PN junction • Modern Physics – Quantum theory, atomic spectra, nuclear physics",
        metric: "10,000 MCQs"
      },
      {
        icon: <Sparkles className="h-4 w-4" />,
        title: "Chemistry MCQs",
        description: "Master fundamental chemistry concepts with over 11,000 questions: • Atomic Structure & Gases – Moles, Avogadro’s number, kinetic theory, ideal gas law • Chemical Equilibrium – Le Chatelier’s principle, solubility products, buffer solutions • Thermodynamics – Exothermic and endothermic reactions, Hess’s law, thermodynamic laws • Electrochemistry – Redox reactions, electrode potentials, electrolysis • Chemical Bonding – VSEPR theory, sigma and pi bonds, hybridization, molecular polarity • Organic Chemistry – Nomenclature, functional groups, isomerism, free radical mechanisms, alkanes, alkenes, alkynes, and benzene chemistry • Reaction Kinetics – Rate equations, activation energy, order of reactions • Macromolecules & Biochemistry – Proteins, enzymes, industrial applications like adhesives, dyes, polymers.",
        metric: "11000 MCQs"
      },
      {
        icon: <Eye className="h-4 w-4" />,
        title: "English MCQs",
        description: "Enhance your English proficiency with over 8,000 questions covering: • Reading & Thinking Skills – Comprehension, context clues, figurative language • Grammar & Vocabulary – Sentence structure, tenses, prepositions, pronouns, active/passive voice, direct/indirect speech, punctuation • Writing Skills – Proofreading, subject-verb agreement, error detection, sentence structure.",
        metric: "8000+ MCQs"
      },
      {
        icon: <Lightbulb className="h-4 w-4" />,
        title: "Logical Reasoning MCQs",
        description: "Sharpen critical thinking with over 5,000 questions on: • Critical Thinking – Evaluate beliefs, separate truth from falsehood • Letter & Symbol Series – Develop patterns and sequences using numbers and letters • Logical Deductions – Use structured thinking to make accurate conclusions • Logical Problems – Solve puzzles and reasoning challenges • Course of Action – Make decisions based on given scenarios • Cause & Effect – Analyze the relationship between events and outcomes.",
        metric: "5000+ MCQs"
      }
    ],
    interactiveData: {
      downloads: "50,000+",
      activeUsers: "8,500+",
      successRate: "85%",
      timeSpent: "2.5hrs/week"
    }
  },
  {
    id: "notes",
    icon: <Book className="h-6 w-6" />,
    title: "Comprehensive Study Notes",
    subtitle: "Well-Structured Knowledge Base",
    description: "Access well-structured and in-depth notes to strengthen your conceptual knowledge in every subject. Our comprehensive study materials provide detailed explanations, key concepts, and organized content to help you master every topic in the MDCAT syllabus.",
    images: [
      `${import.meta.env.BASE_URL}Features 2 Notes/1-min.webp`,
      `${import.meta.env.BASE_URL}Features 2 Notes/2-min.webp`,
      `${import.meta.env.BASE_URL}Features 2 Notes/3-min.webp`,
      `${import.meta.env.BASE_URL}Features 2 Notes/4-min.webp`,
      `${import.meta.env.BASE_URL}Features 2 Notes/5-min.webp`,
      `${import.meta.env.BASE_URL}Features 2 Notes/6-min.webp`
    ],
    keyStatistic: {
      value: "2,500+",
      label: "Study Pages",
      trend: "+500 added"
    },
    color: "crypto-blue",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    subFeatures: [
      {
        icon: <Lightbulb className="h-4 w-4" />,
        title: "Biology Notes",
        description: "Comprehensive study notes covering all MDCAT biology topics with detailed explanations and diagrams. • Acellular Life – Viruses, HIV/AIDS • Bioenergetics – Cellular respiration and energy transfer • Biological Molecules – Carbohydrates, proteins, lipids, RNA, and DNA • Cell Structure & Function – Prokaryotic vs. eukaryotic cells, cytoplasmic organelles • Coordination & Control – Nervous system, reflexes, and hormonal regulation • Enzymes – Structure, function, and action mechanisms • Evolution – Lamarckism, Darwinism, and natural selection • Reproduction – Human reproductive system, menstrual cycle, and STDs • Support & Movement – Skeleton, muscles, joints, and arthritis • Inheritance – Mendel's laws, gene linkage, and sex-linked traits • Circulation – Human heart, blood vessels, and lymphatic system • Immunity – Specific defense mechanisms • Respiration – Gas exchange, effects of smoking • Digestion – Digestive system functions and disorders • Homeostasis – Kidney function, thermoregulation, and excretion • Biotechnology – Vaccines, disease diagnosis, and treatment products",
        metric: "800+ pages"
      },
      {
        icon: <Users className="h-4 w-4" />,
        title: "Physics Notes",
        description: "Detailed physics study notes with formulas, derivations, and problem-solving strategies. • Vectors & Equilibrium – Vector addition, product of vectors, equilibrium conditions • Force & Motion – Displacement, velocity, projectile motion, Newton's laws, collisions • Work & Energy – Work-energy theorem, kinetic energy, power, energy losses • Rotational Motion – Angular displacement, velocity, and relation between linear and angular quantities • Fluid Dynamics – Terminal velocity, Bernoulli's equation, fluid flow • Waves – Wave motion, sound, interference, stationary waves, SHM • Thermodynamics – Heat transfer, specific heat, thermodynamic laws • Electrostatics – Coulomb's law, electric fields, capacitors • Current Electricity – Ohm's law, resistance, power transfer • Electromagnetism – Magnetic fields, Faraday's law, transformers • Alternating Current – AC through resistors, capacitors, and inductors • Electronics – Rectification, PN junction • Modern Physics – Quantum theory, atomic spectra, nuclear physics",
        metric: "600+ pages"
      },
      {
        icon: <Video className="h-4 w-4" />,
        title: "Chemistry Notes",
        description: "Comprehensive chemistry study notes covering all branches with detailed explanations and examples. • Atomic Structure & Gases – Moles, Avogadro's number, kinetic theory, ideal gas law • Chemical Equilibrium – Le Chatelier's principle, solubility products, buffer solutions • Thermodynamics – Exothermic and endothermic reactions, Hess's law, thermodynamic laws • Electrochemistry – Redox reactions, electrode potentials, electrolysis • Chemical Bonding – VSEPR theory, sigma and pi bonds, hybridization, molecular polarity • Organic Chemistry – Nomenclature, functional groups, isomerism, free radical mechanisms, alkanes, alkenes, alkynes, and benzene chemistry • Reaction Kinetics – Rate equations, activation energy, order of reactions • Macromolecules & Biochemistry – Proteins, enzymes, industrial applications like adhesives, dyes, polymers",
        metric: "1,100+ pages"
      }
    ],
    interactiveData: {
      downloads: "25,000+",
      activeUsers: "12,000+",
      successRate: "92%",
      timeSpent: "4.2hrs/week"
    }
  },
  {
    id: "past-papers",
    icon: <Archive className="h-6 w-6" />,
    title: "Complete Past Paper Archive",
    subtitle: "Historical Exam Collection",
    description: "Explore a rich collection of past papers from multiple universities and boards to familiarize yourself with exam patterns. Our collection includes five years of data (2021 to 2025) to help you understand question trends, difficulty levels, and exam format variations.",
    images: [
      `${import.meta.env.BASE_URL}Features 3 PastPapers/1pastpapers-min.webp`,
      `${import.meta.env.BASE_URL}Features 3 PastPapers/2pastpapers-min.webp`,
      `${import.meta.env.BASE_URL}Features 3 PastPapers/3pastpapers-min.webp`,
      `${import.meta.env.BASE_URL}Features 3 PastPapers/4pastpapers-min.webp`,
      `${import.meta.env.BASE_URL}Features 3 PastPapers/5pastpapers-min.webp`
    ],
    keyStatistic: {
      value: "5",
      label: "Years of Papers",
      trend: "+1 per year"
    },
    color: "crypto-teal",
    bgGradient: "from-teal-500/20 to-green-500/20",
    subFeatures: [
      {
        icon: <TrendingUp className="h-4 w-4" />,
        title: "Past Papers (2021-2025)",
        description: "Access a full archive of past MDCAT papers from 2021 to 2025 to track changes in question formats and difficulty. Analyze five years of exam patterns to understand evolving trends and question styles. • Complete question papers with answers • Detailed solution explanations • Topic-wise analysis • Difficulty level assessment • Question pattern recognition • Marking scheme insights • Time management strategies • Comparative year analysis",
        metric: "5 years"
      },
      {
        icon: <BarChart3 className="h-4 w-4" />,
        title: "ETEA/KMU KPK",
        description: "Past papers from the KPK region to help students prepare for local exams. Comprehensive collection from Khyber Pakhtunkhwa's premier educational institutions and testing agencies. • ETEA engineering entrance papers • KMU medical entrance exams • KPK provincial MDCAT papers • Local university admission tests • Regional question patterns • Peshawar Medical College papers • Khyber Medical University collections • Provincial board examinations",
        metric: "Regional focus"
      },
      {
        icon: <Zap className="h-4 w-4" />,
        title: "UHS Punjab",
        description: "Comprehensive past papers from the University of Health Sciences, Punjab. Extensive collection covering all medical and dental college entrance examinations conducted by UHS. • Punjab provincial MDCAT papers • UHS MBBS entrance exams • BDS admission test papers • Pharmacy entrance examinations • Nursing admission tests • Paramedical course papers • Postgraduate entrance exams • Institutional practice tests",
        metric: "Provincial coverage"
      },
      {
        icon: <Shield className="h-4 w-4" />,
        title: "SZABMU Federal",
        description: "Past MDCAT papers from SZABMU Federal for students in Islamabad. Federal-level examination papers covering the capital territory's medical college admission tests. • Federal territory MDCAT papers • SZABMU institutional exams • Islamabad medical college papers • Federal board examinations • Capital region entrance tests • PIMS hospital entrance exams • Federal medical university papers • National level practice tests",
        metric: "Federal papers"
      },
      {
        icon: <Award className="h-4 w-4" />,
        title: "DOW/IBA Sindh",
        description: "Archive of MDCAT past papers from DOW University and IBA Sindh. Comprehensive collection from Sindh's leading medical universities and testing institutions. • Dow University of Health Sciences papers • Jinnah Sindh Medical University exams • Sindh Medical College collections • Karachi medical college papers • Provincial board examinations • Hyderabad medical institution papers • Sukkur IBA university tests • Larkana medical college exams",
        metric: "Sindh region"
      },
      {
        icon: <Star className="h-4 w-4" />,
        title: "NUMS",
        description: "Past papers from the National University of Medical Sciences, perfect for gauging exam trends. National-level examination papers that set the standard for medical education entrance tests. • NUMS-MDCAT national papers • Army Medical College entrance exams • Military hospital admission tests • National university collections • Defense force medical papers • Combined military hospital exams • National medical institute papers • Federal medical college collections",
        metric: "National coverage"
      }
    ],
    interactiveData: {
      downloads: "18,000+",
      activeUsers: "6,200+",
      successRate: "78%",
      timeSpent: "3.8hrs/week"
    }
  },
  {
    id: "practice-tests",
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Practice Tests",
    subtitle: "Full-Length Mock Exams",
    description: "Take full-length mock tests and challenge yourself to simulate the real exam environment. Our comprehensive practice tests replicate the actual MDCAT experience with timed conditions, realistic question distribution, and detailed performance analysis.",
    images: [
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/1Test.webp`,
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/8.webp`,
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/9.webp`,
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/10.webp`,
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/11.webp`,
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/12.webp`,
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/13.webp`,
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/14.webp`,
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/15.webp`,
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/16.webp`,
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/17.webp`,
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/18.webp`,
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/19.webp`,
      `${import.meta.env.BASE_URL}Feature 4 Full Length Test/20.webp`
    ],
    keyStatistic: {
      value: "9",
      label: "Full Tests",
      trend: "Updated regularly"
    },
    color: "crypto-orange",
    bgGradient: "from-orange-500/20 to-red-500/20",
    subFeatures: [
      {
        icon: <Target className="h-4 w-4" />,
        title: "13 Tests",
        description: "Each test consists of 180 MCQs, carefully curated to test your knowledge across all subjects. Experience the complete MDCAT format with proper subject distribution, time constraints, and difficulty progression that mirrors the actual examination. • Complete MDCAT simulation • 180 MCQs per test • Subject-wise distribution • Time management practice • Difficulty level progression • Real exam interface • Instant score calculation • Detailed performance analysis • Question review system • Retake options available",
        metric: "180 MCQs each"
      },
      {
        icon: <Users className="h-4 w-4" />,
        title: "Unique Question Sets",
        description: "These tests are separate from the main MCQ bank, providing a unique set of questions to enhance your exam practice. Fresh content ensures you're tested on new material while reinforcing core concepts through varied question styles and scenarios. • Fresh question pool • Scenario-based questions • Clinical case studies • Applied knowledge testing • Critical thinking scenarios • Problem-solving exercises • Data interpretation • Evidence-based questions • Research methodology • Medical ethics scenarios",
        metric: "Exclusive content"
      }
    ],
    interactiveData: {
      downloads: "32,000+",
      activeUsers: "9,800+",
      successRate: "81%",
      timeSpent: "4.1hrs/week"
    }
  },
  {
    id: "analytics",
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Advanced Analytics",
    subtitle: "Performance Insights",
    description: "Gain insights into your performance and track your improvement with detailed analytics. Our intelligent tracking system provides comprehensive feedback on your strengths, weaknesses, and progress patterns to optimize your study strategy.",
    images: [
      `${import.meta.env.BASE_URL}Feature 5 Analytics/1Analytics-min.webp`,
      `${import.meta.env.BASE_URL}Feature 5 Analytics/2Analytics-min.webp`,
      `${import.meta.env.BASE_URL}Feature 5 Analytics/3Analytics-min.webp`,
      `${import.meta.env.BASE_URL}Feature 5 Analytics/4Analytics-min.webp`
    ],
    keyStatistic: {
      value: "100%",
      label: "Performance Tracking",
      trend: "Real-time updates"
    },
    color: "crypto-green",
    bgGradient: "from-green-500/20 to-emerald-500/20",
    subFeatures: [
      {
        icon: <TrendingUp className="h-4 w-4" />,
        title: "Performance Metrics",
        description: "Get a clear breakdown of your strengths and weaknesses based on your test results. Detailed analysis of your performance across different topics, question types, and difficulty levels to identify areas needing improvement. • Score analysis by subject • Question-type performance • Difficulty level breakdown • Time management metrics • Accuracy percentage tracking • Weak topic identification • Strong area recognition • Improvement opportunity mapping • Comparative analysis tools • Personalized study recommendations",
        metric: "Detailed reports"
      },
      {
        icon: <BarChart3 className="h-4 w-4" />,
        title: "Progress Tracking",
        description: "View detailed graphs and charts to monitor your progress over time. Visual representation of your improvement journey with trend analysis, milestone tracking, and comparative performance metrics. • Daily progress charts • Weekly improvement trends • Monthly performance graphs • Score progression visualization • Study time analytics • Consistency tracking • Goal achievement monitoring • Performance benchmarking • Historical data analysis • Predictive improvement modeling",
        metric: "Visual analytics"
      },
      {
        icon: <CheckCircle className="h-4 w-4" />,
        title: "Subject-Wise Analytics",
        description: "Identify which subjects need more focus by viewing detailed reports. Subject-specific performance analysis with topic-wise breakdowns, time-spent analysis, and personalized recommendations for improvement. • Biology performance analysis • Physics topic breakdown • Chemistry section review • English skills assessment • Logical reasoning evaluation • Subject-wise time allocation • Topic difficulty mapping • Personalized study plans • Improvement priority ranking • Subject-specific strategies",
        metric: "Subject breakdown"
      }
    ],
    interactiveData: {
      downloads: "28,000+",
      activeUsers: "7,500+",
      successRate: "89%",
      timeSpent: "2.9hrs/week"
    }
  }
];

// Legacy export for backward compatibility
export const features = enhancedFeatures.map(({ icon, title, description, images }) => ({
  icon,
  title,
  description,
  image: images[0] // Use first image for backward compatibility
}));
