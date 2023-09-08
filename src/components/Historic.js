import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {faker} from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
        legend: {
            alignment: 'far',
            position: 'top', 
        }
    },
};

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 1000 })
            ),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
    ],
};

const Historic = () => {
    return (
        <div className="p-6 pb-16 h-96 w-full flex flex-col bg-white rounded-lg items-center border border-[#E2E8F0] shadow">
            <div className="w-full">
                <h1 className="text-lg font-bold">Historique des niveaux de besoins</h1>
                <p>Culture de Plantain</p>
            </div>
            <Bar options={options} data={data} />
        </div>
    );
};

export default Historic;
