import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Satya from "./routes/Satya";
import Siri from "./routes/Siri";
import Koushik from "./routes/Koushik";
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Satya" element={<Satya />} />
        <Route path="/Siri" element={<Siri />} />
        <Route path="/Koushik" element={<Koushik />} />
      </Routes>
    </>
  );
}

export default App;
