//create a type name with a string
var first_name = "masai";
//create a type age with a number
var age = 32;
//create a type isFetching with boolean
var isFetching = true;
//create an array of numbers
var array = [1, 2, 3, 4];
//create an array of strings
var array1 = ["masai", "school"];
//create a tuple , which keeps a string as the first value, and boolean as the second
var tuple;
tuple = ["masai", true];
//create an enum
var userdetails;
(function (userdetails) {
    userdetails[userdetails["user"] = 0] = "user";
    userdetails[userdetails["superuser"] = 1] = "superuser";
    userdetails[userdetails["admin"] = 2] = "admin";
    userdetails[userdetails["superadmin"] = 3] = "superadmin";
})(userdetails || (userdetails = {}));
//create a function that takes 2 arguments, x, y both numbers
//it should return the product of the 2 numbers
function product(a, b) {
    return a * b;
}
//create a function that takes 2 arguments, x ,y both numbers,
//it should divide output ( x / y )
function division(a, b) {
    return a / b;
}
//create a function that takes a name and prints it without returning anything
function printname(name) {
    console.log(name);
}
printname("masai");
