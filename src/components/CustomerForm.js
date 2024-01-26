// frontend/src/components/CustomerForm.js

import React, { useState } from 'react';
import { saveCustomerInfo } from './Api';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = async () => {
    try {
      const result = await saveCustomerInfo(formData);
      console.log('API Response:', result);
      // Handle the API response as needed (e.g., show a success message)
    } catch (error) {
      console.error('API Error:', error);
      // Handle the API error as needed (e.g., show an error message)
    }
  };

  return (
    <form>
      <label>Name:</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <label>Email:</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <label>Message:</label>
      <textarea
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <button type="button" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  );
};

export default CustomerForm;
