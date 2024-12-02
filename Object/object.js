//Object.create(jsnewuser)


const sym=Symbol("Ameria")
const jsuser={
    name:"Anuj",
    age:"22",
    [sym]:"Ameria",
    village:"beelpur",
    "full Name":"Anuj Sain"
}

// console.log(jsuser.name);
// console.log(jsuser["full Name"]);
// console.log(typeof [jsuser.sym]);

//Object.freeze(jsuser)
jsuser.name="mohit sain"

//console.log(jsuser.name);

//console.log(jsuser);

jsuser.greeting=function (params) {
    //console.log("hello Anuj");
    console.log(`hello ${this["full Name"]}`);
    
    
}

//console.log(jsuser.greeting());

const new1={
    1:"a",
    2:"b"
}

const new2={
    3:"c",
    4:"4"
}

//const new3={new1,new2}

//const new3={...new1, ...new2}

///const new3=Object.assign({},new1,new2)

//console.log(new3);


console.log(jsuser.hasOwnProperty("name"));

console.log(Object.entries(jsuser));

