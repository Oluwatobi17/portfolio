import { useRef, useState } from 'react';

const ContactForm = () =>{
    const [msg, setMsg] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const contactMeHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const message = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value
        }
        fetch('https://portfolio-f576a-default-rtdb.firebaseio.com/messages.json', {
            method: 'POST',
            body: JSON.stringify(message)
        })
        .then(res => res.json())
        .then(res => {
            setMsg({type: 'success', message: 'Message sent!'});
            setIsLoading(false);
            nameRef.current.value = "";
            emailRef.current.value = "";
            subjectRef.current.value = "";
            document.getElementById('message').value = "";
        })
        .catch(e => {
            setMsg({type: 'error', message: 'Error sending message'})
            setIsLoading(false);
        });
        
    }

    return <form className="contact-form" onSubmit={contactMeHandler}>
        {Object.keys(msg).length>0 && <p className={msg.type==='error'?'danger':'success'}>{msg.message}</p>}
        <input type='text' placeholder="Name" required ref={nameRef}/>
        <input type='email' placeholder="Email" required ref={emailRef}/>
        <input type='text' placeholder="Subject" required ref={subjectRef}/>
        <textarea placeholder="Message" rows={5} required ref={messageRef} id="message"></textarea>
        
        <input type='submit' value={isLoading ? 'Sending Message' : 'Send Message'} disabled={isLoading ? true:false} />
    </form>
}

export default ContactForm;