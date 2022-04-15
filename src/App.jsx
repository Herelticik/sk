import { useState } from "react";
import { Catalog } from "./components/catalog/Catalog";
import { Target } from "./components/target/Target";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [theme, setTheme] = useState(true);
  return (
    <BrowserRouter>
      <div className="wrapper" style={!theme ? { background: "black" } : { background: "white" }}>
        <Routes>
          <Route path={"/catalog"} exact element={<Catalog setTheme={setTheme} theme={theme} />} />
          <Route path={"/"} exact index element={<Target theme={theme} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
