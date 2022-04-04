import email from "../images/Icon.svg"
import LinkedIn from "../images/Vector.svg"
export default function Body(){
    return (
        <div className="container-main">
            <h1 className="title">Mustafa Shaheed</h1>
            <h2 className="job-title">Software Developer</h2>
            <button className="email">
                <img src={email}/>
                Email</button>
            <button className="linkedin">
                <img src={LinkedIn}/>
                LinkedIn</button>
                <h1 className="sectionOne">About</h1>
                <p className="contentOne">I am a Software Developer who graduated from the 
                University of South Carolina. I have experience using C++, Java, and JavaScript
                to name a few programming languages. I am currently getting training and experience
                in React. I am always looking forward to learn new thing and challenging my self.</p>
                <h1 className="sectionTwo">Intrests</h1>
                <p className="contentTwo">Movie buff. Video game enthusist. </p>
        </div>
    )
}