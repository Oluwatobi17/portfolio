import Skills from "../Data/skills";
import SkillCard from '../Components/SkillCard';

const About = () =>{
	return <main>
        <div className="personal">
            <h4 className="title1">About Me</h4>

            <h1 className="title2">WHO AM I?</h1>

            <p className="info">
                <strong>Hi, I am Ganiu Ibrahim Olalekan </strong>
                and I'm a passionate Nigeria <strong>Frontend Web Developer</strong> Passionate
                 and ever learning Web Developer with great interest in writing clean code. 
                 I'm currently looking for the right opportunity to work in an environment that
                  will help me progress into a Frontend Web Developer role using HTML5, CSS3, 
                  Javascript ES6, jQuery, Reactjs, Redux, Nextjs, GitHub. I am always passionate
                   about matching my  skills with project at hand to meet product requirements. 
                
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
