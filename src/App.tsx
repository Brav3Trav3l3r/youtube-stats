import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";

function App() {
  return (
    <>
      <Navbar />
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Header />
        <StatsCard />
      </SignedIn>
    </>
  );
}

export default App;
