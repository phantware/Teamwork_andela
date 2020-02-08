// function seeNee(a, b, callb) {
//   const obj = {
//     sum: a + b,
//     sub: a - b,
//     mult: a * b,
//     div: a / b,
//     mod: a % b,
//   };
//   return obj;
//   setTimeout(() => {
//     callb(a + b, a * b, a - b, a / b);
//   }, 5000);
//   console.log('last line');
// }

// seeNee(2, 3, (res, req, next, wat) => {
//   console.log(res, req, next, wat);
// });

// const map = (a, cb) => {
//   const { length } = a;
//   const array = [];
//   for (let i = 0; i < length; i += 1) {
//     const res = cb(a[i], i, a);
//     console.log(res);
//     array.push(res);
//   }
//   return array;
// };
// const sam = map(
//   [55, 66, 77],
//   (p, q, r) =>
//     //   console.log(sam);
//     // eslint-disable-next-line implicit-arrow-linebreak
//     `<h1>${p}</h1>`,
// );
// console.log(sam);

//  const min = Math.min(-7, 2, 6, 4, 9, 0, 1);
// console.log(min);

// const getMin = (a, b, mini) => {
//   //  return a + b;

//   mini(a + b);
// };

// getMin(1, 2, (w) => {
//   console.log(w);
// });

/* eslint-disable-next-line */
// Array.prototype.myForEach = function(cb) {
//   for (let i = 0; i < this.length; i += 1) {
//     cb(this[i], i, this);
//   }
// };

// Array.prototype.makeSexy = function () {
//   return this.join('**/*');
// };
// Array.prototype.PI = 22 / 7;

// console.log([1, 2, 34, 6].makeSexy(), [45525].PI);
// function MyClass(a, b) {
//   // static property
//   // MyClass.count = 0;
//   MyClass.count = !MyClass.count ? 1 : MyClass.count + 1;
//   // private property
//   let count = 0;

//   // instance properties
//   this.a = a;
//   this.b = b;

//   // instance method
//   this.increaseCount = function () {
//     count += 1;
//     // return count;
//   };
//   this.getCount = function () {
//     count += 1;
//     return count;
//   };

//   MyClass.getObjectCount = function () {
//     return MyClass.count;
//   };
// }

// // static method

// // most efficient way of creating instance method
// MyClass.prototype.printValue = function printValue() {
//   console.log(this.a, this.b);
// };

// const obj = new MyClass(34, 10);
// obj.jam = 100;
// console.log(obj.a, obj.b, obj.getCount());
// obj.increaseCount();
// obj.increaseCount();
// obj.increaseCount();
// console.log(obj.getCount(), obj.getCount(), obj.jam);

// const obj2 = new MyClass(1, 2);
// obj2.increaseCount();
// console.log(obj2.getCount());
// new MyClass(1,2)
// new MyClass()
// console.log('my instance count', MyClass.getObjectCount(), MyClass.count);
// // const val = [2, 3, 7, 1].myForEach((e,i,arr) => {
// //   console.log(e,i,arr);
// // });
// // console.log(val);

// const filterArray = [0, 2, 3, 4, 5, 6, 7, 8].filter((e, i, arr) => e % 2 === 0 && e > 0);
// console.log(Boolean());

// console.log(filterArray);

const myFilter = (a, cb) => {
  const arr = [];
  const l = a.length;
  for (let i = 0; i < l; i += 1) {
    const callB = cb(a[i], i, a);
    console.log('callB', callB);
    if (callB % 2) {
      arr.push(callB);
    }
  }
  return arr;
};
let myList = ['hi', 'love', 'you'];
myList = [1, 2, 3, 4, 5, 6, 7];
const hi = myFilter(myList, (k) => {
  console.log('Inside callback', k);
  return k + 3;
});
// console.log(hi);

const myFilter2 = (arr, cb) => {
  const { length } = arr;
  const tempArr = [];
  for (let i = 0, j = 1; j <= length; j += 1, i += 1) {
    const val = cb(arr[i], i, arr);
    if (val) tempArr.push(arr[i]);
  }
  return tempArr;
};
/* eslint-disable-next-line */
Array.prototype.myFilter2 = function(cb) {
  const { length } = this;
  const tempArr = [];
  for (let i = 0, j = 1; j <= length; j += 1, i += 1) {
    const val = cb(this[i], i, this);
    if (val) tempArr.push(this[i]);
  }
  return tempArr;
};
let val;
// val = myList.filter((e) => e.includes('o'));
// val = myFilter(myList, (e) => e.includes('o'));
// val = myFilter2(myList, (e) => e > 2);
val = myList.myFilter2((e) => e > 6);
console.log(val);
