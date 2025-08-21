param(
  [string]$Repo = "."
)

# Resolve absolute paths
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoPath = Resolve-Path $Repo

Write-Host "Merging TruthBeforeFire Browser Studio into:" $RepoPath -ForegroundColor Cyan

# Ensure public/tbf-studio exists
$TargetPublic = Join-Path $RepoPath "public\tbf-studio"
New-Item -ItemType Directory -Force -Path $TargetPublic | Out-Null

# Copy static studio files
Copy-Item -Force -Recurse (Join-Path $ScriptDir "public\tbf-studio\*") $TargetPublic

# Ensure pages directory exists & add /studio redirect
$PagesDir = Join-Path $RepoPath "pages"
New-Item -ItemType Directory -Force -Path $PagesDir | Out-Null
Copy-Item -Force (Join-Path $ScriptDir "pages\studio.js") (Join-Path $PagesDir "studio.js")

# Optional: add README note
$Note = @"
This repo now includes TruthBeforeFire Browser Studio.
- Static files: /public/tbf-studio
- Route:       /studio  (redirects to /tbf-studio/index.html)
"@
$NotePath = Join-Path $RepoPath "TBF_STUDIO.txt"
$Note | Out-File -FilePath $NotePath -Encoding UTF8

# Git commit & push (best effort)
try {
  git -C $RepoPath add .
  git -C $RepoPath commit -m "Add TruthBeforeFire Browser Studio (/public/tbf-studio) and /studio route"
  git -C $RepoPath push
  Write-Host "Changes committed and pushed." -ForegroundColor Green
} catch {
  Write-Warning "Git commit/push skipped or failed. Review changes and commit manually."
}

Write-Host "Done. Visit /studio after your deployment." -ForegroundColor Green
