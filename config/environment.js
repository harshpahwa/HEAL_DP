const test = require('dotenv').config()
const development ={
    name: "development",
    asset_path: './assets',
    session_cookie_key: 'abcxyz',
    db: 'codeial_development',
    smtp:{
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.USER, // generated ethereal user
            pass: process.env.PASS // generated ethereal password
        }
    },
    google_client_id:process.env.ID,
    google_client_secret:process.env.SECRET,
    google_call_back_url:"http://localhost:8000/users/auth/google/callback",

}

const production ={
    name: "production"
}


module.exports = development;