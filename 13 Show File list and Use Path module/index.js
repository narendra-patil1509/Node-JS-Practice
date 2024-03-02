const fs = require('fs'); // these two module already defined  in node.js we just need to declare them on the top
const path = require('path'); //path module  to resolve file paths.

const dirPath = path.join(__dirname,'files');
console.log(dirPath);

// Create multiple files in particular folder or at path
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt",`This is file${i}`);
// }

// get files
fs.readdir(dirPath, (err,files)=>{
    files.forEach((item) => {
        console.log("File name is ",item);
    });
})