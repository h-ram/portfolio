import "./style.scss"
import Loader from "react-loaders";
import AnimatedLetters from "../../components/AnimatedLetters"
import {useEffect, useState, useRef} from "react"
import emailjs from "@emailjs/browser"
function Contact(){
    const [letterClass,setLetterClass] = useState("text-animate")    
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass(()=>"text-animate-hover")
        },3000)
    },[])

    const refForm = useRef();
    function sendEmail(event){
        event.preventDefault()
        emailjs.sendForm(
            "service_hoh9oud",
            "template_6bjubrr",
            refForm.current,
            "s9JeibxAoRLF0-BbZ"
        ).then(
            (result)=> {alert("Email Sent!\n"+result.text)},
            (error)=> {alert("Failed to Send Email!\n"+error.text)}
        )
    }
    return(
    <>
        <Loader type="line-scale"/>
        <div className="page--content contact--page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        text="Contact Me"
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance oppertunities - especially ambitious or 
                    large projects, However, if you have other requests or questions,
                    don't hesistate to contact me.
                </p>
                <div className="contact--form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required/>
                            </li>
                            <li>
                                <input type="text" name="subject"placeholder="Subject" required/>
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required />
                            </li>
                            <button className="flat--button">Send</button> 
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}

export default Contact;