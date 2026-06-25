/**
 * Meta Pixel tracking utility for LMS redirect events.
 * Fires a 'Contact' event when users click buttons that navigate to lms.predoctr.pk
 */
export const trackLMSRedirect = (buttonName: string) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Contact', {
            content_name: 'LMS Redirect',
            button_label: buttonName,
            destination: 'lms.predoctr.pk'
        });
    }
};
