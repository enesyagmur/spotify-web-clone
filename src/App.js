import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MasterLayout from "./Layout/MasterLayout";
import { CustomRouter } from "./Router/CustomRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<MasterLayout />}>
            {CustomRouter.map((item, index) => (
              <Route {...item} key={index} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
