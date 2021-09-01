import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import { ScrollProvider } from "./contexts/ScrollContext";

function App() {
  return (
    <ScrollProvider>
      <main className="app">
        <Nav />
        <Home />
        <article>
          <Services />
          <Gallery />
          <Contact />
          <Footer />
        </article>
      </main>
    </ScrollProvider>
  );
}

export default App;
