import React from "react";
import Edit from "./Components/Edit";
import NewUser from "./Components/NewUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./Components/List";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/newuser" element={<NewUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
