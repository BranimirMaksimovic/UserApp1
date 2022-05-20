import data from "./data/data.json";
import { useState } from "react";
import Navbar from "./components/Navbar";

import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  const [users, setUsers] = useState(data.users);

  const findUser = (id) => users.find((user) => user.id === Number(id));

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path=""></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
