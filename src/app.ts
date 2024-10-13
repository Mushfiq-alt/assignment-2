import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/orderManagement/order.router';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/', ProductRoutes);
app.use('/api/', OrderRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send(
    'Welcome Assignment 2 🚀',
  );
});
export default app;
