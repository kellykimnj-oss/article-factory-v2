#!/usr/bin/env node

/**
 * Skill Activator Hook (PreToolUse)
 * 
 * 파일 편집 전에 실행되어, 현재 작업 중인 파일/단계에 맞는 스킬을 알려줌.
 * Claude Code의 UserPromptSubmit 시점에서도 활용 가능.
 */

const fs = require('fs');
const path = require('path');

// stdin에서 tool input 읽기
let input = '';
process.stdin.on('data', (chunk) => { input += chunk; });
process.stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const filePath = data.tool_input?.file_path || data.tool_input?.path || '';
    
    // 파일 경로 기반 스킬 매칭
    const skillMap = {
      'output/': '📝 ContentWriter 또는 QualityChecker 스킬 확인',
      'keyword': '🔍 keyword-research 스킬 참조',
      'topic': '📊 topic-analyzer 스킬 참조',
      'gap': '🔎 content-gap-analyzer 스킬 참조',
      'source': '✅ source-verifier 스킬 참조',
      'persona': '👥 persona-reviewer 스킬 참조',
      'seo': '📈 seo-scorer 스킬 참조',
      'quality': '🏆 quality-checker 스킬 참조',
      'brief': '📋 topic-analyzer/references/content-brief-template.md 참조',
      'tone': '🎨 references/tone-guide.md 참조'
    };

    for (const [pattern, reminder] of Object.entries(skillMap)) {
      if (filePath.toLowerCase().includes(pattern)) {
        console.error(`\n🎯 SKILL ACTIVATION: ${reminder}\n`);
        break;
      }
    }
  } catch (e) {
    // 파싱 실패 시 무시 (non-blocking)
  }
});
