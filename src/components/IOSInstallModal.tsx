import { X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface IOSInstallModalProps {
    onClose: () => void;
}

const IOSInstallModal = ({ onClose }: IOSInstallModalProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className={`relative w-full max-w-sm rounded-2xl shadow-2xl p-6 animate-slide-up ${isDark ? 'bg-[#1A1D2E] border border-white/10' : 'bg-white border border-slate-200'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${isDark ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-slate-100 text-slate-500'
                        }`}
                >
                    <X className="w-4 h-4" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-crypto-purple to-purple-700 flex items-center justify-center shadow-lg">
                        {/* Apple Icon */}
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            Install on iPhone
                        </h3>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                            Add preDoctr.pk to your Home Screen
                        </p>
                    </div>
                </div>

                {/* Steps */}
                <ol className="space-y-4">
                    {/* Step 1 */}
                    <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-crypto-purple text-white text-xs font-bold flex items-center justify-center mt-0.5">1</span>
                        <div>
                            <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                Open in <span className="text-crypto-purple">Safari</span>
                            </p>
                            <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                                This only works in Safari, not Chrome or Firefox.
                            </p>
                        </div>
                    </li>

                    {/* Step 2 */}
                    <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-crypto-purple text-white text-xs font-bold flex items-center justify-center mt-0.5">2</span>
                        <div>
                            <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                Tap the <span className="text-crypto-purple">Share</span> button
                            </p>
                            <div className={`mt-1 inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs ${isDark ? 'bg-white/10 text-gray-300' : 'bg-slate-100 text-slate-600'}`}>
                                {/* Share icon */}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
                                </svg>
                                <span>Share</span>
                            </div>
                            <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                                Located at the bottom of the screen.
                            </p>
                        </div>
                    </li>

                    {/* Step 3 */}
                    <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-crypto-purple text-white text-xs font-bold flex items-center justify-center mt-0.5">3</span>
                        <div>
                            <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                Tap <span className="text-crypto-purple">"Add to Home Screen"</span>
                            </p>
                            <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                                Scroll down in the Share sheet to find it.
                            </p>
                        </div>
                    </li>

                    {/* Step 4 */}
                    <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-crypto-purple text-white text-xs font-bold flex items-center justify-center mt-0.5">4</span>
                        <div>
                            <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                Tap <span className="text-crypto-purple">"Add"</span> to confirm
                            </p>
                            <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                                preDoctr.pk will appear on your Home Screen!
                            </p>
                        </div>
                    </li>
                </ol>

                {/* Done button */}
                <button
                    onClick={onClose}
                    className="mt-6 w-full py-3 rounded-xl bg-crypto-purple text-white font-semibold text-sm hover:bg-purple-700 transition-colors"
                >
                    Got it!
                </button>
            </div>
        </div>
    );
};

export default IOSInstallModal;
