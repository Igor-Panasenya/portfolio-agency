import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Works from "./components/work/Works";
import Team from "./components/team/Team";
import TeamSlider from "./components/teamSlider/TeamSlider";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Services />
        <Works />
        <Team />
        <TeamSlider />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
