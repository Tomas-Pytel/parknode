const Sidebar = () => {
  return (
    <div className="flex-1 h-full bg-white text-gray-500 dark:bg-zinc-800 dark:text-gray-300 transition-all duration-500">
      <form action="" className="px-4 py-3  flex flex-col flex-start">
        <h2 className="text-xl font-semibold py-2 border-b-2 border-gray-500/50">
          Vyhľadať trasu
        </h2>
        <label className="flex flex-1 items-center justify-between my-3 font-medium">
          Odkiaľ:
          <input
            type="number"
            name="latitude"
            step="any"
            min="-90"
            max="90"
            placeholder="e.g. 37.7749"
            className="bg-zinc-200 dark:bg-zinc-100/10 border-none p-2 rounded-md"
          />
        </label>
        <label className="flex flex-1 items-center justify-between my-3 font-medium">
          Kam:
          <input
            type="number"
            name="longitude"
            step="any"
            min="-180"
            max="180"
            placeholder="e.g. -122.4194"
            className="bg-zinc-200 dark:bg-zinc-100/10 border-none p-2 rounded-md"
          />
        </label>
        <button className="mx-auto my-3 px-6 py-2 bg-linear-to-br from-my-primary  to-my-secondary text-white font-semibold rounded-lg hover:cursor-pointer">
          Vyhľadať
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
