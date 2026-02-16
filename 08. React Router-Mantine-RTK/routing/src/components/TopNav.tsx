function TopNav() {
  return (
    <header className="topBar">
      <p className="appTitle">Click Around</p>
      <nav className="topNav">
        {/* TODO: make these actual links that take us to the right pages */}
        {/* Note that you want to add the class "navItemActive" to the link that is currently active (Hint: NavLink provides an isActive boolean) */}
        <div className="navItem">Home</div>
        <div className="navItem">Birthdays</div>
        <div className="navItem">Holidays</div>
      </nav>
    </header>
  );
}

export default TopNav;
