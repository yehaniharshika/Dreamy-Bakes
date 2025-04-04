import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import {
  FaFileMedical,
  FaGear,
  FaUserLock,
} from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
import { BsCake2Fill, BsCartCheckFill } from "react-icons/bs";

export const Navigation = () => {
  const [open, setOpen] = useState(window.innerWidth > 780);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

  // Close sidebar when clicking a menu link (for small screens)
  const handleLinkClick = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  // Handle window resize to automatically hide/show sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 780) {
        setOpen(true);
        setIsMobile(false);
      } else {
        setOpen(false);
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex">
      {/* Menu Toggle Button (only for small screens) */}
      {isMobile && !open && (
        <div className="fixed top-0 left-0 w-full bg-[#6F1E51] p-3 flex justify-between items-center z-50">
          <RiMenu3Line
            size={26}
            className="cursor-pointer text-white"
            onClick={() => setOpen(true)}
          />
        </div>
      )}

      {/* Sidebar container */}
      {open && (
        <div
          style={{ backgroundColor: "#6F1E51" }}
          className={`z-40 h-screen text-gray-100 px-4 fixed top-0 transition-transform duration-500 w-64 ${
            isMobile ? "fixed" : "relative"
          }`}
        >
          {/* Close Button (Only visible when sidebar is open on mobile) */}
          {isMobile && (
            <div className="flex justify-end p-3">
              <RiCloseFill
                size={29}
                className="cursor-pointer text-white"
                onClick={() => setOpen(false)}
              />
            </div>
          )}

          {/* Logo Section */}
          <div className="py-4 flex justify-center items-center border-b border-gray-300">
            <img
              src="/src/assets/images/logo.png"
              alt="Logo"
              width={220}
              className="transition-all duration-300"
            />
          </div>

          <ul className="px-3 text-[0.9rem] py-5 flex flex-col gap-3 font-bold">
            {[
              {
                to: "/dashboard",
                icon: <AiOutlineAppstore size={24} />,
                label: "Dashboard",
              },
              {
                to: "/customer",
                icon: <FaUserLock size={24} />,
                label: "Customer",
              },
              {
                to: "/product",
                icon: <BsCake2Fill size={24} />,
                label: "Products",
              },
              {
                to: "/orders",
                icon: <BsCartCheckFill size={24} />,
                label: "Orders",
              },
              {
                to: "/report",
                icon: <FaFileMedical size={24} />,
                label: "Reports",
              },
              { to: "/setting", icon: <FaGear size={24} />, label: "Settings" },
              {
                to: "/logout",
                icon: <FaSignOutAlt size={24} />,
                label: "Log Out",
              },
            ].map(({ to, icon, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={handleLinkClick}
                  className={({
                    isActive,
                  }) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                        ${
                          isActive
                            ? "bg-[#9a6285] text-white shadow-md scale-105"
                            : "text-white"
                        } 
                        hover:bg-[#9a6285] hover:border-2 hover:text-white hover:scale-105 hover:shadow-lg no-underline`}
                  style={{ textDecoration: "none" }}
                >
                  {icon} {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
