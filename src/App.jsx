
import './App.css'
import EmergencyBadge from './component/EmergencyBadge'
import Navbar from './component/NavBar'
import ServiceCardsRow from './component/Services'
import TruckAnimation from './component/TruckAnimation'

function App() {

  return (
<>
<div className='bg-black'>
<Navbar/>
<EmergencyBadge/>
<TruckAnimation/>
<ServiceCardsRow/>
</div>
</>      
  )
}

export default App
