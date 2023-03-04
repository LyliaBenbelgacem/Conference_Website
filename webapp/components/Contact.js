import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
    try { 
      const response = await fetch('/api/mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({name, email, message}),
      });
      const data = await response.json();
      setStatus(data.message);
    }catch (error) {
      console.error(error);
      setStatus('Error occured while trying to send message');
    }
  }
  return (
    <div id="Contact" class="contact">
      <div class="container">
        <div class="main-heading">
          <h2>Contact</h2>
          <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt</p>
        </div>
        <div class="content">
          <form action="">
            <input class="main-input" type="text" name="name" placeholder="Your name"  onChange={(event) => setName(event.target.value)} required/>
            <input class="main-input" type="email" name="mail" placeholder="Your Email" onChange={(event) => setEmail(event.target.value)} required/>
            <textarea class="main-input" name="message" cols="30" rows="10" placeholder="Your message" onChange={(event) => setMessage(event.target.value)} required />
            <input type="submit" value="Send Message" onClick={handleSubmit}/>
          </form>
          <div class="info">
            <h4>Get in Touch</h4>
            <span class="phone">+00 123.456.789</span>
            <span class="phone">+00 123.456.789</span>
            <h4>Where We Are</h4>
            <address>
              Awesome Address 17<br />New York, NYC<br />123-4567-890<br />USA
            </address>
          </div>
        </div>
      </div>
    </div>
  )
}