import { model, connect, Schema } from 'mongoose';

export type Order = {
    email: string;
    productId: string;
    price: number;
    quantity: number; 
}