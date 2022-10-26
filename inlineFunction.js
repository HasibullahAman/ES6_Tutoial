// Normal function
const myfunc = function() {
        value = "Hasibullah Aman";
        return value;
    }
    // ---------------------------------------
    // ES6 arowFuncion 
const myfunc2 = () => {
        value = "Hasibullah Aman";
        return value;
    }
    // ----------------------------------------
    // ES6 arrow function inline
const myfunc3 = () => { "Hasibullah Aman" }

// ------------------------------------------------
/*
Q1: Rewrite the
function assigned to the variable magic which returns a new Date() to use arrow
function syntax.Also, make sure nothing is defined using the keyword
var.
------------------
var magic = function() {
  return new Date();
};
*/
var magic = () => {
    return new Date()
}