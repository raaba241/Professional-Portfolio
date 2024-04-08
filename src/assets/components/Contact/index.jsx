import githubIcon from "../../icons/github.png"
import linkedInIcon from "../../icons/linkedin.png"
import gmailIcon from "../../icons/gmail.png"
import "./style.css"

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact me</h1>
                 <p>Always open to chat and making new friends. Certainly do prefer email</p>
            <div className="anchor-container">
                <a href="https://github.com/raaba241"><img src={githubIcon} alt="github logo" /></a>
                <a href="https://www.linkedin.com/in/ahmad-raaba-07937129a/"><img src={linkedInIcon} alt="linkedIn logo" /></a>
                <a href="https://github.com/raaba241"><img src={gmailIcon} alt="github logo" /></a>
            </div>

        </div>

    )

}

export default Contact;