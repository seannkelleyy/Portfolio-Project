import { useState, useEffect } from 'react';

function NameAndInfoBar() {
    const [lightMode, setLightMode] = useState(findDefaultMode);

    function findDefaultMode() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return "dark";
        } else {
            return "light";
        }
    }

    function toggleLightMode() {
        (lightMode === "light") ? setLightMode("dark") : setLightMode("light");
    }

    useEffect(() => {document.body.className = lightMode;}, [lightMode]);

    return (
        <div className="top-bar-container">
            <header>
                <a className="logo" href="/index.html"><img src="/SK.png" alt="Sean Kelley" width="75" height="75" /></a>
                <nav>
                    <ul className="nav__links">
                        <li><a href="https://github.com/seannkelleyy">
                            <img alt="Github" src="/github.jpg" width="50" height="50" />
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/seankelley15/">
                            <img  alt="Linkedin" src="/linkedin.jpg" width="50" height="50" />
                        </a></li>
                        <li><a href="mailto:seannkelleyy1@gmail.com">
                            <img alt="Email" src="/email.png" width="50" height="50" />
                        </a></li>
                    </ul>
                </nav>
                <button className="light-mode-button" onClick={toggleLightMode}>
                    <img alt="Screen Mode"  src={(lightMode === 'light') ? "/light-mode.png" : "/dark-mode.png"} width="50" height="50"/>
                </button>
            </header>

        </div>
    );
}

export default NameAndInfoBar;