export interface Metric {
  name: MetricNames;
  value: number;
  timestamp: string;
}

export type MetricNames = "purchase_product";
