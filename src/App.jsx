import Sec_1 from './components/Sec-1/Sec-1.jsx'
import Nav from './components/Navbar/Nav.jsx'
import Details from './components/Details/Details.jsx'
import BTN from './components/BTN/BTN.jsx'
import Slider from './components/Slider/Slider.jsx'
import './index.css'
function App() {


  return (
    <>
      <Sec_1>
        <Nav />
        <div id="Holder">
          <Details> <BTN /> </Details>
        </div>
        <div id="Holder2">
          <Slider />
        </div>
      </Sec_1>
    </>
  )
}

export default App

