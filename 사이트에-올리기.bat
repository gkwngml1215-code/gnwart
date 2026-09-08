@echo off
chcp 65001 > nul
cd /d "%~dp0"

echo ==========================================
echo    후한의원 강남점 홈페이지 - 사이트 반영
echo ==========================================
echo.

git rev-parse --is-inside-work-tree > nul 2>&1
if errorlevel 1 (
  echo [오류] git 저장소가 아닙니다.
  echo 이 파일이 hoo-gangnam-landing 폴더 안에 있는지 확인하세요.
  echo.
  pause
  exit /b 1
)

rem ── 안전장치 ─────────────────────────────────────────────
rem 실수로 전주점 저장소(jjwart)에 연결돼 있으면 즉시 중단합니다.
rem 강남점 파일이 전주점 홈페이지를 덮어쓰는 사고를 막기 위한 검사입니다.
for /f "delims=" %%R in ('git remote get-url origin 2^>nul') do set "ORIGIN=%%R"
echo %ORIGIN% | find /i "gnwart" > nul
if errorlevel 1 (
  echo [중단] 이 폴더가 강남점 저장소^(gnwart^)에 연결되어 있지 않습니다.
  echo.
  echo   현재 연결된 곳: %ORIGIN%
  echo.
  echo 전주점 홈페이지를 덮어쓸 위험이 있어 업로드를 멈췄습니다.
  echo 아래 명령으로 강남점 저장소를 연결한 뒤 다시 실행하세요.
  echo.
  echo   git remote set-url origin https://github.com/gkwngml1215-code/gnwart.git
  echo.
  pause
  exit /b 1
)

echo [1/3] 변경된 파일 확인 중...
git add -A
git diff --cached --quiet
if not errorlevel 1 (
  echo.
  echo 변경된 내용이 없습니다. 올릴 것이 없어요.
  echo.
  pause
  exit /b 0
)

git --no-pager diff --cached --name-only
echo.

echo [2/3] 저장 중...
git commit -m "홈페이지 콘텐츠 업데이트" > nul
if errorlevel 1 (
  echo [오류] 저장 실패
  pause
  exit /b 1
)

echo [3/3] GitHub에 올리는 중...
git push origin main
if errorlevel 1 (
  echo.
  echo [오류] 업로드 실패 - 인터넷 연결 또는 GitHub 로그인을 확인하세요.
  echo.
  pause
  exit /b 1
)

echo.
echo ==========================================
echo    완료!
echo    1~2분 뒤 https://gnhoowart.co.kr 에 반영됩니다.
echo ==========================================
echo.
pause
