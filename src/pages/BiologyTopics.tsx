import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Leaf, Zap, TestTube, Microscope, Brain, Bird, Atom,
  Heart, PoundSterling, Gavel, Bug, HeartHandshake, Bone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LMSNavigation from '@/components/LMSNavigation';

const biologyTopics = [
  {
    id: 'biodiversity',
    title: 'Biodiversity',
    subtitle: 'Acellular life / Variety of life',
    description: 'Explore the vast diversity of life forms from microorganisms to complex ecosystems',
    icon: Leaf,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950',
    borderColor: 'border-green-200 dark:border-green-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'bio-energetics',
    title: 'Bio-energetics',
    subtitle: 'Energy conversion in living organisms',
    description: 'Respiration, photosynthesis, and energy flow in biological systems',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950',
    borderColor: 'border-yellow-200 dark:border-yellow-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'biological-molecules',
    title: 'Biological Molecules',
    subtitle: 'Building blocks of life',
    description: 'Carbohydrates, proteins, lipids, and their roles in biological processes',
    icon: TestTube,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950',
    borderColor: 'border-purple-200 dark:border-purple-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'cell-structure-function',
    title: 'Cell Structure and Function',
    subtitle: 'The basic unit of life',
    description: 'Cellular organelles, membrane structure, and their functions',
    icon: Microscope,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    borderColor: 'border-blue-200 dark:border-blue-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'coordination-control',
    title: 'Coordination and Control',
    subtitle: 'Nervous & Chemical Coordination',
    description: 'Nervous system, hormones, and chemical signaling in organisms',
    icon: Brain,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950',
    borderColor: 'border-indigo-200 dark:border-indigo-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'diversity-among-animals',
    title: 'Diversity among Animals',
    subtitle: 'Animal kingdom diversity',
    description: 'Classification, characteristics, and diversity of animal species',
    icon: Bird,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 dark:bg-teal-950',
    borderColor: 'border-teal-200 dark:border-teal-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'enzymes',
    title: 'Enzymes',
    subtitle: 'Biological catalysts',
    description: 'Enzyme structure, function, and regulation in metabolic pathways',
    icon: Atom,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950',
    borderColor: 'border-cyan-200 dark:border-cyan-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'evolution',
    title: 'Evolution',
    subtitle: 'Mechanisms of evolutionary change',
    description: 'Natural selection, genetic variation, and evolutionary mechanisms',
    icon: Leaf,
    color: 'text-lime-600',
    bgColor: 'bg-lime-50 dark:bg-lime-950',
    borderColor: 'border-lime-200 dark:border-lime-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'life-processes-1',
    title: 'Life Process in Animals & Plants',
    subtitle: 'Cardiovascular System',
    description: 'Blood circulation, heart function, and vascular systems in organisms',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950',
    borderColor: 'border-red-200 dark:border-red-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'life-processes-2',
    title: 'Life Process in Animals & Plants',
    subtitle: 'Human Digestive System',
    description: 'Digestion, nutrient absorption, and gastrointestinal processes',
    icon: PoundSterling,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950',
    borderColor: 'border-orange-200 dark:border-orange-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'life-processes-3',
    title: 'Life Process in Animals & Plants',
    subtitle: 'Human Immune System',
    description: 'Immune responses, defense mechanisms, and disease resistance',
    icon: Gavel,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50 dark:bg-rose-950',
    borderColor: 'border-rose-200 dark:border-rose-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'life-processes-4',
    title: 'Life Process in Animals & Plants',
    subtitle: 'Human Respiratory System',
    description: 'Gas exchange, breathing mechanisms, and respiratory processes',
    icon: Leaf, // Using Leaf as lung representation
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
    borderColor: 'border-emerald-200 dark:border-emerald-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'prokaryotes',
    title: 'Prokaryotes',
    subtitle: 'Single-celled organisms',
    description: 'Bacterial structure, reproduction, and their medical significance',
    icon: Bug,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950',
    borderColor: 'border-amber-200 dark:border-amber-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'reproduction',
    title: 'Reproduction',
    subtitle: 'Life cycle continuation',
    description: 'Sexual and asexual reproduction in plants and animals',
    icon: HeartHandshake,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-950',
    borderColor: 'border-pink-200 dark:border-pink-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'support-movement',
    title: 'Support & Movement',
    subtitle: 'Structural integrity and mobility',
    description: 'Skeletal systems, muscles, and locomotion in organisms',
    icon: Bone,
    color: 'text-slate-600',
    bgColor: 'bg-slate-50 dark:bg-slate-950',
    borderColor: 'border-slate-200 dark:border-slate-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'variation-genetics',
    title: 'Variation & Genetics / Inheritance',
    subtitle: 'Genetic diversity and heredity',
    description: 'Genetic variation, inheritance patterns, and population genetics',
    icon: Atom,
    color: 'text-violet-600',
    bgColor: 'bg-violet-50 dark:bg-violet-950',
    borderColor: 'border-violet-200 dark:border-violet-700',
    testsCompleted: 0,
    totalTests: 4
  },
  {
    id: 'homeostasis',
    title: 'Homeostasis',
    subtitle: 'Internal balance maintenance',
    description: 'Temperature regulation, pH balance, and physiological equilibrium',
    icon: Leaf,
    color: 'text-sky-600',
    bgColor: 'bg-sky-50 dark:bg-sky-950',
    borderColor: 'border-sky-200 dark:border-sky-700',
    testsCompleted: 0,
    totalTests: 4
  }
];

