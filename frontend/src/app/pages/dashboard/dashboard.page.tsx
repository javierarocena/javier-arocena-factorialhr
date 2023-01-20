import { useMetric } from "../../../domain/metric/useMetric"
import { MetricDevRepository } from "../../repository/metrics/metrics.dev.repository"
import useSWR from 'swr'
import { Timeline } from "./components/timeline/timeline"
import { useTimeline } from "./components/timeline/useTimeline"
import { SalesTotal } from "./components/sections/sales-total"


export const DashboardPage = () => {

    const { range, setRange } = useTimeline()

    const { getMetrics } = useMetric(new MetricDevRepository())
    const { data: metrics, error, isLoading } = useSWR(range, getMetrics)

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error {JSON.stringify(error)}</p>
    if (!metrics) return <p>No data...</p>

    return <div>
        <SalesTotal metrics={metrics} />
        <Timeline currentRange={range} onChange={(range) => setRange(range)} />
    </div>
}