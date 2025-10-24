# Deployment Guide for Intelligence Amplifier™

## 🚀 Quick Start Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Intelligence Amplifier website"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Domain**
   - Go to Project Settings → Domains
   - Add `intelligenceamplifier.ai`
   - Follow Vercel's DNS configuration instructions

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 📋 Pre-Deployment Checklist

- [ ] Install dependencies: `npm install`
- [ ] Test build locally: `npm run build`
- [ ] Test production server: `npm run start`
- [ ] Verify responsive design on mobile/tablet/desktop
- [ ] Check dark mode functionality
- [ ] Review SEO metadata in `app/layout.tsx`
- [ ] Add any environment variables to Vercel project settings

## 🔧 Environment Variables

If you need to add environment variables:

1. **Local Development**
   - Copy `.env.example` to `.env.local`
   - Add your variables

2. **Vercel Production**
   - Go to Project Settings → Environment Variables
   - Add variables for Production, Preview, and Development

## 🌐 DNS Configuration

To use your custom domain `intelligenceamplifier.ai`:

1. **Add Domain in Vercel**
   - Project Settings → Domains
   - Add `intelligenceamplifier.ai`
   - Add `www.intelligenceamplifier.ai` (optional)

2. **Configure DNS Records** (at your domain registrar)
   - **A Record**: Point to Vercel's IP: `76.76.21.21`
   - **CNAME**: Point `www` to `cname.vercel-dns.com`

3. **Wait for Propagation** (can take up to 48 hours)

## 📊 Post-Deployment

### Verify Deployment

- [ ] Visit your production URL
- [ ] Test all interactive elements
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags (view page source)
- [ ] Test dark mode toggle
- [ ] Check loading performance

### Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Edge caching
- ✅ Analytics (optional)

### Monitoring

Enable Vercel Analytics:
```bash
npm install @vercel/analytics
```

Then add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🔄 Continuous Deployment

Vercel automatically:
- Deploys `main` branch to production
- Creates preview deployments for pull requests
- Runs builds on every push

## 🆘 Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Verify `package.json` dependencies
3. Test build locally: `npm run build`

### DNS Not Resolving

1. Wait up to 48 hours for propagation
2. Use `dig intelligenceamplifier.ai` to check DNS
3. Verify DNS records at your registrar

### Styling Issues

1. Clear browser cache
2. Check Tailwind config
3. Verify `globals.css` is imported

## 📞 Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)

---

© 2025 Arvin Lioanag. All rights reserved.



