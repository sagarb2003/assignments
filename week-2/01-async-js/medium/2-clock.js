// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


// function simpleClock() {
//   setInterval(function () {
//     const curr = new Date();
//     const timeString = `${curr.getHours()}:${curr.getMinutes()}:${curr.getSeconds()}`;
//     process.stdout.write("\r" + timeString + "\t");
//   }, 1000);
// }

function formattedClock(){
    setInterval(function(){
        const curr = new Date();
        const hours = curr.getHours();
        const den = hours < 12 ? "AM" : "PM";
        const format = hours % 12;
        const timeString = `${format}:${curr.getMinutes()}:${curr.getSeconds()} ${den}`;

        // Clear the current line in the console using '\r' and then print the new time
        process.stdout.write('\r' + timeString + "\t");
    },1000); 
}

simpleClock();

formattedClock();