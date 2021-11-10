import "./about.scss";
import { useState } from 'react';

export default function About() {


    const interests = ["develop", "collaborate", "language", "travel"];
    const [myInterest, setMyInterest] = useState('');

    return (
        <div className="about" id="about">
            <section className="intro_about_me">
                <h1>About Me.</h1>
                <p>
                    Hello and welcome to my portfolio! My name is Natalie Bottema. I am a creative professional who thrives off software development, collaboration, language learning and travelling. 
                </p>
            </section> 
            <section className="container">

                    <ul>
                    {interests.map(interest => (
                         <button
                         type="button"
                         key={interest}
                         onClick={()=> setMyInterest(interest)}
                     >
                         <li>{interest.toUpperCase()}</li>
                     </button>
                    ))}
                    </ul>

                <section className="item">
                    <p>{myInterest === "develop" && (
                        interestData.develop
                    )}</p>
                    <p>{myInterest === "collaborate" && (
                        interestData.collaborate
                    )}</p>
                    <p>{myInterest === "language" && (
                        interestData.language
                    )}</p>
                    <p>{myInterest === "travel" && (
                        interestData.travel
                    )}</p>
                </section>
            </section>
        </div>
    )
}

const interestData = {
    develop: "I have recently started my new journey into the area of software development. I have experience in researching, designing and implementing websites. In particular, I enjoy writing with efficient code and developing web pages that are clear, functional and ensure user confidence. In addition to writing efficient code, I like the challenge of the testing and debugging phase of programming, which is vital to identify any areas that require modification for the program to run more smoothly. I understand operational practicality and firmly believe in taking a less is more approach when evaluating new website designs. I welcome collaboration working closely with a range of professionals from various academic disciplines or technical backgrounds.",
    collaborate:"My academic background in archaeology and museum studies has made me fortunate enough to participate in several internships and field schools. When I participated in an internship at the Národní Muzeum in Prague, Czech Republic, I provided support in the areas of collections management, documentation, exhibition design and community engagement. During my project work within the archaeological and ethnographic departments, I developed an interest in the cross-cultural exchange between my peers within the internship program and my supervisors. This interest was enhanced when we provided support through photography and filming during the traditional Easter celebrations. These celebrations created a conversation surrounding traditions in each other's home countries, which in turn, we were able to incorporate back into exhibition research. One of the most enjoyable aspects of the internship was engaging and working with a wide variety of museum professionals from diverse academic backgrounds.",
    language:"I developed my interest in language learning through travelling to Europe for work. Having a basic understanding of essential phrases and words enabled me to navigate outside the tourist hub and explore unknown areas. Connecting with the local people in their native language also allowed me to deepen my understanding of other cultures. This understanding also led to a greater appreciation of the history, traditions, and arts of each place I was visiting. Furthermore, my experience in learning another language has changed the way that I think and approach problems. Nevertheless, it has required commitment, time and dedication to understand and maintain new vocabulary. Through acknowledging that I live in an interconnected world, I have the ambition to progress with my language proficiency in German.",
    travel:"Seeing the world, understanding different perspectives, customs and cultures and exploring history are only a few reasons why I appreciate travelling. When I visit new places and discover new ideas, I am encouraged to reflect on my circumstances and how I am developing in my life. Travelling is more than just a holiday; it is a vocation. It enables you to challenge yourself to adapt to new environments outside of your comfort zone. Through my travelling experiences, I have been able to swim between two continents, island-hop throughout the Mediterranean, engage in meaningful conversation with locals, and develop life-long friendships."
}