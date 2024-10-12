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

const getController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
}

app.get('/', getController);

export default app;
