import { useEffect, useState } from "react";
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

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <nav className="relative z-50 py-2 px-4 sm:px-8 md:px-16 lg:px-32 w-full text-sm font-medium bg-cWhite shadow-sm border-b border-slate-200 font-inter">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="shrink-0 flex items-center" onClick={closeMenu}>
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
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:ml-auto">
          <ul className="flex space-x-6">
            {menuItems.map((menu) => (
              <MenuItems items={menu} key={menu.title} depthLevel={0} />
            ))}
          </ul>
        </div>
      </div>

      {isOpen ? (
        <>
          <button
            type="button"
            className="lg:hidden fixed inset-0 top-[72px] sm:top-[80px] z-40 bg-slate-900/40"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div
            className="lg:hidden absolute left-0 right-0 top-full z-50 max-h-[min(32rem,calc(100dvh-5rem))] overflow-y-auto bg-slate-900 shadow-xl border-t border-slate-700"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col py-2">
              {menuItems.map((menu) => (
                <li key={menu.title} className="border-b border-slate-800/80 last:border-0">
                  <Link
                    to={menu.url}
                    onClick={closeMenu}
                    className="block px-4 py-3.5 text-center text-sm font-medium uppercase tracking-wide text-white hover:bg-slate-800 hover:text-primary-light transition-colors"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </nav>
  );
};

export default Navbar;
