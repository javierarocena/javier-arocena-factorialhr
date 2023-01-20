import { useState } from "react";
import { DateRange } from "../../../../../domain/metric/date-range.model";

export const getTodayRange = (): DateRange => {
  const today = new Date();
  const startDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  ).toISOString();
  const endDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  ).toISOString();
  return { startDate, endDate };
};

export const useTimeline = () => {
  const [range, setRange] = useState<DateRange>(getTodayRange());

  return {
    range,
    setRange,
  };
};
