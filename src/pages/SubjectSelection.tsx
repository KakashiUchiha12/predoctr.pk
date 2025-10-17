import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Dna, FlaskConical, Atom, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LMSNavigation from '@/components/LMSNavigation';

const subjects = [
  {
    id: 'biology',
    name: 'Biology MCQs',
    description: 'Master biological concepts with medically-focused MCQs',
    icon: Dna,
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-950',
    borderColor: 'border-green-200 dark:border-green-700',
    available: true,
    topicCount: 17,
    totalQuestions: 680
  },
  {
    id: 'physics',
    name: 'Physics MCQs',
    description: 'Medical physics concepts and problem-solving',
    icon: Atom,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    borderColor: 'border-blue-200 dark:border-blue-700',
    available: false,
    topicCount: 0,
    totalQuestions: 0
  },
  {
    id: 'chemistry',
    name: 'Chemistry MCQs',
    description: 'Organic and inorganic chemistry for medical entrance',
    icon: FlaskConical,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950',
    borderColor: 'border-purple-200 dark:border-purple-700',
    available: false,
    topicCount: 0,
    totalQuestions: 0
  }
];

const SubjectSelection = () => {
  const navigate = useNavigate();

  const handleSubjectClick = (subjectId: string, available: boolean) => {
    if (!available) return;
    navigate(`/cryptoflow/subjects/${subjectId}`);
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:bg-gradient-to-br from-[#2A3A5C] via-[#1F2937] to-[#111827]">
      <LMSNavigation />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Subject
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select a subject to explore topics and start practicing MCQs for MDCAT preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subjects.map((subject) => {
            const IconComponent = subject.icon;
            const isAvailable = subject.available;

            return (
              <Card
                key={subject.id}
                className={`p-8 text-center transition-all duration-300 cursor-pointer shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 hover:shadow-2xl group ${
                  isAvailable
                    ? 'hover:scale-105'
                    : 'cursor-not-allowed opacity-60'
                }`}
                onClick={() => handleSubjectClick(subject.id, isAvailable)}
              >
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${subject.bgColor} border-2 ${subject.borderColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-12 h-12 ${subject.color}`} />
                  </div>
                  {!isAvailable && (
                    <div className="absolute -top-2 -right-2 bg-gray-500 rounded-full p-2">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {subject.name}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {subject.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">{subject.topicCount}</span> Topics Available
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">{subject.totalQuestions}</span> Practice Questions
                  </div>
                </div>

                <Button
                  disabled={!isAvailable}
                  className={`w-full py-3 px-6 text-lg font-semibold rounded-lg transition-all duration-300 ${
                    isAvailable
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                >
                  {!isAvailable ? 'Coming Soon' : 'Explore Topics'}
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 text-gray-500 dark:text-gray-400">
          <p>📚 More subjects (Physics & Chemistry) coming soon! Stay tuned for comprehensive MDCAT preparation.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection;
