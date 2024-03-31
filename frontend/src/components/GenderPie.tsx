import { PRIMARY } from "@/lib/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", value: 80, color: PRIMARY },
  { name: "B", value: 45, color: PRIMARY + 95 },
];

export default function GenderPie() {
  return (
    <div className="flex-1 bg-card">
      <p className="text-muted-foreground mt-2 max-w-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        laborum tempora earum aspernatur praesentium ut veniam nihil ab debitis,
      </p>

      <ResponsiveContainer height={300} className="">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={100}
            fill={PRIMARY}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="" />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="flex gap-6 justify-center">
        <p className="flex items-center gap-2">
          <Icon color={PRIMARY} icon="material-symbols:circle" />
          Male
        </p>
        <p className="flex items-center gap-2">
          <Icon color={PRIMARY + "95"} icon="material-symbols:circle" />
          Female
        </p>
      </div>
    </div>
  );
}
