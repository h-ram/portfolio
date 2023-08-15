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
                <p>Seasoned full-stack developer proficient in crafting seamless web experiences.
                    Expert in Vanilla JavaScript and React for dynamic front-end interfaces, NodeJs for 
                    backend shenanigans. Git master for seamless collaboration,
                    and skilled in SCSS/CSS for polished designs.
                    </p>
                    <br/>
                <p> An Intermidate when it comes to DSA using C++ ,
                    And well versed in scripting and automation with 🥧thon .               
                </p>
            </div>

            <div className="stage-cube-container">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faNodeJs} color="#215732"/>
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