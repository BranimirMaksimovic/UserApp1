import { useParams } from "react-router-dom";

const User = ({ findUser }) => {
  let { userId } = useParams();

  let user = findUser(userId);

  if (!userId) return <div>userId udefind</div>;
  if (!user) return <div>User with thet id not found</div>;
  return <UserInformation {...user} />;
};

const UserInformation = ({ id, first_name, last_name, email, gender }) => {
  return (
    <div>
      {id}
      <h1>
        {first_name} {last_name}
      </h1>
      <p> {email} </p>
      <p> {gender} </p>
    </div>
  );
};
export default User;
