import "./style.scss"
import LogoS from "../../assets/images/logo-r.png"
import {useRef ,useEffect} from "react"
import gsap from "gsap-trial"
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin"
function Logo(){
    return(
        <div className="logo-container" >
            <img className="solid-logo" src={LogoS} alt="logo" />
        </div>
    )
}

export default Logo
