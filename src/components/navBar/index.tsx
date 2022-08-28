import { Button } from "antd";
import { useNavigate } from "react-router-dom";
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
      <a href="/home" className="site-title">
        Contact Manager
      </a>
      <ul>
        <li>
          <Button onClick={onLogoutHandler}>Signout</Button>
        </li>
      </ul>
    </nav>
  );
}
