import { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contact', formData)
      .then(response => {
        alert('Message sent!');
      })
      .catch(error => {
        console.error('There was an error sending the message:', error);
      });
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2><hr/>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
