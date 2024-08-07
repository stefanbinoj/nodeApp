console.log("Hello World!")
//console.log(global);
const os=require('os');
const path = require('path');
const {add , sub } = require('./math')

console.log(add(2,2))
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))


const fsPromises = require('fs').promises

const fileOps=async()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'..','..','doc','GoogleClouds.txt'),'utf8');
        console.log(data)
        await fsPromises.unlink(path.join(__dirname,'promiseApp.txt'))

        await fsPromises.writeFile(path.join(__dirname,'promiseWriter.txt'),data)
        await fsPromises.appendFile(path.join(__dirname,'promiseWriter.txt'),'\n \n heyy \n')
        await fsPromises.rename(path.join(__dirname,'promiseWriter.txt'),path.join(__dirname,'promiseApp.txt'))
        const newdata = await fsPromises.readFile(path.join(__dirname,'promiseApp.txt'),'utf8');
        console.log(newdata)
    }catch(err){
        console.error(err)
    }
}

// fs.readFile(path.join(__dirname,'..','..','doc','GoogleClouds.txt'),'utf8',(err,data)=>{
//     if (err) throw err
//     else{
//         console.log(data);
//     }
// })

fileOps()

// fs.writeFile(path.join(__dirname,'reply.txt'),'Nice to meet you',(err)=>{
//     if (err) throw err;
//     else{
//         console.log('Write complete');
//     }
//     fs.appendFile(path.join(__dirname,'reply.txt'),'writing test \n Ye \n Itis ',(err)=>{
//         if (err) throw err;
//         else{
//             console.log('Append complete');
//         }
//         fs.rename(path.join(__dirname,'reply.txt'),path.join(__dirname,'newReply.txt'),(err)=>{
//             if (err) throw err;
//             else{
//                 console.log('renamed complete');
//             }
//         })
//     })
// })




console.log('hwlooo')
process.on('uncaughtException',err=>{
    console.log(`got an error ${err}`);
    process.exit(1)
})