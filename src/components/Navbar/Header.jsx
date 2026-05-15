import Navbar from "./Navbar";
// ...
import "../../App.css";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <Navbar />
      </header>
      <div className="h-[72px] sm:h-[80px]" aria-hidden="true" />
    </>
  );
};

export default Header;
