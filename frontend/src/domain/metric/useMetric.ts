import { MetricRepository } from "./metric.repository.model";
import { Product } from "../product/product.model";
import { DateRange } from "./date-range.model";

export const useMetric = (repository: MetricRepository) => {
  const purchaseProduct = (product: Product) => {
    repository.postMetric({
      name: "purchase_product",
      value: product.id,
      timestamp: new Date().toISOString(),
    });
  };

  const getMetrics = (range: DateRange) => {
    return repository.getMetrics(range);
  };

  return {
    purchaseProduct,
    getMetrics,
  };
};
