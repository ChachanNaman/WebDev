import Usercards from "./Component/Usercards"
import "./App.css";

import sar from './assets/sar.jpeg'
import swapnil from './assets/swapnil.jpeg'
import satwik from './assets/satwik.jpeg'
import namann from './assets/namannn.jpeg'
function App() {

  return (
    <div className="container">
      <Usercards name="satwik" desc="satwik here" image={satwik} style={{"border-radius" : "30px" }} link="https://www.linkedin.com/in/satwik-singh-73153822a/" />
      <Usercards name="swapnil" desc="swapnil here" image={swapnil} style={{"border-radius" : "30px" }} link="https://www.linkedin.com/in/swapnil-niraj-b32334254/"/>
      <Usercards name="sarvagya" desc="sarvagya here" image={sar} style={{"border-radius" : "30px" }} link="https://www.linkedin.com/in/sarvagya-jain-787b5b248/"/>
      <Usercards name="naman" desc="naman here" image={namann} style={{"border-radius" : "30px" }} link="https://www.linkedin.com/in/naman-chachan-903bb9277/"/>
    </div>
  )
}

export default App
