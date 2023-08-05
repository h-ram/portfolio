import "./style.scss"
function ProjectCard(props){
    const {id,imgURL,name,desc,tools} = props.project
    const tls = tools.map((t)=>{
        return <li key={"t-"+id}>{t}</li>
    })
    console.log("tls" + tls)
    return (
        <div className="project__card">
            <img src={imgURL} alt="project image"/>
            <div className="project__content">
                <h2>{name}</h2>
                <p>{desc}</p>
                <ul>
                    {tls}
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard;