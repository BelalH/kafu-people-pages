import Navbar from "./Navbar";
import { HEADER_SPACER_CLASS } from "../../constants/layout";
import "../../App.css";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <Navbar />
      </header>
      <div className={HEADER_SPACER_CLASS} aria-hidden="true" />
    </>
  );
};

export default Header;
