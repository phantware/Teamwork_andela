// const arr = [1, 3, 4, 6, 12, 9];
// const res = arr.map((e, i, ar, h) => {
//   console.log('printttt', e, i, ar);
//   return `<h1>${e}</h1>`;
// });
// console.log(res, arr)
// for (let i = 0; i < 10; i++) {
//   // console.log(i);
// }
// const obj = {
//   a: 78,
//   b: 12,
// };
// for (const i of arr) {
//   // console.log(arr[i]);
//   console.log(i)
// }
// const e = for( let i = 0; i > arr.length; i ++)
// const a = [];
// for (let a = 0; a > 10; a++);

// const jamiuForEach = (z, forjam) => {
//     const length = z.length
//   for (let i = 0; i < length; i += 1) {
//     forjam(z[i], i, z);
//     z.push(z[i]+2)
//   }
// };
//  const nums = [2, 3, 7, 1];
// // jamiuForEach(nums, (e, i, ar) => {
// //   console.log(e, i, ar);

// // });

// console.log(nums)

const jamMap = (y, cb) => {
  const { length } = y;
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    const val = cb(y[i], i, y);

    arr.push(val);
    console.log(arr);
  }
  return arr;
};
let rep = jamMap([11, 72, 13, 4], (l, m, q) => {
  console.log(l, m, q);
  return l + 3;
});
console.log(rep);
rep = Math.min(5, 6, -8, 0);
console.log(rep);
// const sum = (a, obj, cb) => {
//   const val = cb();

//   console.log(66, a, obj);

//   return cb(a + 5);
// };
// const val = console.log(
//   sum([2, 'rtr', 6], { age: 56 }, (num) => {
//     console.log(55576);
//     console.log('ray mon');
//     return num;
//   }),
// );
// console.log("val:", val)
