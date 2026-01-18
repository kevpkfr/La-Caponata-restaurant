import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import { FaShoppingCart, FaBlog } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png";

const navLinkClass = ({ isActive }) =>
  `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
    isActive
      ? "bg-white/20 text-white font-semibold shadow-inner"
      : "hover:bg-white/10 hover:shadow-md"
  }`;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart } = useCart();

  const closeAll = () => {
    setMobileOpen(false);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-green-700 to-emerald-800 text-white sticky top-0 z-50 shadow-xl backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={closeAll}
          >
            <div className="relative">
              <img
                src={logo}
                alt="La Caponata"
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-colors"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight">
                La Caponata
              </span>
              <span className="text-xs text-white/70 tracking-wider">
                RESTAURANTE ITALIANO
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>
              <HiOutlineHome className="text-lg" />
              <span>Inicio</span>
            </NavLink>

            <NavLink to="/nosotros" className={navLinkClass}>
              <HiOutlineInformationCircle className="text-lg" />
              <span>Nosotros</span>
            </NavLink>

            <NavLink to="/blog" className={navLinkClass}>
              <FaBlog className="text-lg" />
              <span>Blog</span>
            </NavLink>

            {/* CARRITO */}
            <NavLink
              to="/carrito"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 relative ${
                  isActive
                    ? "bg-white/20 text-white font-semibold"
                    : "hover:bg-white/10 hover:shadow-md"
                }`
              }
            >
              <div className="relative">
                <FaShoppingCart className="text-lg" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full animate-bounce shadow-lg">
                    {totalItems}
                  </span>
                )}
              </div>
              <span>Carrito</span>
            </NavLink>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Abrir menú móvil"
          >
            {mobileOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-gradient-to-b from-green-800 to-emerald-900 px-6 pb-6 animate-slideDown">
          <div className="pt-4 space-y-1">
            <NavLink
              to="/"
              onClick={closeAll}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-white/20 text-white font-semibold"
                    : "hover:bg-white/10"
                }`
              }
              end
            >
              <HiOutlineHome className="text-xl" />
              <span>Inicio</span>
            </NavLink>

            <NavLink
              to="/nosotros"
              onClick={closeAll}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-white/20 text-white font-semibold"
                    : "hover:bg-white/10"
                }`
              }
            >
              <HiOutlineInformationCircle className="text-xl" />
              <span>Nosotros</span>
            </NavLink>

            <NavLink
              to="/blog"
              onClick={closeAll}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-white/20 text-white font-semibold"
                    : "hover:bg-white/10"
                }`
              }
            >
              <FaBlog className="text-xl" />
              <span>Blog</span>
            </NavLink>

            <NavLink
              to="/carrito"
              onClick={closeAll}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-white/20 text-white font-semibold"
                    : "hover:bg-white/10"
                }`
              }
            >
              <FaShoppingCart className="text-xl" />
              <span>Carrito ({totalItems})</span>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
