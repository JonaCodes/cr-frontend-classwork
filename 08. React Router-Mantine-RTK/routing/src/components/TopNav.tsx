import { NavLink } from "react-router-dom";

function TopNav() {
  return (
    <header className="topBar">
      <p className="appTitle">Click Around</p>
      <nav className="topNav">
        <NavLink
          to="/"
          className={({ isActive }) => `navItem ${isActive && "navItemActive"}`}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/birthdays"
          className={({ isActive }) => `navItem ${isActive && "navItemActive"}`}
        >
          Birthdays
        </NavLink>
        <NavLink
          to="/holidays"
          className={({ isActive }) => `navItem ${isActive && "navItemActive"}`}
        >
          Holidays
        </NavLink>
      </nav>
    </header>
  );
}

export default TopNav;
