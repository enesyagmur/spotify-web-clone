import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MasterLayout from "./Layout/MasterLayout";
import { CustomRouter } from "./Router/CustomRouter";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NotFound from "./pages/Notfound/NotFound";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
