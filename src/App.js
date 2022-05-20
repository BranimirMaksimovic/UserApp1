import data from "./data/data.json";
import { useState } from "react";
import Navbar from "./components/Navbar";

import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/pages/Home";
import User from "./components/pages/User";
import DeleteUser from "./components/pages/DeleteUser";

function App() {
  const [users, setUsers] = useState(data.users);
  let navigate = useNavigate();

  const findUser = (id) => users.find((user) => user.id === Number(id));

  const deleteUser = (id) => {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
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
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