const BiologyTopics = () => {
  const navigate = useNavigate();

  const handleTopicClick = (topicId: string) => {
    navigate(`/subjects/biology/${topicId}/1`);
  };

  const handleTestClick = (topicId: string, testNumber: number) => {
    navigate(`/subjects/biology/${topicId}/${testNumber}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-100 dark:bg-gradient-to-br from-[#2A3A5C] via-[#1F2937] to-[#111827]">
      <LMSNavigation />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🌿 Biology Topics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore specialized biology topics essential for MDCAT preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {biologyTopics.map((topic) => {
            const IconComponent = topic.icon;

            return (
              <Card
                key={topic.id}
                className={`p-6 transition-all duration-300 hover:shadow-xl cursor-pointer shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 hover:scale-105 group`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${topic.bgColor} border-2 ${topic.borderColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${topic.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {topic.subtitle}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {topic.description}
                    </p>
                  </div>
                </div>

                {/* Test Progress Circles */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  {Array.from({ length: 4 }, (_, index) => {
                    const testNumber = index + 1;
                    const isCompleted = topic.testsCompleted >= testNumber;

                    return (
                      <div
                        key={testNumber}
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 ${
                          isCompleted
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-400 hover:border-gray-400'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTestClick(topic.id, testNumber);
                        }}
                      >
                        <span className="text-xs font-semibold">{testNumber}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Topic Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 py-2 px-3 text-sm border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                    onClick={() => handleTopicClick(topic.id)}
                  >
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2 px-3 text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => handleTestClick(topic.id, topic.testsCompleted < 4 ? topic.testsCompleted + 1 : 1)}
                  >
                    {topic.testsCompleted === 4 ? 'Review Tests' : `Start Test ${topic.testsCompleted + 1}`}
                  </Button>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{topic.testsCompleted}/4 Tests</span>
                    <span className={`${topic.testsCompleted === 4 ? 'text-green-600' : 'text-blue-600'}`}>
                      {topic.testsCompleted === 4 ? 'Topic Complete' : `${4 - topic.testsCompleted} Remaining`}
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Progress Summary */}
        <Card className="p-8 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Biology Learning Progress
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">17</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Topics</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-green-600 mb-2">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Topics Completed</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-600 mb-2">0/68</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tests Completed</div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
          <p>🧪 Welcome to your MDCAT Biology preparation! Each topic includes 4 comprehensive tests with detailed explanations.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BiologyTopics;
