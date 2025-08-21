# TruthBeforeFire — MERGE PACK

This pack drops the **Browser Studio** (17 features, client-only) into your existing Next.js repo without touching your current pages.

## What it does
- Copies the static studio into **/public/tbf-studio**.
- Adds a **/pages/studio.js** route that redirects `/studio` to the static `/tbf-studio/index.html`.
- Optionally commits & pushes (PowerShell script).

## Quick Use
1. Extract this ZIP anywhere on your PC.
2. Open PowerShell and run:
   ```powershell
   cd "<folder you extracted>"
   .\merge.ps1 -Repo "C:\path	o\your\TruthBeforeFire"
   ```
3. Push triggers Vercel; after it finishes, open:
   - `https://<your-domain>/studio`

If your project is a static site (not Next.js), you can just copy **public/tbf-studio** into your web root and link to `/tbf-studio/index.html`.
