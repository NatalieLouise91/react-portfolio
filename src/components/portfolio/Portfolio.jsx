import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li>Marketplace App</li>
                <li>Terminal App</li>
                <li>Trivia Master</li>
                <li>BookMark</li>
            </ul>
            <div className="container">
                <div className="item">
                    <a href="http://museexchange.herokuapp.com/">
                    <img src="assets/muse-exchange.png" alt="MuseExchange index page"/>
                    </a>
                    <h3>MuseExchange</h3> 
                </div>
                <div className="item">
                    <a href= "https://github.com/NatalieLouise91/T1A3">
                    <img src="assets/coder-spa.png" alt="Coder Detox Spa Quiz"/>
                    </a>
                    <h3>Coder Detox Spa</h3>
                </div>
                <div className="item">
                    <a href= "https://natalielouise91.github.io/Hackathon1/">
                    <img src="assets/trivia-master.png" alt="Trivia Master Quiz Generator Home Page"/>
                    </a>
                    <h3>Trivia Master</h3>
                </div>
                <div className="item">
                    <a href= "https://github.com/NatalieLouise91/bookapp">
                    <img src="" alt=""/>
                    </a>
                    <h3>BookMark</h3>
                </div>
            </div>
        </div>
    )
}
