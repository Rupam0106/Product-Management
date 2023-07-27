import { Product } from 'src/app/shared/models/Product';

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: [
    {
      _id: '64996195faea92165322d3fc',
      title: 'Canon Awesome Camera 850D',
      description:
        'New Added Best camera for Wedding photography and fashion shoot',
      price: 80000,
      productImage:
        'https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/RupamStore/canon_eos_850d_01.jpg',
      deletedAt: null,
      stock: 250,
    },
  ],
};
