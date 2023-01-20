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
        const date = getDateBykey(+index)

        if (rangeType === "days") {
            return date.getDate() + "/" + (date.getMonth() + 1)
        }

        if (rangeType === "hours") {
            return date?.getHours() + "h"
        }

        if (rangeType === "minutes") {
            return date.getHours() + ":" + date.getMinutes()
        }
    }

    return <div className="timeline">
        <div className="rangetype-box">
            <button onClick={() => setRangeType('days')}>Day</button>
            <button onClick={() => setRangeType('hours')}>Hour</button>
            <button onClick={() => setRangeType('minutes')}>Minute</button>
        </div>

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
                <span style={{ color: "#999", position: "relative", top: "28px" }}>
                    {getMarkByRangeType(props.key)}
                </span>
            }</span>}
            renderThumb={(props, state) => <div {...props}>{getMarkByRangeType(state.valueNow)}</div>}
        />

    </div >
}