// import express from 'express';
const express = require('express');

console.log(56);
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, console.log('App listening at port 3000'));

const jon = 'john';
console.log(jon);
