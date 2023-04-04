import React from "react";
import { Card } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import AppCard from "./Card";

const data = [
  { name: "01 Apr", score: 80 },
  { name: "02 Apr", score: 90 },
  { name: "04 Apr", score: 60 },
  { name: "05 Apr", score: 70 },
  { name: "06 Apr", score: 80 },
  { name: "07 Apr", score: 50 },
];

const AppLineChart = () => {
  return (
    <AppCard className="p-6">
      <p className="font-bold text-xl">Overall</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          className="mx-auto"
          width="100%"
          height="100%"
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#1C64F2"
            strokeWidth="3"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </AppCard>
  );
};

export default AppLineChart;
