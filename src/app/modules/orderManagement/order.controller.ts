import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const {order: orderData} = req.body;
    const result = await OrderServices.createOrderIntoDB(orderData);

    res.status(200).json({
      success: true,
      message: 'Order is Created Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};


const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    // console.log(req.query)
    const result = await OrderServices.getSingleOrderFromDB(email as string);
    if (result.length === 0) {
      res.status(404).send({
        success: false,
        message: 'No Orders found',
        data: result,
      });
    }
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something Went Wrong',
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrder,
  
};
