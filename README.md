# Upskilling Automation Hero Section

A professional landing page for an AI upskilling automation agency, built with React, TypeScript, and Tailwind CSS.

## Features

- **Professional Design**: Clean, modern interface with trustworthy blues and innovative greens
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Lead Capture**: Integrated modal system for consultation scheduling
- **CRM Integration**: Ready for HubSpot, Cal.com, and other service integrations
- **Analytics Tracking**: Built-in event tracking and lead scoring
- **Performance Optimized**: Smooth animations and fast loading times

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## CRM Integration Setup

### HubSpot Integration

1. Get your HubSpot API key from your HubSpot account
2. Update the configuration in `src/App.tsx`:
   ```typescript
   const { trackLead } = useLeadTracking({
     hubspot: { 
       apiKey: 'your-hubspot-api-key', 
       portalId: 'your-portal-id' 
     }
   });
   ```

### Cal.com Integration

1. Get your Cal.com API key
2. Update the configuration:
   ```typescript
   const { trackLead } = useLeadTracking({
     calcom: { 
       apiKey: 'your-calcom-api-key', 
       userId: 'your-user-id' 
     }
   });
   ```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_HUBSPOT_API_KEY=your_hubspot_api_key
VITE_HUBSPOT_PORTAL_ID=your_portal_id
VITE_CALCOM_API_KEY=your_calcom_api_key
VITE_CALENDLY_API_KEY=your_calendly_api_key
VITE_GA_MEASUREMENT_ID=your_google_analytics_id
```

## Analytics Setup

### Google Analytics 4

Add your GA4 tracking code to `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel

Add Facebook Pixel code to track conversions:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## Testing Checklist

### Functionality Testing

- [ ] All CTA buttons trigger the lead capture modal
- [ ] Form validation works correctly
- [ ] Calendar integration functions properly
- [ ] Lead data is captured and stored
- [ ] Analytics events are firing

### Performance Testing

- [ ] Page loads in under 3 seconds
- [ ] Images are optimized and load quickly
- [ ] Animations are smooth on all devices
- [ ] No console errors or warnings

### Responsive Testing

- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Large screens (1440px+)

### Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast meets WCAG standards
- [ ] Focus indicators are visible

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Deploy to Vercel

1. Connect your repository to Vercel
2. Environment variables will be automatically detected
3. Deploy with zero configuration

## Customization

### Branding

Update colors in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
        }
      }
    }
  }
}
```

### Content

Update text content in `src/App.tsx` and replace placeholder testimonials with real client feedback.

### Integrations

Modify `src/hooks/useLeadTracking.ts` to add additional CRM or marketing automation integrations.

## Support

For technical support or customization requests, please contact the development team.

## License

This project is proprietary and confidential.