import "./style.scss"
import Loader from "react-loaders";
import AnimatedLetters from "../../components/AnimatedLetters"
import ProjectCard from "../../components/ProjectCard"
import JSData from "../../data/JSProjects"
import PyData from "../../data/PyProjects"
import {useState,useEffect} from "react"
function Projects(){
    const [lang,setLang] = useState({
        list:"js",
        data:JSData
    })
    function switchLang(){
        if(lang.list==="js")
            setLang({
                list:"py",
                data:PyData
            })
        else
            setLang({
                list:"js",
                data:JSData
            })
        setActivePreview(0);
    }
    const [activePreview,setActivePreview] = useState(0)
    const preview = (
        <div className="project__preview">
            <img src={lang.data[activePreview].imgURL} alt="project image" />
            <main>
                <h2 className="title">{lang.data[activePreview].name}</h2>
                <p className="desc">{lang.data[activePreview].desc}</p>
                <h3>Tools Used : </h3>
                <ul>
                    {lang.data[activePreview].tools.map((t)=>{ 
                        return <li>{t}</li>
                    })}
                </ul>
                <a class="checkOut" href={lang.data[activePreview].url} target="_blank">Check Out</a>
            </main>
        </div>
    )

    const JSList = JSData.map((p)=>{
        return (
            <div 
                onClick={() => setActivePreview(()=>(p.id-1))}
                className={`projects__list__item ${activePreview==(p.id-1)?"isActive":""}`}>
                <img src={p.imgURL}/>
                <h2>{p.name}</h2>
            </div>
        )
    })
    const PyList = PyData.map((p)=>{
        return (
            <div 
                onClick={() => setActivePreview(()=>p.id-1)}
                className={`projects__list__item ${activePreview==(p.id-1)?" isActive":""}`}>
                <img src={p.imgURL}/>
                <h2>{p.name}</h2>
            </div>
        )
    })
    const [letterClass,setLetterClass] = useState("text-animate")    
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass(()=>"text-animate-hover")
        },3000)
    },[])
    return(
    <>    
        <Loader type="line-scale"/>
        <div className="page--content projects--page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        text="My Projects"
                        idx={15}
                    />
                </h1>
                <div className="language-switch">
                    <button 
                        className={lang.list==="js" && "isActive"}
                        onClick={switchLang}
                        >JavaScript
                    </button>
                    <button 
                        className={lang.list==="py" && "isActive"}
                        onClick={switchLang}
                        >Python
                    </button>
                </div>
                <div className="projects__list">
                    {lang.list==="js"?JSList:PyList}
                </div>
            </div>
            {preview}
        </div>
    </>

    )
}

export default Projects;

