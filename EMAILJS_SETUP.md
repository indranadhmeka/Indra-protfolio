# EmailJS Setup Instructions

Your portfolio has been configured to use EmailJS with service ID `service_wqbhlvg`. To complete the setup, follow these steps:

## 1. Update EmailJS Configuration

Edit `src/emailjs-config.js` and replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_wqbhlvg',        // ✅ Already set
  TEMPLATE_ID: 'your_template_id',       // Replace with your actual template ID
  PUBLIC_KEY: 'your_public_key'          // Replace with your actual public key
};
```

## 2. Create Email Template

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to Email Templates
3. Create a new template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Recipient email (mekaindranadh@gmail.com)

## 3. Get Your Public Key

1. In EmailJS Dashboard, go to Account → API Keys
2. Copy your Public Key
3. Add it to the configuration file

## 4. Install Dependencies

Run the following command to install EmailJS:

```bash
npm install
```

## 5. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and test the submission

## Features Added

- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Responsive design
- ✅ Form reset after successful submission

## Security Notes

- Your public key is safe to expose in frontend code
- Never expose your private key
- EmailJS handles the email sending securely on their servers

## Troubleshooting

If emails aren't sending:
1. Check that all configuration values are correct
2. Verify your EmailJS service is active
3. Ensure your template is properly configured
4. Check browser console for error messages
