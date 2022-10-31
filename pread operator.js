// Cheak the maximam
const myarr = [1, 4, 6, 22, 65, 21];
var max = Math.max.apply(null, myarr)

// If we use Math.max and dont use the apply function it's return the nan value

const myarr1 = [1, 4, 6, 22, 65, 21];
var max2 = Math.max(myarr1)
console.log(max2)