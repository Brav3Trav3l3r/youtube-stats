import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import ChannelBar from "./components/ChannelBar";
import ChannelChart from "./components/ChannelChart";
import GenderPie from "./components/GenderPie";
import Header from "./components/Header";
import MapChart from "./components/MapChart";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      
      <SignedOut>
        <main className="lg:max-w-screen-xl mx-auto mt-28">
          <SignInButton />
        </main>
      </SignedOut>

      <SignedIn>
        <main className="lg:max-w-screen-xl mx-auto mt-20 md:mt-28 mb-10">
          <Header />
          <StatsCard />

          <div className="mt-6 flex flex-col gap-4 md:flex-row m-4">
            <ChannelChart />
            <ChannelBar />
          </div>
          <div className="mt-6 border rounded-lg p-4 m-4">
            <p className="text-lg">Audience</p>
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <GenderPie />
              <MapChart />
            </div>
          </div>
        </main>
      </SignedIn>
    </QueryClientProvider>
  );
}

export default App;
