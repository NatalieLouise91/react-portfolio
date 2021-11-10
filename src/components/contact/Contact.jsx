import "./contact.scss"
import { useState } from "react";

export default function Contact() {
    
    const [message, setMessage] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
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
    )
}
