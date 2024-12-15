import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Read from "./Components/Read";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/edit" element={<Edit />} />
          <Route path="/create" element={<Create />} />
          <Route exact path="/" element={<Read />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
