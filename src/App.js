import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Landing } from "./pages/Landing";
import { AcessoUser } from "./pages/AcessoUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"   element={<Landing />} />
        <Route path="/user"  element={<AcessoUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
