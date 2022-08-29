// Code your solutions in this file

// for ([initialization]; [condition]; [iteration]) {
//   [loop body]
// }

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger
//     }

//     return gifts;
// }

// wrapGifts(gifts);


function writeCards(names, eventName) {
    let messages = []
    for(let i = 0; i < names.length; i++) {
     const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;

     messages.push(message);
        debugger
    }

    return messages;

}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0;
    while(i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
    
}

wrapGifts(gifts);


function countDown(num) {
    while (num >= 0) {
        console.log(num --);
    }
    return num
}
countDown(10)