import "./App.scss";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

//componentlerin pozisyonlarını ve style larını düzenliyorum
