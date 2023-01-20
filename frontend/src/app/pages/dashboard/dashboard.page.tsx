import { useMetric } from "../../../domain/metric/useMetric"
import { MetricDevRepository } from "../../repository/metrics/metrics.dev.repository"
import useSWR from 'swr'
import { Timeline } from "./components/timeline/timeline"
import { useTimeline } from "./components/timeline/useTimeline"
import { SalesTotal } from "./components/sections/sales-total"
import { SalesVolumeByProduct } from "./components/sections/sales-volume-by-product"
import "./dashboard.page.css"
import { SalesList } from "./components/sections/sales-list"
import { RestaurantPage } from "../restaurant/restaurant.page"

export const DashboardPage = () => {

    const { range, setRange, rangeType } = useTimeline()

    const { getMetrics } = useMetric(new MetricDevRepository())
    const { data: metrics, isLoading } = useSWR(range, getMetrics)

    return <div className="dashboard-wrapper">
        <div className="charts-wrapper" style={{ opacity: isLoading ? 0.5 : 1 }}>
            <div>
                <SalesTotal metrics={metrics ?? []} />
                <div style={{ height: "2rem" }} />
                <SalesList metrics={metrics ?? []} />
            </div>
            <SalesVolumeByProduct metrics={metrics ?? []} />
            <RestaurantPage />
        </div>
        <Timeline onChange={(range) => setRange(range)} />
    </div>
}