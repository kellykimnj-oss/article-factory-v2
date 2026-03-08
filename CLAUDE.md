# 잡코리아 아티클 팩토리 v2

## 프로젝트 목적
Tech 직군 구직자(3~9년차 중심)를 타겟으로, SEO·GEO·AEO 최적화 아티클을
키워드 리서치 → 주제 선정(Content Brief) → 작성 → 갭 분석 → 검증 → 채점 → 교정 → HTML 파일 출력하는
멀티에이전트 시스템.

최종 출력물: `output/[slug].html` 파일 (에디터에 바로 붙여넣기 가능)

---

## 워크플로우 진입점

| 상황 | 커맨드 |
|------|--------|
| 처음부터 (키워드 리서치) | `/article-new` |
| 키워드 있음, 주제부터 | `/article-from-keyword [키워드]` |
| 주제 있음, 작성부터 | `/article-from-topic [주제]` |
| SEO 점수만 확인 | `/score` |
| 품질 검수만 실행 | `/quality-check` |
| 수정 재실행 | `/retry-edit` |

---

## 에이전트 구성 (8+1, 15단계)

| Phase | 에이전트 | 단계 | 핵심 역할 | 사용자 인터랙션 |
|-------|---------|------|----------|----------------|
| 제어 | Orchestrator | — | 전체 워크플로우 관리, 단계별 상태 추적 | — |
| 리서치 | KeywordResearchAgent | ①②③ | Primary 랭킹 → Secondary 클러스터링 → 키워드 선택 | ✅ 키워드 선택 |
| 선정 | TopicAnalyzer | ④⑤⑥ | SERP 분석 → 주제 랭킹 → Content Brief → 주제 선택 → HTML 여부 | ✅ 주제 선택, HTML |
| 작성 | ContentWriter | ⑦ | Brief 기반 제목 + 아티클 초안 (H1/H2/H3 구조, 톤앤매너 준수) | — |
| 보강 | ContentGapAnalyzer | ⑧⑨ | 경쟁사/커뮤니티/FAQ/PAA 갭 분석 → 초안 통합 | — |
| 검증 | SourceVerifier | ⑩ | 출처 검증 (링크 유효성, 연도, 국내90%/해외10%) | — |
| 피드백 | PersonaReviewer | ⑪⑫ | 4인 페르소나 피드백 + 출처 결과 반영 | — |
| 채점 | SeoScorer | ⑬ | SEO/GEO/AEO 채점 (85점+) + 개선 반영 | — |
| 교정 | QualityChecker | ⑭⑮ | 품질 80점+ + AI투 제거 + 최종 교정 (최대 2회 루프) | — |

---

## 핵심 규칙 (절대 준수)

1. **최종 출력은 반드시 HTML 파일** — `output/[slug].html`로 저장
2. **CJ Stage 간 주제 중복 금지** — 6개 CJ Stage 토픽이 겹치면 TopicAnalyzer가 거부
3. **품질 검수 80점 이상 필수** — QualityChecker 통과 전 발행 불가
4. **SEO/GEO/AEO 가중 평균 85점 이상** — SeoScorer 기준
5. **뉴스(CJ-6) 예외** — 1,500~2,500자, FAQ 3개 이상, Before/After 생략 가능
6. **자동 루프 최대 2회** — 품질 80점 미만 시 QualityChecker → EditorProofreader 반복
7. **출처 검증 필수** — 90% 국내, 10% 해외, 2023~2026년 우선, 링크 유효성 확인
8. **콘텐츠 갭 분석 필수** — 최소 3개 소스 비교
9. **키워드 리서치 필수** — AI 추정치 금지, 실제 검색 데이터 기반
10. **Content Brief 필수** — 주제 확정 후 Brief 없이 초안 작성 금지
11. **키워드 카니발라이제이션 금지** — 1페이지 = 1 키워드 클러스터
12. **SERP 포맷 매칭** — 상위 결과가 리스트면 리스트, 가이드면 가이드
13. **톤앤매너 준수** — `.claude/references/tone-guide.md` 필수 참조
14. **HTML 구성 요소 준수** — 핵심요약 박스, 목차, 정보/주의/인용 박스, 비교 표, FAQ, CTA 포함
15. **PAA는 ContentGapAnalyzer에서 활용** — KeywordResearchAgent에서는 커뮤니티 빈출 질문 활용

---

## Customer Journey 6단계

| Stage | 이름 | 글자 수 |
|-------|------|---------|
| CJ-1 | 이직처/직장 찾기 | 6,000~8,000자 |
| CJ-2 | 이력서/자소서 작성 | 6,000~8,000자 |
| CJ-3 | 인터뷰 준비 | 6,000~8,000자 |
| CJ-4 | 연봉 정보/오퍼 | 6,000~8,000자 |
| CJ-5 | 커리어 개발 | 6,000~8,000자 |
| CJ-6 | 뉴스/트렌드 | 1,500~2,500자 |

## 타겟 직무군

PM/PO · UI·UX 디자이너 · 백엔드·프론트엔드·앱·AI 개발자 ·
MLOps·클라우드·AI/ML 엔지니어 · 데이터분석가·DBA·QA · 보안엔지니어

---

## 키워드/트렌드 리서치 소스

| 카테고리 | 소스 |
|---------|------|
| 검색 채널 | Google (자동완성/관련/Trends), 네이버 (자동완성/연관/데이터랩), 다음 |
| 개발자 커뮤니티 | OKKY, 블라인드, 커리어리, 디스콰이엇, Velog, GitHub, 로켓펀치, Reddit, 디스코드, Stack Overflow |
| 취업/커리어 | 네이버 카페, 카카오 오픈채팅, X(Twitter) 해시태그 |
| 경쟁사 | 사람인, 원티드, 점핏, 리멤버, 제로베이스, 렛츠커리어, 캐치, 링커리어, 코멘토, 랠릿, 프로그래머스 |
| 교육 플랫폼 | 인프런, F-Lab, 노마드코더, 코드잇 |
| IT 아티클 | 요즘IT, 긱뉴스, 브런치, 퍼블리, 티스토리, 네이버 블로그, 서핑(Surfit), 아웃스탠딩, eopla |
| 마케팅 | 오픈에즈(OpenAds), 바닥(Badak) |
| 직무 정보 | 캐럿, 크몽 |
| 유튜브 | 개발자 커리어 채널, 취업 채널, IT 트렌드 채널 |
| 글로벌 참고 | Hacker News |

---

## AI투 금지 표현

~할 수 있습니다 / 매우 중요합니다 / 아래와 같습니다 / 다음과 같습니다 /
다양한 방법 / 다양한 측면 / 여러 가지 / 먼저·다음으로·마지막으로(나열) /
중요한 것은~ / 핵심은~ / 이를 통해 / ~라고 할 수 있어요 / ~에 대해 알아보겠습니다

---

## 참조 파일

- `.claude/references/tone-guide.md` — 톤앤매너 & HTML 구성요소
- `.claude/references/scoring-rubric.md` — SEO/GEO/AEO 채점 기준 전체
- `.claude/references/diff-guide.md` — 경쟁사 차별화 기준
- `.claude/references/html-template.html` — HTML 클래스 시스템 샘플
- `.claude/references/persona-profiles.md` — 4인 페르소나 프로필
- `.claude/references/keyword-sources.md` — 키워드 소스 전체 일람표
- `.claude/references/content-brief-template.md` — Content Brief 템플릿

## 출력 경로

완성된 아티클 → `output/[slug].html` (한국어 슬러그 금지, kebab-case 영문)
예: `output/backend-developer-resume-2025.html`
