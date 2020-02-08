import pool from '../config/db';

const Users = {
  async selectUser(req, res) {
    // const { age } = req.query;
    console.log('my query', req.query);
    const result = await pool.query('select * from users').catch((err) => {
      res.status(404).send({
        message: 'failure',
        users: err.message,
      });
    });
    if (result) {
      res.status(200).send({
        message: 'success',
        users: result.rows,
      });
    }
  },

  async insertUser(req, res) {
    const { user } = req.body;
    const result = await pool.query('INSERT INTO users (name) VALUES ($1)', [user]).catch((err) => {
      res.status(404).send({
        message: 'failed to create user',
        users: err.message,
      });
    });
    if (result) {
      res.status(200).send({
        message: 'user was successfully created',
        users: result.rows,
      });
    }
  },

  async getUserProduct(req, res) {
    const { userId } = req.params;
    const result = await pool
      .query({ text: 'SELECT * FROM products WHERE owner = ($1)', values: [userId] })
      .catch((err) => res.status(404).send({
        message: err.message,
      }));
    res.status(200).send({
      status: 'Successful',
      data: result && result.rows,
    });
  },
};

export default Users;
