import { Metric } from "../../../../../domain/metric/metric.model"
import "./sections.css"

export type SalesTotalProps = { metrics: Metric[] }

export const SalesTotal = ({ metrics }: SalesTotalProps) => {
    const getSalesTotal = () => {
        return metrics.filter(metric => metric.name === "purchase_product").length
    }
    return <div className="chart-section"><h2>{getSalesTotal()} products sold</h2></div>
}