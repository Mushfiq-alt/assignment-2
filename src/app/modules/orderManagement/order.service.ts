import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await OrderModel.find();
  return result;
}

// const getSingleOrderFromDB = async (email: string) => {
//   const result = await OrderModel.find({
//     email: { $regex: email, $options: 'i' },
//     isDeleted: { $ne: true },
//   });
//   return result;
// };

const getSingleOrderFromDB = async (email: string) => {
  if (email) {
    const result = await OrderModel.find({
      email: { $regex: email, $options: 'i' },
    });
    // console.log(result)
    return result;
  }
  const result = await OrderModel.find();
  return result;
};
export const OrderServices = {
  createOrderIntoDB,
  getAllOrderFromDB,
  getSingleOrderFromDB
};
