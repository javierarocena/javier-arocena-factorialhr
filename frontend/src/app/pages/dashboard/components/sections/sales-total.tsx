import { Metric } from "../../../../../domain/metric/metric.model"

export type SalesTotalProps = { metrics: Metric[] }

export const SalesTotal = ({ metrics }: SalesTotalProps) => {
    const getSalesTotal = () => {
        return metrics.filter(metric => metric.name === "purchase_product").length
    }
    return <h2>{getSalesTotal()} productos vendidos</h2>
}