param([int]$Port = 4173)

$root = [System.IO.Path]::GetFullPath($PSScriptRoot)
$prefix = "http://127.0.0.1:$Port/"
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)

try {
  $listener.Start()
} catch {
  Write-Host "Taytlo is already running or port $Port is unavailable."
  Write-Host "Open $prefix"
  Read-Host "Press Enter to close"
  exit 1
}

Write-Host "Taytlo is running at $prefix"
Write-Host "Keep this window open while watching. Press Ctrl+C to stop."
Start-Process $prefix

$contentTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "text/javascript; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".json" = "application/json; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
}

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $relativePath = [System.Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart("/"))
    if ([string]::IsNullOrWhiteSpace($relativePath)) {
      $relativePath = "index.html"
    }

    $target = [System.IO.Path]::GetFullPath((Join-Path $root $relativePath))
    $statusCode = 200
    if (-not $target.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $target -PathType Leaf)) {
      $target = [System.IO.Path]::GetFullPath((Join-Path $root "404.html"))
      $statusCode = 404
      if (-not (Test-Path -LiteralPath $target -PathType Leaf)) {
        $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $context.Response.StatusCode = 404
        $context.Response.ContentType = "text/plain; charset=utf-8"
        $context.Response.ContentLength64 = $bytes.Length
        $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
        $context.Response.OutputStream.Close()
        continue
      }
    }

    $bytes = [System.IO.File]::ReadAllBytes($target)
    $extension = [System.IO.Path]::GetExtension($target).ToLowerInvariant()
    $context.Response.StatusCode = $statusCode
    $context.Response.ContentType = if ($contentTypes.ContainsKey($extension)) { $contentTypes[$extension] } else { "application/octet-stream" }
    $context.Response.Headers["Cache-Control"] = "no-cache"
    $context.Response.ContentLength64 = $bytes.Length
    $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $context.Response.OutputStream.Close()
  }
} finally {
  $listener.Stop()
  $listener.Close()
}
