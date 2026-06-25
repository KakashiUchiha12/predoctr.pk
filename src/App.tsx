import { useState, useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { handlePWAInstall } from "./utils/pwaInstall";
import SplashScreen from "./components/SplashScreen";
import PageLoader from "./components/PageLoader";

// Lazy load page components for code-splitting and faster initial load
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const Press = lazy(() => import("./pages/Press"));
const Legal = lazy(() => import("./pages/Legal"));
const NotFound = lazy(() => import("./pages/NotFound"));

// LMS Pages
const LMSDashboard = lazy(() => import("./pages/LMSDashboard"));
const SubjectSelection = lazy(() => import("./pages/SubjectSelection"));
const BiologyTopics = lazy(() => import("./pages/BiologyTopics"));
const MCQTest = lazy(() => import("./pages/MCQTest"));
const TestResults = lazy(() => import("./pages/TestResults"));

// Performance-optimized QueryClient with better defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        // Don't retry on 4xx errors
        if (error instanceof Error && error.message.includes('4')) {
          return false;
        }
        return failureCount < 2;
      },
    },
  },
});

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Dispatch event to notify other components that splash screen has completed
    window.dispatchEvent(new Event('splashComplete'));
  };

  // Initialize PWA install handler on app mount
  useEffect(() => {
    handlePWAInstall();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Suspense fallback={<PageLoader variant="minimal" message="" />}>
              <Routes>
                {/* Main Landing Page */}
                <Route path="/" element={<Index />} />

                {/* Educational Platform Pages */}
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/press" element={<Press />} />
                <Route path="/legal" element={<Legal />} />

                {/* LMS Routes */}
                <Route path="/dashboard" element={<LMSDashboard />} />
                <Route path="/subjects" element={<SubjectSelection />} />
                <Route path="/subjects/biology" element={<BiologyTopics />} />
                <Route path="/subjects/biology/:topicId/:testId" element={<MCQTest />} />
                <Route path="/testresults" element={<TestResults />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
