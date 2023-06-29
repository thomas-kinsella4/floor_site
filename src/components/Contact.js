import React from 'react'

const Contact = () => {
  return (
    <div className='text-section-2'>
        <h3 className='header'>CONTACT</h3>
        <form id="contact-form">
            <label className="form-labels">Name:</label>
            <input type="text" className="form-inputs" name="name" placeholder="Name" required></input>
            <label className="form-labels">Email:</label>
            <input type="email" className="form-inputs" name="email" placeholder="Email" required></input>
            <label className="form-labels">Services Inquiring About:</label>
            <select className="form-inputs" name="service-inquiry" required>
                <option value="All">All</option>
                <option value="Hosting">Hosting</option>
                <option value="Web Development">Web Development</option>
                <option value="Site Management">Site Management</option>
                <option value="Other">Other</option>
            </select>
            <label className="form-labels">Addition Info:</label>
            <textarea id="contact-textarea" placeholder="Additional Info" rows="10" name="additional-info"></textarea>       
        </form>
    </div>
  )
}

export default Contact