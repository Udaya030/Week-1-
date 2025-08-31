// import fs module
const fs = require('fs');
const fileName ='output.txt';
const content='I am good. What about you?';
fs.readFile('sample.txt', 'Utf8',(err,data)=>{
    if (err){
        console.error('Error reading files', err);
    } else {
        console.log('File contents:', data);
    }
});

fs.writeFile('output.txt',"I am good. What about you?",(err)=>{
    if (err) {
        console.error('Error writingFile:', err);
    } else {
        console.log('Data written to output.txt');
    }
});

const os= require('os');
console.log("Platform: " + os.platform());
console.log("Hostname: " + os.hostname());
console.log("Architecture: " + os.arch());


