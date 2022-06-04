import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./Pages/Dashboard";
import Books from "./Pages/books/Books";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import CreateBook from "./Pages/books/CreateBook";
import Detail from "./Pages/books/Detail";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} exact element={<Dashboard />} />
          <Route path={"/books"} element={<Books />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/create"} element={<CreateBook />} />
          <Route path={"/detail"} element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
