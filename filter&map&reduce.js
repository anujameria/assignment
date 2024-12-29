const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>{
//     return num>5
// })
// console.log(newNums);


// const newNums=myNums.map((num)=>{
//     return num+10;
// })
// console.log(newNums);

const newNums=myNums.reduce((accum,num)=>{
    return accum+num;
})
console.log(newNums);

