import { Metric } from "./metric.model";

export interface MetricRepository {
  getMetrics(): Promise<Metric[]>;
  postMetric(metric: Metric): Promise<Response>;
}
