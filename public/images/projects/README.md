# 프로젝트 이미지 가이드

## 📁 폴더 구조

프로젝트 스크린샷 이미지는 다음 경로에 추가하세요:

```
public/images/projects/
├── poppop/
│   ├── main.png              (메인 썸네일 이미지)
│   ├── screenshot1.png       (앱 스크린샷 1)
│   ├── screenshot2.png       (앱 스크린샷 2)
│   ├── screenshot3.png       (앱 스크린샷 3)
│   └── architecture.png      (아키텍처 다이어그램)
├── cpass/
│   ├── main.png
│   ├── screenshot1.png
│   ├── screenshot2.png
│   └── architecture.png
├── brk/
│   ├── main.png
│   ├── screenshot1.png
│   ├── screenshot2.png
│   └── architecture.png
└── digilab/
    ├── main.png
    ├── screenshot1.png
    ├── screenshot2.png
    └── architecture.png
```

## 📝 이미지 파일 설명

### 1. **main.png** (필수)
- 프로젝트 카드에 표시되는 메인 썸네일 이미지
- 권장 크기: 1080x810px (4:3 비율)
- 형식: PNG, JPG

### 2. **screenshot1.png, screenshot2.png, screenshot3.png** (선택)
- 프로젝트 모달에서 표시되는 앱 스크린샷
- 권장 크기: 모바일 스크린샷의 경우 1080x2340px (9:19 비율)
- 형식: PNG, JPG
- 스크린샷 개수는 프로젝트마다 다를 수 있습니다

### 3. **architecture.png** (선택)
- 시스템 아키텍처 다이어그램
- 권장 크기: 1920x1080px 이상
- 형식: PNG, JPG

## 🎯 이미지 추가 방법

1. 위의 폴더 구조에 맞춰 이미지 파일을 추가합니다
2. 파일명은 정확히 위의 이름과 일치해야 합니다
3. 이미지가 없는 경우 fallback 이미지가 자동으로 표시됩니다

## 🔍 이미지가 표시되는 위치

### HomePage (Projects 컴포넌트)
- **main.png**: 프로젝트 카드의 썸네일로 표시

### ProjectModal
- **main.png**: 모달 상단 (현재는 표시되지 않지만 데이터에 포함됨)
- **screenshot1.png ~ screenshot3.png**: "App Screenshots" 섹션에 가로 스크롤 형태로 표시
- **architecture.png**: "System Architecture" 섹션에 표시

## ⚠️ 주의사항

- 이미지 파일명은 대소문자를 구분합니다
- 파일 확장자는 `.png` 또는 `.jpg`를 사용하세요
- 이미지가 없어도 앱은 정상 작동하며, fallback 이미지가 표시됩니다
- 고해상도 이미지를 사용하면 로딩 시간이 길어질 수 있으니 적절한 크기로 최적화하세요
