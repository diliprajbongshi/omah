import Navber from "./components/navber/Navber";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Residen from "./components/residen/Residen";
import Slider from "./components/slider/Slider";
import Service from "./components/service/Service";
import Footer from "./components/footer/Footer";
import "./style.css";

function App() {
  return (
  <>
      <Navber></Navber>
      <Banner></Banner>
      <About></About>
      <Residen></Residen>
      <Slider></Slider>
      <Service></Service>
      <Footer></Footer>
  </>
  );
}

export default App;
