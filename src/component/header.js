const Header = ({ ...props }) => {
  return (
    <div className="header-frame">
      <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">파티 매칭</a>
            <a href="#" data-target="mobile-menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-desktop" class="right hide-on-med-and-down">
              <li><a href="#">Login</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">마이페이지</a></li>
            </ul>
          </div>
        </nav>
        <ul class="sidenav" id="mobile-menu">
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
        </ul>
    </div>
  );
};

export default Header;