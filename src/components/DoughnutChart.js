import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [
    {
      label: '# of Votes',
      data: [35, 15, 30, 20],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false
      }
    }
};

const plugins = [{
    beforeDraw: function(chart) {
     var width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         var fontSize = (height / 160).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         var text = "248",
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }];

const DoughnutChart = () => {
    return (
        <div className="w-full h-full gap-4 flex flex-col p-6 bg-white rounded-lg border border-[#E2E8F0] shadow">
            <div className="flex flex-row justify-between">
                <p className="text-xl font-medium">Plantation de Edea</p>
                <select className="p-2 rounded-md bg-[#F4F7FF]">
                    <option>Last 7 days</option>
                </select>
            </div>
            <div className="h-60">
                <Doughnut data={data} options={options} plugins={plugins} />
            </div>
            <hr className="w-full border border-[#E2E8F0]" />
            <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'rgba(255, 99, 132, 0.2)' }}></div>
                        <p>Red</p>
                    </div>
                    <div className="relative w-8/12 h-2 bg-[#E2E8F0] rounded-md">
                        <div className="absolute h-full w-[35%] bg-green-600 rounded-md"></div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'rgba(54, 162, 235, 0.2)' }}></div>
                        <p>Blue</p>
                    </div>
                    <div className="relative w-8/12 h-2 bg-[#E2E8F0] rounded-md">
                        <div className="absolute h-full w-[35%] bg-green-600 rounded-md"></div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'rgba(255, 206, 86, 0.2)' }}></div>
                        <p>Yellow</p>
                    </div>
                    <div className="relative w-8/12 h-2 bg-[#E2E8F0] rounded-md">
                        <div className="absolute h-full w-[35%] bg-green-600 rounded-md"></div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'rgba(75, 192, 192, 0.2)' }}></div>
                        <p>Green</p>
                    </div>
                    <div className="relative w-8/12 h-2 bg-[#E2E8F0] rounded-md">
                        <div className="absolute h-full w-[35%] bg-green-600 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoughnutChart;