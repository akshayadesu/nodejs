//const {add,sub,}=require('./math')
//console.log(add(20,30))
//console.log(sub(10,5))


//const fs=require('fs')
// fs.writeFileSync('test.txt','hello hai')
// fs.appendFileSync('test.txt',' this is a text file')
// const data=fs.readFileSync('test.txt','utf-8')
// console.log(data)
// fs.renameSync('test.txt','file1.txt')

// fs.writeFile('file2.txt','this is file2',(err)=>{
//     if(err) throw err;
//     else console.log("file created successfully")
// })

// fs.readFile('file2.txt',"utf-8",(err,result)=>{
//     if(err) console.log("err:",err);
//     else{
//         console.log(result);
//     }
// })

// fs.mkdirSync('NODE')

const path=require('path')
console.log(path.basename('newfile.txt'))
console.log(path.dirname('newfile.txt'))
console.log(path.extname('newfile.txt'))
console.log(path.parse('newfile.txt'))