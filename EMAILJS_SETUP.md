# EmailJS Setup Guide

Your portfolio now includes a fully functional contact form with **EmailJS** integration. Follow these steps to enable email delivery:

## Quick Start (5 minutes)

### 1. Sign Up for EmailJS
- Visit [emailjs.com](https://www.emailjs.com/)
- Click **"Sign Up"** and create a free account
- Verify your email address

### 2. Set Up Email Service
1. Log into EmailJS dashboard
2. Navigate to **"Email Services"** (left sidebar)
3. Click **"Add Service"**
4. Choose **Gmail** or your preferred email provider
   - **Gmail**: Requires an [App Password](https://support.google.com/accounts/answer/185833)
   - **Other providers**: Available (Yahoo, Outlook, custom SMTP)
4. Follow the provider's authentication steps
5. Copy the **Service ID** (looks like: `service_xxxxxxxxx`)

### 3. Create Email Template
1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use these template variables:
   ```
   {{from_name}} - Name of the sender
   {{from_email}} - Email address of the sender
   {{message}} - Message content
   {{to_email}} - Your email (auto-populated)
   ```

4. **Template Example**:
   ```
   From: {{from_name}} <{{from_email}}>
   
   Message:
   {{message}}
   ```

5. Save and copy the **Template ID** (looks like: `template_xxxxxxxxx`)

### 4. Get Your Public Key
1. Go to **"Account"** (top-right menu)
2. Find **"Public Key"** section
3. Copy your public key

### 5. Add Credentials to Environment
Create or update `.env.local` in your project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Test Your Form
```bash
npm run dev
```
1. Open http://localhost:5173
2. Navigate to the Contact section
3. Fill out the form and click "Let's Connect"
4. Check your email inbox for the test message

---

## Troubleshooting

### Form says "Email service not configured"
- Verify all three environment variables are set correctly
- Restart dev server after adding env variables
- Check for typos in Service/Template IDs and Public Key

### Emails not arriving
- Check **Spam/Junk** folder
- Verify email service is **Activated** in EmailJS dashboard
- Test using EmailJS's built-in email test tool first
- Ensure template variables match form fields

### CORS Error in Console
- This is expected in development - EmailJS handles it
- Should work fine in production

---

## Free Tier Limits (Sufficient for your needs)

- **200 emails/month** (more than enough for a student portfolio)
- Unlimited template storage
- Full API access
- No credit card required

---

## Production Deployment

When deploying to Vercel:

1. Add environment variables to Vercel dashboard:
   - Go to **Settings → Environment Variables**
   - Add all three `VITE_EMAILJS_*` variables

2. Redeploy your site

That's it! Your contact form will work seamlessly.

---

## Security Notes

- Your **Public Key** is meant to be public (it's in the frontend code)
- EmailJS validates all requests server-side
- Avoid putting Service ID or Template ID in frontend code directly
- All email routing happens on EmailJS servers securely

---

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Gmail App Password Setup](https://support.google.com/accounts/answer/185833)
- [EmailJS Support](https://www.emailjs.com/docs/faqs/getting-started-faqs/)
