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
import { faker } from "@faker-js/faker";
import CountUp from "react-countup";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    indexAxis: "y",
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
};

const labels = ["Mai", "Juin", "Juillet", "Aout", "Septembre"];

export const data = {
    labels,
    datasets: [
        {
            label: "Bitcoin",
            data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
            ),
            borderColor: "#f2a900",
            backgroundColor: "#f2e200",
        },
        {
            label: "Ethereum",
            data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
            ),
            borderColor: "#373737",
            backgroundColor: "#888888",
        },
        {
            label: "Litecoin",
            data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
            ),
            borderColor: "#325a98",
            backgroundColor: "#327e98",
        },
    ],
};

export function TransactionGraph() {
    return <Bar options={options} data={data} />;
}
