import Time from "./components/Time";
import Slogan from "./components/Slogan";
import Logo from "./components/Logo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <Logo />
      <Slogan />
      <Time />
    </center>
  );
}

export default App;
