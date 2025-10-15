import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Legal = () => {
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
            <span className="text-gradient">Legal & Privacy</span> Policy
          </h1>

          <div className={`backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8 ${
            theme === 'dark'
              ? 'bg-white/5 border border-white/10'
              : 'bg-white border border-gray-200'
          }`}>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Privacy Policy</h2>
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  At preDoctr.pk, we are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy outlines how we collect, use, and safeguard your information.
                </p>

                <h3 className="text-xl font-bold mb-4 text-crypto-purple">Information We Collect</h3>
                <ul className={`mb-6 text-base space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  <li>• Registration information (name, email, phone number)</li>
                  <li>• Payment information (processed securely through third-party providers)</li>
                  <li>• Usage data (pages visited, features accessed, study progress)</li>
                  <li>• Device information (IP address, browser type, operating system)</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 text-crypto-purple">How We Use Your Information</h3>
                <ul className={`mb-6 text-base space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  <li>• Provide and personalize our educational services</li>
                  <li>• Process payments and manage subscriptions</li>
                  <li>• Improve our platform and develop new features</li>
                  <li>• Communicate important updates and support responses</li>
                  <li>• Ensure platform security and prevent unauthorized access</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Data Security</h2>
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  We implement robust security measures including:
                </p>
                <ul className={`mb-6 text-base space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  <li>• SSL/TLS encryption for all data transmission</li>
                  <li>• Secure cloud storage with regular backups</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Restricted access controls for sensitive information</li>
                  <li>• Regular security updates and patches</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Cookies Policy</h2>
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  We use cookies to enhance your browsing experience and provide personalized content.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                    <h4 className="font-semibold mb-2 text-crypto-purple">Essential Cookies</h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                      Required for basic platform functionality, security, and user authentication.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                    <h4 className="font-semibold mb-2 text-crypto-purple">Analytics Cookies</h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                      Help us understand user behavior to improve our services.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                    <h4 className="font-semibold mb-2 text-crypto-purple">Functional Cookies</h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                      Remember your preferences and provide personalized features.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                    <h4 className="font-semibold mb-2 text-crypto-purple">Marketing Cookies</h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                      Used to deliver relevant advertisements and track campaign effectiveness.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Terms of Service</h2>

                <h3 className="text-xl font-bold mb-4 text-crypto-purple">User Responsibilities</h3>
                <ul className={`mb-6 text-base space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  <li>• Use the platform only for MDCAT preparation purposes</li>
                  <li>• Maintain account security and not share login credentials</li>
                  <li>• Respect copyright and intellectual property rights</li>
                  <li>• Report any technical issues or inappropriate content promptly</li>
                  <li>• Comply with all applicable laws and regulations</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 text-crypto-purple">Service Availability</h3>
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  While we strive for 99.9% uptime, we cannot guarantee uninterrupted access to our services. We reserve the right to perform maintenance and make improvements that may temporarily affect service availability.
                </p>

                <h3 className="text-xl font-bold mb-4 text-crypto-purple">Content Usage</h3>
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  Our content is available for personal educational use only. Redistribution, commercial use, or sharing access with unauthorized users is strictly prohibited. Academic institutions may contact us directly for licensing agreements.
                </p>

                <h3 className="text-xl font-bold mb-4 text-crypto-purple">Payment Terms</h3>
                <ul className={`mb-6 text-base space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  <li>• All prices are in Pakistani Rupees (PKR) and include applicable taxes</li>
                  <li>• Payments are processed securely through certified providers</li>
                  <li>• Subscription fees are charged at the beginning of each billing period</li>
                  <li>• Refunds are provided within 7 days of purchase for technical issues only</li>
                  <li>• Subscription cancellations take effect at the end of the current billing period</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Contact Information</h2>
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  If you have any questions about our Privacy Policy, Terms of Service, or Cookies Policy, please contact us:
                </p>

                <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-crypto-purple mb-2">Legal Inquiries</h4>
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                        legal@preDoctr.pk<br/>
                        For privacy and legal matters
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-crypto-purple mb-2">General Support</h4>
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                        support@preDoctr.pk<br/>
                        For technical and account issues
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="text-center pt-8">
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                  Last updated: October 2025. These policies are subject to periodic review and updates.
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

export default Legal;
