# run-dev.ps1
param(
    [string]$url = "https://defaulturl.example.com"
)

$env:VITE_REACT_APP_API_URL = $url
npm run dev
