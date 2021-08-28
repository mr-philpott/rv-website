import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Services from "./Components/Services";

function App() {
  return (
    <main className="app">
      <Nav />
      <Home />
      <article>
        <Services />
      </article>
    </main>
  );
}

export default App;
