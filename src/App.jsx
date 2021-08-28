import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Services from "./Components/Services";

function App() {
  return (
    <main className="app">
      <Nav />
      <Home />
      <article>
        <Services />
        <Footer />
      </article>
    </main>
  );
}

export default App;
