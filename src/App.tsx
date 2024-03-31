import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import ChannelChart from "./components/ChannelChart";
import ChannelPie from "./components/ChannelPie";

function App() {
  return (
    <>
      <Navbar />
      <SignedOut>
        <main className="lg:max-w-screen-xl mx-auto mt-28">
          <SignInButton />
        </main>
      </SignedOut>
      <SignedIn>
        <main className="lg:max-w-screen-xl mx-auto mt-28 mb-10">
          <Header />
          <StatsCard />
          <div className="mt-6 flex gap-4">
            <ChannelChart />
            <ChannelPie />
          </div>
        </main>
      </SignedIn>
    </>
  );
}

export default App;
