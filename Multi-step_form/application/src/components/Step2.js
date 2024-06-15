import React from 'react';

const Step2 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Enter the Personal Details</h1>
      <form>
            <input
        type="text"
        name="occupation"
        value={formData.occupation}
        onChange={handleChange}
        placeholder="Enter Your Occupation"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter Your Phone Number"
      />
      <input
        type="text"
        name="City"
        value={formData.city}
        onChange={handleChange}
        placeholder="Enter Your City"
      />
      </form>
    </div>
  );
};

export default Step2;
