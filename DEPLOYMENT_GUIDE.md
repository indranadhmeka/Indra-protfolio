# Deployment Guide: EmailJS Portfolio

## Step 1: Get Your EmailJS Credentials

### 1.1 Create Email Template
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Templates**
3. Click **Create New Template**
4. Use these template variables:
   ```
   From Name: {{from_name}}
   From Email: {{from_email}}
   Message: {{message}}
   To Email: {{to_email}}
   ```

### 1.2 Get Your Credentials
- **Service ID**: Already set to `service_wqbhlvg` ✅
- **Template ID**: Copy from Email Templates page
- **Public Key**: Go to Account → API Keys → Copy Public Key

### 1.3 Update Configuration
Edit `src/emailjs-config.js`:
```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_wqbhlvg',
  TEMPLATE_ID: 'your_actual_template_id',
  PUBLIC_KEY: 'your_actual_public_key'
};
```

## Step 2: Deploy to GitHub Pages

### 2.1 Build for Production
```bash
npm run build
```

### 2.2 Deploy to GitHub Pages
```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Add deploy script to package.json
# Then run:
npm run deploy
```

### 2.3 Alternative: Manual GitHub Pages Setup
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

## Step 3: Test Your Contact Form

1. Visit your deployed portfolio
2. Navigate to Contact section
3. Fill out the form and submit
4. Check your email for the message

## Troubleshooting

### "Failed to send message" Error
- Verify your EmailJS credentials are correct
- Ensure your EmailJS service is active
- Check that your template is properly configured
- Verify your public key is valid

### GitHub Pages Not Loading
- Wait a few minutes for deployment to complete
- Check the Actions tab for deployment status
- Ensure your build completed successfully

## Security Notes

- Your public key is safe to expose in frontend code
- Never share your private EmailJS key
- EmailJS handles email sending securely on their servers

## Next Steps

After deployment:
1. Share your portfolio URL
2. Test the contact form thoroughly
3. Monitor your EmailJS dashboard for usage
4. Consider adding form validation improvements
