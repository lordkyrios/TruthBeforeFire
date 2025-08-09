# Deploying FaithBeforeFire to Vercel

## Issue: Blank Landing Page

If you're experiencing a blank landing page with only `{}` showing on Vercel, this is likely due to one of the following issues:

1. The server-side rendering is not properly configured
2. The static files are not being served correctly
3. There might be an issue with the API routes

## Fixed Version

The updated version includes:

1. A prominent Bible verse header (Revelation 3:21 KJV)
2. Proper Express.js configuration for Vercel deployment
3. Correct API routing for serverless functions

## Deployment Steps

1. **Push to GitHub**:
   ```
   git add .
   git commit -m "Add Bible verse header and fix blank page issue"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import your GitHub repository
   - Use the following settings:
     - Framework Preset: `Other`
     - Build Command: `npm install`
     - Output Directory: `.`
     - Install Command: `npm install`

3. **Environment Variables**:
   - No special environment variables are needed for this deployment

## Troubleshooting

If you still see a blank page:

1. Check Vercel deployment logs for errors
2. Ensure the `api` directory is properly structured
3. Verify that `vercel.json` has the correct configuration
4. Try forcing a clean rebuild by clearing the Vercel cache

## Bible Verse

The landing page now prominently features Revelation 3:21 KJV:

> "To him that overcometh will I grant to sit with me in my throne, even as I also overcame, and am set down with my Father in his throne."

With the commentary: "Jesus is God because ONLY God has a THRONE in Heaven."