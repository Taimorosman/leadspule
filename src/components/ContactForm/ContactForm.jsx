import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    owner_name: '',
    personal_email: '',
    contact_no: '',
    address: '',
    account_title: '',
    bank_name: '',
    account_number: '',
    start_order_date: '',
    total_connections: '',
    price: '',
    account_email: '',
    account_password: '',
    already_rented: '',
    reference_name: '',
    already_restrict: '',
    alternative_contact: '',
    confirm_policies: false
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      'owner_name', 'personal_email', 'contact_no', 'address',
      'account_title', 'bank_name', 'account_number',
      'start_order_date', 'total_connections', 'price',
      'account_email', 'account_password', 'already_rented',
      'reference_name', 'already_restrict', 'alternative_contact'
    ];

    for (let field of requiredFields) {
      if (!formData[field] || formData[field].toString().trim() === '') {
        alert(`Please fill out the "${field.replace(/_/g, ' ')}" field.`);
        return;
      }
    }

    if (formData.already_rented === '') {
      alert('Please select if the account was already rented.');
      return;
    }

    if (formData.already_restrict === '') {
      alert('Please select if the account was ever restricted.');
      return;
    }

    if (!formData.confirm_policies) {
      alert('Please agree to the terms and conditions before submitting.');
      return;
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxD5KsFgdPrNBomNE5itOLVE6gehGOC4u6Bw20tSJtwBjiagq13302EFTSE3XnttlI_1Q/exec';

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setShowSuccess(true);
      setFormData({
        owner_name: '',
        personal_email: '',
        contact_no: '',
        address: '',
        account_title: '',
        bank_name: '',
        account_number: '',
        start_order_date: '',
        total_connections: '',
        price: '',
        account_email: '',
        account_password: '',
        already_rented: '',
        reference_name: '',
        already_restrict: '',
        alternative_contact: '',
        confirm_policies: false
      });

      setTimeout(() => setShowSuccess(false), 5000);
      alert('Successfully Saved');
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting data.');
    }
  };

  return (
    <div className="contact-form-container">
      {showSuccess && (
        <div style={{
          textAlign: 'center',
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '12px',
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          zIndex: '9999',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          transition: 'opacity 0.5s ease',
        }}>
          ✅ Thank you! Your form was submitted successfully.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Submit your account details carefully</h2>

        {/* All fields unchanged */}
        <label>Owner Name</label>
        <input type="text" name="owner_name" value={formData.owner_name} onChange={handleChange} required />

        <label>Personal Email</label>
        <input type="email" name="personal_email" value={formData.personal_email} onChange={handleChange} required />

        <label>Contact Number</label>
        <input type="text" name="contact_no" value={formData.contact_no} onChange={handleChange} required />

        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label>Bank Account Title</label>
        <input type="text" name="account_title" value={formData.account_title} onChange={handleChange} required />

        <label>Bank Name</label>
        <input type="text" name="bank_name" value={formData.bank_name} onChange={handleChange} required />

        <label>Bank Account Number</label>
        <input type="text" name="account_number" value={formData.account_number} onChange={handleChange} required />

        <label>Start Rental Date</label>
        <input type="date" name="start_order_date" value={formData.start_order_date} onChange={handleChange} required />

        <label>Total Connections</label>
        <input type="number" name="total_connections" value={formData.total_connections} onChange={handleChange} required />

        <label>Price</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />

        <label>Account Email</label>
        <input type="email" name="account_email" value={formData.account_email} onChange={handleChange} required />

        <label>Account Password</label>
        <input type="password" name="account_password" value={formData.account_password} onChange={handleChange} required />

        {/* Fixed Dropdowns */}
        <label>Was this account already rented?</label>
        <select name="already_rented" value={formData.already_rented} onChange={handleChange} required>
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>How did you hear about us?</label>
        <input type="text" name="reference_name" value={formData.reference_name} onChange={handleChange} required />

        <label>Has your account ever been restricted?</label>
        <select name="already_restrict" value={formData.already_restrict} onChange={handleChange} required>
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>Select Client (Alternative Contact)</label>
<select name="alternative_contact" value={formData.alternative_contact} onChange={handleChange} required>
  <option value="">Select a client</option>
  <option value="client_1">LeadsPuls_lcy7727</option>
  <option value="client_2">LeadsPulse_Mry424413</option>
  <option value="client_3">LeadsPulse_Tok6100</option>
  <option value="client_4">LeadsPulse_Altr0001</option>
</select>

        {/* Strict Checkbox Validation */}
        <label style={{ fontSize: '13px' }}>
          <input
            type="checkbox"
            name="confirm_policies"
            checked={formData.confirm_policies}
            onChange={handleChange}
            required
          />
          {' '}
          By submitting my LinkedIn account, I agree to all the terms and conditions outlined in this agreement. I acknowledge the mutual responsibilities between myself and the platform, ensuring that both parties uphold their duties throughout this process.
          <br />
          This agreement is a personal commitment to rent out my LinkedIn account for the purpose of boosting my online earnings. I understand that my LinkedIn profile will be used to help increase visibility and unlock passive income opportunities based on my professional identity.
          <br />
          I recognize that this partnership is based on trust, and in return, I will benefit from the opportunity to generate passive income with minimal effort, all while maintaining control over my account.
          <br />
          By agreeing to these terms, I confirm that I fully understand and accept the responsibilities and benefits associated with renting out my LinkedIn account.
          I hereby declare that:

If I change the password, authenticator, or login credentials of the account—or take any such action—without informing the account holder (client), I will be fully responsible and agree to a 3-day suspension without pay. I will also be available to compensate for the 3 days’ salary.

In case I regain access to the account, I will inform the account holder at least 7 days in advance.

If I break any of the rules mentioned above, I accept full responsibility for the consequences.

I confirm that I have not created any new connections (e.g., leads, campaigns, client links, or logins) over the last 7 days.

I further confirm that this account has been active for more than 1 year.
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
