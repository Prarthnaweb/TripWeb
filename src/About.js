import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import aboutimg from "./img/second home.jpg";
function About(){
    return(
        <div>
            <Navbar/>
            <Hero
            cName = "hero-mid"
            heroImg = {aboutimg}
            tital = "About Us"
            url = "/"
            btnclass = "hide"
            />
        </div>
    )
}

export default About;