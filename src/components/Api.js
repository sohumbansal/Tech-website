// frontend/src/api.js

const API_BASE_URL = 'http://localhost:8000/api/';

export const fetchSoftwareInfo = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}software-info/`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const saveCustomerInfo = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}save-customer-info/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data).toString(),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
