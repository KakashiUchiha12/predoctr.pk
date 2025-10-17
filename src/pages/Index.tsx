
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
<<<<<<< Updated upstream
import Features from '@/components/Features';
=======
import ScrollyFeatures from '@/components/ScrollyFeatures';
>>>>>>> Stashed changes
import Comparison from '@/components/Comparison';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsappContact from '@/components/WhatsappContact';
import useScrollAnimation from '@/utils/useScrollAnimation';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Set page title and meta description
  useEffect(() => {
    document.title = "preDoctr.pk - MDCAT Preparation Platform for Medical Students";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Master MDCAT preparation with preDoctr.pk - Pakistan's premier platform for medical students. Practice MCQs, learn clinical knowledge, and excel in medical licensing exams.");
    }
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
<<<<<<< Updated upstream
      <Features />
=======
      <ScrollyFeatures />
>>>>>>> Stashed changes
      <Comparison />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <ScrollToTop />
      <WhatsappContact />
    </div>
  );
};

export default Index;
