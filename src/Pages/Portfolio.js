import { useEffect } from 'react';

import Project from '../Components/Project';
import Projects from '../Data/projects';

const Portfolio = () =>{
    useEffect(()=>{
        fetch('https://portfolio-f576a-default-rtdb.firebaseio.com/portfoliovisitors.json', {
            method: 'POST',
            body: JSON.stringify({
                date: new Date().toString()
            })
        })
        .then(res => res.json());
    }, []);
    return <div className="portfolio-container">
        {Projects.map(project => <Project key={project.title} project={project} />)}
    </div>
}

export default Portfolio;