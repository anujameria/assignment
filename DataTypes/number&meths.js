let num = 100
let num1=new Number(100)

console.log(num);//100
console.log(num1);//Number: 100  more prototypes use with this method

let digit=123.234
console.log(digit.toFixed(2));

let nums=100000000
console.log(nums.toLocaleString());//100,000,000
console.log(nums.toLocaleString("en-in"));//10,00,00,000

//===========================maths==========================

console.log(Math.abs(-5));//5
console.log(Math.round(2389.3398));//2389
console.log(Math.ceil(12.23));//13
console.log(Math.floor(12.23));//12

let a=32
let b=45
let c=987
let d=908

console.log(Math.max(a,b,c,d)); //find min and max value using math method

console.log(Math.random());
console.log(Math.random()+1);

let min =10
let max=20
console.log(Math.random()*(max-min+1)+min);//random value between 10 to 20






