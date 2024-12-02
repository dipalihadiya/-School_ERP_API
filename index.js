const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const router = require('./router/router');
const port = 3004;
const db = require('./config/db')
app.use('/v1',router)

app.listen(port , (err) =>{
    if(!err){
        console.log(`server is running on http://localhost:${port}/v1`);
    }
})


https://www.google.com/search?q=portfolio++with+code&sca_esv=b5f308da97a3efdb&rlz=1C1CHBD_enIN1083IN1083&biw=2134&bih=999&tbm=vid&sxsrf=ADLYWIJu4Nq88xkcQ6AP_QZH_XTkDJfzQQ%3A1729859078814&ei=Bo4bZ-6wMej71e8PpJPx2Qw&ved=0ahUKEwjuy52fw6mJAxXoffUHHaRJPMsQ4dUDCA4&uact=5&oq=portfolio++with+code&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIhRwb3J0Zm9saW8gIHdpdGggY29kZTIGEAAYBxgeMgUQABiABDIGEAAYCBgeMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgYQABgIGB5I6wpQjQRYjQRwAHgAkAEAmAGpAaABtwKqAQMwLjK4AQPIAQD4AQGYAgKgAt4CwgILEAAYgAQYhgMYigXCAggQABiABBiiBJgDAIgGAZIHAzAuMqAHxA4&sclient=gws-wiz-video#fpstate=ive&vld=cid:d7ec8991,vid:0YFrGy_mzjY,st:0