import Counter from "./component/Counter";
import "./style.css";
import Data from "./component/Data";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddData from "./component/AddData";
import Navbar from "./component/Navbar";
import Update from "./component/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<AddData />} path="/" index />
          <Route element={<Data />} path="/showdata" />
          <Route element={<Update />} path="/update/:emp_id" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
