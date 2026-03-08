# 잡코리아 아티클 팩토리 v2

Tech 직군 구직자(3~9년차) 타겟 SEO·GEO·AEO 최적화 아티클 생성 시스템.

## 워크플로우

```
키워드 리서치 → 주제 선정 → Content Brief → 초안 작성 → 갭 분석
→ 출처 검증 → 페르소나 피드백 → SEO 채점 → 품질 검수 → HTML 출력
```

## 사용법

Claude Code에서:
- `/article-new` — 키워드 리서치부터 시작
- `/article-from-keyword [키워드]` — 키워드가 있을 때
- `/article-from-topic [주제]` — 주제가 있을 때
- `/score` — SEO 점수 확인
- `/quality-check` — 품질 검수

## 에이전트 구성

| 에이전트 | 역할 |
|---------|------|
| Orchestrator | 전체 워크플로우 관리 |
| KeywordResearchAgent | Primary/Secondary 키워드 리서치 |
| TopicAnalyzer | SERP 분석, Content Brief 생성 |
| ContentWriter | 아티클 초안 작성 |
| ContentGapAnalyzer | 경쟁사/PAA 갭 분석 + 보강 |
| SourceVerifier | 출처 검증 |
| PersonaReviewer | 4인 페르소나 피드백 |
| SeoScorer | SEO/GEO/AEO 채점 |
| QualityChecker | 품질 검수 + AI투 제거 |

## 출력

`output/[slug].html` (kebab-case 영문 슬러그)
