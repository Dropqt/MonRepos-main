# Google Places API Setup Instructions

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Click "Select a project" → "New Project"
4. Name it "Mon Repos Reviews" (or any name)
5. Click "Create"

## Step 2: Enable Places API

1. In the Google Cloud Console, go to **APIs & Services** → **Library**
2. Search for "Places API"
3. Click on "Places API"
4. Click "Enable"

## Step 3: Create API Key

1. Go to **APIs & Services** → **Credentials**
2. Click "Create Credentials" → "API Key"
3. Copy the API key (it will look like: `AIzaSyXXXXXXXXXXXXXXXXXXXX`)

## Step 4: Secure Your API Key (IMPORTANT!)

1. Click on your new API key to edit it
2. Under "Application restrictions":
   - Select "HTTP referrers (websites)"
   - Add your website URLs:
     - `http://localhost:3000/*` (for development)
     - `https://monrepossokobanja.com/*` (for production)
     - `https://*.monrepossokobanja.com/*` (if using subdomains)
3. Under "API restrictions":
   - Select "Restrict key"
   - Check only "Places API"
4. Click "Save"

## Step 5: Add API Key to Your Project

1. Create a file named `.env.local` in the root of your project
2. Add this line:
   ```
   NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key_here
   ```
3. Replace `your_api_key_here` with your actual API key

**Example:**
```
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXX
```

## Step 6: Restart Dev Server

After adding the `.env.local` file, restart your development server:

```bash
# Stop the server (Ctrl+C)
# Then start again:
npm run dev
```

## Step 7: Verify It Works

1. Open your website at http://localhost:3000
2. Scroll to the bottom - you should see Google reviews loading
3. Check browser console for any errors

---

## Pricing & Limits

**Good news**: Google Places API has a **FREE tier**!

- **Free Credits**: $200/month
- **Cost per request**: $0.017 per request
- **Free requests**: ~11,764 requests per month
- Your website will make 1 request when the homepage loads

**For a small business website**: You'll stay well within the free tier!

---

## Troubleshooting

### "API key not configured" error
- Make sure `.env.local` file exists in the root directory
- Restart your dev server after creating `.env.local`
- Check that the environment variable name is exactly: `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY`

### "Could not load reviews" error
- Check browser console for specific error message
- Verify API key is correct
- Make sure Places API is enabled in Google Cloud Console
- Check that your domain is added to HTTP referrers

### Reviews not showing
- Make sure your Google Business has reviews
- Check that the Place ID is correct in `GoogleReviews.tsx`
- Open browser DevTools → Network tab to see API response

---

## For Production Build

When building for production (`npm run build`):

Since this is a static export, the API routes won't work. You have two options:

### Option 1: Deploy to Vercel/Netlify (Recommended)
These platforms support Next.js API routes even with static export disabled.

### Option 2: Keep Static Export
If you must use static export:
- Remove the API route approach
- Fetch reviews directly from client (less secure, API key exposed)
- Or use a third-party review widget

**Recommendation**: Deploy to Vercel (free) to keep API routes working securely!

---

## Your Place ID

Your Mon Repos Place ID is already configured:
```
ChIJnwXNFE06VEcRET9fyHuE7FM
```

This was extracted from your Google Maps embed URL.
