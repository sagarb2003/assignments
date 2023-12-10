// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


// setInterval(function(){
//     const curr=new Date();
//     console.log(curr.getHours()+":"+curr.getMinutes()+":"+curr.getSeconds());
// },1000)

function clock(){
    setInterval(function(){
        const curr = new Date();
        const hours = curr.getHours();
        const den = hours < 12 ? "AM" : "PM";
        const format = hours % 12;
        console.log(format+":"+curr.getMinutes()+":"+curr.getSeconds()+" "+den);
    },1000); 
}

clock();