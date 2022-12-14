import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../../utils/localStorage";
import "./styles.css";

export default function NavBar() {
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    clearLocalStorage();
    navigate("/login");
  };

  return (
    <nav className="nav">
      <Link to="/contact" className="site-title">
        Contact Manager
      </Link>
      <ul>
        <li>
          <Button onClick={onLogoutHandler}>Signout</Button>
        </li>
      </ul>
    </nav>
  );
}
