import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import aboutimg from "./img/second home.jpg";
function Service(){
    return(
        <div>
            <Navbar/>
            <Hero
            cName = "hero-mid"
            heroImg = {aboutimg}
            tital = "Service"
            url = "/"
            btnclass = "hide"
            />
        </div>
    )
}

export default Service;