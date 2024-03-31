import { PRIMARY } from "@/lib/constants";
import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

interface Item {
  title: string;
  value: number | string;
  flow?: "up" | "down";
  flowPercent?: number;
}

const cardsData: Item[] = [
  {
    title: "Subscribers",
    value: "540,050",
    flow: "up",
    flowPercent: 10,
  },
  {
    title: "Uploads",
    value: "320",
  },
  {
    title: "Views",
    value: "21,211,414,141",
    flow: "down",
    flowPercent: 10,
  },
  {
    title: "Earnings",
    value: "$12,240",
    flow: "up",
    flowPercent: 10,
  },
];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function StatsCard() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-8 max-w-screen-xl gap-4 mx-auto p-4">
      {cardsData.map((el) => (
        <Card key={el.title} el={el} />
      ))}
    </div>
  );
}

const Card: React.FC<{ el: Item }> = ({ el }) => {
  return (
    <div className="min-w-48 p-4 bg-card flex-1 gap-3 border rounded-lg">
      <p className="">Total {el.title}</p>
      <p className="font-semibold text-2xl mt-2">{el.value}</p>
      {el.flowPercent && (
        <p className="text-muted-foreground text-sm">{`${
          el.flow == "up" ? "+" : "-"
        }${el.flowPercent}% from last month`}</p>
      )}
      {el.flow && (
        <div className="mt-6">
          <ResponsiveContainer height={80}>
            <LineChart data={data} className="">
              <Line type="monotone" dataKey="uv" stroke={PRIMARY} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};
