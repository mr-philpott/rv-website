import rvv2 from "./assets/images/rvv2.png"
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <img src={rvv2} alt="rv"/>
      <div className="road">
        <div className="triangle"></div>
        <div className="block"></div>
      </div>
      {/* <div className="cover">

      </div> */}
      
    </div>
  );
}

export default App;
