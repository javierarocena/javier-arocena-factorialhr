import { DateRange } from "./date-range.model";
import { Metric } from "./metric.model";

export interface MetricRepository {
  getMetrics(range: DateRange): Promise<Metric[]>;
  postMetric(metric: Metric): Promise<Response>;
}
