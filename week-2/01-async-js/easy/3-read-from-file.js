// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs= require('fs');
//synchronous way
// fs.readFile('a.txt', "utf-8", function (err, data) {
//   console.log(data);
// });

// console.log("Hello after reading file");

//asynchronous with callbacks

// function readFile(callback){
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       callback(data);
//     });
// }

// function printContent(data){
//     console.log(data);
// }

// readFile(printContent)

//asynchronous using promise

function readFile() {
  return new Promise(function(resolve){
    fs.readFile('a.txt','utf-8',function(err,data){
        resolve(data);
    })
  })
}
function printContent(data) {
  console.log(data);
}
readFile().then(printContent);
