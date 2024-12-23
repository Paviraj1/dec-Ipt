// var a=0
// for(var i=0;i<=10;i++){
//     var a=i+a
//     console.log("counting no" +i);
// }
// console.log("this is the sum of your counting numbers"+a)

//
// var a=1
// // var a=2
// // // console.log(a)
// // var a="hellow"
// // Var b=null
// // var c= 
// // console.log(a+b+c)
// // for( var i=0 ; i<5 ;i++){
// //     console.log(i);
// // }
 
// // for (var i=0;?

// // var auto=8
// // if (8=auto)
// //     { 
// //     console.log("drop the passenger");

// //     }
// // else if (8=>auto){
// //     console.log(auto will move);
// // }
// // else (0)
// // push
// let bc= ["vikky,sakthi,mani"]
// bc.push("sabari")
// console.log(bc);
// // pop
// bc.pop()
// console.log(bc);
// // unshift
// let rollerhoster = ["vikky,sakthi,mani"]
// rollerhoster.unshift("sabari")
// console.log(rollerhoster);
// // //shift
// // // let rollerhoster = ["vikky,sakthi,mani"]
// // // rollcoster.shift()
// // // console.log(rollcoster)



// // // for (var a=1; a<=10;a++){

// // //     if(a%2==1){
// // //         console.log(a);
        
// // //     }
// // // }
// // // cancat=> Collection of array

// // var heavy=["bus","lorry","Truck"]
// // var normal=["car","motorcycle"]
// // var both=heavy.concat(normal)
// // console.log(both);

// // // sort => Assending & Decending order in Array

// // // var num=[8,7,6,5,4,3,2,1]
// // // num.sort((a,b)=>a-b)
// // // console.log(num);

// // // //
// // // var char=["vijay","ajith","dhoni","virat"]
// // // char.sort()
// // // console.log(char);

// // // // slice =>neglet the array values
// // // var boys=["keerthi","ramesh","karthi","muthu"]
// // // var slice=boys.slice(1)
// // // console.log(slice);
// // // // splice => Value added between the array
// const stdobj = [
//     {
//      name : "hari",
//     age : 10,
//     std  :"v" 
//     },

//     {
//         name : "sakthi",
//     age : 10,
//     std :"v" 
//     },
//     {
//         name : "dhanraj",
//         age : 10,
// //         std :"v"
// //     }

// // ]
// // console.log(stdobj[1].name);

// const office=[
//     {
//         name : "dhanraj",
//         dept : "sales",
//         idno  : 1,
//         bgroup: "A+"


//     },

//     {
//         name : "keerthi",
//         dept : "sales",
//         idno  : 2,
//         bgroup: "B+"  
//     },

//     {
//         name : "vijai",
//         dept : "sales",
//         idno  : 3,
//         bgroup: "B+"  
//     },
//     {
//         name : "karthi",
//         dept : "sales",
//         idno  : 4,
//         bgroup: "o+"   
//     },
//     {
//         name : "muthu",
//         dept : "sales",
//         idno  : 5,
//         bgroup: "o+" 
//     }
// ]
// console.log(office);
// console.log(office[1]);
// console.log(office[2]);
// console.log(office[4].idno,office[4].dept);

// Object destraction

var obj1 =[
{
    name: "jai",
    age :20,
    dep : "IT"
    
},

{
    name: "vjai",
    age :20,
    dep : "IT"
}

]
var {name,age,dep}=obj1[1]
console.log(name,age,dep);

// foreach

var arr =["sun","mon","tue","wed"];
arr.forEach((val,idx,accarr)=>console.log(val,idx,accarr));

// forin

var obj = {
name : "Sakthi",
city : "newyork",
country : "america"
}
for(var x in obj){

    console.log(obj[x])
}

var obj5 =[
    {
        name : "Sakthi",
        city : "newyork",
      country : "america"
    },
    {
        name : "Dhanraj",
        city : "chennai",
      country : "India"
    }
];
for(var x in obj5[1]){
    console.log(x + "<=>" + obj5[1][x]);
}

var obj ={
    name : "sakthi",
    age  : 23,
    details : function() {
        console.log(this.age);

    }
}
obj.details()
 

var a="hello"
var b="dhanraj"
console.log(a+b+ "how are you?");

console.log(`${a} ${b}  how are you?`); // Templete literal or string literals

// settimeout function
// 1 sec = 1000ms
setTimeout(() => {
    console.log("bomb blast");
}, 5000);

// constrctor

function Bike(name,model,year) {
    this.bikename = name
    this.bikemodel = model
    this.bikeyear = year
    
}
const details = new Bike ("yamaha","RX 100", 2000)
console.log(details);