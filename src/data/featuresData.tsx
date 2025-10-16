import React from 'react';
import { FileQuestion, Book, Archive, ClipboardList, BarChart3, PlayCircle } from 'lucide-react';

export const features = [
  {
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
  }
];
