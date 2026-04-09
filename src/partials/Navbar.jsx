import { Mail, Box, User, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    {
      name: 'Profile',
      path: '/',
      icon: <User size={16} />,
    },
    {
      name: 'Portfolio',
      path: '/project',
      icon: <Box size={16} />,
    },
    {
      name: 'Contact Me',
      path: '/contact',
      icon: <Mail size={16} />,
    },
  ];

  return (
    <div className="navbar bg-base-300 shadow-sm px-4 md:px-6 lg:px-8">
      {/* Left */}
      <div className="flex-1">
        <NavLink
          to="/"
          className="btn btn-ghost normal-case text-lg md:text-xl px-2 md:px-3"
        >
          <div className="avatar">
            <div className="w-8 md:w-9 rounded-lg">
              <img src="/Vestia Zeta.jpeg" alt="profile" />
            </div>
          </div>
          <span className="hidden sm:inline">Aliyosa Kevin</span>
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'btn btn-sm btn-primary text-white rounded-xl'
                    : 'btn btn-sm btn-ghost rounded-xl'
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <Menu size={22} />
        </label>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-200 rounded-2xl w-56 space-y-2"
        >
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'btn btn-primary justify-start rounded-xl'
                    : 'btn btn-ghost justify-start rounded-xl'
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
