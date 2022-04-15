import { NavLink, Link } from "react-router-dom";

const Header = () =>{
	return <header>
        <nav>
            <img src="/assets/logo.png" alt="Logo" />

            <div className="nav-links">
                <ul>
                    <li><NavLink to='/' activeClass="active"> Home </NavLink></li>
                    <li><NavLink to='/about' activeClass="active"> About </NavLink></li>
                    <li><NavLink to='/contact' activeClass="active"> Contact </NavLink></li>
                    <li><NavLink to='/projects' activeClass="active"> Projects </NavLink></li>
                </ul>
            </div>
        </nav>
        
        <div className="hero">
            <h5>Hello, my name is</h5>
            <h1>Ganiu Ibrahim <span className="special">Olalekan</span> </h1>
            <h4>I'm a Frontend Web Developer.</h4>

            <Link to='/download-resume'>Download Resume</Link>
        </div>
	</header>
}

export default Header;
