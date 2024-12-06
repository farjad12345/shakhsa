import "./App.css";
import BackArow from "./components/BackArow/BackArow";

import Header from "./components/header/Header";
import Timer from "./components/Timer/Timer";
import Start from "./pages/Start/Start";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        {/* <Timer/> */}
{/* <Start/> */}
<Home/>
      </div>
    </div>
  );
}

export default App;
