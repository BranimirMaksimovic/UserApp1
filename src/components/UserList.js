import UserTile from "./UserTile";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserTile key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UserList;
