// // import the module http
// const http = require('http');
// //import the library http
// const app =http.createServer((request,response)=>{
//     response.writeHead(200,{'content-Type':'text/plain'});
//     response.end('Hello World');
// });

// const PORT=3001;
// //Make the server to listen for http request 
// app.listen(PORT);
// console.log(`Server running on the port ${PORT}`);
const http = require('http');

let notes =[
    {
        id:1,
        content: 'backend using node.js',
        important: false
    },
    {
        id:2,
        content: 'node.js is a open source',
        important:true
    },
    {
        id:3,
        content:'simple web server using Node.js',
        important:false
    }
];
//create a simple web server 
const app=http.createServer((request, response)=> {
    response.statuscode=200;
    response.setHeader('Content type','application/json');
    response.end(Json.stringify(notes));
});
const PORT=3001;
//make the server to listen for http requests
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});