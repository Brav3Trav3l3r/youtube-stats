import { PRIMARY_COLOR } from "@/lib/constants";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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
];

export default function ChannelPie() {
  return (
    <div className="flex-1 border p-4 text-lg">
      <p>Earnings</p>

      <p className="max-w-prose text-muted-foreground mt-2 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque id
        iusto totam atque, vel.
      </p>

      <ResponsiveContainer height={400} width={"100%"} className="mt-8">
        <BarChart width={150} height={40} data={data}>
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          {/* <Tooltip /> */}
          <Bar dataKey="uv" fill={PRIMARY_COLOR} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
