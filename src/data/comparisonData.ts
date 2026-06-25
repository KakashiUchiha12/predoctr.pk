export interface ComparisonItem {
  category: string;
  preDoctr: string | boolean | number;
  competitors: string | boolean | number;
  description?: string;
}

export const comparisonData: ComparisonItem[] = [
  {
    category: "MCQ Bank Size",
    preDoctr: "65,000+ Questions",
    competitors: "5,000-15,000 Questions",
    description: "Comprehensive question bank covering all MDCAT topics"
  },
  {
    category: "Content Quality",
    preDoctr: "✅ Expert-Crafted",
    competitors: "❌ Generic Content",
    description: "Created by Pakistani medical professors with MDCAT expertise"
  },
  {
    category: "Syllabus Coverage",
    preDoctr: "✅ 100% Complete",
    competitors: "❌ 60-80% Coverage",
    description: "Every topic from official PMDC syllabus included"
  },
  {
    category: "Answer Explanations",
    preDoctr: "✅ Detailed Solutions",
    competitors: "❌ Basic Answers",
    description: "Step-by-step explanations with medical context"
  },
  {
    category: "Progress Analytics",
    preDoctr: "✅ Advanced Analytics",
    competitors: "❌ Basic Tracking",
    description: "Personalized study recommendations and weak area identification"
  },
  {
    category: "Video Lectures",
    preDoctr: "✅ Expert Faculty",
    competitors: "❌ Mixed Quality",
    description: "High-quality lectures by experienced medical professors"
  },
  {
    category: "Past Papers",
    preDoctr: "✅ 2021-2025 Complete",
    competitors: "❌ Limited Years",
    description: "Complete archive with detailed solutions"
  },
  {
    category: "Mobile App",
    preDoctr: "✅ Full-Featured",
    competitors: "❌ Limited Features",
    description: "Complete study platform optimized for mobile learning"
  },
  {
    category: "Study Plans",
    preDoctr: "✅ Personalized",
    competitors: "❌ Generic Plans",
    description: "Custom study schedules based on your progress and performance"
  },
  {
    category: "Support",
    preDoctr: "✅ 24/7 Available",
    competitors: "❌ Limited Hours",
    description: "Round-the-clock support from MDCAT experts"
  },
  {
    category: "Pricing",
    preDoctr: "✅ Transparent",
    competitors: "❌ Hidden Costs",
    description: "Clear pricing with no surprise fees"
  },
  {
    category: "Success Rate",
    preDoctr: "✅ 90%+ Pass Rate",
    competitors: "❌ 40-60% Average",
    description: "Proven track record of student success"
  }
];

export const uniqueSellingPoints = [
  {
    title: "Pakistani Medical Context",
    description: "Content specifically designed for Pakistani MDCAT with local medical examples and case studies",
    icon: "🇵🇰"
  },
  {
    title: "PMDC Syllabus Aligned",
    description: "100% coverage of official Pakistan Medical & Dental Council syllabus requirements",
    icon: "📋"
  },
  {
    title: "Expert Medical Faculty",
    description: "Lectures and content created by practicing Pakistani medical professors and specialists",
    icon: "👨‍⚕️"
  },
  {
    title: "Lower Price Point",
    description: "We charge only 10,000 PKR for complete MDCAT preparation, while academies charge up to 30,000 PKR",
    icon: "💰"
  },
  {
    title: "Mobile-First Design",
    description: "Optimized for smartphone learning - study anywhere, anytime without desktop dependency",
    icon: "📱"
  },
  {
    title: "Comprehensive Analytics",
    description: "Detailed performance tracking with subject-wise breakdowns and improvement predictions",
    icon: "📊"
  }
];
