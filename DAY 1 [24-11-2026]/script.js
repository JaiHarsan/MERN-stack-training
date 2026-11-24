//Function
//Three Types Of Functions
// 1 . Normal function
// 2 . Anonymous Function
// 3 . Arrow Function

//NORMAL FUNCTION

//With return type and parameter
function sum(a,b){
    return a + b;
}
console.log(sum(10,20));

//Without return type and with parameter
function sum(a,b){
    console.log(a+b);
}
sum(10,20);

//Arrow Function
let sum=(a,b)=>{
    console.log(a+b);
}
sum(10,20)

//Anonymous Function 
let add = function(){
    console.log(10 + 20);
}
add();

//Array
let a = [10,20,30]
console.log(a)

//Asynchronous
console.log("start");
setTimeout(()=>{
    console.log("Delayed time");
},2000);
console.log("waiting");
console.log("end");


//promises
const mypromise = new Promise((resolve,reject)=>{
    let order = true
    if(order){
        resolve("order successfull")
    }
    else{
        reject("order rejected")
    }
})
mypromise.then((result)=>{                    //It executes when mypromise is successfully
    console.log(result)
}).
catch((result)=>{                             //It executes when mypromise is rejected
    console.log(result)
}).
finally(()=>{                                 //It executes in both cases
    console.log("no order")
})
