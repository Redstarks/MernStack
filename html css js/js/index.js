// // var name; // declration
// // var name = "ram";//initialization
// // var name = "shyam"

// // console.log("hello " + name);

// // let age = 12;
// // // let age =  11;
// // age = 13;

// // console.log({age});

// // const is_disabled = false;
// // // is_disabled = true;

// // console.log(is_disabled);

// // let bank_balance = NaN;

// // console.log(typeof(bank_balance));


// // //array ->  group of similar datatypes
// // let fruits = [
// //     "apple",
// //     "banana"
// // ]

// // fruits[0] = "orange";
// // console.log(fruits);

// // let student = {
// //     name: "sajal",
// //     roll: 19,
// //     roll: 10,
// //     Roll:12
// //     // 1: 2
// // } 

// // student.roll = 29;
// // console.log(student);

// //to do: find a way the copy the value of original array

// //logical operator

// // console.log("hello" && false && "false value");
// // console.log("hello" || false);

// //  let will_rain = false;
// //  let has_possibility = true;

// //   if(will_rain ){
// //     console.log('Take umbrella');
// //   }else if(has_possibility){
// //     console.log('you might');
// //   }else{
// //     console.log('dont take');
// //   }

// //   if(will_rain == true || has_possibility == true){
// //     console.log('Take umbrella');
// //   }else{
// //     console.log('dont take');
// //   }
  
// // let arr= [1,2,3];
// // let obj = {}

// // if(obj){
// //     console.log("true condition");
// // }else{
// //     console.log("false condition");
// // }
// // if([]){
// //     console.log("true condition");
// // }else{
// //     console.log("false condition");
// // }

// // console.log(will_rain ? "take it" : (has_possibility ? "you might" : "dont take it"));\

// //function

// // function random(num1,num2){
// //     console.log(`the result of ${num1} & ${num2} for our task is =${((num1+num2)*2)/10}`);
// // }
// // console.log(random(1,2));

// // const random =(num1,num2) =>{
// //     console.log(`the result of ${num1} & ${num2} for our task is =${((num1+num2)*2)/10}`);
// // }


// //loop

// // for(i=1;i<=1000;i++){
// //     if(i%2 == 0){
// //         console.log(i);
// //     }
// // }

// // let api_called = false;

// // const callApi = () => {
// //     api_called = true;
// //     console.log(api_called);
// // }
// // let count = 0;
// // while(!api_called){
// //     console.log("try");
// //     if(count === 100){
// //         callApi();
// //     }
// //     count++
// // }

// // const mult = (num1) => {
// //     for(let i=1; i<=10;i++){
// //         console.log(`the multiplication of ${num1} * ${i} = ${num1*i}`);
// //     }
// // }
// // mult(11);


// // Array

// // let arr = [1,"two", "three",4,5,6];
// // arr[6]=23;
// // console.log(arr);

// // arr.forEach((number) => console.log(`the value is ${number}`));

// // let temp =[];
// // for(let i = 0; i<arr.length; i++){
// //     if(typeof(arr[i]) === "number"){
// //         temp.push(arr[i]);
// //     }
// // }
// // console.log(temp);


// // console.log(arr.filter(arr => typeof (arr) === "number"));
// // // console.log(arr.map(arr => {
// // //     if(typeof(arr) !== "number"){
// // //          return "not a number"
// // //     }
// // // }));

// // console.log(arr.map(el => {
// //     if(typeof (el) !== "number"){
// //         return "not a number";
// //     }
// //     return el;
// // }))

// // console.log([1,2,3,4,5].some(el => typeof (el) === "number"));
// // console.log([1,2,"3",4,5].every(el => typeof (el) === "number"));

// // let users = [
// //     {
// //         id:1,
// //         name:"name1"
// //     },
// //     {
// //         id:2,
// //         name:"name2"
// //     },
// //     {
// //         id:2,
// //         name:"name2"
// //     }
// // ];


// // console.log(users.find(el => el.id === 2)); 
// // console.log(users.filter(el => el.id === 2)); 
// // console.log([1,2,4,5,6].indexOf(4));

// // console.log(1);
// // console.log(2);
// // console.log(3);

// // console.log(sum(1,2));

// // let sum = (a,b) => {
// //     console.log(`sum ${a+b}`);
// //     return a+b;
// // }
// // let diff = (num,num1) => {
// //     console.log(`diff "num-num2`);
// // }

// // let calculate = (num1,num2) => {
// //     let result = sum(num1,num2);
// //     console.log(result);
// //     diff(num1, num2);
// // }

// // calculate(10,5);

// // for(let i = 0; i<10;i++){
// //     console.log({index});
// // }

// let callMe =  () => {
//     console.log("called....");
// }

// // 

// // console.log("final.......");

// // let b =1;
// // let c =1;

// // try{
// //     let a = b + c;
// //     console.log(a)
// // }catch(err){
// //     console.log(err.message);
// // }

// setTimeout(callMe, 0);

// const handlePromise = (resolve, reject)=>{
//     // resolve("resolved.......");
//     reject("rejected............");
// }
// let promise = new Promise(handlePromise);
// console.log({promise});
// promise.then(res => {
//     console.log({ res });
// }).catch(err => {
//     console.log({err})
// })

// console.log("last");

