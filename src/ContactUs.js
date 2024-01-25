import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: '',
    position: '',
    aadhar: '',
    feedback: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/add-feedback', formData);
      console.log(response.data);

      // Show the alert
      alert('Thank you for your response. We will look into it.');

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-form">
      <h2>Fill the form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="contact-form label">Username:</label>
          <input type="text" id="username" name="username" className="contact-form input" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="position" className="contact-form label">Position:</label>
          <input type="text" id="position" name="position" className="contact-form input" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="aadhar" className="contact-form label">Aadhar ID:</label>
          <input type="number" id="aadhar" name="aadhar" className="contact-form input" onChange={handleInputChange} />
        </div>
        <div className="feed">
          <label htmlFor="complaint" className="contact-form label">Feedback:</label>
          <textarea id="complaint" name="complaint" className="contact-form textarea" onChange={handleInputChange}></textarea>
        </div>
        <button type="submit" className="contact-form button">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
