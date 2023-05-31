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

// const data = [
//   { key: "01 Apr", value: 80 },
//   { key: "02 Apr", value: 90 },
//   { key: "04 Apr", value: 60 },
//   { key: "05 Apr", value: 70 },
//   { key: "06 Apr", value: 80 },
//   { key: "07 Apr", value: 50 },
// ];

const AppLineChart = ({data}) => {
  console.log("date chart", data);
  return (
    <AppCard className="p-6">
      <p style={{fontWeight:700, fontSize:"20px"}}>Overall</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          className="mx-auto"
          width="100%"
          height="100%"
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="key" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
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
