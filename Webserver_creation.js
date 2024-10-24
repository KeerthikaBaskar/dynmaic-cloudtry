// Step 1: importing server library like http and storing it in a library
const server1 = require('http'); // Inbuild module

// Step 2 : Creating a server
const webserver = server1.createServer((req,res)=>{
    res.end("Hello All");
});


// Step 3 : Assign the port number to the server
const port=5000;

//Step 4 : Listening the port number for the server
webserver.listen(port,()=>{
    console.log("The current server running in http://localhost:8000");
});

// Simple another method for giving port number
// webserver.listen(5000,()=>{
//     console.log("The current server running in http://localhost:5000");
// });

