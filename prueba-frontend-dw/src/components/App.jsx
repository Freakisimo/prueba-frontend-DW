import React from "react";
import Map from "./Map";
import Navbar from "./Navbar";
import Heading from "./Heading";

function App() {
  return (
    <div>
      <Heading />
      <div className="flex">
        <Navbar />
        <Map />
      </div>
    </div>
  );
}

export default App;
