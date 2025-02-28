import './App.css'
import Homepage from './components/Homepage'
// import Payload from './components/Payload'
function App() {

  let openPortal = true
  return (
    <div  style={{border: "3px solid black", padding: "5px", marginbottom: "5px"}}>
   {/* {openPortal && <Payload />} */}
    <Homepage/>

    </div>
  )
}

export default App
