# TruthBeforeFire — Browser Studio (No-Server Build)

This is a **client‑only** build that runs in any modern browser. It implements 17 features and keeps your site deployable on GitHub Pages or Vercel without any back‑end.

## Features
1) Scene editor (split script into scenes)  
2) Auto‑timed durations from text (rough WPM model)  
3) Export **.srt** subtitles  
4) Image upload (first image is the visual; auto letterboxed to 1080p)  
5) Background music mixing under voice  
6) Voice preview (Web Speech API)  
7) Microphone voiceover recording (MediaRecorder)  
8) Voiceover file import  
9) Timeline estimate  
10) **FFmpeg.wasm** export to MP4 (H.264, 1080p, 30fps) in the browser  
11) Metadata builder (title, description, tags)  
12) YouTube login (client OAuth)  
13) YouTube upload (client‑side, *optional*, requires your own credentials)  
14) Plan gating (Free/Mini/Pro/Creator/Ultimate)  
15) One‑time Mini unlock code (MINI‑TEST-199)  
16) Owner override (email: s506981@gmail.com)  
17) Local persistence of settings & metadata  

> Notes: Actual AI features (OpenAI image gen, Google TTS), Stripe, and server‑side plan enforcement still require a back‑end. This build focuses on what is truly possible **today** in the browser.

## Quick start
- Open `index.html` in your browser (or host on GitHub Pages / Vercel).  
- Load an image, record/import voice, optionally add background music.  
- Click **Assemble MP4** to export.  
- Create **SRT** from your script via **Export .srt**.  
- (Optional) Configure Google OAuth to upload to YouTube.

## YouTube Upload (client‑side)
1. Create Google Cloud project → enable **YouTube Data API v3**.  
2. Create **OAuth Client ID** (type: Web application).  
3. Add your domain to Authorized JavaScript origins (for localhost: `http://127.0.0.1:5500` or your Pages URL).  
4. Get **API Key** as well.  
5. In the app Settings, paste **CLIENT_ID** and **API Key**. Click **Load Google API**, **Sign in**, then use **Upload to YouTube** with your MP4.  

> Large uploads may be slow from the browser. For production, prefer a back‑end + resumable uploads.

## Roadmap to Full TruthBeforeFire
- Migrate this UI into Next.js.  
- Implement `/app/api/tts` (Google TTS), `/app/api/images` (OpenAI), `/app/api/upload-youtube`, `/app/api/stripe/*`.  
- Enforce plan durations on the server in `/api/render-video`.  
- Persist users/videos via Supabase or your DB.
