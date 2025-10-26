import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import UserCard from "./UserCard";

type NavbarProps = {
  theme: string;
  toggleTheme: (theme: string) => void;
};

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const links = [
    { to: "/", label: "Hľadať" },
    { to: "/monitoring", label: "Monitorovanie" },
    { to: "/analyze", label: "Analýza" },
  ];

  return (
    <div className="flex justify-between items-center p-4 bg-white text-gray-500 dark:bg-zinc-800 dark:text-gray-300 transition-all duration-500">
      <Link to="/" className="flex items-center">
        <img
          src="/logo.svg"
          alt="ParkNode Logo"
          className="h-15 w-15 inline-block"
        />
        <span className="ml-2 font-bold text-2xl">ParkNode</span>
      </Link>
      <div className="flex gap-7">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `text-lg font-semibold p-3 ${
                isActive
                  ? "bg-linear-to-br from-my-primary to-my-secondary text-white"
                  : ""
              } rounded-xl transition-all duration-300 bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-100/10 hover:cursor-pointers`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <UserCard name="Tomáš Pytel" role="Admin" path="/user-pic.png" />
        <button
          onClick={() => toggleTheme(theme == "dark" ? "light" : "dark")}
          className="p-3 rounded-xl transition-all duration-300 bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-100/10 hover:cursor-pointer"
        >
          {theme == "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
