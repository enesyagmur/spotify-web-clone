import "./App.scss";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("home");
  return (
    <div className="App">
      <Sidebar setContent={setContent} content={content} />
      <Content content={content} />
      <Footer />
    </div>
  );
}

export default App;
