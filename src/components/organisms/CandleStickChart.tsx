import { useState } from 'react';
import '../../styles/organisms/chart.css';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { candleStick } from '../../data'
// succcess: 00C076
// failed: FF6838

const CandleStickChart = () => {
    const [options, setOptions] = useState<ApexOptions>({
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: 'CandleStick Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            },
            opposite: true
        }
    });

    const [series, setSeries] = useState(candleStick);
    return (
        <div className="chart__body">
            <ReactApexChart options={options} series={series} type="candlestick" height={350} />
        </div>
    );
};

export default CandleStickChart;
