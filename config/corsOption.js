const whiteList =['http://localhost:3500',
    'http://127.0.0.1:5500',
    'https://www.google.com'
]
const corOptions={
    origin:(origin,callback)=>{
        if(whiteList.indexOf(origin)!==-1 || !origin){
            callback(null,true)
        }
        else{
            callback(new Error('Not allowed CORS'));
        }
    },
    optionSuccessStatus:200
}

module.exports=corOptions