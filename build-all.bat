call npm config set script-shell "C:\\Util\\Git\\bin\\bash.exe"
call npm install
call npm run affected:build -- --all --prod --parallel --no-progress
rem npm run affected:build -- --prod --base=origin/master~1 --head=origin/master --parallel --no-progress
cd dist/apps/data-entry/intake
for %%x in (*.woff) do move "%%x" "..\..\..\styles"
for %%x in (*.ttf) do move "%%x" "..\..\..\styles"
for %%x in (*.woff2) do move "%%x" "..\..\..\styles"
rem move up to the apps directory
cd ../..
rem recursively delete all font and icon files in all app directories
del /S *.woff
del /S *.woff2
del /S *.ttf
rem move up to the dist directory
cd ../
IF EXIST uis.zip DEL /F uis.zip
7z.exe a -tzip uis.zip *
