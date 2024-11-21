"use client";

import Image from "next/image";
import React from "react";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 50,
    absent: 35,
  },
  {
    name: "Thu",
    present: 56,
    absent: 22,
  },
  {
    name: "Fri",
    present: 60,
    absent: 30,
  },
];

const AttendaceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">

      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendace</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>

          <CartesianGrid strokeDasharray="3 3"  vertical={false} stroke="#ddd" />

          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#d1d5db'}} />
          <YAxis axisLine={false} tickLine={false} tick={{fill:'#d1d5db'}} />

          <Tooltip
            contentStyle={{
                borderRadius:'10px',
                borderColor: 'lightgray'
            }}
          />

          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "30px" }}
          />

          <Bar
            legendType="circle"
            dataKey="present"
            fill="#C3EBFA"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            radius={[10,10,0,0]}
          />

          <Bar
            legendType="circle"
            dataKey="absent"
            fill="#FAE27C"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
            radius={[10,10,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendaceChart;
