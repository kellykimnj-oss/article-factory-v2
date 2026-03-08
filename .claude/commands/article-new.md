## /article-new — 키워드 리서치부터 시작하는 전체 워크플로우

사용자에게 먼저 아래 2가지를 확인해주세요:
1. **타겟 직무**: PM/PO, 백엔드, 프론트엔드, 디자이너, 데이터, AI/ML 등
2. **CJ Stage**: CJ-1(이직/직장) ~ CJ-6(뉴스/트렌드)

확인 후 아래 단계를 순차 실행:

### 전체 워크플로우 (15단계)
1. KeywordResearchAgent: Primary 키워드 랭킹 생성 → 사용자에게 제시
2. KeywordResearchAgent: 사용자 선택 후 Secondary 키워드 추출 + 클러스터링
3. KeywordResearchAgent: 사용자에게 작성할 키워드/클러스터 선택 요청
4. TopicAnalyzer: SERP 분석 → 세부 주제 랭킹
5. TopicAnalyzer: 사용자에게 주제 선택 요청
6. TopicAnalyzer: Content Brief 생성 + HTML 여부 확인
7. ContentWriter: Brief 기반 제목 + 아티클 초안 작성
8. ContentGapAnalyzer: 경쟁사/커뮤니티/FAQ/PAA 갭 분석
9. ContentGapAnalyzer: 갭 내용을 초안에 통합
10. SourceVerifier: 출처 검증 (링크, 연도, 국내/해외 비율)
11. PersonaReviewer: 4인 페르소나 피드백 생성
12. PersonaReviewer: 출처 검증 + 피드백 반영하여 초안 수정
13. SeoScorer: SEO/GEO/AEO 채점 (85점+) + 개선 반영
14. QualityChecker: 품질 검수 (80점+) + AI투 제거
15. QualityChecker: 최종 교정 → output/[slug].html 저장

각 사용자 인터랙션 포인트에서 반드시 멈추고 사용자 선택을 기다린다.
