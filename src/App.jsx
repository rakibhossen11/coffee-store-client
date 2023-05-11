import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedcoffees = useLoaderData();
  const [coffees,setCoffees] = useState(loadedcoffees);

  return (
    <>
      <h1 className="text-purple-600 text-6xl">Hot Hot Cool Cool Coffee</h1>
      <div className="grid md:grid gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard 
          key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
