import Navbar from "../Components/Navbar"
import HomeBody from "../Components/Home/Home"
import Footer from "../Components/Footer"
import Conclusion from "../Components/Conclusion"

const Home = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <HomeBody />
      <Conclusion />
      <Footer />
    </div>
  );
}

export default Home
