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
      <p>
        <Link to={`/users/${id}`}>Go to user</Link>
      </p>
    </div>
  );
};

export default UserTile;
