// Analytics and tracking utilities

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const trackEvent = (event: AnalyticsEvent) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'CustomEvent', {
      action: event.action,
      category: event.category
    });
  }

  // Console log for development
  console.log('Analytics Event:', event);
};

export const trackPageView = (page: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: page,
      page_location: window.location.href
    });
  }
};

export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent({
    action: 'conversion',
    category: 'lead_generation',
    label: conversionType,
    value
  });
};

// Lead scoring based on user interactions
export const calculateLeadScore = (interactions: string[]): number => {
  const scoreMap: Record<string, number> = {
    'page_view': 1,
    'section_scroll': 2,
    'cta_click': 5,
    'form_start': 10,
    'form_complete': 25,
    'calendar_book': 50
  };

  return interactions.reduce((total, interaction) => {
    return total + (scoreMap[interaction] || 0);
  }, 0);
};