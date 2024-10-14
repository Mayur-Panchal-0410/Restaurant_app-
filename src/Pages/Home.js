import Banner from "../components/Banner";
import Caro from "../components/Carousel";
import Header from "../components/Header";
import Navigationbar from "../components/Navbar"
import Ourmenu from "../components/Ourmenu";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function Home() {

  return (
    <div>
      <Header/>
      <Navigationbar/>
      <br/>
      <Caro/>
      <br/>
      <Ourmenu/>
      <br/>
      <Banner/>
      <br/>
      <Gallery/>
      <br/>
      <Footer/>


    </div>
  )
}
export default Home;
