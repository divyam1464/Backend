const fs = require('fs');
fs.readFile('example.txt','UTF8',(err,data)=>{
    if (err){
        console.log(err);
        return ;
    }
    else{
        console.log(data);
    }
})