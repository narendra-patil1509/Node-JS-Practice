const http = require('http');
const data = require('./data')
http.createServer((req,resp)=>{
    resp.writeHead(201,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
    console.log("Server started at http://localhost:3000");
}).listen(3000);