'use strict';
var today = new Date();
console.log(today);
var hourNow = today.getHours();
console.log('what the time per hour', hourNow)

console.log(hourNow)
var greeting;
if (hourNow > 18 && hourNow <= 23) {
    greeting = 'Good evening, Class!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon, Class!';
} else if (hourNow >= 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Something went wrong!';
}
document.write('<h3>' + greeting + '</h3>');