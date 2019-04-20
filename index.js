const express = require("express");
const r = require("./readPost.js");
const fs = require("fs");
const app = express();

app.use('/static-content', express.static('public'));

app.get('/', (req,res)=>{
    fs.readFile('ui/index.html',(err, html)=>{
        res.writeHead('200',{"Content-Type":"text/html"});
        res.write(html);
        res.end();
    });
})



app.get('/post/:id', (req,res)=>{

    let oData = r.getPost(req.params.id);

    oData.on('single-post', (data)=>{
        res.send(data);
    });
});



app.get('/all-posts', (req,res)=>{

    let oData = r.getAllPosts();

    oData.on('all-posts', (data)=>{
        res.send(data);
    });
});




app.listen(3000,()=>{
    console.log("AWS nodejs app is running on port 80.")
})