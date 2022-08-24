// import { Wrapper, Content, NavLeft, NavRight } from "./Navbar.styles";
import "./styles.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/home" className="site-title">
        Contact Manager
      </a>
      <ul>
        <li>
          <a href="/">Signout</a>
        </li>
      </ul>
    </nav>
  );
}
