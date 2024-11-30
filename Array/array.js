let myNum=new Array(1,2,3,4,5)
//console.log(typeof(myNum));//object
//console.log(myNum);

myNum.push(6)
//console.log(myNum);//add new element in end 

myNum.pop()
//console.log(myNum);//delete element from end

myNum.unshift(0)
//console.log(myNum);//add new element in start

myNum.shift()
//console.log(myNum); // delete element in start

let myNum1= myNum.slice(1, 3)//nothing change in old array
//console.log(myNum1);//2,3
//console.log(myNum);


let myNum2=myNum.splice(1, 3)//change old array

//console.log(myNum2);
//console.log(myNum);

let newArry=[8,3,5,1,6,4]
//console.log(newArry.sort());

const prices = [10, 20, 30];
const formattedPrices = prices.map(price => `$${price}`);
//console.log(formattedPrices);

const tasks = [
    { id: 1, title: "Task 1", completed: true },
    { id: 2, title: "Task 2", completed: false },
  ];
  const completedTasks = tasks.filter(task => task.completed);
//console.log(completedTasks);

const cart = [
    { name: "Pasta", price: 12 },
    { name: "Pizza", price: 15 },
  ];
  const total = cart.reduce((sum, item) => sum + item.price, 0);
//console.log(total);

const users = ["Alice", "Bob", "Charlie"];
//users.forEach(user =>console.log(user));

const combinedArry=[...myNum,...prices]
console.log(combinedArry);
