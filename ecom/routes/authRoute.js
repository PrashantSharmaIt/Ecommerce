import express from "express";
import { registerController, loginController, testController,forgotPasswordController, updateProfileController, getAllOrdersController, orderStatusController, getOrdersController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/register', registerController);  // Register route

// Login route
router.post('/login', loginController);

//Forgot password

router.post('/forgot-password', forgotPasswordController)
// Protected test route
router.get('/test', requireSignIn,isAdmin, testController);

//Protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//Protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin,(req, res)=> {
  res.status(200).send({ ok: true });
});

// update profile
router.put('/profile', requireSignIn ,updateProfileController)

//orders
router.get('/orders',requireSignIn,getOrdersController);

//all orders
router.get('/all-orders', requireSignIn , isAdmin ,getAllOrdersController);

//order-update
router.put('/order-status/:orderId',requireSignIn,isAdmin,orderStatusController);



export default router;
