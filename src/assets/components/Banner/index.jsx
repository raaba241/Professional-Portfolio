import './style.css'
import githubIcon from "../../icons/github.png"
import linkedInIcon from "../../icons/linkedin.png"
import gmailIcon from "../../icons/gmail.png"
const Banner = () => {
    return (
        <div className="intro-para">
            <p>Hi, <br></br> Im <span className='name'>Raaba Ahmad</span>. Im a fullstack web developer in Toronto, ON. I love learning the inner workings of things and always excited to trying something new. I am full of passion and enthusiam when it comes to programming. I love anime.</p>

            <a href="https://github.com/raaba241"><img src={githubIcon} alt="github logo" /></a>
            <a href="https://www.linkedin.com/in/ahmad-raaba-07937129a/"><img src={linkedInIcon} alt="linkedIn logo" /></a>
            <a href="https://github.com/raaba241"><img src={gmailIcon} alt="github logo" /></a>




        </div>

        
    )
}

export default Banner;