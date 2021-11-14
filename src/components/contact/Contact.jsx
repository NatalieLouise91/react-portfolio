import "./contact.scss"
import { useState } from "react";

export default function Contact() {
    
    const [message, setMessage] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className= "container">
            <div className="contact" id="contact">
                    <div className="left">
                        <h2>Contact Me.</h2>
                        <div className="info">
                            <p>Natalie Bottema</p>
                            <p>Email me at:</p>
                            <p>natalie.bottema91@gmail.com</p>
                            <a href="https://github.com/NatalieLouise91"><button>GitHub</button></a>
                            <a href="https://www.linkedin.com/in/natalie-bottema-6b8164207/"><button>LinkedIn</button></a>
                        </div>

                    </div>
                    <div className="right">
                        <h2>Let's work together.</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="email"/>
                            <textarea placeholder="message"></textarea>
                            <button type="submit">Send</button>
                            {message && <span>Thank you, I have received your message!</span>}
                        </form>
                    </div>    
                </div>
                <div className="custom-shape-divider-bottom-1636667005">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div> 
        </div>
    )
}
