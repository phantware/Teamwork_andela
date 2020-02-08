// const pool = {
//   query(command, cb) {
//     console.log('hurray!', command);
//     const isTrue = false;
//     setTimeout(() => {
//       if (isTrue) {
//         cb(null, 'my result');
//       } else {
//         cb(new Error('something went wrong'), undefined);
//       }
//     }, 3000);
//   },
//   age: 77,
//   gender: 'male',
// };

// pool.query('babe', (err, res) => {
//   console.log('this is my callback!', res, err);
// });

const sell = [1, 2, 3, 4, 5, 6].map((e) => ({msg: e}));
console.log(sell);
