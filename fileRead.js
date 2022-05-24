const fs=require('fs');
var readFile=fs.readFileSync('node.txt','utf8');
fs.writeFileSync('writeme.txt',readFile);