import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import productValidationSchema from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    const parseData = productValidationSchema.parse(productData);

    const result = await ProductServices.createProductIntoDB(parseData);

    res.status(200).json({
      success: true,
      message: 'Product is Create Successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something Went Wrong',
      error: err
    })
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB();

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
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

const getSingleProduct = async(req: Request, res: Response) => {
    try {
        const {productId} = req.params;

        const result =await ProductServices.getSingleProductFromDB(productId);
        
        res.status(200).json({
          success: true,
          message: 'Product fetched successfully!',
          data: result
        });
    } catch (err: any) {
        res.status(500).json({
          success: false,
          message: err.message || 'Something Went Wrong',
          error: err,
        });
    }
}

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductFromDB(productId);    

    res.status(200).json({
      success: true,
      message: 'Product Deleted successfully!',
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


const updateProduct = async(req: Request, res: Response) => {
  try {
    const {productId} = req.params;
    const updateProduct = req.body;

    const result = await ProductServices.updateProductIntoDB(productId,updateProduct);

    res.status(200).json({
      success: true,
      message: "Product updated Successfully",
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something Went Wrong',
      error: err,
    })
  }
}

const searchProducts = async(req: Request, res: Response) => {
  try {
    const {searchTerm} = req.query;

    if(!searchTerm) {
      return res.status(400).json({
        success: false,
        message: 'searchTerm query parameter is required'
      });
    }

    const result = await ProductServices.searchProductsFromDB(searchTerm as string);

    res.status(200).json({
      success: true,
      message: `Product matching search term ${searchTerm} fetched successfully!`,
      data: result,
    })
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something Went Wrong',
      error: err
    })
  }
}

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  searchProducts
};
