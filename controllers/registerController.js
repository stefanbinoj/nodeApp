const userDB={
    users:require('../data/users.json'),
    setUsers:function(data){this.users=data}
}

const fsPromises=require('fs').promises
const path = require('path')
const bcrypt=require('bcrypt')

const handleNewUser= async(req,res) => {
    const{user,pwd}=req.body;
    if( !user || !pwd) return res.status(400).json({'message':'Please Enter a usernamw and pass'});
    // Check for duplicates 
    const duplicates = userDB.users.find(person =>person.username === user);
    if(duplicates) return res.status(409);
    try{
        // encryption the pass
        const hashedPass = await bcrypt.hash(pwd,10);
        // store new user
        const newUser={'username':user,'password':hashedPass}
        userDB.setUsers([...userDB.users,newUser])
        await fsPromises.writeFile(
            path.join(__dirname,'..','data','users.json'),
            JSON.stringify(userDB.users)
        )
        console.log(userDB.users);
        res.status(201).json({'success':`New user ${user} created`})

    }catch(err){
        res.status(500).json({'message':err.message})
    }
}
module.exports={handleNewUser}