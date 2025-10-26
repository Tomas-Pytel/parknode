import MonitoringSidebar from "./MonitoringSidebar";

const MonitoringPage = () => {
  return (
    <div className="min-h-full min-w-full flex flex-row">
      <aside className="col-span-1 w-80">
        <MonitoringSidebar />
      </aside>
      <section className="flex flex-1 items-center justify-center">{}</section>
    </div>
  );
};

export default MonitoringPage;
