// import http from "http";
// // import { CLIENT_RENEG_LIMIT } from "tls";
// // import fs from "fs";
// // const http = require("http");
// // const fs=require("fs");
// // const Filepath="./log.txt";


// // const server = http.createServer((req, res) => {
// //     /*if (req.url === "/" && req.method === "GET") {
// //         fs.appendFile(Filepath,"Home ",(err)=>{
// //             if(err) throw err;
// //             console.log("Home appended");
// //         });
// //         res.end("At home page");
// //     }
// //     else if (req.url === "/About" && req.method === "GET") {
// //         fs.appendFile(Filepath,"About ",(err)=>{
// //             if(err) throw err;
// //             console.log("About appended");
// //         });
// //         res.end("Code is about req and res");
// //     }
// //     else if (req.url === "/Contact" && req.method === "GET") {
// //         fs.appendFile(Filepath,"Contact ",(err)=>{
// //             if(err) throw err;
// //             console.log("Contact appended");
// //         });
// //         res.end("Code");
// //     }*/
// //     switch(req.url){
// //         case "/": 
// //         res.end("Welcome to NodeJS Backend!!!!");
// //         // console.log(req.headers);
// //         // res.writeHead(200,{"content-type":"text/html"});
// //         break;
// //         case "/About": 
// //         const user={
// //             id:1,
// //             name:"John"
// //         }
// //         res.end(JSON.stringify(user));
// //         // res.end("Code is about req and res");
// //         break;
// //         case "/Contact": 
// //         res.end("Code");
// //         break;
// //         default:
// //             res.end("404 Not Found");
// //     }
// // });


// const server=http.createServer((req,res)=>{
//     if(req.url==="/users" && req.method==="POST"){

//         let body="";

//         //receive incoming data
//         req.on("data",(chunk)=>{
//             body+=chunk;
//         });

//         req.on("end",()=>{
//             console.log("Raw Data: ",body);
//             const user=JSON.parse(body);
//             console.log("User: ",user);
//             res.writeHead(200,{"content-type":"application/json"});
//             res.end(JSON.stringify(user));
//         });
//     }
//     else{
//         res.writeHead(404, {"Content-Type": "text/plain"});
//         res.end("404 NOT FOUND");
//     }
// })

// server.listen(3000, () => {
//     console.log("Server started");
// });


import http from 'http';
const server = http.createServer((req, res) => {
    if (req.url === '/users' && req.method === "POST") {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            console.log("Raw Data:", body);
            const user = JSON.parse(body);
            console.log("User:", user);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({
                message: "user created successfully",
                user: user
            }));
        });
    } else {
        res.end("hello");
    }
});

    server.listen(3000, () => {
    console.log("Server running ................");
});