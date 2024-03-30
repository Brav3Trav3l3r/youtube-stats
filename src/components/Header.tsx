import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Header() {
  return (
    <div className="mt-6 p-4 flex flex-col lg:flex-row gap-4 justify-between lg:max-w-screen-xl mx-auto">
      <div>
        <p>
          <span className="text-muted-foreground">Overview</span> / Subsriptions
        </p>
        <h1 className="text-3xl mt-2">
          Welcome Back, <span className="font-semibold">Mr Beast</span>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-prose">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia id
          ratione ea quibusdam enim nisi, numquam beatae adipisci dolorum hic ut
          sapiente est nam. Iusto voluptatem dolore maiores hic soluta.
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-4 items-end lg:justify-between">
        <p className="text-muted-foreground">Saturday, 30 March 2024</p>

        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <p className="text-sm text-muted-foreground">Showing:</p>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem defaultChecked value="allTime">
                All Time
              </SelectItem>
              <SelectItem value="year">This year</SelectItem>
              <SelectItem value="month">This month</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
        </div>
      </div>
    </div>
  );
}
