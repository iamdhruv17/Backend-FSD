const http=require('http');
const server=http.createServer((req,res)=>{
    res.end('Helo');
}

server.listen(4000,()=>{
    console.log("Server is running on port 5000");
}