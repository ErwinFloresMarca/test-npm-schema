#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');

const schemaPath = path.join(__dirname, '..', 'prisma');
const command = `npx prisma studio --schema=${schemaPath}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
}); 