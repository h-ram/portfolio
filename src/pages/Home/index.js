import "./style.scss"
import {useEffect,useState} from 'react'
import LogoTitle from "../../assets/images/logo-r.png"
import { Link } from "react-router-dom";
import AnimatedLetters from "../../components/AnimatedLetters";
import Loader from "react-loaders";
import Logo from "../../components/Logo"
function Home(){
    const [letterClass,setLetterClass] = useState("text-animate") 
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass(()=>"text-animate-hover")
        },4000)
    },[])
    
    return(
        <>
        <Loader type="line-scale"/>
        <div className="page--content home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        text="Hi,"
                        idx={4}
                        />
                    <br/> 
                    <AnimatedLetters
                        letterClass={letterClass}
                        text="I'm"
                        idx={4}
                        />
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        text="am"
                        idx={4}
                        />
                    <br/>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        text="web developer"
                        idx={4}
                        />
                </h1>
                <h2>FullStack Developer / JavaScript Expert </h2>
                <Link  to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        </>
    )
}

export default Home;