const fs=require('fs');
const FilePath='./Test.txt';
const Content='Hello Welcome to file module demo';
// fs.writeFile()
// const result=fs.readFileSync(FilePath,"utf-8");
// console.log(result)
fs.appendFileSync(FilePath," Programming is fun");
fs.appendFile(FilePath,"Programming is fun",(err)=>{
    if(err) throw err;
    console.log("File appended");
});
console.log("File appended successfully");