const { spawn, exec } = require('child_process');

// Start the Next.js dev server, inheriting the terminal standard input/output
const devServer = spawn('npx', ['next', 'dev'], {
  shell: true,
  stdio: 'inherit'
});

// Wait 2.5 seconds to allow the dev server to start up before opening the browser
setTimeout(() => {
  const url = 'http://localhost:3000';
  console.log(`\n🚀 Abrindo o navegador em ${url}...\n`);
  
  const startCmd = 
    process.platform === 'darwin' ? `open ${url}` :
    process.platform === 'win32' ? `start ${url}` :
    `xdg-open ${url}`;
    
  exec(startCmd);
}, 2500);
