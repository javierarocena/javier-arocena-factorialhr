import { useState } from "react";
import { DateRange } from "../../../../../domain/metric/date-range.model";
import { getTodayRange } from "./getTodayRange";

type RangeType = "minutes" | "hours" | "days";

export const useTimeline = () => {
  const [range, setRange] = useState<DateRange>(getTodayRange());
  const [rangeType, setRangeType] = useState<RangeType>("days");

  return {
    range,
    setRange,
    rangeType,
    setRangeType,
  };
};
