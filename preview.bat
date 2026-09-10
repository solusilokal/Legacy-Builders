@echo off
title Legacy Builders Preview Launcher
echo ===================================================
echo     Legacy Builders - Mini Website Preview
echo ===================================================
echo.

if exist "%LOCALAPPDATA%\Programs\nodejs\node.exe" (
    set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%"
)

where node >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Node.js terdeteksi.
    if not exist "node_modules\" (
        echo [INFO] Menginstal dependensi pertama kali...
        call npm.cmd install
    )
    echo [INFO] Menjalankan Vite Dev Server (npm run dev)...
    call npm.cmd run dev
) else (
    echo [INFO] Node.js belum terpasang di PATH.
    echo [INFO] Membuka versi Standalone di browser Anda...
    start "" "standalone.html"
)
pause
