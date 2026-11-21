@echo off
rem Abre a aplicacao em tela cheia, como programa (Edge ou Chrome). Nao precisa de internet.
set "ARQ=%~dp0index.html"
where msedge >nul 2>&1 && (start "" msedge --app="%ARQ%" --start-fullscreen & exit /b)
where chrome >nul 2>&1 && (start "" chrome --app="%ARQ%" --start-fullscreen & exit /b)
start "" "%ARQ%"
