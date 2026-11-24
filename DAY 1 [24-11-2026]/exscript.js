//Asynchronised
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
