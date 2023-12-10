// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs=require('fs');
// function readAndWrite(cb){
//     fs.readFile('a.txt','utf-8',function(err,data){
        
//         const modify=data.replace(/\s+/g, ' ').trim();
       
//         fs.writeFile('a.txt',modify,cb);
//     })
// }


// readAndWrite(function(){
//     console.log('read and written sucessfully');
// })

function readAndWrite() {
    const p=new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function (err, data) {
          const modify = data.replace(/\s+/g, " ").trim();

          fs.writeFile("a.txt", modify, function(){
            resolve("read and written sucessfully");
          });
        });  
    })
    return p;
}

readAndWrite().then(function(data){
    console.log(data);
})