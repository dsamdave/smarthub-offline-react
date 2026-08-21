import NavbarComp from "./components/NavbarComp"
import "./App.css"
import HeroSection from "./components/HeroSection"
import ProductsComp from "./components/ProductsComp"

const App = ()=>{

  return (
    <div>

      {/* Navbar */}
      <NavbarComp />

      <HeroSection />

      <ProductsComp />
      
    </div>
  )

}

export default App