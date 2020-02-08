/* eslint-disable */
const res = function () {
  return this;
};
res.papa = function () {
  console.log('doing some work');
  //return this;
};
res.faker = function () {
  console.log('faking this call');
  return this;
};

res.papa().faker();
