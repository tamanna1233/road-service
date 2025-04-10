import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="">
     <Navbar/>
      <Outlet />
      <Footer/>

    </div>
  );
}

export default App;
