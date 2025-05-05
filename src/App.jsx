import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import MaintenancePage from "./pages/Mantiancepage";
import SiteDownPage from "./pages/Sitedown";

const maintenance = import.meta.env.VITE_MANTAINE_MODE;
console.log(maintenance);
const ispaymentdone = import.meta.env.VITE_PAYMENT_STATUS;
function App() {
  if (true) return <MaintenancePage />;
  if (ispaymentdone !== "true") return <SiteDownPage />;
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
