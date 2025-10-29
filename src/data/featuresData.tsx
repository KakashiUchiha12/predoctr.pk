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
    id: "mcq-bank",
    icon: <FileQuestion className="h-6 w-6" />,
    title: "65,000+ Smart MCQ Bank",
    subtitle: "Comprehensive Question Collection",
    description: "Unlock an extensive collection of MCQs across all major subjects, designed to boost your MDCAT preparation. Our comprehensive question bank covers every topic you'll encounter in the MDCAT exam, ensuring you're fully prepared for test day.",
    images: [
      "/predoctr.pk/11.png",
      "/predoctr.pk/22.png",
      "/predoctr.pk/33.png",
      "/predoctr.pk/44.png",
      "/predoctr.pk/55.png",
      "/predoctr.pk/66.png"
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
        description: "A vast range of biology-related questions covering all topics, from cell biology to ecology. Master every aspect of biological sciences with our comprehensive collection that includes cellular processes, genetics, evolution, human physiology, and ecological systems. • Covers cell structure and function • Detailed genetics and molecular biology • Human anatomy and physiology • Plant biology and taxonomy • Ecology and environmental science • Biotechnology and bioinformatics • Microbiology and immunology • Evolution and biodiversity",
        metric: "15,000+ questions"
      },
      {
        icon: <Target className="h-4 w-4" />,
        title: "Physics MCQs",
        description: "Comprehensive physics questions to help master concepts from mechanics to electromagnetism. Build a strong foundation in physical principles including classical mechanics, thermodynamics, waves, optics, and modern physics applications. • Mechanics and kinematics • Thermodynamics and heat • Waves and oscillations • Optics and light • Electromagnetism and circuits • Modern physics and quantum mechanics • Nuclear physics basics • Astrophysics fundamentals",
        metric: "12,000+ questions"
      },
      {
        icon: <Sparkles className="h-4 w-4" />,
        title: "Chemistry MCQs",
        description: "In-depth questions on organic, inorganic, and physical chemistry to solidify your understanding. Explore chemical reactions, molecular structures, periodic trends, and laboratory techniques across all branches of chemistry. • Physical chemistry and thermodynamics • Inorganic chemistry and coordination compounds • Organic chemistry and reaction mechanisms • Analytical chemistry techniques • Environmental chemistry • Industrial chemistry applications • Biochemistry basics • Pharmaceutical chemistry",
        metric: "18,000+ questions"
      },
      {
        icon: <Eye className="h-4 w-4" />,
        title: "English MCQs",
        description: "Questions designed to test your comprehension, vocabulary, and language skills. Enhance your reading comprehension, grammar knowledge, and language proficiency to excel in the English section of MDCAT. • Reading comprehension passages • Vocabulary building exercises • Grammar and syntax rules • Sentence completion • Error detection and correction • Synonyms and antonyms • Idioms and phrases • Literature analysis",
        metric: "10,000+ questions"
      },
      {
        icon: <Lightbulb className="h-4 w-4" />,
        title: "Logical Reasoning MCQs",
        description: "Sharpen your reasoning abilities with questions based on patterns, sequences, and logical deductions. Develop critical thinking skills through analytical reasoning, pattern recognition, and logical problem-solving exercises. • Pattern recognition and series • Logical deduction and inference • Critical thinking problems • Data interpretation • Statement analysis • Syllogism and logical arguments • Puzzle solving • Decision making scenarios",
        metric: "10,000+ questions"
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
      "/predoctr.pk/77.png",
      "/predoctr.pk/88.png",
      "/predoctr.pk/99.png",
      "/predoctr.pk/1010.png"
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
        description: "Detailed notes covering every major biology topic, from genetics to human physiology. Comprehensive coverage of cellular biology, molecular genetics, human anatomy, plant physiology, and ecological systems with detailed diagrams and explanations. • Cell structure and function • Molecular biology and genetics • Human physiology and anatomy • Plant biology and taxonomy • Ecology and environmental science • Biotechnology and bioinformatics • Microbiology and immunology • Evolution and biodiversity • Neurobiology and endocrinology • Reproductive biology and embryology",
        metric: "800+ pages"
      },
      {
        icon: <Users className="h-4 w-4" />,
        title: "Physics Notes",
        description: "Comprehensive explanations of physics concepts, complete with formulas and problem-solving strategies. Master fundamental principles, mathematical derivations, and practical applications across all physics domains. • Mechanics and kinematics • Thermodynamics and heat transfer • Electromagnetism and circuits • Waves and oscillations • Optics and light phenomena • Modern physics and quantum mechanics • Nuclear and particle physics • Astrophysics and cosmology • Fluid mechanics and dynamics • Electronics and semiconductor physics",
        metric: "600+ pages"
      },
      {
        icon: <Video className="h-4 w-4" />,
        title: "Chemistry Notes",
        description: "Exhaustive notes covering all areas of chemistry, including organic, inorganic, and physical chemistry. Detailed coverage of chemical reactions, molecular structures, reaction mechanisms, and laboratory techniques. • Physical chemistry and thermodynamics • Inorganic chemistry and coordination compounds • Organic chemistry and reaction mechanisms • Analytical chemistry techniques • Environmental chemistry • Industrial chemistry applications • Biochemistry and molecular biology • Pharmaceutical chemistry • Polymer chemistry • Surface chemistry and colloids",
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
    description: "Explore a rich collection of past papers from multiple universities and boards to familiarize yourself with exam patterns. Our extensive archive includes years of historical data to help you understand question trends, difficulty levels, and exam format variations.",
    images: [
      "https://images.unsplash.com/photo-1565843708714-52ecf69a98b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501436513145-30f24e19fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    keyStatistic: {
      value: "16",
      label: "Years of Papers",
      trend: "+2 per year"
    },
    color: "crypto-teal",
    bgGradient: "from-teal-500/20 to-green-500/20",
    subFeatures: [
      {
        icon: <TrendingUp className="h-4 w-4" />,
        title: "Past Papers (2020-2025)",
        description: "Access a full archive of past MDCAT papers from 2020 to 2025 to track changes in question formats and difficulty. Analyze six years of exam patterns to understand evolving trends and question styles. • Complete question papers with answers • Detailed solution explanations • Topic-wise analysis • Difficulty level assessment • Question pattern recognition • Marking scheme insights • Time management strategies • Comparative year analysis",
        metric: "6 years"
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
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        title: "9 Full-Length Tests",
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
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
  },
  {
    id: "video-lectures",
    icon: <PlayCircle className="h-6 w-6" />,
    title: "Expert Video Lectures",
    subtitle: "Professional Educational Content",
    description: "Learn directly from subject experts with our exclusive video lecture series. Our comprehensive library of educational videos features experienced professors and subject matter experts delivering in-depth explanations of complex topics.",
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      }
    ],
    interactiveData: {
      downloads: "22,000+",
      activeUsers: "11,200+",
      successRate: "94%",
      timeSpent: "5.2hrs/week"
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
