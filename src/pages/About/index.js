import "./style.scss"
import {useState,useEffect} from "react"
import AnimatedLetters from "../../components/AnimatedLetters"
import { faCss3, faGitAlt, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Loader from "react-loaders"
function About(){
    const [letterClass,setLetterClass] = useState("text-animate")    
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass(()=>"text-animate-hover")
        },3000)
    },[])
    return(
        <>
        <Loader type="line-scale"/>
        <div className="page--content about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        text="About Me"
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a passionate and dedicated full-stack developer
                    with an expertise in JavaScript. With several years of 
                    experience under my belt,I have honed my skills to deliver
                    top-notch web applications and solutions.</p>
                <p>
                    On the backend, I'm well-versed in Node.js, Express.js,
                    and other server-side technologies. I enjoy designing 
                    efficient and scalable APIs, integrating databases, 
                    and ensuring the security and performance of the applications
                    I build.
                </p>
            </div>

            <div className="stage-cube-container">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faNodeJs}/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5}/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3}/>
                    </div>               
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact}/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJs}/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;