import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import getFormatedDate from "@/utils/getFormatedDate";

const fetchChannelInfo = async () => {
  const { data } = await axios.get(
    import.meta.env.VITE_BACKEND_URL + "/channels/660a625316f547d68d7e4e9c"
  );
  return data;
};

export default function Header() {
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

  const dateString = getFormatedDate(new Date());

  return (
    <div className="mt-6 p-4 flex flex-col lg:flex-row gap-4 justify-between ">
      <div>
        <p>
          <span className="text-muted-foreground">Overview</span> / Youtube
          Stats
        </p>
        <h1 className="text-3xl mt-2">
          Welcome Back, <span className="font-semibold">{data.data.name}</span>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-prose">
          {data.data.description}
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-4 items-end lg:justify-between">
        <p className="text-muted-foreground">{dateString}</p>

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
