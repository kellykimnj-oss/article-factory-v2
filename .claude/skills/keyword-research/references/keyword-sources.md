# 키워드 소스 전체 일람표

## 에이전트별 소스 배분

| 소스 | KeywordResearch | TopicAnalyzer | ContentGapAnalyzer |
|------|:-:|:-:|:-:|
| Google 자동완성 | ✅ | — | — |
| Google 관련 검색어 | ✅ | — | — |
| Google PAA | — | △ 존재 확인 | ✅ 상세 분석 |
| Google Trends | ✅ | — | — |
| 네이버 자동완성/연관 | ✅ | — | — |
| 네이버 데이터랩 | ✅ | — | — |
| 다음 자동완성 | ✅ | — | — |
| SERP 상위 결과 | — | ✅ 심층분석 | ✅ 갭 비교 |
| 블라인드 | ✅ 트렌드 | — | ✅ 질문 수집 |
| 커리어리 | ✅ 트렌드 | — | ✅ 질문 수집 |
| OKKY | ✅ 트렌드 | — | ✅ 질문 수집 |
| 디스콰이엇 | ✅ | — | — |
| 로켓펀치 | ✅ | — | — |
| Reddit | ✅ | — | — |
| 디스코드 | ✅ | — | — |
| GitHub | ✅ 트렌딩 | — | — |
| Velog | ✅ 인기태그 | — | — |
| Stack Overflow | ✅ | — | — |
| 사람인/원티드/점핏 | ✅ 인기 콘텐츠 | ✅ 콘텐츠 분석 | ✅ 갭 비교 |
| 잡코리아 (자사) | ✅ 기존 키워드 | — | — |
| 제로베이스/캐치/링커리어 | ✅ | — | — |
| 리멤버/렛츠커리어/코멘토 | — | ✅ | — |
| 랠릿/프로그래머스 | ✅ | — | — |
| 인프런/F-Lab/노마드코더/코드잇 | ✅ 학습 수요 | — | — |
| 브런치 | ✅ 인기글 | ✅ 인기글 | ✅ 갭 비교 |
| 티스토리 | ✅ 인기글 | — | — |
| 요즘IT | ✅ 트렌드 | ✅ 인기글 | ✅ 갭 비교 |
| 긱뉴스 | ✅ 트렌드 | — | — |
| 오픈에즈 | ✅ (마케터) | — | — |
| 바닥(Badak) | ✅ (마케터) | — | — |
| 캐럿 | ✅ | — | — |
| 퍼블리 | ✅ 인사이트 | ✅ 인기글 | ✅ 갭 비교 |
| 크몽 | ✅ | — | — |
| 네이버 블로그 | ✅ 인기글 | — | — |
| 서핑(Surfit)/아웃스탠딩/eopla | ✅ 큐레이션 | — | — |
| 유튜브 자동완성 | ✅ | — | — |
| 유튜브 인기 영상 | — | ✅ 제목/조회 | — |
| 유튜브 댓글 | — | — | ✅ 질문 수집 |
| Hacker News | ✅ 글로벌 | — | — |
| X(Twitter) 해시태그 | ✅ | — | — |
| 카카오 오픈채팅 | ✅ 질문 패턴 | — | — |
| 네이버 카페 | ✅ 취준생 질문 | — | — |

## 검색 채널별 수집 방법

### Google
- `web search "[직무] [CJ 관련어]"` → 자동완성 및 관련 검색어 수집
- Google Trends: `web fetch "https://trends.google.com/trends/explore?q=[키워드]&geo=KR"` → 검색량 추이

### 네이버
- `web search "site:search.naver.com [직무] [CJ 관련어]"` → 연관 검색어
- 네이버 데이터랩: `web fetch "https://datalab.naver.com"` → 검색어 트렌드

### 커뮤니티
- 블라인드: `web search "site:blind.com [직무] [CJ 관련어]"` → 인기 게시물 제목
- OKKY: `web search "site:okky.kr [직무] 취업 OR 이직"` → Q&A 빈출 질문
- 커리어리: `web search "site:careerly.co.kr [직무]"` → 인기 포스트

### 경쟁사
- `web search "site:saramin.co.kr [직무] [CJ 관련어]"` → 사람인 인기 아티클
- `web search "site:wanted.co.kr [직무] [CJ 관련어]"` → 원티드 인사이트
- `web fetch "[경쟁사 아티클 URL]"` → 메타태그(title, description) 추출

### 유튜브
- `web search "site:youtube.com [직무] [CJ 관련어]"` → 인기 영상 제목
