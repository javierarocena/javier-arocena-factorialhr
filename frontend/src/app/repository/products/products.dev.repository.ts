import { Product } from "../../../domain/product/product.model";
import { ProductRepository } from "../../../domain/product/product.repository.model";

export class ProductDevRepository implements ProductRepository {
  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: "Product 1",
        price: 1000,
        image: "https://picsum.photos/80/80",
      },
      {
        id: 2,
        name: "Product 2",
        price: 2000,
        image: "https://picsum.photos/80/80",
      },
    ];
  }
}
