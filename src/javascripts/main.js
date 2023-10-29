//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
const x = Number(prompt("Enter a number"))
console.log('x: ' + x)
const y = Number(prompt("Enter a number"))
console.log('y: ' + y)
const z = Number(prompt("Enter a number"))
console.log('z: ' + z)
console.log('max num: ' + Math.max(x, y, z))
console.log('min num: ' +Math.min(x, y, z))
const mean = ((x + y + z)/3)
console.log('the mean is ' + mean)

const word1 = prompt("Enter a word")
const word2 = prompt("enter a second word")
const str1 = word1.length
const str2 = word2.length
console.log(str1)
console.log(str2)
if (str1 > str2){
    console.log("1")
} else if (str1 < str2){
    console.log("-1")
} else {
    console.log("0")
}

function printCharacters(qoute){
    let out =""
for(let i = 0; i < qoute.length; i++){
    out += qoute[i] + "\n"
}
return out
}
console.log(printCharacters("Hello World!"))
//const qoute = "Hello World!"

function something(qoute){
    let indent =""
for(let i = 0; i < qoute.length; i++){
    indent += " " + qoute[i] + "\n"
}
return indent
}
console.log(something("Hello World!", false))
/*console.log("   " + "Chandelier")
*/

let arrowsize = Number(prompt("Input a number for the arrow size"))
/*
let result = ""
for (let i = 0; i<=arrowsize; i++){
    result += "*" + "\n"
    /*while (i<=arrowsize){
        result += " " + "\n"
    }
    }
    console.log(result)
    */
for (let d = "*"; d.length <= arrowsize; d+= "*")
console.log(d)
let symbol = arrowsize * "*"
for (let i = arrowsize; i >= arrowsize; i-= 1){
    symbol -= "*"
}
console.log(symbol)
/*let arrow = ""
for (let i = 0; i <= arrowsize; i++){
    while (i <= arrowsize){
        
    }
    //arrow += "*"+ "\n"
}
//return arrow
//}
console.log(arrow)*/


