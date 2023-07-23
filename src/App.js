import Navbar from "./components/navbar"
import Hero from "./components/hero";
import SectionOne from "./components/sectionOne";
import SectionTwo from "./components/sectionTwo";
import HowToHelp from "./components/howToHelp";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SectionOne/>
      <HowToHelp/>
      <SectionTwo/>
      <Footer/>
    </div>
  );
}

export default App;
