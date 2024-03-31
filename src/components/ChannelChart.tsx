import { PRIMARY_COLOR, PRIMARY_DULL_COLOR } from "@/lib/constants";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import { Icon } from "@iconify/react";

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

export default function ChannelChart() {
  return (
    <div className="border flex-[2_2_0%] p-4">
      <p className="text-lg">Channel Analytics</p>
      <div className="flex mt-2 justify-between">
        <p className="max-w-prose text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque id
          iusto totam atque, vel, esse quos, suscipit molestiae
        </p>

        <div className="flex items-end gap-6">
          <p className="flex gap-2 items-center">
            <Icon
              color={PRIMARY_COLOR}
              icon="fluent:line-horizontal-1-24-regular"
            />
            Regular
          </p>
          <p className="flex gap-2 items-center">
            <Icon
              color={PRIMARY_DULL_COLOR}
              icon="fluent:line-horizontal-1-dashes-24-regular"
            />
            Dash
          </p>
        </div>
      </div>

      <ResponsiveContainer height={400} width={"100%"} className="mt-8">
        <LineChart data={data}>
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pv"
            stroke={PRIMARY_COLOR}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke={PRIMARY_DULL_COLOR}
            strokeDasharray="6"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
