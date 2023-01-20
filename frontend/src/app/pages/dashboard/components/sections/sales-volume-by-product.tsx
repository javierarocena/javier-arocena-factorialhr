import { Metric } from "../../../../../domain/metric/metric.model"
import { useProduct } from "../../../../../domain/product/useProduct"
import { ProductDevRepository } from "../../../../repository/products/products.dev.repository"
import { BubbleChartUI } from "../charts/bubble.chart"
import "./sections.css"

type bubbleData = { label: string, value: number }
export type SalesVolumeByProductProps = { metrics: Metric[] }

export const SalesVolumeByProduct = ({ metrics }: SalesVolumeByProductProps) => {

    const { getProductById } = useProduct(new ProductDevRepository())

    const getData = () => {
        const data: bubbleData[] = []
        const sampleArray = metrics.filter(metric => metric.name === 'purchase_product').map(metric => metric.value)
        const counts: { [productId: string]: number } = {};
        sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        Object.keys(counts).forEach(((k: string) => {
            const product = getProductById(parseInt(k))
            data.push({ label: product?.name ?? '', value: counts[k] })
        }))
        data.sort((a, b) => b.value - a.value)
        return data.slice(0, 5)
    }
    return <div className="chart-section">
        <p>Top 5 sales volume products:</p>
        <BubbleChartUI data={getData()} />
    </div>
}