import twitter from "../images/TwitterIcon.svg"
import facebook from "../images/FacebookIcon.svg"
import GitHub from "../images/GitHubIcon.svg"
import Instagram from "../images/InstagramIcon.svg"
import Linkedin from "../images/LinkedinIcon.svg"
export default function Footer(){
    return (
        <div className="container-footer">
            <img src={twitter} className="twit"/>
            <img src={facebook} className="face"/>
            <img src={GitHub} className="git"/>
            <img src={Instagram} className="inst"/>
        </div>
    )
}