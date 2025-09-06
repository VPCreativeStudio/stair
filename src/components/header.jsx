import Logo from "../atoms/logo";
import SiteNav from "../atoms/site-nav";

function Header() {
  return (
    <header className="header">
      <Logo />
      <SiteNav />
    </header>
  );
}

export default Header;
