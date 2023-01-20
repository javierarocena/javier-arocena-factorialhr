
export const RangeTitle = ({ currentRange, rangeType }: any) => {

    const getRangeTitle = () => {
        let fecha = new Date(currentRange.startDate);
        if (rangeType === "days") {
            let options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
            return fecha.toLocaleString("es-ES", options)
        }
        if (rangeType === "minutes") {
            let options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric" };
            return fecha.toLocaleString("es-ES", options)
        }
        if (rangeType === "hours") {
            let options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric", hour: "numeric" };
            return fecha.toLocaleString("es-ES", options) + "h"
        }
    }

    return <h3>{getRangeTitle()}</h3>
}