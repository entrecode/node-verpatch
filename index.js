#! /usr/bin/env node

const path = require('path');
const exec = require('child_process').exec;
const verpatch = path.join(__dirname, 'bin', 'verpatch.exe');
exec(`${verpatch} ${`${process.argv[2]} ${process.argv[3]} /pv ${process.argv[3]} ${process.argv.splice(4).map(ar => `/s ${ar.split('=')[0]} "${ar.split('=')[1]}"`).join(' ')}`}`, (e, stdout, stderr) => {
  console.log('stdout:');
  console.log(stdout);
  console.log('stderr:');
  console.log(stderr);
  if (e) {
    throw new Error(e);
    process.exit(1);
  }
})
.on('exit', (code) => {
  if(code !== 0){
    console.log('failed');
  } else {
    console.log('success')
  }
});
