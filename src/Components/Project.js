const Project = (props) =>{
    const {title, link, description, img, skills} = props.project;

    return <div className="project-container">
        {/* <iframe src={link} width="555" height="200" title={title}>
            Sorry your browser does not support inline frames.
        </iframe> */}
        <img src={img} alt="project preview"/>

        <center>
            {skills.map(skill => <span title="Stack used for this project" className="techused">{skill}</span>)}
        </center>

        <h2 title="Project Name">{title}</h2>

        <p title="Project description">{description}</p>

        <a href={link} target='_blank' rel='noreferrer'>Visit</a>
    </div>
}

export default Project;