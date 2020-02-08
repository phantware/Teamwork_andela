import Joi from '@hapi/joi';
import pool from '../config/db';

class Validator {
  static async validateUser(req, res, next) {
    let { userId } = req.params;

    const { error, value } = Joi.number()

      .less(-2)
      .greater(3)
      .max(0)
      .label('user id')

      .required()
      .validate(userId, { abortEarly: false });

    userId = value;
    // let { userId } = req.params;
    // userId = Number(userId);
    console.log(value);
    if (error) {
      //  console.log(error);
      const errors = error.details.map((e) => ({ message: e.message }));
      console.log(errors);
      return res.status(400).send({ errors });
    }
    try {
      const queryResp = await pool.query('SELECT * FROM users WHERE id=($1)', [userId]);
      if (queryResp.rows.length && queryResp.rows[0].id === userId) {
        req.params.userId = userId;
        return next();
      }
      return res.status(404).send({ message: 'user not found' });
    } catch (error) {
      console.log(error);
      return res.status(404).send({ message: 'something went wrong, try again later', error });
    }
  }
}

export default Validator;
