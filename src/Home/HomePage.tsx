import MapView from "./MapView";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="min-h-full min-w-full flex flex-row">
      <aside className="col-span-1 w-80">
        <Sidebar />
      </aside>
      <section className="flex flex-1 items-center justify-center">
        <MapView />
      </section>
    </div>
  );
};

export default Home;
