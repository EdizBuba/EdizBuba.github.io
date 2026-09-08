param(
  [string]$BrowserPath = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
)

$cvRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $cvRoot
$outputDir = Join-Path $projectRoot 'public\docs'

if (-not (Test-Path -LiteralPath $BrowserPath)) {
  throw "Chromium browser not found: $BrowserPath"
}

New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$documents = @(
  @{ Source = Join-Path $cvRoot 'fr\index.html'; Output = Join-Path $outputDir 'CV-Ediz-Buba-FR.pdf' },
  @{ Source = Join-Path $cvRoot 'en\index.html'; Output = Join-Path $outputDir 'CV-Ediz-Buba-EN.pdf' }
)

foreach ($document in $documents) {
  $sourceUri = [System.Uri]::new($document.Source).AbsoluteUri
  $profileDir = Join-Path ([System.IO.Path]::GetTempPath()) ("ediz-cv-export-" + [System.Guid]::NewGuid())
  $arguments = @('--headless', '--disable-gpu', '--no-pdf-header-footer', "--user-data-dir=$profileDir", "--print-to-pdf=$($document.Output)", $sourceUri)
  $process = Start-Process -FilePath $BrowserPath -ArgumentList $arguments -WindowStyle Hidden -Wait -PassThru
  if ($process.ExitCode -ne 0 -or -not (Test-Path -LiteralPath $document.Output)) {
    throw "PDF export failed: $($document.Output)"
  }
}

Write-Host "Generated PDFs in $outputDir"
