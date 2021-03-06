import ContactForm from '../Components/ContactForm';

const Contact = () =>{
	return <main>
        <div className="personal">
            <h4 className="title1">Get In Touch</h4>

            <h1 className="title2">Contact Me For Hire</h1>

            <div className="contact-container">
                <div className='contact-info-container'>
                    <div className="contact-info">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <p>ganiuibrahim3000@gmail.com</p>
                    </div>
                    <div className="contact-info">
                        <i className="fa fa-address-book-o" aria-hidden="true"></i>
                        <p>Lagos, Nigeria</p>
                    </div>
                    <div className="contact-info">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <p>+234 818 550 2574</p>
                    </div>
                </div>

                <ContactForm />
            </div>

        </div>
	</main>
}

export default Contact;
