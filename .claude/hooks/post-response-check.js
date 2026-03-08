#!/usr/bin/env node

/**
 * Post-Response Check Hook (Stop)
 * 
 * Claude가 응답을 완료한 후 실행.
 * 워크플로우 단계 추적 및 다음 단계 리마인더.
 */

const fs = require('fs');
const path = require('path');

// 현재 활성 작업 확인 (dev/active/ 디렉토리가 있으면)
const activeDir = path.join(process.cwd(), 'dev', 'active');

try {
  if (fs.existsSync(activeDir)) {
    const tasks = fs.readdirSync(activeDir).filter(f => 
      fs.statSync(path.join(activeDir, f)).isDirectory()
    );
    
    if (tasks.length > 0) {
      console.error(`\n📌 활성 작업: ${tasks.join(', ')}`);
      console.error(`   작업 문서 위치: dev/active/[task-name]/\n`);
    }
  }
} catch (e) {
  // non-blocking
}

// output/ 디렉토리의 최근 파일 확인
const outputDir = path.join(process.cwd(), 'output');
try {
  if (fs.existsSync(outputDir)) {
    const files = fs.readdirSync(outputDir)
      .filter(f => f.endsWith('.html'))
      .map(f => ({
        name: f,
        time: fs.statSync(path.join(outputDir, f)).mtime
      }))
      .sort((a, b) => b.time - a.time);
    
    if (files.length > 0) {
      console.error(`📄 최근 아티클: output/${files[0].name}`);
    }
  }
} catch (e) {
  // non-blocking
}
