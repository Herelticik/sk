import { useState } from "react";
import { Catalog } from "./components/catalog/Catalog";
import { Target1 } from "./components/target/1/Target1";
import { Target2 } from "./components/target/2/Target2";
import { Target3 } from "./components/target/3/Target3";
import { Target4 } from "./components/target/4/Target4";
import { Target5 } from "./components/target/5/Target5";
import { Target6 } from "./components/target/6/Target6";
import { Target7 } from "./components/target/7/Target7";
import { Target8 } from "./components/target/8/Target8";
import { Target9 } from "./components/target/9/Target9";
import { Target10 } from "./components/target/10/Target10";
import { Target11 } from "./components/target/11/Target11";


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
          <Route path={"/"} exact element={<Catalog setTheme={setTheme} theme={theme} />} />
          <Route path={"/card1"} exact index element={<Target1 theme={theme} />} />
          <Route path={"/card2"} exact index element={<Target2 theme={theme} />} />
          <Route path={"/card3"} exact index element={<Target3 theme={theme} />} />
          <Route path={"/card4"} exact index element={<Target4 theme={theme} />} />
          <Route path={"/card5"} exact index element={<Target5 theme={theme} />} />
          <Route path={"/card6"} exact index element={<Target6 theme={theme} />} />
          <Route path={"/card7"} exact index element={<Target7 theme={theme} />} />
          <Route path={"/card8"} exact index element={<Target8 theme={theme} />} />
          <Route path={"/card9"} exact index element={<Target9 theme={theme} />} />
          <Route path={"/card10"} exact index element={<Target10 theme={theme} />} />
          <Route path={"/card11"} exact index element={<Target11 theme={theme} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
