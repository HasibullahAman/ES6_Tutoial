const s = [5, 6, 7];
s = [1, 2, 3]; // i will get errore,Title(Uncaught TypeError: Assignment to constant variable.)
// Becuse we cant reassine the const keyword.
s[2] = 45;
console.log(s);