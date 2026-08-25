@echo off
REM Renames this project folder from daily-news to daily-brief.
REM Run this from a normal terminal AFTER closing Claude Code --
REM Claude Code pins its working directory and holds the folder open.
cd /d C:\Repos
if exist C:\Repos\daily-brief (
  echo ERROR: C:\Repos\daily-brief already exists. Nothing done.
  pause
  exit /b 1
)
ren daily-news daily-brief
if errorlevel 1 (
  echo Rename failed -- something still has the folder open.
  echo Close any editors, terminals, or Claude Code sessions in it and retry.
  pause
  exit /b 1
)
echo Done. Project is now C:\Repos\daily-brief
pause
