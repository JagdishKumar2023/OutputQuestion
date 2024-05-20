// Question = 1

// console.log("Value of Age is", age); // output =  undefined

// var age = 23;

// console.log("Value of Age is ", age); // 23

// console.log("Value of Age is", age); // output =  undefined

// let age = 23;

// console.log("Value of Age is ", age); // 23

// variable = 10;

// let myFun = () => {
//   foo = 100;
//   var foo = 100;
//   variable = 20;
//   console.log("Iam Variable", variable);
//   console.log("Foo here ", foo);
// };

// res = myFun();
// console.log(res);
// console.log(foo);
// console.log(variable);

// var variable = 30;

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// Use let the value print in where the length of i becasue this value of var is golbal scope

// Let local scope than print the value 1 to 5 where the value of i

// var fullName = "Piyush Garg";

// var obj = {
//   props: {
//     fullName: "Inside Prop",
//     getFullName: function () {
//       return this.fullName;
//     },
//   },

//   getFullName: function () {
//     return this.fullName;
//   },

//   getFullNameV2: function () {
//     console.log(this);
//   },

//   getFullNameV3: function () {
//     return this.fullName;
//   },
// };

const piyush = {
  name: "Piyush Grap",
  sayName: function () {
    console.log(this.name);
  },
};

setTimeout(piyush.sayName.bind(piyush), 3 * 1000);
