import { Metric } from "../../../domain/metric/metric.model";
import { MetricRepository } from "../../../domain/metric/metric.repository.model";

export class MetricDevRepository implements MetricRepository {
  private API_URL = "http://localhost:3000/api/metrics";

  getMetrics(): Promise<Metric[]> {
    throw new Error("Method not implemented.");
  }

  postMetric(metric: Metric): Promise<Response> {
    return fetch(this.API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(metric),
    });
  }
}
