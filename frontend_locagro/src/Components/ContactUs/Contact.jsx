import React from 'react'
import './Contact.css'
import msg_icon from '../assets1/contact us/msg-icon.png'
import mail_icon from '../assets1/contact us/mail-icon.png'
import phone_icon from '../assets1/contact us/phone-icon.png'
import location_icon from '../assets1/contact us/location-icon.png'



const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4fbef49d-0c3b-4f74-a8dd-760b619d36f3");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());  
        if(res.success){
            console.log("Success", res);
            setResult(res.message);
            event.target.reset();
        }else{
            console.log("Error",res);
            setResult(res.message);
        }

    };

  return (
<div className='contact'>
    <div className="contact-col">
            <h3>Send Us message <img src={msg_icon} alt="" /></h3>
            <p>Join 2000+ subscribers</p>
            <span>Stay in the loop with everything 
                you need to know
            </span>
            <ul>
                <li>Contact @Team Locagrow </li>
                <li><img src={phone_icon} alt="" />+91 xxxxxxxxxx</li>
                <li><img src={location_icon} alt="" />Nashik</li>
            </ul>

    </div>

    <div className="contact-col">
    <form onSubmit = {onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder = 'Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Email</label>
            <input type="email" name='Email' placeholder='Enter your Email' required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
            <button type="submit" className='btn '>Submit Now</button>
        </form>
        <span>{result}</span>
    </div>

    
</div>
  )
}

export default Contact