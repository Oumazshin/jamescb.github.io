# Environment Variables Reference Guide

## 🔑 All Environment Variables

### Format
```
VITE_VARIABLE_NAME=value
```

Note: All `VITE_` prefixed variables are publicly exposed (Vite convention). Never put secrets here. Use backend for sensitive data.

---

## 📋 Complete List

### Contact Information
```env
# Your email address (used in Contact page)
VITE_CONTACT_EMAIL=bacolorjamesclark@gmail.com
```

### Social Media Links
```env
# LinkedIn profile URL
VITE_LINKEDIN_URL=https://www.linkedin.com/in/james-clark-bacolor-7b6b34296

# GitHub profile URL  
VITE_GITHUB_URL=https://github.com/Oumazshin

# Instagram profile URL
VITE_INSTAGRAM_URL=https://www.instagram.com/jamsxc_
```

### API Configuration
```env
# Base URL for API calls (if using backend)
# Leave empty for now, set when you build a backend
VITE_API_BASE_URL=
```

### Feature Flags
```env
# Enable error tracking (Sentry, LogRocket, etc.)
# Values: true or false
VITE_ENABLE_ERROR_TRACKING=false

# Enable analytics (Google Analytics, Mixpanel, etc.)
# Values: true or false
VITE_ENABLE_ANALYTICS=false
```

---

## 🔐 How to Add to Vercel

### Step 1: Open Vercel Dashboard
- Go to https://vercel.com/dashboard
- Select your project

### Step 2: Go to Settings
- Click **Settings** (top navigation)
- Click **Environment Variables** (left sidebar)

### Step 3: Add Each Variable
For each variable:
1. Click **Add New**
2. **Name**: Enter variable name (e.g., `VITE_CONTACT_EMAIL`)
3. **Value**: Enter the value
4. **Scope**: Select **Production** (or Production, Preview, Development)
5. Click **Save**

### Step 4: Redeploy
- Go to **Deployments** tab
- Click **Redeploy** on latest commit

---

## 🛠️ Development Setup

### Create .env.local (Don't commit this!)

```bash
# Copy from .env.example
cp .env.example .env.local
```

Your `.env.local` file (for local development only):
```env
VITE_CONTACT_EMAIL=bacolorjamesclark@gmail.com
VITE_LINKEDIN_URL=https://www.linkedin.com/in/james-clark-bacolor-7b6b34296
VITE_GITHUB_URL=https://github.com/Oumazshin
VITE_INSTAGRAM_URL=https://www.instagram.com/jamsxc_
VITE_API_BASE_URL=
VITE_ENABLE_ERROR_TRACKING=false
VITE_ENABLE_ANALYTICS=false
```

---

## 💻 Accessing Variables in Code

### In JavaScript/JSX
```jsx
import { config } from './config';

// Access email
console.log(config.email); // bacolorjamesclark@gmail.com

// Access LinkedIn
console.log(config.linkedIn); // https://www.linkedin.com/...
```

### Direct Access (Advanced)
```jsx
// Directly from Vite
const email = import.meta.env.VITE_CONTACT_EMAIL;
const isDev = import.meta.env.DEV; // true/false
const isProd = import.meta.env.PROD; // true/false
```

---

## ✅ Verification Checklist

### Before Deployment
- [ ] All 7 variables added in Vercel dashboard
- [ ] Correct values (no extra spaces, etc.)
- [ ] Scope set to **Production**
- [ ] Redeploy triggered

### After Deployment  
- [ ] Visit deployed site
- [ ] Click contact links - should show correct email/socials
- [ ] Check browser DevTools Network tab - no 404s
- [ ] Verify Contact form shows correct social links

### Common Issues
- **Links not updating**: Clear browser cache (Cmd/Ctrl + Shift + Delete)
- **Email not showing**: Check for typos in env var name
- **Scope wrong**: If not showing in production, add to Production scope

---

## 🔄 Updating Variables

### To Change a Value
1. Go to Vercel Settings → Environment Variables
2. Find the variable you want to change
3. Click the pencil icon (✏️)
4. Update the value
5. Click **Save**
6. Go to Deployments → **Redeploy**

### To Add New Variables
1. Click **Add New**
2. Enter name and value
3. Select scope (usually **Production**)
4. Click **Save**
5. Redeploy

---

## 📚 Examples

### Setting Up For Different Environments

#### Production (Vercel)
```
VITE_CONTACT_EMAIL = bacolorjamesclark@gmail.com
VITE_LINKEDIN_URL = https://www.linkedin.com/in/james-clark-bacolor-7b6b34296
VITE_GITHUB_URL = https://github.com/Oumazshin
VITE_INSTAGRAM_URL = https://www.instagram.com/jamsxc_
VITE_ENABLE_ERROR_TRACKING = false
VITE_ENABLE_ANALYTICS = false
```

#### Development (Local .env.local)
```
VITE_CONTACT_EMAIL = bacolorjamesclark@gmail.com
VITE_LINKEDIN_URL = https://www.linkedin.com/in/james-clark-bacolor-7b6b34296
VITE_GITHUB_URL = https://github.com/Oumazshin
VITE_INSTAGRAM_URL = https://www.instagram.com/jamsxc_
VITE_ENABLE_ERROR_TRACKING = false
VITE_ENABLE_ANALYTICS = false
```

---

## 🚀 Future Variables (When You Add Features)

### When Adding Email (EmailJS)
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### When Adding Analytics
```env
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
VITE_ENABLE_ANALYTICS=true
```

### When Adding Error Tracking
```env
VITE_SENTRY_DSN=https://...@sentry.io/...
VITE_ENABLE_ERROR_TRACKING=true
```

### When Adding Backend API
```env
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_API_KEY=your_api_key_if_needed
```

---

## 📞 Troubleshooting

### Variables Not Appearing After Deploy
1. Clear browser cache: Cmd/Ctrl + Shift + Delete
2. Hard refresh: Cmd/Ctrl + Shift + R
3. Check Vercel deployment logs for build errors
4. Verify scope is set to **Production**

### See Variables in Browser Console
```javascript
// Check what values are loaded
console.log(import.meta.env);
```

### Variables Working Locally But Not on Vercel
1. Verify variable name is exactly correct (case-sensitive)
2. Verify scope includes **Production**
3. Check that variable exists in .env.local (for local testing)
4. Redeploy after adding/changing variables

---

## 🔐 Security Best Practices

✅ **OK to Expose** (VITE_ variables)
- Public URLs (LinkedIn, GitHub, Instagram)
- Public email addresses
- Feature flags
- API endpoints (without auth)

❌ **Never Expose** (Use backend API)
- API keys for services
- Database passwords
- Authentication tokens
- Personal information
- Credit card data

---

## 📖 Reference

- **Vite Docs**: https://vitejs.dev/guide/env-and-mode.html
- **Vercel Docs**: https://vercel.com/docs/concepts/projects/environment-variables
- **Your Config File**: `src/config.js`
- **Environment Template**: `.env.example`

---

Ready to deploy! 🚀

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for next steps.
