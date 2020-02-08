// const Joi = require('@hapi/joi');
import Joi from '@hapi/joi';

const schema = Joi.object()
  .keys({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30), // .required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),

    access_token: [Joi.string(), Joi.number()],

    birth_year: Joi.number()
      .integer()
      .min(1900)
      .max(2013),

    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  })
  // .with('username', 'birth_year')
  .xor('password', 'access_token')
  .with('password', 'repeat_password');

let { error, value } = schema.validate(
  {
    // username: 'a9b',
    // access_token: 5445,
    password: 'tdtdtdtd',
    repeat_password: 'tdtdtdtd1',
    //   birth_year: 1994,
  },
  { allowUnknown: true },
);

// console.log(error);
// console.log(JSON.stringify(error,undefined,2));
// -> { value: { username: 'abc', birth_year: 1994 } }

// schema.validate({});
// -> { value: {}, error: '"username" is required' }

// Also -

// try {
//     const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
// }
// catch (err) { }

const obj = { fatai: 'abu' };
obj.fatai = 'fattylee';
// obj.age = 10;
const arr = [1, 4, 5, 8, 8];
let index = null;
let last = null;
[index, , ...last] = arr;
// console.log(index, last);
const schemaOne = Joi.number()
  .less(1)
  .greater(5);

const schemaTwo = Joi.object({
  min: Joi.number()
    .min(4)
    .required(),
  max: Joi.number()
    .greater(Joi.ref('min'))
    .required(),
});
({ error, value } = schemaTwo.validate({ max: 5.6, min: 5 }, { abortEarly: false }));
console.log(error, value, Number.MAX_SAFE_INTEGER);

const { fatai: fatty, age: years = 32 } = obj;
// console.log(fatty, years);

const func = () => ({ years });
