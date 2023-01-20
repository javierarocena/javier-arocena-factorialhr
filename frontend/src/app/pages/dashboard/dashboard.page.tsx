import { useMetric } from "../../../domain/metric/useMetric"
import { MetricDevRepository } from "../../repository/metrics/metrics.dev.repository"
import useSWR from 'swr'
import { Timeline } from "./components/timeline/timeline"
import { useTimeline } from "./components/timeline/useTimeline"
import { SalesTotal } from "./components/sections/sales-total"
import { SalesVolumeByProduct } from "./components/sections/sales-volume-by-product"
import { RangeTitle } from "./components/timeline/range-title"


export const DashboardPage = () => {

    const { range, setRange, rangeType } = useTimeline()

    const { getMetrics } = useMetric(new MetricDevRepository())
    const { data: metrics, isLoading } = useSWR(range, getMetrics)

    return <div>
        <div style={{ opacity: isLoading ? 0.5 : 1 }}>
            <SalesTotal metrics={metrics ?? []} />
            <SalesVolumeByProduct metrics={metrics ?? []} />
        </div>
        <RangeTitle currentRange={range} rangeType={rangeType} />
        <Timeline onChange={(range) => setRange(range)} />
    </div>
}