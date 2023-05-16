// App.js
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Routes>
      <Route path="/ReactPractice" element={<Home />} />
      <Route path="/ReactPractice/movie" element={<Detail />} />
    </Routes>
  </Router>;
}

export default App;