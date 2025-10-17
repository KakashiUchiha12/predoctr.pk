import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Clock, Home, ArrowLeft, ArrowRight, Eye, Timer } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import LMSNavigation from '@/components/LMSNavigation';

// Sample MCQ data - will be moved to separate file in Phase 2
const sampleMCQs = {
  'test1': [
    {
      id: 1,
      question: "Which of the following is a prokaryotic organism?",
      options: {
        A: "Amoeba",
        B: "E.coli",
        C: "Mushroom",
        D: "Yeast"
      },
      correctAnswer: 'B',
      explanation: "E.coli is a bacterium and bacteria are prokaryotic organisms. Amoeba, Mushroom, and Yeast are all eukaryotic organisms."
    },
    {
      id: 2,
      question: "Which enzyme is responsible for DNA replication?",
      options: {
        A: "DNA ligase",
        B: "DNA polymerase",
        C: "RNA polymerase",
        D: "Primase"
      },
      correctAnswer: 'B',
      explanation: "DNA polymerase is the main enzyme responsible for DNA replication by synthesizing new DNA strands using the template strand."
    }
  ]
};

const MCQTest = () => {
  const navigate = useNavigate();
  const { topicId, testId } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [timer, setTimer] = useState(600); // 10 minutes
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [testResults, setTestResults] = useState<any>(null);

  const questions = sampleMCQs['test1'] || [];

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerEnabled && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            handleFinishTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer, timerEnabled]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinishTest = () => {
    const results = questions.map(q => {
      const studentAnswer = selectedAnswers[q.id];
      const isCorrect = studentAnswer === q.correctAnswer;
      return {
        questionId: q.id,
        studentAnswer,
        correctAnswer: q.correctAnswer,
        isCorrect,
        explanation: q.explanation
      };
    });

    const score = results.filter(r => r.isCorrect).length;
    const percentage = Math.round((score / questions.length) * 100);

    setTestResults({
      score,
      total: questions.length,
      percentage,
      results,
      timeSpent: timerEnabled ? (600 - timer) : null
    });

    setShowResults(true);

    // Save to localStorage (will be implemented properly in Phase 3)
    const existingData = JSON.parse(localStorage.getItem('lmsProgress') || '{}');
    const progressKey = `biology_${topicId}_test_${testId}`;
    existingData[progressKey] = {
      score,
      percentage,
      completedAt: new Date().toISOString(),
      timeSpent: timerEnabled ? (600 - timer) : null
    };
    localStorage.setItem('lmsProgress', JSON.stringify(existingData));
    navigate(`/cryptoflow/testresults`);
  };

  const currentQ = questions[currentQuestion];

  if (showResults && testResults) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:bg-gradient-to-br from-[#2A3A5C] via-[#1F2937] to-[#111827]">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Test Results</h1>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-4xl font-bold text-green-600">{testResults.score}</div>
                <div className="text-gray-600">Correct Answers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">{testResults.percentage}%</div>
                <div className="text-gray-600">Score</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600">{testResults.total}</div>
                <div className="text-gray-600">Total Questions</div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {testResults.results.map((result: any) => {
                const question = questions.find(q => q.id === result.questionId);
                return (
                  <Card key={result.questionId} className="p-6 text-left">
                    <div className="flex items-start gap-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                        result.isCorrect
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}>
                        {result.isCorrect ? '✓' : '✗'}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-2">
                          {question?.question}
                        </p>
                        <div className="space-y-1 text-sm mb-4">
                          <p><strong>Your Answer:</strong> {result.studentAnswer || 'Not answered'}</p>
                          <p><strong>Correct Answer:</strong> {result.correctAnswer}</p>
                        </div>
                        <details className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <summary className="font-semibold cursor-pointer">Show Explanation</summary>
                          <p className="mt-2 text-gray-700 dark:text-gray-300">{result.explanation}</p>
                        </details>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate('/cryptoflow/subjects/biology')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Topics
              </Button>
              <Button
                onClick={() => navigate('/cryptoflow/dashboard')}
              >
                <Home className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-100 dark:bg-gradient-to-br from-[#2A3A5C] via-[#1F2937] to-[#111827]">
      <LMSNavigation />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-xl border-0">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Biology Topic {topicId} - Test {testId}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* Timer Toggle */}
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <Checkbox
                    checked={timerEnabled}
                    onCheckedChange={(checked) => setTimerEnabled(checked as boolean)}
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Enable Timer</span>
                </div>

                {/* Timer Display */}
                {timerEnabled && (
                  <div className="text-xl font-mono font-bold text-red-600 bg-red-50 dark:bg-red-950 px-3 py-1 rounded-lg">
                    {formatTime(timer)}
                  </div>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <Progress
              value={(currentQuestion + 1) / questions.length * 100}
              className="mb-2"
            />

            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Progress: {Math.round((currentQuestion + 1) / questions.length * 100)}%</span>
              <span>Answered: {Object.keys(selectedAnswers).length}/{questions.length}</span>
            </div>
          </div>
        </div>

        {/* Question */}
        <Card className="p-8 mb-6 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0">
          {currentQ && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                {currentQ.question}
              </h2>

              <div className="space-y-4">
                {Object.entries(currentQ.options).map(([key, value]) => {
                  const isSelected = selectedAnswers[currentQ.id] === key;
                  return (
                    <div
                      key={key}
                      onClick={() => handleAnswerSelect(currentQ.id, key)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950 shadow-lg'
                          : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-300 ${
                          isSelected
                            ? 'bg-blue-500 border-blue-500 text-white scale-110'
                            : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}>
                          {key}
                        </div>
                        <span className="text-gray-900 dark:text-white">{value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="flex gap-2">
            {currentQuestion === questions.length - 1 ? (
              <Button
                onClick={handleFinishTest}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Finish Test
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!selectedAnswers[questions[currentQuestion]?.id]}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>

        {/* Q&A Navigation */}
        <div className="mt-6">
          <div className="flex justify-center gap-2 flex-wrap">
            {questions.map((_, index) => (
              <Button
                key={index}
                variant={index === currentQuestion ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentQuestion(index)}
                className={`w-10 h-10 transition-all duration-300 hover:scale-110 ${
                  selectedAnswers[questions[index]?.id]
                    ? 'bg-green-500 border-green-500 text-white shadow-lg'
                    : 'border-2 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                }`}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCQTest;
