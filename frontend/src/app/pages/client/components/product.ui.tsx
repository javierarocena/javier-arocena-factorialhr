import { Product } from "../../../../domain/product/product.model"

type ProductUIProps = { product: Product }

export const ProductUI = ({ product }: ProductUIProps) => {
    return <div>
        <img src={product.image} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
    </div>
}