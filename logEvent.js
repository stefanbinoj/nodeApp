const {format} = require('date-fns')
const uuid=require('uuid')

const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises

const logEvents= async(message)=>{
    const datetime=`${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${datetime}\t${uuid.v4()}\t${message}\n`
    console.log(logItem);
    try{
        if(!fs.existsSync(path.join(__dirname,'SampleTxt'))){
            await fsPromises.mkdir(path.join(__dirname,'SampleTxt'));
            //test
        }
        await fsPromises.appendFile(path.join(__dirname,'SampleTxt','logsEvent.txt'),logItem)

    }catch(err){
        console.error(err)
    }

}


// console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))
// console.log(uuid.v4())

module.exports=logEvents