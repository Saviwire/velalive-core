@echo off
rem build.cmd -- run the Velalive production build on Windows.
rem
rem Why this exists: esbuild writes scratch files under %TEMP% and then deletes
rem them. On some Windows setups that delete fails with "Access is denied"
rem (EPERM) even though nothing has the file open, and the whole Vite build
rem aborts after every module has already been transformed. Seen here:
rem   npm run build   -> 690 modules transformed, then
rem                      [vite:esbuild-transpile] remove <TEMP>\esbuild-<hash>: Access is denied
rem The build itself is sound; only the unlink fails. So retarget TEMP/TMP to
rem a folder on the same volume as the repo for the child process only and
rem retry there. Set them from the parent shell if you would rather not use
rem this wrapper.
rem
rem This wrapper touches no source, config or lockfile -- one variable, and
rem only for the npm child process.
setlocal
pushd "%~dp0" >nul
if not exist ".tmp\eb" mkdir ".tmp\eb"
set "TEMP=%CD%\.tmp\eb"
set "TMP=%TEMP%"
call npm.cmd run build %*
set "CODE=%ERRORLEVEL%"
popd >nul
exit /b %CODE%
