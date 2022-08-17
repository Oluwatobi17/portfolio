import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Portfolio from './Pages/Portfolio';

const App = () =>{
	return <>
		<Header />
		<Routes>
			<Route path='/' element={<About />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/projects' element={<Portfolio />} />
			<Route path='*' element={<Home />} />
		</Routes>
		<Footer />
	</>
}

export default App;
