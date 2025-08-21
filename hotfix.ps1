param(
  [string]$Repo = "."
)

$RepoPath = Resolve-Path $Repo
Write-Host "Applying 404 hotfix in" $RepoPath -ForegroundColor Cyan

$pkg = Split-Path -Parent $MyInvocation.MyCommand.Path

# Detect Next.js (package.json containing "next")
$pkgJson = Join-Path $RepoPath "package.json"
$useNext = $false
if (Test-Path $pkgJson) {
  $content = Get-Content $pkgJson -Raw
  if ($content -match '"next"') { $useNext = $true }
}

if ($useNext) {
  # Ensure /pages exists and copy pages/index.js
  $pagesDir = Join-Path $RepoPath "pages"
  New-Item -ItemType Directory -Force -Path $pagesDir | Out-Null
  Copy-Item -Force (Join-Path $pkg "pages\index.js") (Join-Path $pagesDir "index.js")
  Write-Host "Next.js detected → added /pages/index.js redirect to /studio" -ForegroundColor Green
} else {
  # Static site → copy index.html to root
  Copy-Item -Force (Join-Path $pkg "index.html") (Join-Path $RepoPath "index.html")
  Write-Host "Static site detected → added root /index.html redirect to /tbf-studio/index.html" -ForegroundColor Green
}

# Commit & push
try {
  git -C $RepoPath add .
  git -C $RepoPath commit -m "Hotfix: add root redirect to /studio (Next.js) or /tbf-studio/index.html (static)"
  git -C $RepoPath push
  Write-Host "Committed and pushed. Re-deploy will fix 404 at /" -ForegroundColor Green
} catch {
  Write-Warning "Git commit/push skipped or failed. Commit manually if needed."
}
