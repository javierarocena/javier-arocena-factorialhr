import { Key } from "react"
import { useTimeline } from "./useTimeline"
import { DateRange } from "../../../../../domain/metric/date-range.model"
import ReactSlider from 'react-slider'
import './timeline.css'

type TimelineProps = { onChange: (range: DateRange) => void }

export const Timeline = ({ onChange }: TimelineProps) => {

    const { rangeType } = useTimeline()

    const getDateBykey = (tick: number) => {
        // TODO: minutes, days
        // if (rangeType === "hours") {
        //     return 1
        // }
        // if (rangeType === "minutes") {
        //     return 1
        // }
        const date = new Date()
        date.setSeconds(0)
        date.setMilliseconds(0)
        date.setDate(date.getDate() - (+tick))
        return date
    }

    const sliderChangeHandler = (value: number) => {
        if (rangeType === "days") {
            const a = getDateBykey(value)
            const b = new Date(a)
            b.setDate(b.getDate() - 1)

            const newRange = {
                startDate: b.toISOString(),
                endDate: a.toISOString()
            }
            onChange(newRange)
        }
        // TODO: minutes, days
    }

    const getMarkByRangeType = (index: Key | null | undefined) => {
        if (index === null || index === undefined) return 1
        if (rangeType === "days") {
            return getDateBykey(+index)?.getDate()
        }
        // TODO: minutes, days
        // if (rangeType === "hours") {
        //     return 1
        // }
        // if (rangeType === "minutes") {
        //     return 1
        // }
    }

    return <div>
        {/* 
        // TODO: minutes, days
        <button>Day</button>
        <button>Hour</button>
        <button>Minute</button> */}
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