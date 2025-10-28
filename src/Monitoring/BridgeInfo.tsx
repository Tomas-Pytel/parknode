const BridgeInfo = () => {
  const data = {
    id: 1,
    name: "Most SNP",
    status: "Open",
  };
  return (
    <div className="flex flex-col w-full p-2  text-gray-500 dark:text-gray-300 transition-all duration-500">
      <h2 className="text-2xl font-bold mb-4">Informácie o moste</h2>
      <div className="grid grid-cols-7 w-full grid-rows-7 ">
        <div className="row-span-1 col-span-2 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
          <p className="mb-2">
            <span className="font-semibold">ID:</span> {data.id}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Názov:</span> {data.name}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Stav:</span> {data.status}
          </p>
        </div>
        <div>nic take</div>
      </div>
    </div>
  );
};

export default BridgeInfo;
