import { Product } from "../../../../domain/product/product.model"
import "./product.ui.css"

type ProductUIProps = { product: Product }

export const ProductUI = ({ product }: ProductUIProps) => {
    return <div className="product-item">
        <img className="thumbnail" src={product.image} />
        <h3>{product.name}</h3>
    </div>
}