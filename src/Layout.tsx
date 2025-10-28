import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Layout = () => {
  const [theme, setTheme] = useState("");

  return (
    <div
      className={`${theme} flex flex-col min-h-screen w-full bg-neutral-100 dark:bg-zinc-900 transition-all duration-500`}
    >
      <Navbar theme={theme} toggleTheme={setTheme} />
      <main className="flex flex-1 mt-2 overflow-y">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
