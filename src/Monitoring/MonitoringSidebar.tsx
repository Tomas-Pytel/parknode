const MonitoringSidebar = () => {
  return (
    <div className="flex-1 h-full py-1 bg-white text-gray-500 dark:bg-zinc-800 dark:text-gray-300 transition-all duration-500">
      <div className="flex flex-col mx-5 my-2">
        <h2 className="text-xl font-semibold py-2">Vyhľadať most</h2>
        <input
          type="text"
          name="bridgeName"
          placeholder="Názov mosta"
          className="bg-zinc-200 dark:bg-zinc-100/10 border-none p-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default MonitoringSidebar;
