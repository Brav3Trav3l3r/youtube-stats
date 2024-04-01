import { DESTRUCTIVE, SUCCESS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

interface Item {
  title: string;
  value: number | string;
  trend?: "up" | "down";
  change?: number;
}

const upTrend = [
  {
    name: "Page A",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 2000,
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

const downTrend = [
  {
    name: "Page A",
    uv: 3000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 4000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 4000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 1000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 500,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 890,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 500,
    pv: 4300,
    amt: 2100,
  },
];

const fetchChannelInfo = async () => {
  const { data } = await axios.get(
    import.meta.env.VITE_BACKEND_URL +
      "/channels/" +
      import.meta.env.VITE_CHANNEL_ID
  );
  return data;
};

export default function StatsCard() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["channel"],
    queryFn: fetchChannelInfo,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-8 max-w-screen-xl gap-4 mx-auto p-4">
      <Card title="Subscribers" el={data.data.subscribers} />
      <Card title="Uploads" el={data.data.uploads} />
      <Card title="Earnings" el={data.data.earnings} />
      <Card title="View" el={data.data.views} />
    </div>
  );
}

const Card: React.FC<{ el: Item; title: string }> = ({ el, title }) => {
  console.log(el);
  return (
    <div className="min-w-48 p-4 bg-card flex-1 gap-3 border rounded-lg">
      <p className="">Total {title}</p>
      <p className="font-semibold text-2xl mt-2">{el.value}</p>
      {el.change && (
        <p className="text-muted-foreground text-sm">{`${
          el.trend == "up" ? "+" : "-"
        }${el.change}% from last month`}</p>
      )}
      {el.trend && (
        <div className="mt-6">
          <ResponsiveContainer height={80}>
            <LineChart
              data={el.trend == "up" ? upTrend : downTrend}
              className=""
            >
              <Line
                type="monotone"
                dataKey="uv"
                stroke={el.trend == "up" ? SUCCESS : DESTRUCTIVE}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};
