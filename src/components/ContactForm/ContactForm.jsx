import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false); // Add submitted state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., sending data to a server
    alert('Form submitted!'); // Placeholder for submission action
    setSubmitted(true); // Set submitted state to true
  };

  return (
    <div className="form-container">
      {submitted ? ( // Conditional rendering for success message
        <p>Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

// Assuming you might want to apply the wrapper for centering if needed
function ContactFormWrapper() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <ContactForm />
    </div>
  );
}

export default ContactFormWrapper



// function ContactForm() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         comments: '',
//     });
//     const [submissionMessage, setSubmissionMessage] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form data submitted:', formData);
        
//         // Simulate form submission feedback
//         setSubmissionMessage('Thank you for your submission! We will get back to you soon.');

//         // Clear the form by resetting state to initial values
//         setFormData({
//             name: '',
//             email: '',
//             comments: '',
//         });

//         // Optionally, clear the submission message after a few seconds
//         setTimeout(() => setSubmissionMessage(''), 5000);
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name</label>
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="email">Email</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="comments">Comments</label>
//                 <textarea
//                     id="comments"
//                     name="comments"
//                     value={formData.comments}
//                     onChange={handleChange}
//                     required
//                 ></textarea>

//                 <button type="submit">Submit</button>
//             </form>
//             {submissionMessage && <p>{submissionMessage}</p>}
//         </>
//     );
// }

// export default ContactForm;
