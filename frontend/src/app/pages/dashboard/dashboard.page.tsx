import { useMetric } from "../../../domain/metric/useMetric"
import { MetricDevRepository } from "../../repository/metrics/metrics.dev.repository"
import useSWR from 'swr'
import { Timeline } from "./components/timeline/timeline"
import { useTimeline } from "./components/timeline/useTimeline"


export const DashboardPage = () => {

    const { range, setRange } = useTimeline()

    const { getMetrics } = useMetric(new MetricDevRepository())
    const { data: metrics, error, isLoading } = useSWR(range, getMetrics)

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error {JSON.stringify(error)}</p>

    return <div>
        <Timeline currentRange={range} onChange={(range) => setRange(range)} />
        {metrics?.map((metric, key) => <li key={key}>{metric.timestamp}</li>)}
    </div>
}