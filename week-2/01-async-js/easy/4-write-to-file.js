// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require('fs');
// function writeToFile(cb){
//     fs.writeFile('a.txt','Hello123',cb)
// }

// function onDone(){
//     console.log('written successfully');
// }

// writeToFile(onDone);

function writeToFile() {
    const p=new Promise(function(resolve){
        fs.writeFile("a.txt", "Hellosagar", function(){
            resolve('Written sucess')
        });
    })
    return p;
}

writeToFile().then(function(data){
    console.log(data);
})