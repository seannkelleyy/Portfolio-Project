function NameAndInfoBar() {
    return (
        <div className="top-bar">
            <header>
                <a className="logo" href="/index.html"><img src="/SK.png" alt="Sean Kelley" width="75px" height="75px" /></a>
                <nav>
                    <ul className="nav__links">
                        <li><a href="https://github.com/seannkelleyy">
                            <img alt="Github" src="/github.jpg" width="50" height="50" />
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/seankelley15/">
                            <img alt="Linkedin" src="/linkedin.jpg" width="50" height="50" />
                        </a></li>
                    </ul>
                </nav>
                <a className="contact" href="mailto:seannkelleyy1@gmail.com">Contact</a>
            </header>
        </div>
    );
}

export default NameAndInfoBar;