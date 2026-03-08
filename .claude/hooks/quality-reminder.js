#!/usr/bin/env node

/**
 * Quality Reminder Hook (PostToolUse)
 * 
 * 파일 편집 후 실행되어, 품질 관련 리마인더를 부드럽게 표시.
 * 에러를 블로킹하지 않고 인식만 시켜주는 역할.
 */

const fs = require('fs');
const path = require('path');

let input = '';
process.stdin.on('data', (chunk) => { input += chunk; });
process.stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const filePath = data.tool_input?.file_path || data.tool_input?.path || '';
    
    // HTML 아티클 파일 편집 시 리마인더
    if (filePath.includes('output/') && filePath.endsWith('.html')) {
      console.error(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 아티클 품질 셀프 체크
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ❓ AI투 표현이 남아있지 않은가?
  ❓ 해요체가 일관적인가?
  ❓ 문장이 40자를 넘지 않는가?
  ❓ Primary 키워드가 첫 100자에 포함되어 있는가?
  ❓ 내부 링크 3-5개가 포함되어 있는가?
  ❓ FAQ 섹션이 최소 3개인가?

  💡 자세한 기준: .claude/references/tone-guide.md
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
    }
  } catch (e) {
    // non-blocking
  }
});
