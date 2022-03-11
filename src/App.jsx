import "./styles.css";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/create"} element={<Form />} />
      </Routes>
    </div>
  );
}
