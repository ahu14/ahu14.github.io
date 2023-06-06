import React, {useEffect, useState} from "react";
import "./style.scss";

let Introduction = () => {
    let clicked = () => {
        let height = window.innerHeight;
        window.scrollTo(0, height);
    }

    return (
        <div className="intro-box">
            <h1 id="intro-title">Hello</h1>
            <h2 id="intro-name">I am Sherly Hu</h2>
            <button className="intro-btn" onClick={clicked}>Click to Know More</button>
        </div>
    )
}

let Project = () => {
    let [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/ahu14/repos')
        .then(res => res.json())
        .then(apidata => {
            for (let i = 0; i < apidata.length; i++){
                setData(prev => prev.concat([
                    <div className="project-child" key={apidata[i].id}>
                        <h2 id="project-child-name">{apidata[i].name}</h2>
                        <a id="project-child-link" href={apidata[i].html_url}>
                            {apidata[i].html_url}
                        </a>
                        <a id="project-child-github" href={apidata[i].homepage}>
                            <div className="project-child-github-icon"></div>
                        </a>
                    </div>
                ]));
            }
        })
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="project-box">
            <h2 id="project-title">Projects</h2>

            <div className="project-lists">
                {data}
            </div>
        </div>
    )
}

let About = () => {
    return (
        <div className="about-box">
            <div className="about-content">
                <h2 id="title-about">About</h2>
                <h2 id="title-about">Hi ! I'm Sherly Hu</h2>
                <p id="para-about">I'm 16 years old, still in high school</p>
                <p id="para-about">Like to eat, sleep and make something random like this</p>
                <p id="para-about">Like to make simple game using frontend tools too :)</p>
                <p id="para-about">Wish me luck making a more complex game !</p>
            </div>
        </div>
    )
}

let Skills = () => {
    return (
        <div className="skills-box">
            <h2 id="skills-title">My Skills</h2>
            <ul className="skills-list">
                <li className="skills-child">
                    <div id="skills-html"></div>
                    <p id="skills-desc">HTML</p>
                </li>

                <li className="skills-child">                
                    <div id="skills-css"></div>
                    <p id="skills-desc">CSS</p>
                </li>

                <li className="skills-child">
                    <div id="skills-js"></div>
                    <p id="skills-desc">Javascript</p>
                </li>

                <li className="skills-child">                
                    <div id="skills-react"></div>
                    <p id="skills-desc">React</p>
                </li>

                <li className="skills-child">
                    <div id="skills-sass"></div>
                    <p id="skills-desc">SASS</p>
                </li>

                <li className="skills-child">
                    <div id="skills-tailwind"></div>
                    <p id="skills-desc">Tailwind</p>
                </li>
            </ul>
        </div>
    )
}

let Contact = () => {
    return (
        <div className="contact-box">
            <ul className="contact-lists">
                <li className="contact-child">
                    <a href="https://github.com/ahu14">
                        <div id="contact-github"></div>
                    </a>
                </li>

                <li className="contact-child">
                    <a href="https://www.instagram.com/ikan._.jpg">
                        <div id="contact-instagram"></div>
                    </a>
                </li>

                <li className="contact-child">
                    <a href="https://www.linkedin.com/in/sherly-hu-5b89a5227/">
                        <div id="contact-linkedin"></div>
                    </a>
                </li>
            </ul>
        </div>
    )
}


let Home = () => {
    return (
        <div className="body">
            <Introduction />
            <Project />
            <Skills />
            <About />
            <Contact />
        </div>
    )
}


export default Home;