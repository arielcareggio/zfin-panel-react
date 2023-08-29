import { useState, useEffect } from "react";

//https://www.youtube.com/watch?v=aMjou4yXWdU
const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "Calendar", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 1100); // Cambia 768 al ancho que consideres como "pantalla pequeña"
    };

    handleResize(); // Llamarlo al principio para establecer el valor inicial

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${open ? "w-92" : "w-0"} bg-dark-purple xl:h-screen h-auto p-1 pt-8 relative`} /* p-5 */
    >
      {/* Imagen de control menu */}
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-4 top-9 w-7 border-dark-purple
          border-2 rounded-full ${!open && "rotate-180"} max-w-none duration-500`}
        onClick={() => setOpen(!open)}
      />

      {/* Logo y Titulo */}
      <div className={`flex gap-x-4 items-center`}>
        <img
          src="./src/assets/logo.png"
          className={`cursor-pointer duration-700 ${open ? "rotate-[360deg]" : ""
            }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl ${!open && "scale-0" }`}
        >
          ZFin
        </h1>
      </div>

      {open && (
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200 w-24`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );


};
export default Sidebar;