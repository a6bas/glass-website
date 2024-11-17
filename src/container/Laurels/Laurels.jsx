import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import CSS for dropdown
import './RequestQuote.css';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      message: formData.message,
    };

    emailjs
      .send(
        'service_3kieude', // Replace with your EmailJS Service ID
        'template_ykrsgfp', // Replace with your EmailJS Template ID
        templateParams,
        '9ntfo8bL17VJi3jzv' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          alert('Quote request sent successfully!');
          setIsSubmitted(true); // Show thank you message
          setFormData({
            name: '',
            phone: '',
            email: '',
            service: '',
            message: '',
          });
        },
        (error) => {
          alert('Error sending the request:', error.text);
        }
      );
  };

  return (
    <div className="app__bg" id="quote">
      <div className="app__requestquote">
        <div className="app__requestquote_container">
          <h1 className="headtext__cormorant">Request a Quote</h1>
          <form className="app__request_form" onSubmit={handleSubmit}>
            <div className="app__form_group">
              <label htmlFor="name">Name <span className="required">*</span></label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="app__form_group phone-input-container">
              <label htmlFor="phone">Phone <span className="required">*</span></label>
              <PhoneInput
  country={'ca'}
  value={formData.phone}
  onChange={(phone) => setFormData({ ...formData, phone })}
  enableAreaCodes={true}
  disableCountryCode={false}
  inputStyle={{
    width: '100%',
    border: '1px solid #DCCA87',
    borderRadius: '5px',
    paddingLeft: '50px', // Ensure padding for the flag and country code
    paddingRight: '15px', // Give extra space for the number input
    paddingTop: '10px',
    paddingBottom: '10px',
    background: 'transparent',
    color: '#fff',
  }}
  buttonStyle={{
    border: 'none',
    background: 'transparent',
    padding: '0 10px',
  }}
  containerStyle={{
    textAlign: 'left',
    width: '100%',
  }}
/>

            </div>
            <div className="app__form_group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="app__form_group">
              <label htmlFor="service">Service/Product <span className="required">*</span></label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select a Service</option>
                <option value="10mm Slider Shower">10mm Slider Shower</option>
                <option value="6mm Two Door Slider">6mm Two Door Slider</option>
                <option value="8mm Sliders">8mm Sliders</option>
                <option value="Custom Shower Enclosures">Custom Shower Enclosures</option>
                <option value="Mirror Doors">Mirror Doors</option>
                <option value="Mirror Shelving">Mirror Shelving</option>
                <option value="Reillings">Reillings</option>
                <option value="Wall Mirror">Wall Mirror</option>
                <option value="Wash Basin Mirror">Wash Basin Mirror</option>
              </select>
            </div>
            <div className="app__form_group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button type="submit" className="custom__button">Submit</button>
          </form>

          {isSubmitted && (
            <div className="thank-you-message">
              <p>Thank you for submitting your quote request. We will get back to you as soon as possible.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
