import { useTimeline } from "./useTimeline"
import { DateRange } from "../../../../../domain/metric/date-range.model"

type TimelineProps = { currentRange: DateRange, onChange: (range: DateRange) => void }

const range1: DateRange = {
    startDate: new Date('2022-01-20T14:44:25.491Z').toISOString(),
    endDate: new Date('2023-01-20T14:44:25.491Z').toISOString(),
}

const range2: DateRange = {
    startDate: new Date('2023-01-20T14:44:25.491Z').toISOString(),
    endDate: new Date('2024-01-20T14:44:25.491Z').toISOString(),
}

export const Timeline = ({ currentRange, onChange }: TimelineProps) => {

    return <div>
        <p>CurrentRange - {JSON.stringify(currentRange)}</p>
        <button onClick={() => onChange(range1)}>Set 1</button>
        <button onClick={() => onChange(range2)}>Set 2</button>
    </div>
}