const {format} = require('date-fns')
const uuid=require('uuid')

const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises

const logEvents= async(message,logName)=>{
    const datetime=`${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${datetime}\t${uuid.v4()}\t${message}\n`
    console.log(logItem);
    try{
        if(!fs.existsSync(path.join(__dirname,'..','logs.txt'))){
            await fsPromises.mkdir(path.join(__dirname,'..','logs.txt'));
            //test
        }
        await fsPromises.appendFile(path.join(__dirname,'..','logs.txt',logName),logItem)

    }catch(err){
        console.error(err)
    }

}

const logger=(req,res,next)=>{
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`,'reqlog.txt')
    console.log(`${req.method} : ${req.path}`)
    next()
}


// console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))
// console.log(uuid.v4())

module.exports={logger , logEvents}