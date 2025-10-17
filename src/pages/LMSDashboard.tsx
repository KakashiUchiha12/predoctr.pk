import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, Clock, Target, TrendingUp, Play, BookMarked } from 'lucide-react';
import { Link } from 'react-router-dom';
import LMSNavigation from '@/components/LMSNavigation';

const LMSDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:bg-gradient-to-br from-[#2A3A5C] via-[#1F2937] to-[#111827]">
      <LMSNavigation />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome to Your Learning Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track your MDCAT preparation progress and ace your medical entrance exam
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-0">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-500 animate-fade-in" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">0</h3>
            <p className="text-gray-600 dark:text-gray-300">Tests Completed</p>
          </Card>
          <Card className="p-6 text-center shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-0">
            <Award className="w-12 h-12 mx-auto mb-4 text-green-500 animate-fade-in" style={{ animationDelay: '0.1s' }} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">0%</h3>
            <p className="text-gray-600 dark:text-gray-300">Average Score</p>
          </Card>
          <Card className="p-6 text-center shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-0">
            <Target className="w-12 h-12 mx-auto mb-4 text-purple-500 animate-fade-in" style={{ animationDelay: '0.2s' }} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">0</h3>
            <p className="text-gray-600 dark:text-gray-300">Topics Mastered</p>
          </Card>
          <Card className="p-6 text-center shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-0">
            <Clock className="w-12 h-12 mx-auto mb-4 text-orange-500 animate-fade-in" style={{ animationDelay: '0.3s' }} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">0h</h3>
            <p className="text-gray-600 dark:text-gray-300">Study Time</p>
          </Card>
        </div>

        {/* Main Content Placeholder */}
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 text-center shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-0 group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-blue-50 dark:bg-blue-950 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Start Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                Explore MDCAT biology topics with comprehensive test preparation
              </p>
              <Link to="/subjects">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Play className="w-4 h-4 mr-2" />
                  Choose Subject
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-0 group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-green-50 dark:bg-green-950 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-green-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Track Progress</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                Monitor your learning progress with detailed analytics
              </p>
              <Button disabled variant="outline" className="w-full py-3 px-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed">
                <BookMarked className="w-4 h-4 mr-2" />
                Coming Soon
              </Button>
            </Card>

            <Card className="p-8 text-center shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-0 group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-purple-50 dark:bg-purple-950 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-purple-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Practice Tests</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                Take timed practice tests to improve your MDCAT performance
              </p>
              <Link to="/subjects/biology">
                <Button variant="outline" className="w-full py-3 px-6 rounded-lg border-2 border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950 transition-all duration-300">
                  <Target className="w-4 h-4 mr-2" />
                  Start Biology Test
                </Button>
              </Link>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="p-8 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Recent Activity
            </h3>
            <div className="space-y-4">
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                </div>
                <p className="text-lg mb-2 text-gray-600 dark:text-gray-300">No recent activity</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Start your MDCAT preparation journey today!</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LMSDashboard;
