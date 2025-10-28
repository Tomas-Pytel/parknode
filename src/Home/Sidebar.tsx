interface SidebarProps {
  onSubmit?: (coordinates: {
    fromLatitude: number;
    fromLongitude: number;
    toLatitude: number;
    toLongitude: number;
  }) => void;
}

const Sidebar = ({ onSubmit }: SidebarProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const coordinates = {
      fromLatitude: Number(formData.get("fromLatitude")) || 0,
      fromLongitude: Number(formData.get("fromLongitude")) || 0,
      toLatitude: Number(formData.get("toLatitude")) || 0,
      toLongitude: Number(formData.get("toLongitude")) || 0,
    };
    onSubmit?.(coordinates);
  };

  return (
    <div className="flex-1 h-full bg-white text-gray-500 dark:bg-zinc-800 dark:text-gray-300 transition-all duration-500">
      <form
        action="/searchRoute"
        method="POST"
        onSubmit={handleSubmit}
        className="px-4 py-3  flex flex-col flex-start"
      >
        <h2 className="text-2xl font-semibold py-2 border-b-2 border-gray-500/50">
          Vyhľadať trasu
        </h2>
        <div className="font-semibold text-xl mt-5">
          Odkiaľ:
          <label className="flex flex-1 items-center justify-between my-3 font-medium text-base">
            Šírka:
            <input
              type="number"
              name="fromLatitude"
              step="any"
              min="-90"
              max="90"
              placeholder="e.g. 37.7749"
              className="bg-zinc-200 dark:bg-zinc-100/10 border-none p-2 rounded-md"
            />
          </label>
          <label className="flex flex-1 items-center justify-between my-3 font-medium text-base">
            Dĺžka:
            <input
              type="number"
              name="fromLongitude"
              step="any"
              min="-90"
              max="90"
              placeholder="e.g. 37.7749"
              className="bg-zinc-200 dark:bg-zinc-100/10 border-none p-2 rounded-md"
            />
          </label>
        </div>

        <div className="font-semibold text-xl">
          Kam:
          <label className="flex flex-1 items-center justify-between my-3 font-medium text-base">
            Šírka:
            <input
              type="number"
              name="toLatitude"
              step="any"
              min="-90"
              max="90"
              placeholder="e.g. 37.7749"
              className="bg-zinc-200 dark:bg-zinc-100/10 border-none p-2 rounded-md"
            />
          </label>
          <label className="flex flex-1 items-center justify-between my-3 font-medium text-base">
            Dĺžka:
            <input
              type="number"
              name="toLongitude"
              step="any"
              min="-90"
              max="90"
              placeholder="e.g. 37.7749"
              className="bg-zinc-200 dark:bg-zinc-100/10 border-none p-2 rounded-md"
            />
          </label>
        </div>
        <button className="mx-auto my-3 px-6 py-2 bg-linear-to-br from-my-primary  to-my-secondary text-white font-semibold rounded-lg hover:cursor-pointer">
          Vyhľadať
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
