import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <NavLink to="/">
        <button>home</button>
      </NavLink>
      <NavLink to="/">
        <button>pictures</button>
      </NavLink>
      <NavLink to="/">
        <button>about</button>
      </NavLink>
    </>
  );
}
