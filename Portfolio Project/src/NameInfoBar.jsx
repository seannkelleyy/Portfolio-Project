function NameAndInfoBar(){
    return(
<div className="top-bar">
    <header>
        <a className="logo" href="/"><img src="public/SK.png" alt="Sean Kelley" width="75px" height="75px" /></a>
        <nav>
            <ul className="nav__links">
                <li><a href="https://github.com/seannkelleyy">
                        <img alt="Github" src="public/github.jpg" width="50" height="50"/>
                    </a></li>
                <li><a href="https://www.linkedin.com/in/seankelley15/">
                        <img alt="Linkedin" src="public/linkedin.jpg" width="50" height="50"/>
                    </a></li> 
            </ul>
        </nav>
        <a className="cta" href="mailto:seannkelleyy1@gmail.com">Contact</a>
    </header>
</div>
    );
}

export default NameAndInfoBar;