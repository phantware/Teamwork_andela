import pool from '../config/db';

const Connect = {
  async createProduct(req, res) {
    const productName = req.body.name;
    const { owner } = req.body;
    /**  eslint-disable-next-line */
    const sql = {
      text: 'INSERT INTO products (name,owner) VALUES ($1,$2)',
      values: [productName, owner],
    };
    const result = await pool.query(sql).catch((err) => {
      res.status(404).send({
        message: 'failed to create product',
        error: err.message,
      });
    });
    if (result) {
      res.status(200).send({
        message: 'product was successfully created',
        product: result.rowss,
      });
    }
  },

  async getProduct(req, res) {
    const sql2 = `SELECT products.id as product_id,
           products.name as product_name,
          users.name as owner from products INNER JOIN users 
          ON products.owner = users.id`;
    const result = await pool.query(sql2).catch((err) => {
      console.log(err);
      res.status(400).send({
        message: 'Failed to get result',
        error: err.message,
      });
    });
    if (result) {
      res.status(200).send({
        message: 'Success',
        product: result.rows,
      });
    }
  },
};

export default Connect;
