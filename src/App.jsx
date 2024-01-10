import React from "react";
import First from "./assets/Components/First/First";
import Second from "./assets/Components/Second/second";
import Third from "./assets/Components/Third/Third";

export default function App() {
  const name = "Asmaa";
  const data = {
    yearOfBirth: 1999,
    area: "AlGharbia",
    faculty: "Engineering",
    university: "Tanta",
  };
  const products = [
    { id: 0, name: "mobile", price: 6000, category: "Realme" },
    { id: 1, name: "Labtop", price: 6000, category: "Dell" },
  ];

  return (
    <div className="app">
      <h2>App</h2>
      <div className="components">
        <div className="component">
          <First name={name} />
        </div>
        <div className="component">
          <Second data={data} />
          <Third products={products} />
        </div>
      </div>
    </div>
  );
}
