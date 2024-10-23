import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "48146cb0-85b8-4a6c-a31d-fedc9b5980ea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
   <div className="contact">
   <div className="contact-col">
    <h3>Send Us a message <img src={msg_icon} alt="" /></h3>
    <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
    <ul>
        <li><img src={mail_icon} alt="" /> behzadnadeem11@gmail.com</li>
        <li><img src={phone_icon} alt="" />+92-341721870</li>
        <li><img src={location_icon} alt="" /> House No. 123, Street No. 4, Gulshan-e-Iqbal, Block 5,<br /> Karachi, Pakistan.</li>
    </ul>
    </div> 
   <div className="contact-col">
    <form onSubmit={onSubmit }>
      <label >Your name </label>
      <input type="text " name='name' placeholder='Enter your name' required />
      <label htmlFor="">Phone Number</label>
      <input type="tel" name="phone" placeholder='Enter your mobile number' />
      <label>Write your messeges here </label>
      <textarea name="message" placeholder=' Enter your message' ></textarea>
      <button type='submit' className='btn dark-btn'>Submit now <img  src={white_arrow} alt="" /></button>
      </form>
      <span>{result}</span>
      </div> 
   </div>
  )
}

export default Contact;