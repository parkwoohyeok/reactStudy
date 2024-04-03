import Nav from "./components/Nav";
import Tooltip from "./components/Tooltip";
import Timer from "./components/Timer";
import Global from "./global";

function App() {
  return (
    <div className="App">
      <Global />
      <Nav />
      <Tooltip />
      <Timer />
    </div>
  );
}

export default App;
