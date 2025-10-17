import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, RotateCcw } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import LMSNavigation from '@/components/LMSNavigation';

const TestResults = () => {
  const navigate = useNavigate();
  const { testId } = useParams();

  // Placeholder data - will be populated from route params and localStorage in Phase 4
  const mockResults = {
    score: 8,
    total: 10,
    percentage: 80,
    timeSpent: '15:32',
    topic: 'Cell Structure and Function',
    testNumber: 1,
    date: new Date().toLocaleDateString()
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 85) return 'text-green-600';
    if (percentage >= 70) return 'text-blue-600';
    if (percentage >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (percentage: number) => {
    if (percentage >= 85) return 'bg-green-50 dark:bg-green-950 border-green-200';
    if (percentage >= 70) return 'bg-blue-50 dark:bg-blue-950 border-blue-200';
    if (percentage >= 50) return 'bg-yellow-50 dark:bg-yellow-950 border-yellow-200';
    return 'bg-red-50 dark:bg-red-950 border-red-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:bg-gradient-to-br from-[#2A3A5C] via-[#1F2937] to-[#111827]">
      <LMSNavigation />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Test Results
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {mockResults.topic} - Test {mockResults.testNumber}
            </p>

            {/* Score Display */}
            <div className={`${getScoreBackground(mockResults.percentage)} rounded-3xl p-12 mb-8 border-2 shadow-lg`}>
              <div className={`text-8xl font-bold ${getScoreColor(mockResults.percentage)} mb-4`}>
                {mockResults.percentage}%
              </div>
              <div className={`text-2xl font-semibold ${getScoreColor(mockResults.percentage)} mb-2`}>
                {mockResults.score} out of {mockResults.total}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Questions Correct
              </div>
            </div>

            {/* Test Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4">
                <div className="text-2xl font-bold text-purple-600 mb-1">{mockResults.timeSpent}</div>
                <div className="text-gray-600 dark:text-gray-400">Time Spent</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">{mockResults.date}</div>
                <div className="text-gray-600 dark:text-gray-400">Date Taken</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-green-600 mb-1">Completed</div>
                <div className="text-gray-600 dark:text-gray-400">Status</div>
              </div>
            </div>

            {/* Performance Breakdown */}
            <Card className="p-8 mb-8 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Performance Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-gray-300">Questions Answered</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{mockResults.total}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-gray-300">Correct Answers</span>
                  <span className="font-semibold text-green-600">{mockResults.score}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-gray-300">Incorrect Answers</span>
                  <span className="font-semibold text-red-600">{mockResults.total - mockResults.score}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-gray-300">Unanswered Questions</span>
                  <span className="font-semibold text-gray-600 dark:text-gray-400">0</span>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/subjects/biology')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Biology Topics
              </Button>
              <Button
                onClick={() => navigate('/dashboard')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Home className="w-4 h-4 mr-2" />
                Go to Dashboard
              </Button>
            </div>

            {/* Encouragement Message */}
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                {mockResults.percentage >= 85
                  ? "🎉 Excellent work! Your understanding of this topic is outstanding. Keep up the great performance!"
                  : mockResults.percentage >= 70
                  ? "👏 Good job! You have a solid understanding. Review the incorrect answers to improve further."
                  : mockResults.percentage >= 50
                  ? "📚 Keep practicing! Focus on the areas you missed and review the explanations carefully."
                  : "💪 Don't Give up! Use the detailed explanations to understand the concepts better and try again."
                }
              </p>
            </div>

            {/* Upcoming Features */}
            <div className="mt-6 text-center text-gray-500 dark:text-gray-400">
              <p className="text-sm">🔧 Full test analysis and detailed explanations coming in Phase 4!</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestResults;
