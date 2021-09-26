import logo from "./logo.svg";
import "./App.css";
import Agents from "./component/Agents/Agents";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Agents></Agents>
    </div>
  );
}

export default App;
