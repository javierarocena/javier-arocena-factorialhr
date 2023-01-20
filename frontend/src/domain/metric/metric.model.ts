export interface Metric {
  name: MetricNames;
  value: string;
  timestamp: string;
}

export type MetricNames = "purchase_product";
