const {format} = require('date-fns')
const uuid=require('uuid')

console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))
console.log(uuid.v4())