//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

function getMax(x, y, z) {
    return Math.max(x, y, z)
}
function getMin(x, y, z) {
    return Math.min(x, y, z)
}
function getMean(x, y, z) {
    let mean = (x + y + z) / 3
    return mean
}
console.log(getMax(3, 2, 9))
console.log(getMin(3, 2, 9))
console.log(getMean(3, 2, 9))
function compare(word1, word2) {
    if (word1 > word2) {
        return 1
    } else if (word1 < word2) {
        return -1
    } else {
        return 0
    }
}
console.log(compare("nitroglycern", "adrenaline"))
function something(qoute, indent) {
    let output = ""
    for (let i = 0; i < qoute.length; i++) {
        for (let j = 0; indent && j < i; j++) {
            output += " "
        }
        output += qoute[i] + "\n"
    }
    return output
}
console.log(something("Hello World!", false))
console.log(something("Hello World!", true))
let out = ""
//let j = 0
function arrow(size) {
    for (let i = 0; i < size / 2; i++) {
        let j = 0
        while (j <= i) {
            out += "*"
            j++
        } out+= "\n"
    }

    for (let i = size / 2; i > 1; i--) {
        let j = 0
        while (j < i - 1) {
            out += "*"
            j++
        } out+= "\n"
    }
    return (out)
}
console.log(arrow(9))


