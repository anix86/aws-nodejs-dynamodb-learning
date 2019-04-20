const aws = require("aws-sdk");
const events = require('events');

aws.config.update({
    region:"us-east-1",
});

const dyDB = new aws.DynamoDB.DocumentClient();

let getPost = function(sKey){
    let e = new events.EventEmitter();
    var params = {
        TableName:'image-link',
        Key:{
            "imageID" : sKey
        }
    };

    dyDB.get(params, (err, data)=>{
        if(err){
            console.error("some error occured getPost! - " + JSON.stringify(err));
        }else{
            e.emit('single-post', data);
        }
    })
    return e;
};


let getAllPosts = function(){
    let e = new events.EventEmitter();
    var params = {
        TableName:'image-link',
    };

    dyDB.scan(params, (err, data)=>{
        if(err){
            console.error("some error occured in getAllPosts! - " + JSON.stringify(err));
        }else{
            e.emit('all-posts', data);
        }
    })
    return e;
};


module.exports = {
    getPost,
    getAllPosts
    
}