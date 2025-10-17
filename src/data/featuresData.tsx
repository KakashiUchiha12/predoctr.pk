import React from 'react';
<<<<<<< Updated upstream
import { FileQuestion, Book, Archive, ClipboardList, BarChart3, PlayCircle } from 'lucide-react';
=======
import { FileQuestion, Book, Archive, ClipboardList, BarChart3, PlayCircle, Brain, Target, TrendingUp, Shield, Clock, Users, Award, Sparkles, Lightbulb, Star, CheckCircle, Zap, Eye, Video } from 'lucide-react';
>>>>>>> Stashed changes

export interface EnhancedFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  image: string;
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
<<<<<<< Updated upstream
    icon: <FileQuestion className="h-6 w-6" />,
    title: "65,000+ MCQ Bank",
    description: "Master MDCAT with our extensive question bank featuring all subjects with instant detailed explanations.",
    image: "Question Bank.png"
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: "Comprehensive Notes",
    description: "Complete study materials covering Biology, Chemistry, Physics, and English with clear explanations.",
    image: "Notes.png"
  },
  {
    icon: <Archive className="h-6 w-6" />,
    title: "Past Paper Archive",
    description: "Access complete collection of previous MDCAT papers from 2020-2025 with detailed solutions.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&h=300"
  },
  {
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Practice Tests",
    description: "Full-length MDCAT mock tests with timer and comprehensive performance analysis.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&h=300"
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Progress Analytics",
    description: "Track your performance and identify weak areas with detailed analytics and study recommendations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&h=300"
  },
  {
    icon: <PlayCircle className="h-6 w-6" />,
    title: "Video Lectures",
    description: "Expert video lectures by Pakistani medical professors covering all MDCAT syllabus topics.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&h=300"
=======
    id: "mcq-bank",
    icon: <FileQuestion className="h-6 w-6" />,
    title: "65,000+ Smart MCQ Bank",
    subtitle: "AI-Powered Question Intelligence",
    description: "Revolutionary question bank that adapts to your learning style with intelligent difficulty scaling and personalized recommendations.",
    image: "/placeholder.svg",
    keyStatistic: {
      value: "65,000+",
      label: "Questions Generated",
      trend: "+1,200 weekly"
    },
    color: "crypto-purple",
    bgGradient: "from-purple-500/20 to-pink-500/20",
    subFeatures: [
      {
        icon: <Brain className="h-4 w-4" />,
        title: "AI Recommendations",
        description: "Machine learning suggests next best questions",
        metric: "89% accuracy"
      },
      {
        icon: <Target className="h-4 w-4" />,
        title: "Adaptive Difficulty",
        description: "Questions adjust based on performance",
        metric: "5 levels"
      },
      {
        icon: <Sparkles className="h-4 w-4" />,
        title: "Smart Explanations",
        description: "Context-aware detailed solutions",
        metric: "3.2x faster learning"
      },
      {
        icon: <Eye className="h-4 w-4" />,
        title: "Performance Tracking",
        description: "Every click and answer analyzed",
        metric: "100% monitored"
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
    subtitle: "Multilingual Medical Knowledge Base",
    description: "Complete MDCAT syllabus with interactive diagrams, key concepts, and memory enhancement techniques.",
    image: "/placeholder.svg",
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
        title: "Interactive Diagrams",
        description: "3D anatomical models & process charts",
        metric: "400+ diagrams"
      },
      {
        icon: <Users className="h-4 w-4" />,
        title: "Multi-Language",
        description: "English, Urdu, Punjabi versions",
        metric: "3 languages"
      },
      {
        icon: <Video className="h-4 w-4" />,
        title: "Video Integration",
        description: "Embedded educational videos",
        metric: "200+ videos"
      },
      {
        icon: <Star className="h-4 w-4" />,
        title: "Concept Ratings",
        description: "Community-validated quality",
        metric: "4.8/5 rating"
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
    subtitle: "Trend Analysis & Prediction",
    description: "Every MDCAT paper from 2010-2025 with predictive analytics, difficulty analysis, and trend forecasting.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&h=300",
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
        title: "Trend Predictions",
        description: "AI predicts upcoming patterns",
        metric: "2026 predictions"
      },
      {
        icon: <BarChart3 className="h-4 w-4" />,
        title: "Difficulty Analysis",
        description: "Historical performance breakdown",
        metric: "95% accurate"
      },
      {
        icon: <Zap className="h-4 w-4" />,
        title: "Smart Solutions",
        description: "Step-by-step explanations",
        metric: "60s average solve"
      },
      {
        icon: <Shield className="h-4 w-4" />,
        title: "Verified Accuracy",
        description: "Cross-checked with universities",
        metric: "100% verified"
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
    title: "Adaptive Practice Tests",
    subtitle: "Personalized Test Experience",
    description: "Full-length MDCAT simulations with adaptive difficulty, peer comparison, and real-time feedback.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&h=300",
    keyStatistic: {
      value: "200+",
      label: "Mock Tests",
      trend: "+25 monthly"
    },
    color: "crypto-orange",
    bgGradient: "from-orange-500/20 to-red-500/20",
    subFeatures: [
      {
        icon: <Target className="h-4 w-4" />,
        title: "Adaptive Difficulty",
        description: "Questions scale with ability",
        metric: "Real-time adjust"
      },
      {
        icon: <Users className="h-4 w-4" />,
        title: "Peer Ranking",
        description: "Compare with top performers",
        metric: "Live leaderboard"
      },
      {
        icon: <Clock className="h-4 w-4" />,
        title: "Time Management",
        description: "Smart timer with analytics",
        metric: "5hr tracking"
      },
      {
        icon: <Award className="h-4 w-4" />,
        title: "Performance Badges",
        description: "Motivational achievement system",
        metric: "50+ badges"
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
    title: "AI-Powered Analytics",
    subtitle: "Intelligent Study Insights",
    description: "Advanced analytics dashboard with AI-driven study plans, weakness prediction, and personalized coaching.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&h=300",
    keyStatistic: {
      value: "1M+",
      label: "Data Points",
      trend: "+100K daily"
    },
    color: "crypto-green",
    bgGradient: "from-green-500/20 to-emerald-500/20",
    subFeatures: [
      {
        icon: <TrendingUp className="h-4 w-4" />,
        title: "Study Predictions",
        description: "AI predicts weak areas",
        metric: "87% accuracy"
      },
      {
        icon: <BarChart3 className="h-4 w-4" />,
        title: "Custom Plans",
        description: "Personalized study schedules",
        metric: "Adaptive plans"
      },
      {
        icon: <CheckCircle className="h-4 w-4" />,
        title: "Progress Tracking",
        description: "Milestone-based encouragement",
        metric: "24/7 monitored"
      },
      {
        icon: <Users className="h-4 w-4" />,
        title: "Mentorship Access",
        description: "Connect with top performers",
        metric: "1-on-1 sessions"
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
    subtitle: "Pakistani Medical Professors",
    description: "200+ hours of premium video content from top Pakistani medical professors with interactive Q&A and notes.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&h=300",
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
        title: "Expert Professors",
        description: "15 top Pakistani professors",
        metric: "100% verified"
      },
      {
        icon: <PlayCircle className="h-4 w-4" />,
        title: "Smart Playlists",
        description: "AI-curated learning sequences",
        metric: "50+ playlists"
      },
      {
        icon: <Users className="h-4 w-4" />,
        title: "Live Q&A",
        description: "Weekly interactive sessions",
        metric: "99% attendance"
      },
      {
        icon: <Sparkles className="h-4 w-4" />,
        title: "Interactive Notes",
        description: "Sync notes with video playback",
        metric: "Real-time sync"
      }
    ],
    interactiveData: {
      downloads: "22,000+",
      activeUsers: "11,200+",
      successRate: "94%",
      timeSpent: "5.2hrs/week"
    }
>>>>>>> Stashed changes
  }
];

// Legacy export for backward compatibility
export const features = enhancedFeatures.map(({ icon, title, description, image }) => ({
  icon,
  title,
  description,
  image
}));
