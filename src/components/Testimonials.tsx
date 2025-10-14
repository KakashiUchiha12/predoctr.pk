import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { useTheme } from '../contexts/ThemeContext';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const { theme } = useTheme();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section id="testimonials" className={`py-24 transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-crypto-blue to-[#12141C]'
        : 'bg-gradient-testimonials-light'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient ${theme === 'light' ? 'text-slate-900' : ''}`}>
            What Our Users Say
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-600' : ''}`}>
            Join thousands of satisfied traders who have transformed their trading experience with CryptoFlow.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className={`backdrop-blur-sm border rounded-xl p-8 md:p-10 ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10'
                      : 'bg-white border-gray-200'
                  }`}>
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 text-yellow-500 fill-yellow-500 ${theme === 'light' ? 'text-yellow-600' : ''}`} />
                      ))}
                    </div>
                    <p className={`text-lg md:text-xl mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-slate-800'}`}>"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-crypto-purple"
                      />
                      <div className="ml-4">
                        <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{testimonial.author}</p>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* No prev/next buttons */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-crypto-purple' : `w-2 ${theme === 'dark' ? 'bg-gray-500' : 'bg-slate-400'}`
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
