import { NavLink, Link, useNavigate } from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate();
    
	return <header>
        <nav>
            <img src="/assets/logo.png" alt="Logo" onClick={()=> navigate('/')}/>

            <div className="nav-links">
                <ul>
                    <li><NavLink to='/' activeclass="active"> Home </NavLink></li>
                    <li><NavLink to='/about' activeclass="active"> About </NavLink></li>
                    <li><NavLink to='/contact' activeclass="active"> Contact </NavLink></li>
                    <li><NavLink to='/projects' activeclass="active"> Projects </NavLink></li>
                </ul>
            </div>
        </nav>
        
        <div className="hero">
            <h5>Hello, my name is</h5>
            <h1>Ganiu Ibrahim <span className="special">Olalekan</span> </h1>
            <h4>I'm a Frontend Web Developer.</h4>

            <a href='https://drive.google.com/file/d/15qThMO9rc10-ZdaMizNJjzunNVoYdHsB/view?usp=sharing' target='_blank' rel='noreferrer'>
                Download Resume
            </a>
        </div>
	</header>
}

export default Header;
