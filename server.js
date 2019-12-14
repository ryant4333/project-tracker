const express = require('express');
const path = require('path');

const app = express();

app.use(express.static("dist/protracker-app"));

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '/dist/protracker-app/index.html'));
});

app.listen(process.env.PORT || 3000);
console.log("Listening on 3000");