// Destructuring Assignment
// This method say insted of that which we use like
//     Name = myob.name or Father_name = myob.name 
//     we can use const{name,Father_name} = myob
// this method use for extract data from Object.
const myob = {
    name: "Hasibullah",
    Father_Name: 'Ghullam Hassan'
}

console.log(myob.name)
console.log(myob.Father_Name)

// const { name, Father_Name } = myob;
// console.log("my Name is: " + name + "and my Father name is: " + Father_Name)