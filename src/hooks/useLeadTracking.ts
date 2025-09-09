import { useState, useCallback } from 'react';

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  source: string;
  timestamp: Date;
}

interface CRMIntegration {
  hubspot?: {
    apiKey: string;
    portalId: string;
  };
  calendly?: {
    apiKey: string;
    userId: string;
  };
  calcom?: {
    apiKey: string;
    userId: string;
  };
}

export const useLeadTracking = (config?: CRMIntegration) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trackLead = useCallback(async (leadData: Omit<LeadData, 'timestamp'>) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const fullLeadData: LeadData = {
        ...leadData,
        timestamp: new Date()
      };

      // Store locally first
      const existingLeads = JSON.parse(localStorage.getItem('leads') || '[]');
      existingLeads.push(fullLeadData);
      localStorage.setItem('leads', JSON.stringify(existingLeads));

      // Send to HubSpot if configured
      if (config?.hubspot) {
        await sendToHubSpot(fullLeadData, config.hubspot);
      }

      // Send to calendar service if configured
      if (config?.calendly) {
        await sendToCalendly(fullLeadData, config.calendly);
      }

      if (config?.calcom) {
        await sendToCalCom(fullLeadData, config.calcom);
      }

      // Analytics tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_capture', {
          event_category: 'engagement',
          event_label: leadData.source,
          value: 1
        });
      }

      return { success: true, data: fullLeadData };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to track lead';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  }, [config]);

  const sendToHubSpot = async (leadData: LeadData, hubspotConfig: NonNullable<CRMIntegration['hubspot']>) => {
    // In production, this would make actual API calls to HubSpot
    console.log('Sending to HubSpot:', leadData, hubspotConfig);
    
    // Example HubSpot API call structure:
    /*
    const response = await fetch(`https://api.hubapi.com/contacts/v1/contact/?hapikey=${hubspotConfig.apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: [
          { property: 'email', value: leadData.email },
          { property: 'firstname', value: leadData.name.split(' ')[0] },
          { property: 'lastname', value: leadData.name.split(' ').slice(1).join(' ') },
          { property: 'phone', value: leadData.phone },
          { property: 'company', value: leadData.company },
          { property: 'message', value: leadData.message },
          { property: 'lead_source', value: leadData.source }
        ]
      })
    });
    */
  };

  const sendToCalendly = async (leadData: LeadData, calendlyConfig: NonNullable<CRMIntegration['calendly']>) => {
    // In production, this would integrate with Calendly API
    console.log('Sending to Calendly:', leadData, calendlyConfig);
  };

  const sendToCalCom = async (leadData: LeadData, calcomConfig: NonNullable<CRMIntegration['calcom']>) => {
    // In production, this would integrate with Cal.com API
    console.log('Sending to Cal.com:', leadData, calcomConfig);
  };

  return {
    trackLead,
    isSubmitting,
    error
  };
};