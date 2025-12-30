import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AquariumNavbar from "./components/CoolNavbar";
import AquariumNavbar1 from "./components/NavBarCool";
import Home from "./pages/Home";
import "./App.css";


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <AquariumNavbar/>
      {/* <AquariumNavbar1/> */}
      <Home />
      <Header />
    </>
  );
}

export default App;
