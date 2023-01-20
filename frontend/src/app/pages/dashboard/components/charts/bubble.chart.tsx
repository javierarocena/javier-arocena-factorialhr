import BubbleChart from '@weknow/react-bubble-chart-d3';

export type BubbleChartUIProps = { data: any }

export const BubbleChartUI = ({ data }: BubbleChartUIProps) => {
    return <BubbleChart
        width={500}
        height={500}
        fontFamily="Arial"
        data={data}
    />
}
