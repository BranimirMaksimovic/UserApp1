import data from "./data/data.json";
import { useState } from "react";
import Navbar from "./components/Navbar";

import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/pages/Home";
import User from "./components/pages/User";
import DeleteUser from "./components/pages/DeleteUser";
import UpdateUser from "./components/pages/UpadteUser";

function App() {
  const [users, setUsers] = useState(data.users);

  let navigate = useNavigate();
  const availableGenders = new Set([...data.users.map(({ gender }) => gender)]);
  const findUser = (id) => users.find((user) => user.id === Number(id));

  const deleteUser = (id) => {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
    navigate("/", { replace: true });
  };

  const updateUser = (updatedUser) => {
    let itemIndex = users.findIndex((user) => user.id === updatedUser.id);
    let tempUsers = users;
    tempUsers.splice(itemIndex, 1, updatedUser);
    setUsers(tempUsers);
    navigate("/", { replace: true });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path="users">
            <Route path=":userId" element={<User findUser={findUser} />} />
            <Route
              path="delete/:userId"
              element={
                <DeleteUser findUser={findUser} deleteUser={deleteUser} />
              }
            />
            <Route
              path="update/:userId"
              element={
                <UpdateUser
                  findUser={findUser}
                  updateUser={updateUser}
                  availableGenders={availableGenders}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
