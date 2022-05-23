import { useNavigate, useParams } from "react-router-dom";

const DeleteUser = ({ findUser, deleteUser }) => {
  let { userId } = useParams();

  let user = findUser(userId);
  if (!userId) return <div>userId undefind</div>;
  if (!user) return <div>User with that id not found</div>;

  return <DeleteUserForm {...user} deleteUser={deleteUser} />;
};

const DeleteUserForm = ({
  id,
  first_name,
  last_name,
  email,
  gender,
  deleteUser,
}) => {
  let navigate = useNavigate();

  const onFormCancel = () => navigate("/", { replace: true });
  return (
    <div className="delete-user">
      <div>Brisanje usera</div>
      {id}
      <h1>
        {first_name} {last_name}
      </h1>
      <h2>{email}</h2>
      <h3>{gender}</h3>
      <button className="btn" onClick={() => deleteUser(id)}>
        Delete
      </button>
      <button className="btn" type="button" onClick={onFormCancel}>
        Cancel
      </button>
    </div>
  );
};

export default DeleteUser;
