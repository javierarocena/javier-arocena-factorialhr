import { useMetric } from "../../../domain/metric/useMetric"
import { useProduct } from "../../../domain/product/useProduct"
import { MetricDevRepository } from "../../repository/metrics/metrics.dev.repository"
import { ProductDevRepository } from "../../repository/products/products.dev.repository"
import { ProductUI } from "./components/product.ui"
import { PurchaseUI } from "./components/purchase.ui"

export const RestaurantPage = () => {

    const { getAllProduct } = useProduct(new ProductDevRepository())
    const { purchaseProduct } = useMetric(new MetricDevRepository())

    return <div>
        <h1>Restaurant</h1>
        {getAllProduct().map((product) => {
            return <PurchaseUI onPurchase={() => purchaseProduct(product)}>
                <ProductUI product={product} />
            </PurchaseUI>
        })}
    </div>
}