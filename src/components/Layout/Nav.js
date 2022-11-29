import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/me/">Me</Link>
        <Link to="/subscription/">Subscriptions</Link>
        <Link to="/signup/">Signup</Link>
        <Link to="/login/">Signin</Link>
        <Link to="/admin/">Admin</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
