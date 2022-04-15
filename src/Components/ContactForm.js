const ContactForm = () =>{
    return <form className="contact-form">
        <input type='text' placeholder="Name" />
        <input type='email' placeholder="Email" />
        <input type='text' placeholder="Subject" />
        <textarea placeholder="Message" rows={5}></textarea>
        
        <input type='submit' value='Send Message' />
    </form>
}

export default ContactForm;