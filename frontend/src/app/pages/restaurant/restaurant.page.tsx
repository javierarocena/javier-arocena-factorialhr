import { useMetric } from "../../../domain/metric/useMetric"
import { useProduct } from "../../../domain/product/useProduct"
import { MetricDevRepository } from "../../repository/metrics/metrics.dev.repository"
import { ProductDevRepository } from "../../repository/products/products.dev.repository"
import { ProductUI } from "./components/product.ui"
import { PurchaseUI } from "./components/purchase.ui"
import toast, { Toaster } from 'react-hot-toast';
import { Product } from "../../../domain/product/product.model"
import "./restaurant.page.css"
import "../../pages/dashboard/components/sections/sections.css"

export const RestaurantPage = () => {

    const { getAllProduct } = useProduct(new ProductDevRepository())
    const { purchaseProduct } = useMetric(new MetricDevRepository())

    const onPurchase = (product: Product) => {
        toast.success(`You buy ${product.name}`);
        purchaseProduct(product)
    }

    return <div className="chart-section" style={{ width: "100%", boxSizing: "content-box", flex: "1 1 auto", overflow: "auto" }}>
        <h1>Restaurant</h1>
        <div className="gallery">
            {getAllProduct().map((product) => {
                return <PurchaseUI key={product.id} onPurchase={() => onPurchase(product)}>
                    <ProductUI product={product} />
                </PurchaseUI>
            })}
        </div>
        <Toaster />
    </div>
}