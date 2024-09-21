import { z } from 'zod';

// Variant Schema
const variantValidationSchema = z.object({
  type: z.string().min(1, 'Variant type is required.'), 
  value: z.string().min(1, 'Variant value is required.'), 
});

// Inventory Schema
const inventoryValidationSchema = z.object({
  quantity: z
    .number({
      required_error: 'Inventory quantity is required.',
      invalid_type_error: 'Quantity must be a number.',
    })
    .min(0, 'Quantity cannot be negative.'),
  inStock: z.boolean({
    required_error: 'Stock availability is required.',
    invalid_type_error: 'In stock must be a boolean.',
  }),
});

// Product Schema
const productValidationSchema = z.object({
  name: z.string().min(1, 'Product name is required.'),
  description: z.string().min(1, 'Product description is required.'),
  price: z
    .number({
      required_error: 'Product price is required.',
      invalid_type_error: 'Price must be a number.',
    })
    .min(0, 'Price cannot be negative.'),
  category: z.string().min(1, 'Product category is required.'),
  tags: z.array(z.string().min(1), {
    required_error: 'At least one product tag is required.',
  }),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
  isDeleted: z.boolean().default(false),
});


export default productValidationSchema;