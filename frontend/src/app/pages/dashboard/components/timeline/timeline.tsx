import { Key } from "react"
import { useTimeline } from "./useTimeline"
import { DateRange } from "../../../../../domain/metric/date-range.model"
import ReactSlider from 'react-slider'
import './timeline.css'

type TimelineProps = { onChange: (range: DateRange) => void }

export const Timeline = ({ onChange }: TimelineProps) => {

    const { rangeType, setRangeType } = useTimeline()

    const getDateBykey = (tick: number) => {
        const date = new Date()
        date.setSeconds(0)
        date.setMilliseconds(0)

        if (rangeType === "hours") {
            date.setHours(date.getHours() - (+tick))
            return date
        }
        if (rangeType === "minutes") {
            date.setMinutes(date.getMinutes() - (+tick))
            return date
        }
        date.setDate(date.getDate() - (+tick))
        return date
    }

    const sliderChangeHandler = (value: number) => {
        const a = getDateBykey(value)
        const b = new Date(a)

        if (rangeType === "days") b.setDate(b.getDate() - 1)
        if (rangeType === "hours") b.setHours(b.getHours() - 1)
        if (rangeType === "minutes") b.setMinutes(b.getMinutes() - 1)

        const newRange = {
            startDate: b.toISOString(),
            endDate: a.toISOString()
        }
        onChange(newRange)
    }

    const getMarkByRangeType = (index: Key | null | undefined) => {
        if (index === null || index === undefined) return 1
        if (rangeType === "days") {
            return getDateBykey(+index)?.getDate()
        }
        if (rangeType === "hours") {
            return getDateBykey(+index)?.getHours()
        }
        if (rangeType === "minutes") {
            return getDateBykey(+index)?.getMinutes()
        }
    }

    return <div>
        <button onClick={() => setRangeType('days')}>Day</button>
        <button onClick={() => setRangeType('hours')}>Hour</button>
        <button onClick={() => setRangeType('minutes')}>Minute</button>

        <ReactSlider
            onChange={sliderChangeHandler}
            className="horizontal-slider"
            marks
            markClassName="example-mark"
            min={0}
            max={24}
            thumbClassName="example-thumb"
            trackClassName="example-track"
            renderMark={(props) => <span {...props}>{
                <span title={JSON.stringify(props)} style={{ color: "red", position: "relative", top: "22px" }}>{getMarkByRangeType(props.key)}</span>
            }</span>}
            renderThumb={(props, state) => <div {...props}>{getMarkByRangeType(state.valueNow)}</div>}
        />
        <h3>{rangeType}</h3>

    </div >
}