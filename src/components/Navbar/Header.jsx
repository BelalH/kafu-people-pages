import Navbar from "./Navbar";
import { HEADER_SPACER_CLASS } from "../../constants/layout";
import { useScrolled } from "../../hooks/useScrolled";
import { useLocation } from "react-router-dom";
import "../../App.css";

const Header = () => {
  const { pathname } = useLocation();
  const isScrolled = useScrolled(12, pathname);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-cWhite" : "bg-transparent"
        }`}
      >
        <Navbar isScrolled={isScrolled} />
      </header>
      <div className={`${HEADER_SPACER_CLASS} bg-transparent`} aria-hidden="true" />
    </>
  );
};

export default Header;
