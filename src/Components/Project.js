const Project = (props) =>{
    const {title, link, description, img} = props.project;

    return <div className="project-container">
        {/* <iframe src={link} width="555" height="200" title={title}>
            Sorry your browser does not support inline frames.
        </iframe> */}
        <img src={img} alt="project preview"/>
        <h2>{title}</h2>

        <p>{description}</p>

        <a href={link} target='_blank' rel='noreferrer'>Visit</a>
    </div>
}

export default Project;