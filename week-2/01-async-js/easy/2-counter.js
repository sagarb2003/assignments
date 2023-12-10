// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// let a=0;
// setTimeout(() => {
//     for(let i=1;i<=100;i++){
//         console.log(i);
//     }
// }, 1000);

function count(a){
    if(a===100) return;
    setTimeout(function(){
        console.log(a);
        count(a+1);
    }, 1000);
}

count(1);





































































// (Hint: setTimeout)