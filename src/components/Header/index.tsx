import './styles.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="gh-container">
        <Link to={"/"}>
          <h1>Github API</h1>
        </Link>
      </div>
    </header>
  );
}
