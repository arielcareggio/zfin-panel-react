
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-fondo-navbar h-12 flex justify-end px-5 py-1">
      <ul className="flex-col md:flex-row list-none items-center md:flex">
        <li className="relative">
          <a className="text-blueGray-500 block" href="#">
            <div className="items-center flex">
              <span
                className="w-10 h-10 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full cursor-pointer"
                onClick={toggleMenu}
              >
                <img
                  alt="User"
                  className="w-full rounded-full align-middle border-none shadow-lg"
                  src="src/assets/user.svg"
                />
              </span>
            </div>
          </a>
          {isMenuOpen && (
            <div className="absolute right-0 mt-1 bg-white p-2 shadow-md rounded w-auto flex-1 z-10">
              <div className="flex flex-col  whitespace-nowrap">
                <a href="#" className="block hover:text-blue-500 m-4 hover:border-b-2 hover:border-indigo-500 transition ease-in duration-300">Opción Opción Opción Opción Opción Opción 1</a>
                <a href="#" className="block hover:text-blue-500 m-4 hover:border-b-2 hover:border-indigo-500 transition ease-in duration-300">Opción 2</a>
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;


//<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>