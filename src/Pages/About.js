import Skills, { Learning } from "../Data/skills";
import SkillCard from '../Components/SkillCard';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () =>{
    useEffect(()=>{
        fetch('https://portfolio-f576a-default-rtdb.firebaseio.com/homevisitors.json', {
            method: 'POST',
            body: JSON.stringify({
                date: new Date().toString()
            })
        })
        .then(res => res.json());
    }, []);
	return <main>
        <div className="personal">
            <h4 className="title1">About Me</h4>

            <h1 className="title2">WHO AM I?</h1>

            <p className="info">
                <strong>Hi, I am Ganiu Ibrahim Olalekan </strong>
                and I'm <strong>a Frontend Web Developer</strong> with ReactJs-TypeScript and NextJs,
                <strong> a Backend Web Developer</strong> with Django, Python. Passionate
                 and an ever learning Full Stack Web Developer with great interest in Finance & Technology and writing clean code. 
                 I'm looking for the right opportunity to work in an environment that
                  will help me progress into a Frontend or Backend Web Developer role. I am always passionate
                   about matching my  skills with project at hand to meet product requirements. 
                
            </p>
            <br /><br /><br />
            <h4 className="title1">My Specialty</h4>

            <h1 className="title2">My Stacks</h1>
            <p className="info">
                I have over 5 years of experience with <strong>Frontend</strong> and <strong>Backend</strong> web development and its 
                 technologies such as HTML5, CSS3, Python, JavaScript, jQuery, React, Redux, TypeScript,
                  NextJs, ChartJs and Django. Also
                  GitHub, Adobe Photoshop and MQL4.
                I provide clean code for Expert Advisors, responsive web page accessible to all users 
                regardless of their device and backend development.
            </p>

            <div className="skill-card">
                {Skills.map(skill => <SkillCard key={skill.classN} skill={skill} /> )}
            </div>

            <br />

            <div className="seemore">
                <Link to='/projects'> See Projects &#8250;&#8250; </Link>
            </div>

            <br/><br/>
            <h1 className="title2">Currently Learning</h1>
            <p className="info">
                I am actively learning NodeJS then ExpressJS then React Native then Solidity
            </p>

            <div className="skill-card">
                {Learning.map(skill => <SkillCard key={skill.classN} skill={skill} /> )}
            </div>

            <br /><br /><br />
            <h4 className="title1">Education</h4>

            <h1 className="title2">Certificate</h1>
            <div className="education">
                <div className="edu-card">
                    High School Secondary Education (Gbagada Senior Grammar School "2013-2016")
                </div>
                <div className="edu-card">Diploma in Computer Science (Faedat Tech College "2016-2017")</div>
                <div className="edu-card">Undergraduate (University of Lagos "2018-present")</div>
            </div>
        </div>
	</main>
}

export default About;
