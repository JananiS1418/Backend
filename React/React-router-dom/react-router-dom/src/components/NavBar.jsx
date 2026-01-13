import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white p-6 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section - Enhanced */}
        <div className="relative group">
          <div className="text-4xl font-extrabold uppercase tracking-[8px] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-pulse">
            COURT
          </div>
          <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          <div className="absolute -right-3 -top-2 text-xs font-bold text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            CINEMA
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "relative text-blue-300 font-semibold group"
                : "text-gray-300 hover:text-white transition-colors duration-200 group"
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">Movie Details</span>
                {isActive && (
                  <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                )}
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </>
            )}
          </NavLink>

          <NavLink
            to="/character"
            className={({ isActive }) =>
              isActive
                ? "relative text-blue-300 font-semibold group"
                : "text-gray-300 hover:text-white transition-colors duration-200 group"
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">Character</span>
                {isActive && (
                  <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                )}
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </>
            )}
          </NavLink>

          <NavLink
            to="/booking"
            className={({ isActive }) =>
              isActive
                ? "relative text-blue-300 font-semibold group"
                : "text-gray-300 hover:text-white transition-colors duration-200 group"
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">Booking</span>
                {isActive && (
                  <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                )}
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </>
            )}
          </NavLink>

          <NavLink
            to="/ratenow"
            className={({ isActive }) =>
              isActive
                ? "relative text-blue-300 font-semibold group"
                : "text-gray-300 hover:text-white transition-colors duration-200 group"
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">Rate Now</span>
                {isActive && (
                  <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                )}
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </>
            )}
          </NavLink>

          {/* Login Button - Styled differently */}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full shadow-lg shadow-blue-500/30 transform scale-105 transition-transform duration-200"
                : "ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-200"
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;