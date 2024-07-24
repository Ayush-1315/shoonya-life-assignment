import { Routes,Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/home";
import { RetreatPage } from "./pages/retreatPage/retreatPage";
function App() {
  return (
    <div className="App">
      <div className={`header`}>
        <span>Wellness Retreats</span>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/retreats/:id" element={<RetreatPage/>}/>
      </Routes>
      <footer>© 2024 Wellness Retreats. All rights reserved.</footer>
    </div>
  );
}

export default App;
