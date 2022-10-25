let obj = {
    name: "FreeCodeCmap",
    reveiw: "it's for Test"
}
Object.freeze(obj);
obj.name = "Bad";
console.log(obj)