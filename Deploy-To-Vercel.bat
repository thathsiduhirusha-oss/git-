@echo off
title Deploy A/L ICT Quiz Portal to Vercel
echo ========================================================
echo   Deploying A/L ICT Quiz Portal to Vercel
echo   Created by G.H. Hirusha thathsidu
echo ========================================================
echo.
echo Checking Node and Vercel CLI...
where npx >nul 2>nul
if %errorlevel% neq 0 (
    echo [Notice] Node.js is not yet installed on this computer.
    echo Opening Vercel Dashboard in your browser so you can deploy with 1-click...
    start https://vercel.com/new
    echo.
    echo Simply drag and drop this folder onto Vercel or connect your GitHub!
    pause
    exit
)

echo Running Vercel deployment...
npx vercel --prod
echo.
echo Deployment finished!
pause
