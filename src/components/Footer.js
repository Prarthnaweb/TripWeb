import "./FooterStyle.css"
const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <h1>P Trippy</h1>
                <p>Choose Your Favourite Destination.</p>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a> 
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a> 
                <a href="/">
                    <i className="fa-brands fa-behance-square"></i>
                </a> 
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a> 
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Project</a>
                    <a href="/">Issues</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Othe</h4>
                    <a href="/">Team of</a>
                    <a href="/">Service Privacy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;