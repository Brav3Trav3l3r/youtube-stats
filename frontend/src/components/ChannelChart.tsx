import { PRIMARY, PRIMARY_DULL_COLOR } from "@/lib/constants";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

import { Icon } from "@iconify/react";

const data = [
  {
    name: "Page A",
    subscribers: 4000,
    views: 2400,
  },
  {
    name: "Page B",
    subscribers: 3000,
    views: 1398,
  },
  {
    name: "Page C",
    subscribers: 2000,
    views: 9800,
  },
  {
    name: "Page D",
    subscribers: 2780,
    views: 3908,
  },
  {
    name: "Page E",
    subscribers: 1890,
    views: 4800,
  },
  {
    name: "Page F",
    subscribers: 2390,
    views: 3800,
  },
  {
    name: "Page G",
    subscribers: 3490,
    views: 4300,
  },
];

export default function ChannelChart() {
  return (
    <div className="border flex-[2_2_0%] p-4 rounded-lg bg-card">
      <p className="text-lg">Channel Analytics</p>
      <div className="flex mt-2 justify-between">
        <p className="max-w-prose text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque id
          iusto totam atque, vel, esse quos, suscipit molestiae
        </p>

        <div className="flex items-end gap-6">
          <p className="flex gap-2 items-center">
            <Icon color={PRIMARY} icon="fluent:line-horizontal-1-24-regular" />
            Subscribers
          </p>
          <p className="flex gap-2 items-center">
            <Icon
              color={PRIMARY_DULL_COLOR}
              icon="fluent:line-horizontal-1-dashes-24-regular"
            />
            Views
          </p>
        </div>
      </div>

      <ResponsiveContainer height={300} width={"100%"} className="mt-8">
        <LineChart data={data}>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="views"
            stroke={PRIMARY}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="subscribers"
            stroke={PRIMARY_DULL_COLOR}
            strokeDasharray="6"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
