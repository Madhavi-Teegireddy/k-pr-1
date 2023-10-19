// let map1 = new Map()

// map1.set('data', {name: 'mad', age: 32})
// console.log(map1)


// let map2 = new Map()

// let obj = {}

// map2.set(obj, {name: "jsj", age: "333"})

// console.log(map2)

// let map1 = new Map

// map1.set('info', {name: 'sdj', age: '33'});
// map1.delete('info')
// console.log(map1)

// let map1 = new Map()
// map1.set(('info', {name: "jac", age: "56"}))
// map1.clear()
// console.log(map1)


// let map1 = new Map()
// map1.set('name', 'jac');
// map1.set('age', '76')

// for(let [i, j] of map1){
//     console.log(i + '-' + j)
// }

// let map1 = new Map()
// map1.set('name', 'Jack');
// map1.set('age', '23');

// map1.forEach(function(j,i){
//     console.log(i + "-" + j)
// })

// let map1 = new Map();
// map1.set('name', 'sjdh');
// map1.set('age','76')

// for(let values of map1.values()) {
//     console.log(values)
// }

// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');
// for(let elem of map1.entries()){
//     console.log(`${elem[0]} : ${elem[1]}`)
// }

// function gr() {
//     console.log('Hello world');
// }
// setTimeout(gr, 3000)

// console.log('this is will be the first')

// function greet() {
//     console.log('Hello world')
// }

// let intervalId = setTimeout(greet, 2000)
// console.log('Id:' + intervalId)

// print time for every 3 sec
// function stime() {
//     let dateTime = new Date();

//     let time = dateTime.toLocaleTimeString();
//     console.log(time)
// }
// setTimeout(stime, 3000);

// stime();

// let i=1
// function ruk() {
//     console.log('number',i++)
//     setTimeout(ruk,2000)
// }
// ruk()

// let i=1
// function ruk() {
//     console.log('number',i++)
    
// }
// setInterval(ruk,2000)
// ruk()

// function nameFun() {
//     console.log('Hello world')
// }

// function sayName(name){
//     console.log('Hello'+ " " +name)
// }
// setTimeout(nameFun, 2000);
// sayName('John')

// function greet(name, sayName) {
//     console.log('Hello world');
//     sayName(name)
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// setTimeout(greet, 2000, 'John', sayName);

// async await function 
// let promise = new Promise (function (resolve, reject) {
//     setTimeout(function() {
//         resolve('Promise resolved')
//     },2000)
// })

// let reg = new Promise (function (resolve, reject) {
//     setTimeout(function() {
//         resolve("Written data")
//     },3000)
// })

// async function asyncFunc() {
//     try{
//         let res = await reg;
//         console.log(res)
//     }
//     catch(error) {
//         console.log(error)
//     }
// }

// asyncFunc()

// const jsonData = '{ "name": "John", "age": 22 }'

// const obj = JSON.parse(jsonData);

// const str1 = JSON.stringify(jsonData);
// console.log(str1)
// console.log(obj)


// function gree(name) {
//     function displayName() {
//         console.log('hi'+ " " + name);
//     }
//     return displayName;
// }

// const g1 = gree('John');
// console.log(g1);
// g1()


// const iterableObj = {

//     [Symbol.iterator]() {
//         let step = 0;
//         return {
//             next() {
//                 step++;
//                 if (step === 1) {
//                     return { value: '1', done: false};
//                  }
//                 else if (step === 2) {
//                     return { value: '2', done: false};
//                 }
//                 else if (step === 3) {
//                     return { value: '3', done: false};
//                 }
//                 return { value: '', done: true };
//             }
//         }
//     }
// }
// for (const i of iterableObj) {
//  console.log(i);
// }

// let a = 9;

// console.log(`${a < 10 ? "very low" : "very high"}`);


// let a = [1,4,5,6,2,9];

// let max =-infinity;

// for(let i=0; i<a.length; i++){
//     if(a[i] > max){
//         max = a[i]
//     }
// }
// console.log(max)

// let min = Infinity;
// for(let i=0; i<a.length; i++){
//     if(a[i] < min){
//         min = a[i]
//     }
// }
// console.log(min);

// let a = 10;

// function x() {
//     function y(){
//         console.log(a)
//     }
//     y()
// }

// x();


let mobile = [
    {name:"sdsd", age:23},
    {name:"sdsd", age:23},
    {name:"sdsd", age:23},
    {name:"sdsd", age:23},
    {name:"sdsd", age:23}
]

for(let m=0; m<mobile.length; m++){
    console.log(m)
}