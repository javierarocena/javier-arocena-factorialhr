import { Product } from "./product.model";
import { ProductRepository } from "./product.repository.model";

export const useProduct = (repository: ProductRepository) => {
  const getAllProduct = (): Product[] => {
    return repository.getProducts();
  };

  return {
    getAllProduct,
  };
};
