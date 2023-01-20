import { Metric } from "../../../../../domain/metric/metric.model"
import { useProduct } from "../../../../../domain/product/useProduct"
import { ProductDevRepository } from "../../../../repository/products/products.dev.repository"
import { ProductUI } from "../../../restaurant/components/product.ui"
import "./sales-list.css"

type SalesListProps = { metrics: Metric[] }

export const SalesList = ({ metrics }: SalesListProps) => {

    const { getProductById } = useProduct(new ProductDevRepository())

    return <div className="chart-section">
        <div className="products">
            {metrics.filter(metric => metric.name === "purchase_product").map(metric => {
                const product = getProductById(parseInt(metric.value));
                if (!product) return <></>
                return <ProductUI size="small" product={product!} />
            })}
        </div>
    </div>
}