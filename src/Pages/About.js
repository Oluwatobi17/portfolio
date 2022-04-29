import Skills from "../Data/skills";
import SkillCard from '../Components/SkillCard';

const About = () =>{
	return <main>
        <div className="personal">
            <h4 className="title1">About Me</h4>

            <h1 className="title2">WHO AM I?</h1>

            <p className="info">
                <strong>Hi, I am Ganiu Ibrahim Olalekan </strong>
                and I'm a passionate Nigeria <strong>Frontend Web Developer</strong> who was born in year 2000. 
                I am an undergraduate student in a prestigous university in my country, university
                of Lagos where I am studying Geophysics.
                
            </p>
            <br /><br /><br />
            <h4 className="title1">My Specialty</h4>

            <h1 className="title2">My Skills?</h1>
            <p className="info">
                I have about 2 years of experience with frontend web development and its 
                 technologies such as HTML5, CSS3, JavaScript, jQuery, React, Redux,
                  GitHub, Adobe Photoshop, NextJs and MQL4
                I can provide clean code for a responsive web page accessible to all users 
                regardless of their device.
            </p>

            <div className="skill-card">
                {Skills.map(skill => <SkillCard key={skill.classN} skill={skill} /> )}
            </div>

            <br /><br /><br />
            <h4 className="title1">Education</h4>

            <h1 className="title2">Certificate</h1>
            <div className="education">
                <div className="edu-card">High School Secondary Education</div>
                <div className="edu-card">Diploma in Computer Science</div>
                <div className="edu-card">Undergraduate</div>
            </div>
        </div>
	</main>
}

export default About;
