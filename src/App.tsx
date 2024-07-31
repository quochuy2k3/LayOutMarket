import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Market from "./Screens/Market";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Market />} />
      </Routes>
    </Router>
  );
}

export default App;
