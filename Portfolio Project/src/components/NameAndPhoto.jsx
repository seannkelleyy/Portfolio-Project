import { StoicQuote } from '../Components/StoicQuote';

const NameAndPhoto = () => {
    return (
        <div className='name-and-photo'>
            <div className="top-logo">
                <img src="./src/Assets/Images/SK.png" alt="Sean Kelley" width="75" height="75" />
            </div>
            <div className="name">
                <h1>Hi, I&#39;m Sean.</h1>
            </div>
            <StoicQuote />
            <div className="main-image">
                <img src="./src/Assets/Images/Sean.jpg" alt="Sean Kelley" />
            </div>
            <div className="intro">
                <p>
                I am a software engineering intern at Neudesic and a
                student at The Ohio State University. I am very interested
                in full-stack development, with experience working with C# 
                and .NET, as well as ReactJS. Software development is 
                my passion and I am always looking to learn new things.
                </p>
            </div>
            <br/>
        </div>
    );
}

export default NameAndPhoto; 