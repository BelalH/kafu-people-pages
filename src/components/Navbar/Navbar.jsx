import { useState } from "react";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import kafupeople from "../../assets/images/kafupeople.webp";

const menuItems = [
  { title: "HOME", url: "/" },
  { title: "ABOUT", url: "/about" },
  { title: "SERVICES", url: "/services" },
  { title: "PORTFOLIO", url: "/portfolio" },
  { title: "CONTACT", url: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 w-full text-sm font-medium bg-cWhite shadow-sm border-b border-slate-200 font-inter px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="shrink-0 flex items-center">
          <img
            src={kafupeople}
            alt="Kafu People"
            className="h-12 w-auto max-w-[170px] sm:h-14 sm:max-w-[200px] object-contain object-left"
          />
        </Link>

        <div className="lg:hidden">
          <button
            type="button"
            className="text-slate-900 focus:outline-none text-2xl font-bold p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:ml-auto">
          <ul className="flex space-x-6">
            {menuItems.map((menu, index) => (
              <MenuItems items={menu} key={menu.title} depthLevel={0} />
            ))}
          </ul>
        </div>
      </div>

      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="bg-slate-900 w-full text-center py-4 rounded-b-lg">
          {menuItems.map((menu) => (
            <MenuItems items={menu} key={menu.title} depthLevel={0} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
