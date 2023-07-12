import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import contactimg from "./img/contact home.jpg";
function Contact(){
    return(
        <div>
            <Navbar/>
            <Hero
            cName = "hero-mid"
            heroImg = {contactimg}
            tital = "Contact"
            url = "/"
            btnclass = "hide"
            />
        </div>
    )
}

export default Contact;