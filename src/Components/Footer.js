const Footer = () =>{
	let date = new Date();
	return <footer>
		Copyright © {date.getFullYear} All rights reserved - Ganiu Ibrahim Olalekan
		<br/>
		<a href="https://github.com/Oluwatobi17/" target="_blank" rel="noreferrer">My GitHub</a>
	</footer>
}

export default Footer;
