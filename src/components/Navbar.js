import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>User aplication</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to=":userId">User</Link> */}

        <Link to={`/users/create`}>New User</Link>
      </div>
    </nav>
  );
};

export default Navbar;
