import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Press = () => {
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
            Press & <span className="text-gradient">Media</span>
          </h1>

          <div className={`backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8 ${
            theme === 'dark'
              ? 'bg-white/5 border border-white/10'
              : 'bg-white border border-gray-200'
          }`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Media Kit</h2>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
              Download our press kit for high-resolution logos, brand guidelines, and company information for media coverage.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-lg font-semibold mb-3 text-crypto-purple">Brand Assets</h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  Logos, brand colors, fonts, and usage guidelines.
                </p>
                <button className="px-4 py-2 bg-crypto-purple hover:bg-crypto-dark-purple text-white rounded-lg transition-colors">
                  Download PDF
                </button>
              </div>

              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-lg font-semibold mb-3 text-crypto-purple">Company Facts</h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  Statistics, milestones, and key company information.
                </p>
                <button className="px-4 py-2 bg-crypto-purple hover:bg-crypto-dark-purple text-white rounded-lg transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          </div>

          <div className={`backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8 ${
            theme === 'dark'
              ? 'bg-white/5 border border-white/10'
              : 'bg-white border border-gray-200'
          }`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Recent Coverage</h2>

            <div className="space-y-6">
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-lg font-semibold mb-2 text-crypto-purple">
                  "Revolutionizing Medical Education: preDoctr.pk's Innovative Approach"
                </h3>
                <p className={`mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  Published in Education Today • March 2025
                </p>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}>
                  A comprehensive feature on how preDoctr.pk is transforming MDCAT preparation with technology and expert guidance.
                </p>
              </div>

              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-lg font-semibold mb-2 text-crypto-purple">
                  "From Students to Educators: The preDoctr.pk Success Story"
                </h3>
                <p className={`mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  Published in Pakistan Tribune • February 2025
                </p>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}>
                  An inspiring story about how former MDCAT toppers created a platform to help future generations.
                </p>
              </div>

              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-lg font-semibold mb-2 text-crypto-purple">
                  "Technology Meets Medicine: Digital Learning in Pakistan"
                </h3>
                <p className={`mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  Published in Tech Pakistan Magazine • January 2025
                </p>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}>
                  Coverage of how preDoctr.pk leverages technology to make medical education accessible nationwide.
                </p>
              </div>
            </div>
          </div>

          <div className={`backdrop-blur-lg rounded-2xl p-8 md:p-12 ${
            theme === 'dark'
              ? 'bg-white/5 border border-white/10'
              : 'bg-white border border-gray-200'
          }`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Media Contact</h2>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
              For press inquiries, interviews, or collaboration opportunities, please reach out to our media team.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-lg font-semibold mb-3 text-crypto-purple">General Media Inquiries</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                  press@preDoctr.pk<br/>
                  +92 XXX XXXXXXX
                </p>
              </div>

              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className="text-lg font-semibold mb-3 text-crypto-purple">Partnerships & Collaborations</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                  partnerships@preDoctr.pk<br/>
                  For business development opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Press;
