'use client'

import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,

  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
  
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,

  },
  {
    name: 'Apr',
    income: 2000,
    expense: 9800,

  },
  {
    name: 'May',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Aug',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'Jun',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'Jul',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'Sep',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Sep',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Oct',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Nov',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Dec',
    income: 3490,
    expense: 4300,
  },
];


const FinanceChart = () => {

  return (
    <div className="bg-white rounded-lg p-4 h-full">

    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold">Finance</h1>
      <Image src={"/moreDark.png"} alt="" width={20} height={20} />
    </div>
    <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis tickMargin={20} dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#d1d5db'}} />
          <YAxis axisLine={false} tickLine={false} tick={{fill:'#d1d5db'}}/>
          <Tooltip />
     
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "40px" }}
          />

          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )

}

export default FinanceChart