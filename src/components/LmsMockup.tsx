import React, { useState, useEffect } from 'react';
import { 
  PlayCircle, BookOpen, HelpCircle, ChevronRight, Clock, 
  ChevronLeft, X, CheckCircle2, Bookmark, BarChart3, 
  Lock, Sparkles, Brain, Award, Check, Flame, 
  ArrowRight, RefreshCw, AlertTriangle, Trophy, Activity
} from 'lucide-react';

interface LmsMockupProps {
  activeTabId: string;
  isMobile?: boolean;
}

export default function LmsMockup({ activeTabId, isMobile = false }: LmsMockupProps) {
  // Reset internal state on active tab change to sync simulation views
  useEffect(() => {
    if (activeTabId === 'video-lectures') {
      setLecturesView('subjects');
    } else if (activeTabId === 'practice-tests') {
      setFltState('dashboard');
    } else if (activeTabId === 'past-papers') {
      setPastPapersView('regions');
      setSelectedPaperRegion(null);
      setSelectedPaperYear(null);
    }
  }, [activeTabId]);

  // =========================================================================
  // 1. VIDEO LECTURES STATE & SIMULATOR
  // =========================================================================
  const [lecturesView, setLecturesView] = useState<'subjects' | 'chapters' | 'player'>('subjects');
  const [selectedSubject, setSelectedSubject] = useState<{ id: string; name: string; color: string; chaptersCount: number; questionsCount: string; image: string } | null>(null);
  const [selectedLecture, setSelectedLecture] = useState<string>('Lecture 1: Stoichiometry & Mole Concepts');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [completedLectures, setCompletedLectures] = useState<Record<string, boolean>>({});

  const toggleLectureComplete = (lectureName: string) => {
    setCompletedLectures(prev => ({
      ...prev,
      [lectureName]: !prev[lectureName]
    }));
  };

  const mockLecturesData = {
    biology: {
      name: 'Biology Lectures',
      color: '#10b981',
      chaptersCount: 24,
      questionsCount: '11,000+',
      image: '/BIOLOGY-LECTURES.webp',
      chapters: [
        { title: 'Chapter 1: Cell Structure & Function', duration: '3h 15m', lectures: ['Lecture 1: Eukaryotic vs Prokaryotic Cells', 'Lecture 2: Cell Membrane & Transport', 'Lecture 3: Organelles Detailed Analysis'] },
        { title: 'Chapter 2: Biological Molecules', duration: '2h 45m', lectures: ['Lecture 1: Carbohydrates & Lipids structure', 'Lecture 2: Proteins & Nucleic Acids structure'] }
      ]
    },
    chemistry: {
      name: 'Chemistry Lectures',
      color: '#f59e0b',
      chaptersCount: 18,
      questionsCount: '11,000+',
      image: '/CHEMISTRY-LECTURES.webp',
      chapters: [
        { title: 'Chapter 1: Intro to Fundamental Concepts', duration: '4h 10m', lectures: ['Lecture 1: Stoichiometry & Mole Concepts', 'Lecture 2: Limiting Reactants & Yields'] },
        { title: 'Chapter 2: Atomic Structure', duration: '3h 30m', lectures: ['Lecture 1: Bohr\'s Atomic Theory & Quantum Numbers', 'Lecture 2: Electronic Configurations'] }
      ]
    },
    physics: {
      name: 'Physics Lectures',
      color: '#3b82f6',
      chaptersCount: 20,
      questionsCount: '10,000+',
      image: '/PHYSICS-LECTURES.webp',
      chapters: [
        { title: 'Chapter 1: Vectors & Equilibrium', duration: '2h 50m', lectures: ['Lecture 1: Vector Addition & Resolution', 'Lecture 2: Torque & Equilibrium Conditions'] },
        { title: 'Chapter 2: Force & Motion', duration: '3h 15m', lectures: ['Lecture 1: Newton\'s Laws & Momentum', 'Lecture 2: Projectile Motion Derivations'] }
      ]
    },
    english: {
      name: 'English Lectures',
      color: '#8b5cf6',
      chaptersCount: 12,
      questionsCount: '3,000+',
      image: '/ENGLISH-LECTURES.webp',
      chapters: [
        { title: 'Chapter 1: Subject-Verb Agreement', duration: '1h 45m', lectures: ['Lecture 1: Basic Agreement Rules', 'Lecture 2: Advanced Agreement Exceptions'] },
        { title: 'Chapter 2: Tenses & Conditionals', duration: '2h 10m', lectures: ['Lecture 1: Perfect & Continuous Tenses', 'Lecture 2: Conditional Clause Types'] }
      ]
    },
    logicalReasoning: {
      name: 'Logical Reasoning',
      color: '#ec4899',
      chaptersCount: 8,
      questionsCount: '1,200+',
      image: '/LOGICAL-REASONING-LECTURES.webp',
      chapters: [
        { title: 'Chapter 1: Critical Thinking', duration: '1h 30m', lectures: ['Lecture 1: Premise & Conclusion Analysis', 'Lecture 2: Identifying Logical Fallacies'] },
        { title: 'Chapter 2: Analytical Puzzles', duration: '2h 00m', lectures: ['Lecture 1: Linear & Circular Arrangements', 'Lecture 2: Blood Relation Solvers'] }
      ]
    }
  };

  // =========================================================================
  // 2. MCQ BANK STATE & SIMULATOR
  // =========================================================================
  const [mcqIndex, setMcqIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [mcqFlagged, setMcqFlagged] = useState<Record<number, boolean>>({});
  const [mcqAnswers, setMcqAnswers] = useState<Record<number, string | null>>({});

  const mockMcqs = [
    {
      subject: "Chemistry",
      topic: "Atomic Structure",
      question: "According to Bohr's Atomic Theory, when an electron transitions from a higher energy orbit (n = 3) to a lower energy orbit (n = 2), the emitted radiation falls in which region of the spectrum?",
      options: {
        A: "Lyman series (Ultraviolet region)",
        B: "Balmer series (Visible region)",
        C: "Paschen series (Infrared region)",
        D: "Brackett series (Near Infrared region)"
      },
      correct: "B",
      explanation: "For Bohr's hydrogen atom spectrum, transitions ending at n = 2 correspond to the Balmer series, which lies in the visible region of electromagnetic radiation. Transitions to n = 1 form the Lyman series (UV), and transitions to n = 3 form the Paschen series (IR)."
    },
    {
      subject: "Biology",
      topic: "Cell Structure",
      question: "Which of the following cytoplasmic organelles is bounded by a single phospholipid membrane and contains hydrolytic enzymes active under acidic conditions?",
      options: {
        A: "Mitochondria",
        B: "Ribosomes",
        C: "Lysosomes",
        D: "Chloroplasts"
      },
      correct: "C",
      explanation: "Lysosomes are single-membrane bound vesicles containing digestive enzymes (acid hydrolases) that operate at an acidic pH (~5.0). Mitochondria and chloroplasts are double-membrane bound, while ribosomes lack membranes."
    },
    {
      subject: "Physics",
      topic: "Force & Motion",
      question: "A ball is launched from ground level at an angle of 30° to the horizontal. If the initial kinetic energy is E, what is its kinetic energy at the highest point of its trajectory?",
      options: {
        A: "0.25 E",
        B: "0.50 E",
        C: "0.75 E",
        D: "1.00 E"
      },
      correct: "C",
      explanation: "At the highest point, the vertical component of velocity is zero, and only the horizontal velocity component remains: v_x = v_0 * cos(30°). The kinetic energy at the highest point is E_h = 1/2 * m * (v_x)^2 = 1/2 * m * (v_0 * cos(30°))^2 = E * cos^2(30°) = E * (√3/2)^2 = 0.75 E."
    }
  ];

  const handleMcqOptionClick = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);
    setMcqAnswers(prev => ({ ...prev, [mcqIndex]: option }));
  };

  // =========================================================================
  // 3. STUDY NOTES STATE & SIMULATOR
  // =========================================================================
  const [highlightedWords, setHighlightedWords] = useState<Record<string, boolean>>({});

  const toggleHighlight = (word: string) => {
    setHighlightedWords(prev => ({
      ...prev,
      [word]: !prev[word]
    }));
  };

  // =========================================================================
  // 4. PAST PAPERS STATE & SIMULATOR
  // =========================================================================
  const [pastPapersView, setPastPapersView] = useState<'regions' | 'years'>('regions');
  const [selectedPaperRegion, setSelectedPaperRegion] = useState<{ id: string; region: string; range: string; count: string } | null>(null);
  const [selectedPaperYear, setSelectedPaperYear] = useState<string | null>(null);
  const [showPastPaperLock, setShowPastPaperLock] = useState<boolean>(false);

  const mockPastPapers = [
    { id: 'uhs', region: 'UHS Punjab', range: '2021 - 2025', count: '5 Years of Papers' },
    { id: 'etea', region: 'ETEA/KMU KPK', range: '2021 - 2025', count: '5 Years of Papers' },
    { id: 'szabmu', region: 'SZABMU Federal', range: '2021 - 2025', count: '5 Years of Papers' },
    { id: 'dow', region: 'DOW/IBA Sindh', range: '2021 - 2025', count: '5 Years of Papers' },
    { id: 'nums', region: 'NUMS National', range: '2021 - 2025', count: '5 Years of Papers' },
    { id: 'bmu', region: 'Balochistan MDCAT', range: '2021 - 2025', count: '5 Years of Papers' }
  ];

  const mockPastPaperYears = ['2025', '2024', '2023', '2022', '2021'];

  // =========================================================================
  // 5. PRACTICE TESTS STATE & SIMULATOR
  // =========================================================================
  const [fltState, setFltState] = useState<'dashboard' | 'testing' | 'submitted'>('dashboard');
  const [fltSubjectTab, setFltSubjectTab] = useState<'bio' | 'chem' | 'phy' | 'eng' | 'lr'>('bio');
  const [fltAnswers, setFltAnswers] = useState<Record<string, string>>({});
  const [fltSecondsLeft, setFltSecondsLeft] = useState<number>(1800);
  const [showFltSubmitConfirm, setShowFltSubmitConfirm] = useState<boolean>(false);

  useEffect(() => {
    if (fltState !== 'testing') return;
    const interval = setInterval(() => {
      setFltSecondsLeft(prev => {
        if (prev <= 1) {
          setFltState('submitted');
          return 1800;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [fltState]);

  const mockFltQuestions = {
    bio: [
      { id: 'b1', q: "The enzyme pepsin is secreted by gastric glands in an inactive form called pepsinogen. This is an example of:", a: "Enzyme inhibition", b: "Prosthetic activation", c: "Zymogen / Proenzyme regulation", d: "Feedback regulation", correct: "c" },
      { id: 'b2', q: "According to the fluid mosaic model, the cell membrane consists of a lipid bilayer in which proteins are:", a: "Sandwiched between two structural layers", b: "Covalently bonded to glucose units", c: "Embedded or floating as mosaic tiles", d: "Arranged as single pore structural channels", correct: "c" }
    ],
    chem: [
      { id: 'c1', q: "In the Haber-Bosch process for ammonia synthesis, adding a catalyst increases the rate of reaction by:", a: "Increasing the equilibrium constant Kc", b: "Lowering the activation energy (Ea) barrier", c: "Increasing the total heat enthalpy", d: "Shifting the reaction equilibrium to the right", correct: "b" }
    ],
    phy: [
      { id: 'p1', q: "If the velocity of an object is doubled, its kinetic energy increases by a factor of:", a: "2", b: "4", c: "8", d: "16", correct: "b" }
    ],
    eng: [
      { id: 'e1', q: "Choose the correct sentence from the following options:", a: "Neither the teacher nor the students was present.", b: "Neither the teacher nor the students were present.", c: "Neither the teacher or the students were present.", d: "Neither the teacher or the students was present.", correct: "b" }
    ],
    lr: [
      { id: 'l1', q: "Find the next term in the series: A3Z, B6Y, C12X, D24W, ___", a: "E36V", b: "E48V", c: "E48U", d: "E36U", correct: "b" }
    ]
  };

  const getFltScore = () => {
    let score = 0;
    let total = 0;
    Object.values(mockFltQuestions).forEach(arr => {
      arr.forEach(q => {
        total++;
        if (fltAnswers[q.id] === q.correct) {
          score++;
        }
      });
    });
    return { score, total, pct: Math.round((score / total) * 100) };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleFltAnswer = (questionId: string, option: string) => {
    setFltAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  // =========================================================================
  // 6. ADVANCED ANALYTICS (Dashboard & Heatmap Replication)
  // =========================================================================
  const heatmapColors = {
    0: 'bg-slate-100 border border-slate-200/50',
    1: 'bg-emerald-500/20',
    2: 'bg-emerald-500/40',
    3: 'bg-emerald-500/70',
    4: 'bg-emerald-500'
  };

  const mockHeatmapGrid = [
    [0, 1, 2, 0, 3, 4, 1, 2, 0, 1, 3, 2, 4, 0, 1, 2, 3, 4, 0, 1],
    [1, 0, 0, 2, 1, 3, 0, 4, 1, 0, 2, 1, 3, 0, 4, 1, 0, 2, 1, 3],
    [3, 4, 1, 2, 0, 1, 3, 2, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0],
    [0, 1, 3, 0, 4, 1, 0, 2, 1, 3, 0, 4, 1, 0, 2, 1, 3, 0, 4, 1],
    [2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1],
    [1, 0, 2, 1, 3, 0, 4, 1, 0, 2, 1, 3, 0, 4, 1, 0, 2, 1, 3, 0],
    [4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3]
  ];

  return (
    <div className="w-full h-full text-left relative flex flex-col font-sans select-none overflow-hidden bg-[#F8FAFC] text-slate-800">

      {/* =====================================================================
          VIEW: VIDEO LECTURES
          ===================================================================== */}
      {activeTabId === 'video-lectures' && (
        <div className="w-full h-full flex flex-col relative overflow-hidden">
          {lecturesView === 'subjects' && (
            <div className={`${isMobile ? 'p-3' : 'p-5'} flex-1 flex flex-col overflow-y-auto`}>
              <header className={`${isMobile ? 'mb-2.5' : 'mb-4'} shrink-0`}>
                <span className="bg-sky-500/10 text-sky-600 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Academic Video Lectures
                </span>
                <h4 className={`${isMobile ? 'text-xs' : 'text-sm'} font-extrabold mt-1.5 text-slate-900`}>
                  Select a Lecture Course
                </h4>
              </header>

              {/* Exact replication of .premium-subjects-grid with real WebP images */}
              <div className={`grid ${isMobile ? 'grid-cols-2 gap-2 max-h-[365px]' : 'grid-cols-3 gap-3.5 max-h-[380px]'} items-start overflow-y-auto pr-1 py-1`}>
                {Object.entries(mockLecturesData).map(([id, sub]) => (
                  <button
                    key={id}
                    onClick={() => {
                      setSelectedSubject({ id, name: sub.name, color: sub.color, chaptersCount: sub.chaptersCount, questionsCount: sub.questionsCount, image: sub.image });
                      setLecturesView('chapters');
                    }}
                    className={`${isMobile ? 'h-[135px] rounded-xl' : 'h-[180px] rounded-2xl'} overflow-hidden border border-slate-200 bg-white text-left transition-all hover:scale-[1.03] flex flex-col group shadow-sm hover:shadow-md`}
                  >
                    {/* card image cover */}
                    <div className={`${isMobile ? 'h-16' : 'h-24'} bg-slate-100 relative overflow-hidden shrink-0`}>
                      <img 
                        src={sub.image} 
                        alt={sub.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/15" />
                      {!isMobile && (
                        <span className="absolute top-2 left-2 bg-white text-[8px] font-extrabold text-slate-800 px-2 py-0.5 rounded shadow-sm">
                          MDCAT 2026
                        </span>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-white drop-shadow-md transition-transform group-hover:scale-110`} />
                      </div>
                    </div>

                    {/* card body */}
                    <div className={`${isMobile ? 'p-2' : 'p-3'} flex-1 flex flex-col justify-between min-h-0`}>
                      <div>
                        <div className={`flex items-center gap-1 text-[8px] font-bold text-slate-400 ${isMobile ? 'mb-0' : 'mb-0.5'}`}>
                          <span>{sub.chaptersCount} Chapters</span>
                        </div>
                        <h3 className={`${isMobile ? 'text-[10px]' : 'text-[11px]'} font-extrabold text-slate-800 truncate`}>
                          {sub.name}
                        </h3>
                      </div>
                      <div className="flex justify-between items-center pt-1 border-t border-slate-100 shrink-0">
                        <span className="text-[8px] text-sky-500 font-extrabold">Start Learning</span>
                        <ChevronRight className="w-2.5 h-2.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {lecturesView === 'chapters' && selectedSubject && (
            <div className={`flex-1 flex flex-col ${isMobile ? 'p-3' : 'p-5'} overflow-y-auto`}>
              <div className="flex items-center justify-between mb-3 shrink-0">
                <button
                  onClick={() => setLecturesView('subjects')}
                  className="flex items-center gap-1 text-[9px] font-extrabold text-sky-500 hover:underline"
                >
                  <ChevronLeft className="w-3 h-3" /> Back
                </button>
                <span className="text-[9px] text-slate-500 font-semibold">{selectedSubject.chaptersCount} Chapters</span>
              </div>
              
              <h4 className={`${isMobile ? 'text-[11px] mb-2' : 'text-xs mb-3'} font-extrabold flex items-center gap-1.5 text-slate-800`}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedSubject.color }} />
                {selectedSubject.name} Index
              </h4>

              <div className="space-y-2 flex-1">
                {(mockLecturesData[selectedSubject.id as keyof typeof mockLecturesData]).chapters.map((chap, idx) => (
                  <div 
                    key={idx}
                    className={`rounded-xl border border-slate-200 bg-white shadow-sm ${isMobile ? 'p-2.5' : 'p-3.5'}`}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[10px] font-extrabold text-slate-800 truncate max-w-[70%]">{chap.title}</span>
                      <span className="text-[8px] text-sky-600 bg-sky-500/10 px-1.5 py-0.5 rounded-full">{chap.duration}</span>
                    </div>
                    <div className="space-y-1 pl-2 border-l border-sky-500/20">
                      {chap.lectures.map((lec, lIdx) => (
                        <button
                          key={lIdx}
                          onClick={() => {
                            setSelectedLecture(lec);
                            setLecturesView('player');
                            setIsPlaying(true);
                          }}
                          className={`w-full flex items-center justify-between p-1.5 rounded-lg text-left text-[9px] text-slate-600 hover:bg-slate-50 hover:pl-2 transition-all`}
                        >
                          <span className="truncate max-w-[80%] flex items-center gap-1.5">
                            <PlayCircle className="w-3.5 h-3.5 shrink-0 text-sky-500" />
                            {lec}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {lecturesView === 'player' && selectedSubject && (
            <div className={`flex-1 flex overflow-hidden ${isMobile ? 'flex-col' : ''}`}>
              {/* Lecture Sidebar / Bottom List */}
              <div className={`${isMobile ? 'w-full order-2 flex-1' : 'w-1/3 border-r'} border-slate-200 flex flex-col overflow-y-auto shrink-0 bg-slate-50`}>
                <div className="p-2 border-b border-slate-200 shrink-0 flex items-center justify-between">
                  <span className="text-[9px] font-extrabold uppercase text-slate-700 truncate max-w-[60%]">{selectedSubject.name}</span>
                  <button 
                    onClick={() => setLecturesView('chapters')}
                    className="text-[8px] font-extrabold text-sky-500 hover:underline"
                  >
                    Index
                  </button>
                </div>
                <div className="p-1 space-y-1">
                  {(mockLecturesData[selectedSubject.id as keyof typeof mockLecturesData]).chapters.flatMap(c => c.lectures).map((lec, idx) => {
                    const isSelected = selectedLecture === lec;
                    const isDone = completedLectures[lec];
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedLecture(lec);
                          setIsPlaying(true);
                        }}
                        className={`w-full p-2 rounded-xl text-left flex items-start gap-2 transition-all ${
                          isSelected ? 'bg-slate-200/70' : 'hover:bg-slate-200/30'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={!!isDone}
                          onChange={(e) => {
                            e.stopPropagation();
                            toggleLectureComplete(lec);
                          }}
                          className="mt-0.5 rounded accent-sky-500 cursor-pointer w-3 h-3 shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <span className={`text-[9px] font-extrabold leading-tight block truncate ${
                            isSelected ? 'text-sky-500' : 'text-slate-700'
                          }`}>
                            {lec}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Player Display */}
              <div className={`flex-1 flex flex-col overflow-hidden ${isMobile ? 'order-1 shrink-0' : ''}`}>
                {/* player canvas */}
                <div className={`bg-black relative flex items-center justify-center group overflow-hidden ${isMobile ? 'aspect-video' : 'flex-1'}`}>
                  {isPlaying ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-br from-slate-900 to-black flex flex-col items-center justify-center p-3">
                        <PlayCircle className="w-8 h-8 text-sky-500 animate-pulse mb-1.5" />
                        <span className="text-[8px] text-gray-400">Streaming HD Quality Video...</span>
                        <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2">
                          <button onClick={() => setIsPlaying(false)} className="text-white text-[8px] bg-white/15 px-1.5 py-0.5 rounded">
                            PAUSE
                          </button>
                          <div className="flex-1 h-0.5 bg-gray-700 rounded overflow-hidden">
                            <div className="w-1/3 h-full bg-sky-500" />
                          </div>
                          <span className="text-[8px] text-gray-400 font-mono">05:42</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:scale-[1.05] transition-transform shadow-lg z-10"
                    >
                      <PlayCircle className="w-6 h-6 ml-0.5" />
                    </button>
                  )}
                </div>
                {/* Player details */}
                <div className="p-2 border-t border-slate-200 bg-white shrink-0">
                  <h5 className="text-[10px] font-extrabold text-slate-800 truncate">{selectedLecture}</h5>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[8px] text-slate-500 font-semibold">Quality: 720p</span>
                    <button
                      onClick={() => toggleLectureComplete(selectedLecture)}
                      className={`text-[8px] font-extrabold px-2 py-0.5 rounded transition-colors ${
                        completedLectures[selectedLecture]
                          ? 'bg-emerald-500 text-white'
                          : 'bg-sky-500/10 text-sky-600 hover:bg-sky-500/20'
                      }`}
                    >
                      {completedLectures[selectedLecture] ? 'Completed' : 'Complete'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          VIEW: MCQ BANK
          ===================================================================== */}
      {activeTabId === 'mcq-bank' && (
        <div className={`w-full h-full flex flex-col ${isMobile ? 'p-3' : 'p-5'} overflow-y-auto`}>
          {/* Header Row */}
          <div className={`flex items-center justify-between ${isMobile ? 'mb-2.5' : 'mb-4'} shrink-0`}>
            <span className="text-[10px] bg-purple-500/10 text-purple-600 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Smart Question Engine
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-orange-600 font-bold font-mono flex items-center gap-0.5">
                <Clock className="w-3 h-3" /> 35:12
              </span>
              <button 
                onClick={() => setMcqFlagged(prev => ({ ...prev, [mcqIndex]: !prev[mcqIndex] }))}
                className={`p-1 rounded-lg border transition-colors ${
                  mcqFlagged[mcqIndex] 
                    ? 'border-orange-500/30 bg-orange-500/10 text-orange-500' 
                    : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                }`}
              >
                <Bookmark className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Question Text */}
          <div className={`${isMobile ? 'mb-3' : 'mb-4'}`}>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[8px] bg-sky-500/10 text-sky-600 font-extrabold px-1.5 py-0.5 rounded">
                {mockMcqs[mcqIndex].subject}
              </span>
              <span className="text-[8px] text-slate-500 font-bold">
                {mockMcqs[mcqIndex].topic}
              </span>
              <span className="text-[8px] text-slate-300 font-bold">•</span>
              <span className="text-[8px] text-slate-500 font-bold uppercase">
                Q {mcqIndex + 1}/{mockMcqs.length}
              </span>
            </div>
            <p className={`${isMobile ? 'text-[11px]' : 'text-xs'} font-extrabold leading-relaxed text-slate-900`}>
              {mockMcqs[mcqIndex].question}
            </p>
          </div>

          {/* Options Grid */}
          <div className={`${isMobile ? 'space-y-1.5 mb-3' : 'space-y-2 mb-4'}`}>
            {Object.entries(mockMcqs[mcqIndex].options).map(([key, value]) => {
              const isSelected = selectedOption === key;
              const isCorrect = key === mockMcqs[mcqIndex].correct;

              let optionStyle = 'border-slate-200 bg-white hover:bg-slate-50 shadow-sm text-slate-700';
              
              if (selectedOption) {
                if (isCorrect) {
                  optionStyle = 'border-emerald-500/50 bg-emerald-500/10 text-emerald-600 font-extrabold';
                } else if (isSelected && !isCorrect) {
                  optionStyle = 'border-red-500/50 bg-red-500/10 text-red-600 font-extrabold';
                } else {
                  optionStyle = 'opacity-40 border-slate-100 bg-transparent';
                }
              }

              return (
                <button
                  key={key}
                  onClick={() => handleMcqOptionClick(key)}
                  disabled={!!selectedOption}
                  className={`w-full ${isMobile ? 'p-2 rounded-xl text-[10px]' : 'p-3 rounded-2xl text-xs'} border text-left transition-all flex items-center justify-between gap-2.5 ${optionStyle}`}
                >
                  <span className="leading-snug">{key}. {value}</span>
                  {selectedOption && isCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 animate-bounce" />}
                  {selectedOption && isSelected && !isCorrect && <X className="w-3.5 h-3.5 text-red-500 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {selectedOption && (
            <div className={`${isMobile ? 'p-3 rounded-xl' : 'p-4 rounded-2xl'} border border-slate-200 bg-white shadow-sm animate-fadeIn`}>
              <div className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-600 mb-1">
                <Check className="w-3.5 h-3.5" /> Solution:
              </div>
              <p className={`${isMobile ? 'text-[9px]' : 'text-[11px]'} leading-relaxed text-slate-500`}>
                {mockMcqs[mcqIndex].explanation}
              </p>
              <div className="mt-3 flex justify-between shrink-0 border-t border-slate-100 pt-2.5">
                <button
                  onClick={() => setSelectedOption(null)}
                  className="text-[9px] font-bold text-slate-400 hover:text-slate-600 flex items-center gap-0.5"
                >
                  <RefreshCw className="w-2.5 h-2.5" /> Retry
                </button>
                <button
                  onClick={() => {
                    setMcqIndex(prev => (prev + 1) % mockMcqs.length);
                    setSelectedOption(null);
                  }}
                  className="text-[9px] font-bold text-sky-500 hover:underline flex items-center gap-0.5"
                >
                  Next <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          VIEW: STUDY NOTES
          ===================================================================== */}
      {activeTabId === 'notes' && (
        <div className={`w-full h-full flex flex-col ${isMobile ? 'p-3' : 'p-5'} overflow-y-auto`}>
          {/* Header */}
          <div className={`flex items-center justify-between ${isMobile ? 'mb-2.5' : 'mb-4'} shrink-0`}>
            <span className="text-[10px] bg-blue-500/10 text-blue-600 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
              {isMobile ? 'Study Notes' : 'MDCAT Premium Study Notes'}
            </span>
            <span className="text-[9px] text-yellow-600 font-bold flex items-center gap-0.5">
              <Sparkles className="w-3 h-3 fill-current" /> High-Yield
            </span>
          </div>
 
          {/* Document Content View */}
          <div className={`${isMobile ? 'p-3 rounded-xl text-[10.5px] leading-normal' : 'p-6 rounded-2xl text-xs leading-relaxed'} border border-slate-200 bg-white flex-1 overflow-y-auto shadow-sm`}>
            <h4 className={`${isMobile ? 'text-xs pb-1.5 mb-2' : 'text-sm pb-2 mb-3'} font-extrabold text-sky-600 border-b border-sky-500/20`}>
              Chemistry: Atomic Structure & Quantum Numbers
            </h4>
            
            <p className={`${isMobile ? 'mb-2' : 'mb-3'} text-slate-600`}>
              Quantum numbers describe the energy levels, shapes, and orientation of orbitals in an atom. Each electron in an atom is defined by a unique set of four quantum numbers.
            </p>
 
            <div className={`${isMobile ? 'p-2.5 rounded-lg mb-2' : 'p-4 rounded-xl mb-3'} border-l-4 border-yellow-500/50 bg-yellow-500/[0.03]`}>
              <strong className="text-[9px] text-yellow-600 uppercase tracking-wide block mb-0.5 font-extrabold">Quantum Rules:</strong>
              <ul className={`list-disc pl-4 space-y-0.5 ${isMobile ? 'text-[9.5px]' : 'text-[11px]'} text-slate-500`}>
                <li><strong>Principal (n)</strong>: Defines energy level. n = 1, 2, 3...</li>
                <li><strong>Azimuthal (l)</strong>: Defines orbital shape (s=0, p=1, d=2).</li>
                <li><strong>Magnetic (m)</strong>: Defines spatial orientation of orbital.</li>
              </ul>
            </div>
 
            <p className={`${isMobile ? 'mb-2' : 'mb-3'} text-slate-600`}>
              The <span 
                onClick={() => toggleHighlight('bohr')}
                className={`cursor-pointer px-1 rounded transition-colors font-bold ${
                  highlightedWords['bohr'] 
                    ? 'bg-yellow-300 text-slate-900 shadow-sm' 
                    : 'bg-sky-500/10 hover:bg-sky-500/20 text-sky-600'
                }`}
              >
                Bohr Atomic Radius
              </span> formula indicates that orbits are quantized. The radius of the first shell is 0.529 Å.
            </p>
 
            <p className={`${isMobile ? 'mb-2' : 'mb-3'} text-slate-600`}>
              The <span 
                onClick={() => toggleHighlight('spin')}
                className={`cursor-pointer px-1 rounded transition-colors font-bold ${
                  highlightedWords['spin'] 
                    ? 'bg-yellow-300 text-slate-900 shadow-sm' 
                    : 'bg-sky-500/10 hover:bg-sky-500/20 text-sky-600'
                }`}
              >
                Spin Quantum Number (s)
              </span> describes the electron rotation direction (+1/2 or -1/2).
            </p>
 
            <p className={`text-[9px] text-slate-400 ${isMobile ? 'mt-3 pt-2' : 'mt-4 pt-3'} border-t border-slate-100`}>
              * Tap highlighted blue keywords to toggle high-yield highlighter.
            </p>
          </div>
        </div>
      )}

      {/* =====================================================================
          VIEW: PAST PAPERS
          ===================================================================== */}
      {activeTabId === 'past-papers' && (
        <div className={`w-full h-full flex flex-col ${isMobile ? 'p-3' : 'p-5'} relative overflow-hidden`}>
          <div className={`flex items-center justify-between ${isMobile ? 'mb-2.5' : 'mb-4'} shrink-0`}>
            <span className="text-[10px] bg-teal-500/10 text-teal-600 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
              5 Years Past Papers
            </span>
            <span className="text-[9px] text-slate-500 font-bold font-mono">
              Starter Pack Locked
            </span>
          </div>

          {pastPapersView === 'regions' && (
            <div className={`grid grid-cols-2 ${isMobile ? 'gap-2 max-h-[365px]' : 'gap-3.5'} flex-1 justify-center items-center overflow-y-auto`}>
              {mockPastPapers.map((paper) => (
                <button
                  key={paper.id}
                  onClick={() => {
                    setSelectedPaperRegion(paper);
                    setPastPapersView('years');
                  }}
                  className={`${isMobile ? 'p-2.5 rounded-xl' : 'p-4 rounded-2xl'} border border-slate-200 bg-white text-left flex items-center justify-between transition-all hover:scale-[1.02] shadow-sm hover:shadow-md group`}
                >
                  <div className="min-w-0 flex-1 pr-1">
                    <h5 className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-extrabold text-slate-800 leading-snug truncate`}>{paper.region}</h5>
                    <span className="text-[8px] text-slate-400 block mt-0.5 truncate">{paper.range}</span>
                  </div>
                  <div className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 group-hover:bg-sky-500/10 group-hover:text-sky-500 transition-colors`}>
                    <ChevronRight className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                  </div>
                </button>
              ))}
            </div>
          )}

          {pastPapersView === 'years' && selectedPaperRegion && (
            <div className="flex-1 flex flex-col overflow-y-auto">
              <div className="flex justify-between items-center mb-2 shrink-0">
                <button
                  onClick={() => {
                    setPastPapersView('regions');
                    setSelectedPaperRegion(null);
                  }}
                  className={`flex items-center gap-0.5 ${isMobile ? 'text-[9px]' : 'text-[10px]'} font-extrabold text-sky-500 hover:underline`}
                >
                  <ChevronLeft className={`${isMobile ? 'w-3 h-3' : 'w-3.5 h-3.5'}`} /> Back
                </button>
                <span className="text-[9px] text-slate-400 font-semibold">{selectedPaperRegion.count}</span>
              </div>

              <h4 className={`${isMobile ? 'text-[10px] mb-2' : 'text-xs mb-3'} font-extrabold text-slate-800 flex items-center gap-1.5`}>
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                {selectedPaperRegion.region} Papers
              </h4>

              <div className={`grid grid-cols-2 ${isMobile ? 'gap-2' : 'gap-3'} pb-3`}>
                {mockPastPaperYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedPaperYear(year);
                      setShowPastPaperLock(true);
                    }}
                    className={`${isMobile ? 'p-2 rounded-lg' : 'p-3.5 rounded-xl'} border border-slate-200 bg-white text-left flex items-center justify-between hover:scale-[1.01] transition-transform shadow-sm group`}
                  >
                    <div>
                      <span className="text-[8px] text-slate-400 block font-bold">YEAR</span>
                      <h5 className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-extrabold text-slate-800 mt-0.5`}>{year} Solved</h5>
                    </div>
                    <div className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'} rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0`}>
                      <Lock className={`${isMobile ? 'w-3 h-3' : 'w-3.5 h-3.5'}`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Premium Lock overlay modal */}
          {showPastPaperLock && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
              <div className={`p-5 rounded-2xl border border-slate-200 bg-white ${isMobile ? 'max-w-[230px]' : 'max-w-sm'} w-full text-center shadow-2xl relative`}>
                <button
                  onClick={() => setShowPastPaperLock(false)}
                  className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className={`${isMobile ? 'w-10 h-10 mb-2' : 'w-12 h-12 mb-3'} rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto`}>
                  <AlertTriangle className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} animate-pulse`} />
                </div>
                <h4 className="text-xs font-extrabold mb-1 uppercase tracking-wider text-orange-500">Locked on Starter Pack</h4>
                <h3 className={`${isMobile ? 'text-xs' : 'text-sm'} font-extrabold text-slate-800 mb-1`}>Upgrade to Premium</h3>
                <p className="text-[10px] text-slate-500 leading-relaxed mb-4">
                  Past Papers for <strong className="text-slate-800">{selectedPaperRegion?.region} ({selectedPaperYear})</strong> are restricted.
                </p>
                <button
                  onClick={() => {
                    setShowPastPaperLock(false);
                    const pricingSection = document.getElementById('pricing');
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-2 rounded-xl bg-orange-500 text-white font-extrabold text-xs hover:scale-[1.02] transition-transform flex items-center justify-center gap-1 shadow-lg"
                >
                  Upgrade <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          VIEW: PRACTICE TESTS
          ===================================================================== */}
      {activeTabId === 'practice-tests' && (
        <div className="w-full h-full flex flex-col relative overflow-hidden">
          {fltState === 'dashboard' && (
            <div className={`${isMobile ? 'p-3' : 'p-5'} flex-1 flex flex-col justify-center`}>
              <div className={`text-center ${isMobile ? 'mb-3' : 'mb-5'}`}>
                <span className="text-[10px] bg-orange-500/10 text-orange-600 font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Full-Length Mock Series
                </span>
                <h4 className={`${isMobile ? 'text-xs mt-1' : 'text-base mt-1.5'} font-extrabold text-slate-905`}>
                  MDCAT Mock Test Series
                </h4>
              </div>

              <div className={`p-4 rounded-2xl border border-slate-200 bg-white flex ${isMobile ? 'flex-col text-center' : 'items-center justify-between'} gap-3.5 max-w-md mx-auto w-full shadow-md`}>
                <div>
                  <span className="text-[8px] bg-orange-500/15 text-orange-500 font-bold px-1.5 py-0.5 rounded">
                    FLT 1
                  </span>
                  <h5 className={`${isMobile ? 'text-[11px]' : 'text-xs'} font-extrabold mt-1 text-slate-800`}>preDoctr Full Length Test (FLT 1)</h5>
                  <span className={`text-[9px] text-slate-400 block ${isMobile ? 'mt-1' : 'mt-1.5'}`}>200 Questions • 3h 30m • All Subjects</span>
                </div>
                <button
                  onClick={() => {
                    setFltState('testing');
                    setFltSecondsLeft(1800);
                  }}
                  className={`px-4 py-2.5 rounded-xl bg-orange-500 text-white text-xs font-bold hover:scale-[1.02] transition-all shadow-lg ${isMobile ? 'w-full py-2 shadow-orange-500/10' : 'shrink-0 shadow-orange-500/20'}`}
                >
                  Start Test
                </button>
              </div>
            </div>
          )}

          {fltState === 'testing' && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Test Header */}
              <div className={`${isMobile ? 'px-2.5 py-2' : 'px-4 py-3'} border-b border-slate-200 flex justify-between items-center shrink-0 bg-slate-50`}>
                <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-extrabold text-slate-700 truncate`}>preDoctr FLT 1</span>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold text-orange-500 font-mono flex items-center gap-0.5 bg-orange-500/10 px-1.5 py-0.5 rounded">
                    <Clock className="w-3 h-3" /> {formatTime(fltSecondsLeft)}
                  </span>
                  <button
                    onClick={() => setShowFltSubmitConfirm(true)}
                    className="px-2 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[9px] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>

              {/* Subject Tabs */}
              <div className={`flex border-b border-slate-200 shrink-0 text-center bg-slate-100/50 ${isMobile ? 'overflow-x-auto scrollbar-none whitespace-nowrap' : ''}`}>
                {(['bio', 'chem', 'phy', 'eng', 'lr'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setFltSubjectTab(tab)}
                    className={`${isMobile ? 'px-3.5 shrink-0' : 'flex-1'} py-2 text-[9px] font-extrabold uppercase border-b-2 transition-colors ${
                      fltSubjectTab === tab 
                        ? 'border-orange-500 text-orange-500' 
                        : 'border-transparent text-slate-400'
                    }`}
                  >
                    {tab === 'bio' ? 'Biology' : tab === 'chem' ? 'Chemistry' : tab === 'phy' ? 'Physics' : tab === 'eng' ? 'English' : 'Logic'}
                  </button>
                ))}
              </div>

              {/* Testing viewport */}
              <div className={`flex-1 ${isMobile ? 'p-3' : 'p-5'} overflow-y-auto bg-white`}>
                {mockFltQuestions[fltSubjectTab].map((q, idx) => (
                  <div key={q.id} className="mb-4 last:mb-0">
                    <p className={`${isMobile ? 'text-[11px] mb-2' : 'text-xs mb-3'} font-extrabold leading-relaxed text-slate-800`}>
                      Q{idx + 1}. {q.q}
                    </p>
                    <div className="space-y-1.5 pl-2 border-l border-slate-100">
                      {([['a', q.a], ['b', q.b], ['c', q.c], ['d', q.d]] as const).map(([k, v]) => {
                        const isSelected = fltAnswers[q.id] === k;
                        return (
                          <button
                            key={k}
                            onClick={() => handleFltAnswer(q.id, k)}
                            className={`w-full ${isMobile ? 'p-2 rounded-lg text-[10px]' : 'p-3 rounded-xl'} border text-left transition-all flex items-center justify-between ${
                              isSelected
                                ? 'border-orange-500 bg-orange-500/10 text-orange-500 font-extrabold'
                                : 'border-slate-200 bg-white hover:bg-slate-50 shadow-sm text-slate-600'
                            }`}
                          >
                            <span>{k.toUpperCase()}. {v}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit confirm dialog */}
              {showFltSubmitConfirm && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                  <div className={`p-5 rounded-2xl border border-slate-200 bg-white ${isMobile ? 'max-w-[220px]' : 'max-w-xs'} w-full text-center shadow-xl`}>
                    <h4 className="text-xs font-extrabold uppercase text-orange-500 mb-1">Submission</h4>
                    <h3 className={`${isMobile ? 'text-xs' : 'text-sm'} font-extrabold text-slate-850 mb-2`}>Submit Mock Exam?</h3>
                    <p className="text-[10px] text-slate-400 leading-relaxed mb-4">
                      Are you sure you want to submit your mock test answers?
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowFltSubmitConfirm(false)}
                        className="flex-1 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-600"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          setShowFltSubmitConfirm(false);
                          setFltState('submitted');
                        }}
                        className="flex-1 py-1.5 rounded-lg bg-emerald-500 text-white text-xs font-bold shadow-md"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {fltState === 'submitted' && (
            <div className={`flex-1 flex flex-col justify-center text-center ${isMobile ? 'p-3' : 'p-5'}`}>
              <div className={`${isMobile ? 'w-10 h-10 mb-2' : 'w-12 h-12 mb-3'} rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto`}>
                <Award className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} animate-bounce`} />
              </div>
              <h4 className={`${isMobile ? 'text-xs' : 'text-sm'} font-extrabold text-slate-800 mb-1`}>FLT Completed!</h4>
              <p className="text-[10px] text-slate-400 mb-4">
                Mock test results summary is generated below.
              </p>
              
              <div className={`grid grid-cols-3 ${isMobile ? 'gap-1.5 p-2 rounded-xl' : 'gap-2.5 p-3 rounded-2xl'} border border-slate-200 bg-slate-50 max-w-xs mx-auto mb-4`}>
                <div>
                  <span className="text-[8px] text-slate-400 block uppercase font-bold">Accuracy</span>
                  <span className="text-xs font-extrabold text-emerald-600 font-mono">{getFltScore().pct}%</span>
                </div>
                <div>
                  <span className="text-[8px] text-slate-400 block uppercase font-bold">Score</span>
                  <span className="text-xs font-extrabold text-sky-500 font-mono">{getFltScore().score}/{getFltScore().total}</span>
                </div>
                <div>
                  <span className="text-[8px] text-slate-400 block uppercase font-bold">Status</span>
                  <span className="text-xs font-extrabold text-orange-500 font-mono">Passed</span>
                </div>
              </div>

              <button
                onClick={() => setFltState('dashboard')}
                className="mx-auto text-[9px] font-bold text-sky-500 hover:underline flex items-center gap-0.5"
              >
                <ChevronLeft className="w-3 h-3" /> Dashboard
              </button>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          VIEW: ADVANCED ANALYTICS (Dashboard Replication)
          ===================================================================== */}
      {activeTabId === 'analytics' && (
        <div className={`w-full h-full flex flex-col ${isMobile ? 'p-3' : 'p-5'} overflow-y-auto`}>
          {/* Welcoming Header Banner */}
          <div className={`flex items-center justify-between ${isMobile ? 'mb-2.5' : 'mb-4'} shrink-0`}>
            <div className="flex items-center gap-3">
              <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-sky-500/10 border-2 border-sky-500/30 flex items-center justify-center shrink-0`}>
                <svg width={isMobile ? "18" : "22"} height={isMobile ? "18" : "22"} viewBox="0 0 24 24" fill="none" stroke="#4096EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <h4 className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-extrabold text-slate-800 leading-snug`}>{isMobile ? 'Future Doctor!' : 'Welcome Back, Future Doctor!'}</h4>
                <p className="text-[9px] text-slate-400">Progress: <strong className="text-emerald-500 font-bold">82%</strong></p>
              </div>
            </div>
            
            <div className={`flex items-center gap-1 text-orange-500 font-extrabold ${isMobile ? 'text-[8.5px] px-2 py-0.5' : 'text-[10px] px-2.5 py-1'} bg-orange-500/10 rounded-full`}>
              <Flame className="w-3.5 h-3.5 fill-current animate-pulse" /> {isMobile ? '5 Days' : '5 Day Streak'}
            </div>
          </div>

          {/* HUD Metrics */}
          <div className={`grid grid-cols-3 ${isMobile ? 'gap-1.5 mb-2.5' : 'gap-3 mb-4'} shrink-0`}>
            <div className={`${isMobile ? 'p-2 rounded-xl' : 'p-3 rounded-2xl'} border border-slate-200 bg-white flex flex-col items-center justify-center text-center shadow-sm`}>
              <Trophy className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-yellow-500 mb-1`} />
              <span className="text-[8px] text-slate-400 uppercase font-bold">Leaderboard</span>
              <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-extrabold font-mono text-slate-700`}>#42</span>
            </div>
            <div className={`${isMobile ? 'p-2 rounded-xl' : 'p-3 rounded-2xl'} border border-slate-200 bg-white flex flex-col items-center justify-center text-center shadow-sm`}>
              <Brain className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-purple-400 mb-1`} />
              <span className="text-[8px] text-slate-400 uppercase font-bold">Solved</span>
              <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-extrabold font-mono text-slate-700`}>3.8k</span>
            </div>
            <div className={`${isMobile ? 'p-2 rounded-xl' : 'p-3 rounded-2xl'} border border-slate-200 bg-white flex flex-col items-center justify-center text-center shadow-sm`}>
              <Clock className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-sky-400 mb-1`} />
              <span className="text-[8px] text-slate-400 uppercase font-bold">Time</span>
              <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-extrabold font-mono text-slate-700`}>15h</span>
            </div>
          </div>

          {/* Main Area: Heatmap and Accuracy */}
          {isMobile ? (
            <div className="flex flex-col gap-2 flex-1 min-h-0">
              {/* GitHub style heatmap */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between shadow-sm">
                <h5 className="text-[8.5px] font-extrabold uppercase text-slate-700 tracking-wide mb-1 flex items-center gap-1 shrink-0">
                  <Activity className="w-3 h-3 text-emerald-500" /> Solved MCQ Heatmap
                </h5>
                
                <div className="flex-1 flex items-center justify-center min-h-0 py-1">
                  {/* 7 rows x 20 cols grid */}
                  <div className="grid grid-flow-col grid-rows-7 gap-0.5 w-full max-w-[210px] aspect-[16/6]">
                    {mockHeatmapGrid.map((row, rIdx) => 
                      row.map((val, cIdx) => (
                        <div 
                          key={`${rIdx}-${cIdx}`} 
                          className={`w-full aspect-square rounded-sm ${heatmapColors[val as keyof typeof heatmapColors]}`} 
                          title={`Activity level: ${val}`}
                        />
                      ))
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-[7px] text-slate-400 shrink-0 border-t border-slate-100 pt-1 mt-1">
                  <span>1.2k solved this month</span>
                  <div className="flex items-center gap-0.5">
                    <div className="w-1.5 h-1.5 rounded-sm bg-slate-100" />
                    <div className="w-1.5 h-1.5 rounded-sm bg-emerald-500" />
                  </div>
                </div>
              </div>

              {/* Subject Progress breakdown */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex flex-col justify-center shadow-sm">
                <h5 className="text-[8.5px] font-extrabold uppercase text-slate-700 tracking-wide mb-1.5 flex items-center gap-1 shrink-0">
                  <Award className="w-3 h-3 text-sky-500" /> Accuracy Rate
                </h5>
                
                <div className="space-y-1.5 flex-1 flex flex-col justify-center">
                  {[
                    { name: 'Biology', pct: 88, color: '#10b981' },
                    { name: 'Chemistry', pct: 78, color: '#f59e0b' },
                    { name: 'Physics', pct: 74, color: '#3b82f6' }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="flex justify-between text-[8px] font-bold text-slate-600">
                        <span>{item.name}</span>
                        <span style={{ color: item.color }} className="font-mono">{item.pct}%</span>
                      </div>
                      <div className="h-1 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-3.5 flex-1 min-h-0">
              {/* GitHub style heatmap */}
              <div className="col-span-7 p-3 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-sm">
                <h5 className="text-[9px] font-extrabold uppercase text-slate-700 tracking-wide mb-1.5 flex items-center gap-1 shrink-0">
                  <Activity className="w-3.5 h-3.5 text-emerald-500" /> Daily MCQ Solved Contribution
                </h5>
                
                <div className="flex-1 flex items-center justify-center min-h-0 py-1.5">
                  {/* 7 rows x 20 cols grid */}
                  <div className="grid grid-flow-col grid-rows-7 gap-1 w-full max-w-[260px] aspect-[16/6]">
                    {mockHeatmapGrid.map((row, rIdx) => 
                      row.map((val, cIdx) => (
                        <div 
                          key={`${rIdx}-${cIdx}`} 
                          className={`w-full aspect-square rounded-sm ${heatmapColors[val as keyof typeof heatmapColors]}`} 
                          title={`Activity level: ${val}`}
                        />
                      ))
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-[8px] text-slate-400 shrink-0 border-t border-slate-100 pt-2">
                  <span>1,200 MCQs Solved this month</span>
                  <div className="flex items-center gap-1">
                    <span>Less</span>
                    <div className="w-2 h-2 rounded-sm bg-slate-100" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-500/20" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-500/40" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-500" />
                    <span>More</span>
                  </div>
                </div>
              </div>

              {/* Subject Progress breakdown */}
              <div className="col-span-5 p-3.5 rounded-2xl border border-slate-200 bg-white flex flex-col justify-center shadow-sm">
                <h5 className="text-[9px] font-extrabold uppercase text-slate-700 tracking-wide mb-2.5 flex items-center gap-1 shrink-0">
                  <Award className="w-3.5 h-3.5 text-sky-500" /> Accuracy Rate
                </h5>
                
                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  {[
                    { name: 'Biology', pct: 88, color: '#10b981' },
                    { name: 'Chemistry', pct: 78, color: '#f59e0b' },
                    { name: 'Physics', pct: 74, color: '#3b82f6' }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-[9px] font-bold text-slate-600">
                        <span>{item.name}</span>
                        <span style={{ color: item.color }} className="font-mono">{item.pct}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
