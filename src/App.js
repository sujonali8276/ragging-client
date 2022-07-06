import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Victim from "./components/VIctim/Victim";
import Public from "./components/Public/Public";
import Show_VIctim from "./components/Show_Victim/Show_VIctim";
import Authority from "./components/Authority/Authority";
import NotFound from "./components/NotFound/NotFound";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="container">
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/victim" element={<Victim />} />
          <Route exact path="/public" element={<Public />} />
          <Route exact path="/victim/:id" element={<Show_VIctim />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/authority" element={<Authority />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
