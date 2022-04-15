import Project from '../Components/Project';
import Projects from '../Data/projects';

const Portfolio = () =>{
    return <div className="portfolio-container">
        {Projects.map(project => <Project key={project.title} project={project} />)}
    </div>
}

export default Portfolio;