import MapView from "./MapView";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Home = () => {
  const [coordinates, setCoordinates] = useState({
    fromLatitude: 0,
    fromLongitude: 0,
    toLatitude: 0,
    toLongitude: 0,
  });

  const handleSubmit = (coords: {
    fromLatitude: number;
    fromLongitude: number;
    toLatitude: number;
    toLongitude: number;
  }) => {
    setCoordinates(coords);
    console.log("Updated coordinates:", coords);
    // Now you can use these coordinates for your map/routing
  };

  return (
    <div className="min-h-full min-w-full flex flex-row">
      <aside className="col-span-1 w-80">
        <Sidebar onSubmit={handleSubmit} />
      </aside>
      <section className="flex flex-1 items-center justify-center">
        <MapView coordinates={coordinates} />
      </section>
    </div>
  );
};

export default Home;
