import express from 'express';
import userController from '../controllers/users';
import userMiddleware from '../middlewares/users';

const router = express.Router();

router.get('/', userController.selectUser);

router.post('/', userController.insertUser);

// get all products that belongs to a user
router.get(
  '/products/:userId',
  userMiddleware.validateUser,
  userController.getUserProduct,
);


export default router;
