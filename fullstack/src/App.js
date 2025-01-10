import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adduser from "./users/Adduser";
import EditUser from "./users/Edituser";
import Viewuser from "./users/Viewuser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/adduser" element={<Adduser />}></Route>
          <Route exact path="/edituser/:id" element={<EditUser />}></Route>
          <Route exact path="/viewuser/:id" element={<Viewuser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
