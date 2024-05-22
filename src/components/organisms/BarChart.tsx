import { useState } from 'react';
import '../../styles/organisms/chart.css';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { bar } from '../../data'

const BarChart = () => {
    const [options] = useState<ApexOptions>({
        chart: {
            type: 'bar',
            height: 350
        },
        title: {
            text: 'Bar Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            min: 6500,
            max: 6700,
            tooltip: {
                enabled: true
            },
            opposite: true
        }
    });

    const [series] = useState(bar);
    return (
        <div className="chart__body">
            <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
    );
};

export default BarChart;
