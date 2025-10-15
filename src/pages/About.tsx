import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-[#12141C] text-white'
        : 'bg-slate-50 text-slate-900'
    }`}>
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="text-gradient">About</span> preDoctr.pk
          </h1>

          <div className={`backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8 ${
            theme === 'dark'
              ? 'bg-white/5 border border-white/10'
              : 'bg-white border border-gray-200'
          }`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Our Mission</h2>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
              preDoctr.pk is dedicated to revolutionizing medical education in Pakistan. We believe every aspiring medical student deserves access to high-quality, comprehensive resources that make MDCAT preparation both effective and accessible.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-xl font-semibold mb-3 text-crypto-purple">Expert-Led Content</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                  Our video lectures and study materials are created by experienced medical educators and top MDCAT performers.
                </p>
              </div>
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-xl font-semibold mb-3 text-crypto-purple">Updated Resources</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                  Regular updates to past papers, MCQs, and curriculum content to match the latest MDCAT requirements.
                </p>
              </div>
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-xl font-semibold mb-3 text-crypto-purple">Comprehensive Coverage</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                  Complete syllabus coverage across all subjects with in-depth explanations and detailed notes.
                </p>
              </div>
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-xl font-semibold mb-3 text-crypto-purple">Proven Success</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                  Thousands of our students have successfully secured admissions to top medical colleges across Pakistan.
                </p>
              </div>
            </div>
          </div>

          <div className={`backdrop-blur-lg rounded-2xl p-8 md:p-12 ${
            theme === 'dark'
              ? 'bg-white/5 border border-white/10'
              : 'bg-white border border-gray-200'
          }`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Our Story</h2>
            <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
              Founded by a team of passionate educators and former MDCAT toppers, preDoctr.pk was born from the realization that many brilliant students struggle with inadequate preparation resources. We saw the gaps in traditional MDCAT coaching and decided to bridge them with technology and expertise.
            </p>
            <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
              Today, we serve thousands of aspiring doctors across Pakistan, providing them with the tools and confidence they need to succeed in one of the most competitive entrance exams in the country.
            </p>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
              Our commitment goes beyond just providing content – we strive to create a supportive learning community where students can thrive, learn, and ultimately achieve their dreams of becoming medical professionals.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
