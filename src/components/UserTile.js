import { Link } from "react-router-dom";

const UserTile = ({ id, first_name, last_name, email, gender }) => {
  return (
    <div className="user-list-preview">
      <h2>
        <strong>User:</strong> {first_name} {last_name}
      </h2>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Gender:</strong>
        {gender}
      </p>
      <div className="user-tile-links">
        <p>
          <Link to={`/users/${id}`}>Go to user</Link>
        </p>
        <p>
          <Link to={`/users/delete/${id}`}>Delete user</Link>
        </p>
        <p>
          <Link to={`/users/update/${id}`}>Update user</Link>
        </p>
      </div>
    </div>
  );
};

export default UserTile;
