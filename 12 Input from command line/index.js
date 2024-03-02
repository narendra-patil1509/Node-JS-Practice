console.log(process.argv[2]);

const fs = require('fs');
const input = process.argv;

if(input[2] == 'add'){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2] == 'remove'){
    fs.unlinkSync(input[3],input[4]);
}
else{
    console.log("Invalid Input");
}

// \12 Input from command line> node index.js add apple.txt 'this is apple'
// add
// \12 Input from command line> node index.js remove apple.txt 'this is apple'
// remove

