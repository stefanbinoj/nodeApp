const usersDB = {
    users: require('../data/users.json'),
    setUsers: function (data) { this.users = data }
}

const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleRefreshToken =  (req, res) => {
    const cookies = req.cookies
    const { user, pwd } = req.body;
    if (!cookies?.jwt) return res.sendStatus(400)
    console.log(cookies.jwt)
    const refreshToken=cookies.jwt
    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser) return res.sendStatus(403); //Unauthorized 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err,decoded)=>{
            if(err || foundUser.username!==decoded.username )return res.sendStatus(403)
            const accessToken=jwt.sign(
                {"username":decoded.username},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn:'30s'}
            )
            res.json({accessToken})

        }
    )
}
module.exports = { handleRefreshToken }; 