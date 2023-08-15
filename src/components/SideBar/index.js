import "./style.scss"
import {Link, NavLink} from "react-router-dom"
import logoS from "../../assets/images/logo-r.png"
import logoSub from "../../assets/images/logo-ram.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import gsap from "gsap-trial"
import { 
    faHome, 
    faUser, 
    faEnvelope,
    faCode} from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

function SideBar(){
    function exitPage(event){
        event.preventDefault()
        gsap.to(".page--content",{
            duration:0.4,
            x:"-150%"
        })
        setTimeout(()=>{
            window.location.href =  event.target.href
        },500)
    } 
   
    return(
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={logoS} alt="logo"/>
                <img className="sub-logo" src={logoSub} alt="slobodan"/>
            </Link>
            <nav>
                <NavLink 
                    onClick={exitPage}
                    exact
                    to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" /> 
                </NavLink>
                <NavLink 
                    onClick={exitPage}
                    exact
                    to="/projects">
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e" /> 
                </NavLink>
                <NavLink 
                    onClick={exitPage}
                    exact
                    to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" /> 
                </NavLink>
                <NavLink 
                    onClick={exitPage}
                    exact
                    to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /> 
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/ram-h-337697281/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/h-ram">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://leetcode.com/lRaml/">
                        <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;