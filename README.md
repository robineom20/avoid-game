# 피하기 게임 (PWA)

이 프로젝트는 브라우저에서 실행되는 피하기 게임이며, GitHub Pages(HTTPS)로 배포하면 설치형(PWA) 앱으로 오프라인에서도 실행할 수 있습니다.

## 배포 파일

GitHub Pages는 `docs/` 폴더를 사이트 루트로 사용하도록 구성합니다.

- `docs/index.html` (진입점, `docs/avoid_game.html`로 이동)
- `docs/avoid_game.html` (게임 본문)
- `docs/sw.js` (오프라인 캐시)
- `docs/manifest.webmanifest`
- `docs/icon.svg`

## GitHub Pages 배포

1. GitHub에서 새 리포지토리를 생성합니다.
2. 이 폴더에서 아래 명령으로 푸시합니다.

```sh
git init
git add -A
git commit -m "Deploy PWA"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

3. GitHub 리포지토리 설정에서 Pages를 켭니다.

- Settings > Pages
- Build and deployment: Deploy from a branch
- Branch: `main`
- Folder: `/docs`

4. 배포된 주소로 접속합니다.

## 설치/오프라인 테스트

- Android(Chrome): 메뉴에서 설치
- iOS(Safari): 공유 버튼 > 홈 화면에 추가
- Desktop(Chrome/Edge): 주소창 설치 아이콘

설치 후 오프라인(비행기 모드)에서 실행해도 열리면 성공입니다.
