import { useEffect, useState } from "react";
import { content } from "../Content";
import { createElement } from "react";

const IDSnav = [
  {
    link: "#home",
    id: 0
  },
  {
    link: "#skills",
    id: 1
  },
  {
    link: "#services",
    id: 2
  },
  {
    link: "#projects",
    id: 3
  },
  {
    link: "#contact",
    id: 4
  }
];
const Navbar = () => {
  const { nav } = content;
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(IDSnav.find((nav) => nav.link === window.location.hash)?.id || 0);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 bottom-10`}
      >
        {nav.map((item, i) => (
          <a
            href={item.link}
            key={i}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-dark_primary text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
