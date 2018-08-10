const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url =='/')
    {
        res.write("hello everyone");
        res.end();
    }

    if(req.url =='/who-are-u')
    {
        res.write("I am Potato !!!!!");
        res.end();
    }

    if(req.url =='/login/device-based/regular/login/')
    {
        res.write("facebook login request !!!!!");
        res.end();
    }
});


server.listen(3000);

console.log("working");

