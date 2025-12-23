import "./App.css"
import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/benefits"
import Colaboration from "./components/colaboration"
import Footer from "./components/footer"
import Header from "./components/header"
import Hero from "./components/hero"
import Pricing from "./components/pricing"
import RoadMap from "./components/roadmap"
import Services from "./components/services"

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Colaboration />
        <Services />
        <Pricing />
        <RoadMap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  )
}

export default App
