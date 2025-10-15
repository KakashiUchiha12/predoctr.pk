import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-[#12141C] text-white'
        : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Join Our <span className="text-gradient">Mission</span>
          </h1>

          <div className={`backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8 ${
            theme === 'dark'
              ? 'bg-white/5 border border-white/10'
              : 'bg-white border border-gray-200'
          }`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Work With Us</h2>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
              At preDoctr.pk, we're always looking for passionate educators, content creators, and tech professionals who share our vision of transforming medical education in Pakistan.
            </p>

            <h3 className="text-xl font-bold mb-4 text-crypto-purple">Current Openings</h3>
            <div className="space-y-4">
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h4 className="text-lg font-semibold mb-2">Medical Content Writer</h4>
                <p className={`mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  Create comprehensive study guides and educational content for MDCAT preparation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>Remote</span>
                  <span className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-800'}`}>Part-time</span>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h4 className="text-lg font-semibold mb-2">Subject Matter Expert</h4>
                <p className={`mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  Provide expert guidance for Biology, Chemistry, Physics content development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-800'}`}>Contract</span>
                  <span className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-800'}`}>Freelance</span>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h4 className="text-lg font-semibold mb-2">Video Content Creator</h4>
                <p className={`mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  Produce educational video content and record lectures for our platform.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-800'}`}>Islamabad</span>
                  <span className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-800'}`}>Full-time</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                Don't see a position that matches your skills?
              </p>
              <button className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-crypto-purple hover:bg-crypto-dark-purple text-white'
                  : 'bg-crypto-purple hover:bg-crypto-dark-purple text-white'
              }`}>
                Send Us Your Resume
              </button>
            </div>
          </div>

          <div className={`backdrop-blur-lg rounded-2xl p-8 md:p-12 ${
            theme === 'dark'
              ? 'bg-white/5 border border-white/10'
              : 'bg-white border border-gray-200'
          }`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Why Join preDoctr.pk?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-lg font-semibold mb-3 text-crypto-purple">Impact Lives</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                  Help thousands of aspiring doctors achieve their dreams and contribute to healthcare in Pakistan.
                </p>
              </div>
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-lg font-semibold mb-3 text-crypto-purple">Flexible Work</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                  Many of our positions offer remote work options and flexible scheduling to fit your lifestyle.
                </p>
              </div>
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-lg font-semibold mb-3 text-crypto-purple">Continuous Learning</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                  Stay updated with the latest educational technology and medical curriculum developments.
                </p>
              </div>
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-lg font-semibold mb-3 text-crypto-purple">Competitive Compensation</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                  We offer competitive salaries and benefits for remote and freelance opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
