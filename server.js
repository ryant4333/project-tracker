const express = require('express');
const path = require('path');

const app = express();

app.use(express.static("dist/heroku-app2"));

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '/dist/heroku-app2/index.html'));
});

app.listen(process.env.PORT || 3000);
console.log("Listening on 3000");