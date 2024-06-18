import React from "react";
import { Hero, Highlight, Navbar,  } from "@components";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
    </main>
  );
};

export default App;
