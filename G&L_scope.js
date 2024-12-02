if (true) {
    let a = 10
    const b = 20
    var c = 30

}
//console.log(a);
//console.log(b);
//console.log(c);

function one() {
    let a=10
    console.log("outer",a);
    //console.log("outer",b);
    
    function two() {
        //let b=20
        console.log("inner",a);
        //console.log("inner",b);
        
    }
    two()
}
//one()

//console.log(num(5));

function num(a) {
    return a
    
}


console.log(nums(6));

const nums=function num1(b) {
    return b
}


