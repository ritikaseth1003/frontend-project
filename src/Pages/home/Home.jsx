import "./home.css"
import Navbar from "../../components/navbar/Navbar"; 
import Header from "../../components/header/header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/featuredProperties";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";
const Home = () => {
  return (
<div>
  <Navbar/>
  <Header/>
  <div className="homeContainer">
    <Featured/>
    <h1 className="homeTitle">
      Browse by property type.
    </h1>
    <PropertyList/>
    <h1 className="homeTitle">
      Homes guests love.
      <FeaturedProperties/>
    </h1>
    <MailList/>
    <Footer/>
  </div>
</div>
  )
}

export default Home
