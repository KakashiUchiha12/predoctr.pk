import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X, Star, Award, Users, TrendingUp } from 'lucide-react';
import { comparisonData, uniqueSellingPoints } from '../data/comparisonData';
import { useTheme } from '../contexts/ThemeContext';

const Comparison = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'comparison' | 'usp'>('comparison');

  const renderComparisonValue = (value: string | boolean | number) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    return <span className={`font-semibold text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{value}</span>;
  };

  return (
    <section id="comparison" className={`py-16 md:py-24 transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-slate-800 to-slate-900'
        : 'bg-gradient-to-b from-slate-50 to-slate-100'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Why Choose <span className="text-gradient">preDoctr.pk?</span>
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-slate-900'}`}>
            See how we compare to traditional MDCAT preparation methods and other online platforms
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className={`inline-flex rounded-lg p-1 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'}`}>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-md font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === 'comparison'
                  ? 'bg-crypto-purple text-white shadow-lg'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-black hover:text-slate-900'
              }`}
            >
              📊 Detailed Comparison
            </button>
            <button
              onClick={() => setActiveTab('usp')}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-md font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === 'usp'
                  ? 'bg-crypto-purple text-white shadow-lg'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-black hover:text-slate-900'
              }`}
            >
              ⭐ Unique Advantages
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        {activeTab === 'comparison' && (
          <>
            {/* Desktop Table View */}
            <div className={`hidden md:block rounded-2xl overflow-hidden shadow-2xl ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}>
              <div className={`p-6 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-100'}`}>
                <h3 className={`text-xl md:text-2xl font-bold text-center flex items-center justify-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  <div className="flex items-center gap-2">
                    <img src="favicon/cropped-Blue-Stethoscope-Medical-Logo-3-1-1.png" alt="preDoctr.pk" className="w-8 h-8 object-contain" />
                    <span className="font-bold">
                      <span className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>pre</span><span className="text-crypto-purple">Doctr.pk</span>
                    </span>
                  </div>
                  <span className="text-gray-400">vs.</span>
                  <span className="font-medium">Academies</span>
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-50'}`}>
                      <th className={`px-4 md:px-6 py-3 md:py-4 text-left font-semibold text-sm md:text-base ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        Feature
                      </th>
                      <th className={`px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-sm md:text-base ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <div className="flex items-center justify-center gap-2">
                          <img src="favicon/cropped-Blue-Stethoscope-Medical-Logo-3-1-1.png" alt="preDoctr.pk" className="w-6 h-6 object-contain" />
                          <span className="hidden md:inline font-bold">
                            <span className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>pre</span><span className="text-crypto-purple">Doctr.pk</span>
                          </span>
                        </div>
                      </th>
                      <th className={`px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-sm md:text-base ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <div className="flex items-center justify-center gap-2">
                          <span className="hidden md:inline">Academies</span>
                          <Users className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-t ${theme === 'dark' ? 'border-slate-600' : 'border-slate-200'} hover:${
                          theme === 'dark' ? 'bg-slate-700' : 'bg-slate-50'
                        } transition-colors duration-300`}
                      >
                        <td className={`px-4 md:px-6 py-3 md:py-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          <div>
                            <div className="font-medium text-sm md:text-base">{item.category}</div>
                    {item.description && (
                      <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
                        {item.description}
                      </p>
                    )}
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-3 md:py-4 text-center">
                          <div className={`p-2 md:p-3 rounded-lg ${
                            theme === 'dark' ? 'bg-green-900/20' : 'bg-green-50'
                          }`}>
                            {renderComparisonValue(item.preDoctr)}
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-3 md:py-4 text-center">
                          <div className={`p-2 md:p-3 rounded-lg ${
                            theme === 'dark' ? 'bg-red-900/20' : 'bg-red-50'
                          }`}>
                            {renderComparisonValue(item.competitors)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              <h3 className={`text-lg md:text-xl font-bold text-center mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                <div className="flex items-center gap-2">
                  <img src="favicon/cropped-Blue-Stethoscope-Medical-Logo-3-1-1.png" alt="preDoctr.pk" className="w-6 h-6 object-contain" />
                  <span className="font-bold">
                    <span className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>pre</span><span className="text-crypto-purple">Doctr.pk</span>
                  </span>
                </div>
                <span className="text-gray-400 text-sm">vs.</span>
                <span className="font-medium text-sm">Academies</span>
              </h3>

              {comparisonData.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    theme === 'dark' ? 'bg-slate-800 border-slate-600' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="mb-3">
                    <h4 className={`font-semibold text-sm md:text-base ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {item.category}
                    </h4>
                    {item.description && (
                      <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className={`text-center p-2 rounded ${
                      theme === 'dark' ? 'bg-green-900/20' : 'bg-green-50'
                    }`}>
                        <div className="flex items-center justify-center gap-1 mb-1">
                        <img src="favicon/cropped-Blue-Stethoscope-Medical-Logo-3-1-1.png" alt="preDoctr.pk" className="w-5 h-5 object-contain" />
                        <span className="text-xs font-bold">
                          <span className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>pre</span><span className="text-crypto-purple">Doctr.pk</span>
                        </span>
                      </div>
                      {renderComparisonValue(item.preDoctr)}
                    </div>

                    <div className={`text-center p-2 rounded ${
                      theme === 'dark' ? 'bg-red-900/20' : 'bg-red-50'
                    }`}>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="w-3 h-3 text-gray-400" />
                        <span className={`text-xs font-medium ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          Academies
                        </span>
                      </div>
                      {renderComparisonValue(item.competitors)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Unique Selling Points */}
        {activeTab === 'usp' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {uniqueSellingPoints.map((usp, index) => (
              <div
                key={index}
                className={`p-4 md:p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  theme === 'dark'
                    ? 'bg-slate-800 border border-slate-600 hover:bg-slate-700'
                    : 'bg-white border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="text-2xl md:text-4xl mb-3 md:mb-4">{usp.icon}</div>
                <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {usp.title}
                </h3>
                <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className={`text-center mt-12 md:mt-16 p-6 md:p-8 rounded-2xl ${
          theme === 'dark' ? 'bg-crypto-purple/10' : 'bg-crypto-purple/5'
        }`}>
          <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Ready to Experience the Difference?
          </h3>
          <p className={`text-base md:text-lg mb-4 md:mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>
            Join thousands of successful MDCAT students who chose preDoctr.pk
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <button
              onClick={() => navigate('/cryptoflow/registration')}
              className="bg-crypto-purple hover:bg-crypto-purple/90 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`border-2 border-crypto-purple ${theme === 'dark' ? 'text-crypto-purple' : 'text-crypto-purple'} px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105`}
            >
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
