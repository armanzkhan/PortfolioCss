import Link from "next/link";
import "../style/Header.css";

function Header() {
  return (
    <div className="header">
      {/* Left Section */}

      <div>
        <h1 className="logo">AZ</h1>
      </div>

      {/* Right Section */}
      <div className="header-right-div">
        <ul className="header-links">
          <li>
            <Link className="nav-links" href={"/"}>Home</Link>
          </li>
          <li>
            <Link className="nav-links" href={"/about"}>About</Link>
          </li>
          <li>
            <Link className="nav-links" href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
