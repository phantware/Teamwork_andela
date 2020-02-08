const { Pool } = require('pg');

const connectionString = 'postgresql://:jamiu@/jamiu';
const pool = new Pool({ connectionString });
const pool2 = new Pool({ connectionString });
const myCallBack = (err, res) => {
  // pool.end();
  // console.log(err, res && res.rows);
};

pool.query('SELECT NOW() babaDate', myCallBack);
pool.end();
pool2.query('select 7+3 as sum', myCallBack);
pool2.query('SELECT 7%3 as multiple_of_three', myCallBack);
pool2.query('drop database if exists enginerr_akah', (err, res) => {
  const val = pool2.query('create database enginerr_akah', myCallBack);

  console.log('this jhjhj', val);
  const myProm = (result, rre) => {
    console.log(result);
  };
  const prom = pool2
    .query('select 77')
    .then((result) => {
      console.log();
      return 66;
    })
    .then(res=>{console.log(res,"====")});
  console.log('b4 resolve:', prom);
  prom.then(console.log);
  const counter = 0;
//   setInterval(()=>{
// console.log(prom, counter++)
//   }, 10000)
});

// function to return sum of two numbers
// callb(e, g) {}
// const callme = (y, z) => ({
//   a: y * z,
//   b: y / z,
//   c: y + z,
//   d: y - z,
// });
const basicOp = (a, b, cb) => {
  const obj = {
    sum: a + b,
    prod: a * b,
    div: a / b,
    mod: a % b,
  };
  // return obj;
  setTimeout(() => {
    cb(a + b, a * b);
  }, 5000);
  // console.log("last line")
};
basicOp(6, 2, (res, req) => {
  // console.log(res, req);
});
