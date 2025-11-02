import { Button } from '@/components/ui/button';
import { Copy, Mail, Phone, MessageCircle, Instagram, Facebook, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { theme } = useTheme();
  const { toast } = useToast();

  const contactInfo = {
    email: 'contact@predoctr.pk',
    whatsapp: '034821566226'
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/predoctr.pk',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/predoctr.pk',
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/${contactInfo.whatsapp}`,
      color: 'hover:text-green-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/predoctr.pk',
      color: 'hover:text-gray-300'
    }
  ];

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${label} has been copied to clipboard.`,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className={`py-24 relative overflow-hidden transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#2A3A5C] to-[#111827]'
        : 'bg-gradient-cta-light'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-crypto-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-crypto-light-purple/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-6xl mx-auto backdrop-blur-lg border rounded-2xl p-8 md:p-12 text-center ${
          theme === 'dark'
            ? 'bg-white/5 border-white/10'
            : 'bg-white border-gray-200'
        }`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 animate-fade-in ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className={`text-lg mb-12 max-w-2xl mx-auto animate-fade-in ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`} style={{ animationDelay: '0.2s' }}>
            Ready to ace your MDCAT 2026? Connect with us for personalized guidance and support on your medical journey.
          </p>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Email */}
            <div className={`backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                : 'bg-gray-50 border border-gray-200 hover:bg-white'
            }`}>
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-crypto-purple/10 rounded-full">
                  <Mail className="h-6 w-6 text-crypto-purple" />
                </div>
              </div>
              <h3 className={`font-semibold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Email Us
              </h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                Get quick responses to your questions
              </p>
              <div className="flex items-center justify-center space-x-2">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-crypto-purple hover:text-crypto-dark-purple transition-colors text-sm font-medium"
                >
                  {contactInfo.email}
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(contactInfo.email, 'Email address')}
                  className={`p-1 h-6 w-6 ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
                >
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* WhatsApp */}
            <div className={`backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                : 'bg-gray-50 border border-gray-200 hover:bg-white'
            }`}>
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-green-500/10 rounded-full">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <h3 className={`font-semibold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                WhatsApp
              </h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                Instant support and quick queries
              </p>
              <div className="flex items-center justify-center space-x-2">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 transition-colors text-sm font-medium"
                >
                  {contactInfo.whatsapp}
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(contactInfo.whatsapp, 'WhatsApp number')}
                  className={`p-1 h-6 w-6 ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
                >
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Phone */}
            <div className={`backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1 ${
              theme === 'dark'
                ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                : 'bg-gray-50 border border-gray-200 hover:bg-white'
            }`}>
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-blue-500/10 rounded-full">
                  <Phone className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <h3 className={`font-semibold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Phone Support
              </h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                Call us for immediate assistance
              </p>
              <div className="flex items-center justify-center space-x-2">
                <a
                  href={`tel:${contactInfo.whatsapp}`}
                  className="text-blue-500 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  {contactInfo.whatsapp}
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(contactInfo.whatsapp, 'Phone number')}
                  className={`p-1 h-6 w-6 ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
                >
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className={`text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Follow Us
            </h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                        : 'bg-gray-50 hover:bg-white border border-gray-200'
                    } ${social.color}`}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <IconComponent className={`h-6 w-6 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                    }`} />
                    <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-800'
                    }`}>
                      {social.name}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <p className={`mt-8 text-sm animate-fade-in ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`} style={{ animationDelay: '0.8s' }}>
            We typically respond within 2-4 hours during business hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
