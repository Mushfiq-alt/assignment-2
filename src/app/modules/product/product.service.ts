import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (productData: TProduct) => {
  // const result = await ProductModel.create(product);

  const product = new Product(productData);
  if (await product.isProductExists(productData.name)) {
    throw new Error('Product Already Exists!');
  }
  const result = await product.save();
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

const deleteProductFromDB = async (_id: string) => {

  const result = await Product.updateOne({ _id }, {isDeleted: true});

  return result;
};


const updateProductIntoDB = async (_id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(_id, payload,{new: true});
  return result;
};

const searchProductsFromDB = async(searchTerm: string) => {
  const result = await Product.find({
    name: {$regex: searchTerm, $options: 'i'},
    isDeleted: {$ne: true}
  });
  return result;
}


export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductIntoDB,
  searchProductsFromDB,
};
