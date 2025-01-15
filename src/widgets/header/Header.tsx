import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header: React.FC = React.memo(() => {
  const currentLocation = useLocation().pathname;

  const navLinks = [
    {
      path: "/",
      title: "Все котики",
    },

    {
      path: "/favorite-cats",
      title: "Любимые котики",
    },
  ];

  return (
    <div className="bg-[#2196F3] h-16">
      <nav className="mx-[62px] h-full flex items-center">
        {navLinks.map((link) => (
          <div key={link.title}>
            {currentLocation === link.path ? (
              <NavLink
                className="text-nowrap text-white font-normal text-sm opacity-100 py-6 px-3 bg-[#1E88E5]"
                to={link.path}
              >
                {link.title}
              </NavLink>
            ) : (
              <NavLink
                className="text-nowrap text-white font-normal text-sm opacity-75 py-6 px-3"
                to={link.path}
              >
                {link.title}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
});

export default Header;
