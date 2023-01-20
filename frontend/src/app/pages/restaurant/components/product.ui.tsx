import { Product } from "../../../../domain/product/product.model"
import "./product.ui.css"

interface ProductUIProps { product: Product, size?: "small" | "default" }

export const ProductUI = ({ product, size }: ProductUIProps) => {
    return <div className={`product-item size-${size}`}>
        <img className="thumbnail" src={product.image} />
        <h3>{product.name}</h3>
    </div>
}