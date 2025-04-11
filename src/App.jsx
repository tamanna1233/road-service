import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import MaintenancePage from "./pages/Mantiancepage";

const maintenance=import.meta.env.VITE_MANTAINE_MODE
console.log(maintenance)

function App() {
  if(maintenance==="true") return <MaintenancePage/>

  return (
    <div className="">
     <Navbar/>
      <Outlet />
      <Footer/>

    </div>
  );
}

export default App;
