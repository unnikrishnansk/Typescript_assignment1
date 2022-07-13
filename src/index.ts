//create a type name with a string

let first_name:string = "masai";

//create a type age with a number

let age:number = 32;

//create a type isFetching with boolean

let isFetching:boolean = true;

//create an array of numbers

let array:number[] = [1,2,3,4];

//create an array of strings

let array1:string[] = ["masai","school"];

//create a tuple , which keeps a string as the first value, and boolean as the second

let tuple : [string, boolean];
tuple = ["masai",true];

//create an enum

enum userdetails  {
    user,superuser,admin,superadmin
}

//create a function that takes 2 arguments, x, y both numbers
//it should return the product of the 2 numbers

function product(a:number,b:number):number
{
    return a*b;
}

//create a function that takes 2 arguments, x ,y both numbers,
//it should divide output ( x / y )

function division(a:number,b:number):number
{
    return a/b;
}

//create a function that takes a name and prints it without returning anything

function printname(name:string)
{
    console.log(name);
}

printname("masai");
