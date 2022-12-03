import "./App.css";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  const copyText=()=>{
    alert('No Text Copy Ok')
  }
  return (
    <div onCopy={copyText}>
      <Navbar />
      <Hero />
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;