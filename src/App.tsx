import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="h-screen w-screen bg-red-500">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
