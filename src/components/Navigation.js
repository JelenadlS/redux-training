import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <nav aria-label="navigation">
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/">
        <button>Pictures</button>
      </NavLink>
      <NavLink to="/">
        <button>About</button>
      </NavLink>
    </nav>
  );
}
