import BarChart from "./BarChart"
import CandleStickChart from "./CandleStickChart"
const Chart = () => {
    return (
        <div className="chart">
            <div className="chart__header">
                <h2 className="chart__title">Trading View</h2>
            </div>
            <CandleStickChart />
            <BarChart />
        </div>
    )
}

export default Chart