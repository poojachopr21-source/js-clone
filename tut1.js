document.getElementById("operaters").innerText=newFunction()
let a=10;
    b=30;
    console.log(a+b);
    console.log(a*b);
    console.log(a-b);
    console.log(a/b);

let A=40;
 A+=5;
 A-=20;
 A*=10;
 A/=25;
 console.log(A);
 
 let c=20;
 let d=30;
 console.log(c==d);
 console.log(c>d);
 console.log(c<d);
 console.log(c!=d);
 console.log(c>=d);
 console.log(c<=d);

 let age = 40;

console.log(age > 18 && age < 45); 
console.log(age < 20|| age > 60);

let y=10;
console.log(++y);
console.log(y--);

const Age=30;
const status=age<=30?"adulet":"minor"
console.log(status);


let firstname="pooja";
    lastname="chopra";
    console.log(firstname+""+lastname);


let x=20;
let z=30;
console.log(20 & 30);
console.log(20 | 30);
console.log(20 ^ 30);
 
const bigNum1=23459870;
const bigNum2=987654678;
console.log(bigNum1+bigNum2);

let f=45;
let e=34;
console.log(f>e);
console.log(f<=e);

function sayHello() {
  console.log("Hi");
}


// var result="hello"/2;
// console.log(result)

// var result=0.1+0.2;
// console.log(result);

// string into Number
let n="345";
let h=Number(n);
console.log(h);
// boolen into number
let s=true;
let t=Number(s);
console.log(t);
  
// if statment
const num=60;
if(num>=60){
    console.log(" you are pass");
}

// if else
    const Num=80;
if(Num<=80){
    console.log("your are fail");
}else{ 
    console.log("your are pass");
}

// elseif

const tem=25;
if(tem<25){
    console.log("hot");
}
else if(tem>25){
    console.log("cold");
}
else{
    console.log("normal day");
}

// switch statement

const year="jan"
switch(year){
    case"jan":
    console.log("start a year");
    break;
    case"jun":
    console.log("mid a year");
    break;
    default:
    console.log("normal  year");
}
// conditional Statement

let l=40;
console.log(l===10?"a is equal 10":"a is not equal 10");

// name function
// function greet(){
    // return"hii!";
// }
// console.log(greet());


//  Anonymous Function
const greet=function(){
    return"hello there!";
};
console.log(greet());


// function expresion
const sub=function(a,b){
    return(a-b);
};
console.log(sub(10,8));

// arrow Function
const square=n=>n*n;
console.log(square(8));

// IIFE function
(function(){
    console.log("this is run faster!");
})();

// callback function
function g(d,callback){
    return callback(d);
}
const double=(d)=>d*8;
console.log(g(9,double));









function newFunction() {
    return "var ready ";
}
