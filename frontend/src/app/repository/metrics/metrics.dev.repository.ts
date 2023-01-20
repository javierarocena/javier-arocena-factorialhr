import { DateRange } from "../../../domain/metric/date-range.model";
import { Metric } from "../../../domain/metric/metric.model";
import { MetricRepository } from "../../../domain/metric/metric.repository.model";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export class MetricDevRepository implements MetricRepository {
  private API_URL = "http://localhost:3000/api/metrics";

  async getMetrics(range: DateRange): Promise<Metric[]> {
    const { startDate, endDate } = range;
    await delay(2000);
    return fetch(`${this.API_URL}?start=${startDate}&end=${endDate}`).then(
      (res) => res.json()
    );
  }

  postMetric(metric: Metric): Promise<Response> {
    return fetch(this.API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(metric),
    });
  }
}
