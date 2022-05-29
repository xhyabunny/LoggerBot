@echo off

cd /D F:\

cd bot\onyobot

For /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
For /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a%%b)

echo %mydate%_%mytime%

echo f | xcopy /f /s/e "output.txt" "\saved outputs\output%mydate%-%mytime%.txt"



