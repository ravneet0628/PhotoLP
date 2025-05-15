import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 
        ${scrolled ? "bg-white shadow-md text-[#1a1a1a]" : "bg-transparent text-white"}
      `}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">ShivStudio</h1>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#about" className="hover:opacity-80">About</a></li>
          <li><a href="#gallery" className="hover:opacity-80">Gallery</a></li>
          <li><a href="#contact" className="hover:opacity-80">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
