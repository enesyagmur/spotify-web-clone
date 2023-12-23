import "./App.css";
import Bottombar from "./Components/Bottombar";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content />
      <Bottombar />
    </div>
  );
}

export default App;
