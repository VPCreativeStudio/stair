import { Link } from "react-router-dom";
import stLogo from "../assets/images/ST-Logo.png";

function Logo() {
  return (
    <Link to="/">
      <img src={stLogo} className="logo" alt="Vite logo" />
    </Link>
  );
}

export default Logo;
