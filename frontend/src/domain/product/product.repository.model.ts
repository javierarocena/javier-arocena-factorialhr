import { Product } from "./product.model";

export interface ProductRepository {
  getProducts(): Product[];
  getProductById(id: number): Product | undefined;
}
