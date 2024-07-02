import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeGH from "./routes/HomeGH";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="/home" element={<HomeGH />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
