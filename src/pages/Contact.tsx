import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-[#12141C] text-white'
        : 'bg-slate-50 text-slate-900'
    }`}>
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Get in <span className="text-gradient">Touch</span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className={`backdrop-blur-lg rounded-2xl p-8 ${
                theme === 'dark'
                  ? 'bg-white/5 border border-white/10'
                  : 'bg-white border border-gray-200'
              }`}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-crypto-purple/10 rounded-lg">
                      <Mail className="h-6 w-6 text-crypto-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Support</h3>
                      <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                        Get quick responses to your questions
                      </p>
                      <a href="mailto:support@preDoctr.pk" className="text-crypto-purple hover:text-crypto-dark-purple transition-colors">
                        support@preDoctr.pk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-crypto-purple/10 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-crypto-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">WhatsApp Support</h3>
                      <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                        Instant support and quick queries
                      </p>
                      <a href="https://wa.me/923XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-crypto-purple hover:text-crypto-dark-purple transition-colors">
                        +92 XXX XXXXXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-crypto-purple/10 rounded-lg">
                      <Phone className="h-6 w-6 text-crypto-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone Support</h3>
                      <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                        Call us for immediate assistance
                      </p>
                      <a href="tel:+923XXXXXXXXX" className="text-crypto-purple hover:text-crypto-dark-purple transition-colors">
                        +92 XXX XXXXXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-crypto-purple/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-crypto-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Office Location</h3>
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                        Digital Innovation Hub<br/>
                        Islamabad, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`backdrop-blur-lg rounded-2xl p-8 ${
                theme === 'dark'
                  ? 'bg-white/5 border border-white/10'
                  : 'bg-white border border-gray-200'
              }`}>
                <h3 className="text-xl font-bold mb-4 text-crypto-purple">Support Hours</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Monday - Friday</h4>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                      9:00 AM - 6:00 PM (PKT)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Saturday</h4>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                      10:00 AM - 4:00 PM (PKT)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sunday</h4>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                      Emergency Support Only
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Response Time</h4>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                      Within 2-4 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`backdrop-blur-lg rounded-2xl p-8 ${
              theme === 'dark'
                ? 'bg-white/5 border border-white/10'
                : 'bg-white border border-gray-200'
            }`}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Send us a Message</h2>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                Have questions about our courses or need help with your MDCAT preparation?
                We'd love to hear from you!
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-crypto-purple'
                          : 'bg-white border-gray-300 text-slate-900 placeholder-gray-500 focus:border-crypto-purple'
                      }`}
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-crypto-purple'
                          : 'bg-white border-gray-300 text-slate-900 placeholder-gray-500 focus:border-crypto-purple'
                      }`}
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-crypto-purple'
                        : 'bg-white border-gray-300 text-slate-900 placeholder-gray-500 focus:border-crypto-purple'
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-crypto-purple'
                        : 'bg-white border-gray-300 text-slate-900 placeholder-gray-500 focus:border-crypto-purple'
                    }`}
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                    Inquiry Type
                  </label>
                  <select
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-600 text-white focus:border-crypto-purple'
                        : 'bg-white border-gray-300 text-slate-900 focus:border-crypto-purple'
                    }`}
                  >
                    <option>General Inquiry</option>
                    <option>Course Information</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunities</option>
                    <option>Media Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-crypto-purple'
                        : 'bg-white border-gray-300 text-slate-900 placeholder-gray-500 focus:border-crypto-purple'
                    }`}
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-crypto-purple hover:bg-crypto-dark-purple text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
