import "./HeroStyle.css";
// import himg from "../img/home.jpg";
function Hero(props) {
    return (
        <div className={props.cName}>
             <img alt="" src={props.heroImg}></img>
             <div className="hero-text">
                <h1>{props.tital}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnclass}>{props.buttonText}</a>
             </div>
        </div>
    )
}

export default Hero;