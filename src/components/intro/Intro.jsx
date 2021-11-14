import "./intro.scss";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile-image.png" alt="It's me smiling"/>
                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, my name is</h2>
                    <h1>Natalie</h1>
                    <h3>I'm a web developer</h3>
                </div>
                <a href="#about">
                    <img src="assets/downarrow.png" alt="down arrow"/>
                </a>

            </div>      
        </div>
    )
}
