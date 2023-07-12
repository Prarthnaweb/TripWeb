import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import homeimg from "./img/home.jpg";
import Destination from "./components/Destination";
import Trip from "./components/Trip";
import Footer from "./components/Footer";
function Home(){
    return(
        <div>
            <Navbar/>
            <Hero
            cName = "hero"
            heroImg = {homeimg}
            tital = "Your Journey Your Story"
            text = "choose your Favourite Destination"
            buttonText = "Travel Plan"
            url = "/"
            btnclass = "show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </div>
    )
}

export default Home;