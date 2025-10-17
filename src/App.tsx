import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";

// LMS Pages
import LMSDashboard from "./pages/LMSDashboard";
import SubjectSelection from "./pages/SubjectSelection";
import BiologyTopics from "./pages/BiologyTopics";
import MCQTest from "./pages/MCQTest";
import TestResults from "./pages/TestResults";

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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Landing Page */}
            <Route path="/" element={<Index />} />
            <Route path="/" element={<Index />} />

            {/* Educational Platform Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
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
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
