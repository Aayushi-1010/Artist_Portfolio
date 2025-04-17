import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 

function Header() {
  const { user, logout } = useAuth(); 
  console.log("user",user);
  return (
    <header className="bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">Artist Name</h1>
        <nav>
          <ul className="flex space-x-4 font-semibold">
            {/* <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "text-pink-900" : "text-gray-300")}>
                Home
              </NavLink>
            </li> */}
            {user && ( 
              <>
                <li>
                <NavLink to="/home" className={({ isActive }) => (isActive ? "text-pink-900" : "text-gray-300")}>
                  Home
                </NavLink>
                </li>

                <li>
                  <NavLink to="/about" className={({ isActive }) => (isActive ? "text-pink-900" : "text-gray-300")}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "text-pink-900" : "text-gray-300")}>
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-pink-900" : "text-gray-300")}>
                    Contact
                  </NavLink>
                </li>
                <li>
                <button 
                  onClick={logout} 
                  className="text-gray-300 hover:text-pink-900"
                >
                  Logout
                </button>
              </li>
              </>
            )}
            {!user && ( 
              <>
                <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "text-pink-900" : "text-gray-300")}>
                  Home
                </NavLink>
                </li>
                <li>
                  <NavLink to="/register" className={({ isActive }) => (isActive ? "text-pink-900" : "text-gray-300")}>
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className={({ isActive }) => (isActive ? "text-pink-900" : "text-gray-300")}>
                    Login
                  </NavLink>
                </li>
              </>
            ) 
            // :(
              // <li>
              //   <button 
              //     onClick={logout} 
              //     className="text-gray-300 hover:text-pink-900"
              //   >
              //     Logout
              //   </button>
              // </li>
            // )
            }
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
