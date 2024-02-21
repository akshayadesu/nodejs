//const {add,sub,}=require('./math')
//console.log(add(20,30))
//console.log(sub(10,5))


const fs=require('fs')
fs.writeFileSync('test.txt','hello hai')
fs.appendFileSync('test.txt',' this is a text file')
const data=fs.readFileSync('test.txt','utf-8')
console.log(data)
fs.renameSync('test.txt','file1.txt')

