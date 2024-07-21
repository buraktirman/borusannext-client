import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import ToDoDetail from "./pages/ToDoDetail/ToDoDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={""} element={<Homepage />} />
          <Route path="/todo/:id" element={<ToDoDetail />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
