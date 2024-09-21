import { Schema, model, connect } from 'mongoose';
import {
  TInventory,
  TProduct,
  ProductMethod,
  ProductModel,
  TVariant,
} from './product.interface';

const variantSchema = new Schema<TVariant>({
  type: {
    type: String,
    required: [true, 'Variant type is required.'],
  },
  value: {
    type: String,
    required: [true, 'Variant value is required.'],
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: [true, 'Inventory quantity is required.'],
    min: [0, 'Quantity cannot be negative.'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'Stock availability is required.'],
  },
});

const productSchema = new Schema<TProduct, ProductModel, ProductMethod>({
  name: {
    type: String,
    required: [true, 'Product name is required.'],
  },
  description: {
    type: String,
    required: [true, 'Product description is required.'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required.'],
    min: [0, 'Price cannot be negative.'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required.'],
  },
  tags: {
    type: [String],
    required: [true, 'At least one product tag is required.'],
  },
  variants: [variantSchema],
  inventory: inventorySchema,
  isDeleted: {
    type: Boolean,
    default: false
  }
});

// Qeury Middleware

productSchema.pre('find', function (next) {
  this.find({isDeleted: {$ne: true}});

  next();
});

productSchema.pre('findOne', function (next) {
  this.find({isDeleted: {$ne: true}});

  next();
});

productSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({$match: {isDeleted: {$ne: true}}})
  next();
});

productSchema.methods.isProductExists = async function (name: string){
  const existingProduct = await Product.findOne({name}) 
  return existingProduct;
}

export const Product = model<TProduct, ProductModel>('Product', productSchema);
