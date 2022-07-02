import Skills from "../Data/skills";
import SkillCard from '../Components/SkillCard';

const About = () =>{
	return <main>
        <div className="personal">
            <h4 className="title1">About Me</h4>

            <h1 className="title2">WHO AM I?</h1>

            <p className="info">
                <strong>Hi, I am Ganiu Ibrahim Olalekan </strong>
                and I'm <strong>a Frontend Web Developer</strong> with ReactJs and NextJs,
                <strong> a Backend Web Developer</strong> with Django, Python. Passionate
                 and an ever learning Full Stack Web Developer with great interest in Finance & Technology and writing clean code. 
                 I'm looking for the right opportunity to work in an environment that
                  will help me progress into a Frontend or Backend Web Developer role. I am always passionate
                   about matching my  skills with project at hand to meet product requirements. 
                
            </p>
            <br /><br /><br />
            <h4 className="title1">My Specialty</h4>

            <h1 className="title2">My Skills?</h1>
            <p className="info">
                I have 3+ years of experience with <strong>Frontend</strong> and <strong>Backend</strong> web development and its 
                 technologies such as HTML5, CSS3, Python, JavaScript, jQuery, React, Redux, NextJs and Django. Also
                  GitHub, Adobe Photoshop and MQL4.
                I provide clean code for Expert Advisors, responsive web page accessible to all users 
                regardless of their device and backend development.
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
