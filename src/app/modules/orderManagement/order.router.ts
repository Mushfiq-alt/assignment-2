import express from 'express'
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/orders', OrderControllers.createOrder);

router.get('/orders', OrderControllers.getAllOrder);


// router.get('/orders/email', OrderControllers.getSingleOrder); // Keep this line for getting single order by email


export const OrderRoutes = router;