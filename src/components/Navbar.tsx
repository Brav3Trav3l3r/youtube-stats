import { useTheme } from "@/store/themeContext";
import { UserButton } from "@clerk/clerk-react";
import { Fingerprint, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  };

  return (
    <nav className="border-b fixed w-full top-0 bg-background z-100">
      <div className="flex p-4 justify-between lg:max-w-screen-xl mx-auto">
        <div className="flex gap-2 items-center">
          <Fingerprint />
          <p className="text-xl font-medium">Footprint</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={handleTheme}>
            {theme == "dark" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
          <UserButton />
        </div>
      </div>
    </nav>
  );
}
