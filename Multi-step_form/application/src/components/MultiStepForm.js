import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Success from './Success';

const MultiStepForm = () => {
   
    

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    
    firstName: '',
    lastName: '',
    email: '',
    Occupation:'',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} />;
      default:
        return <Step1 formData={formData} setFormData={setFormData} />;
    }
  };

  if (isSubmitted) {
    return <Success />;
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div>
          {step > 1 && <button type="button" onClick={prevStep}>Back</button>}
          {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
          {step === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
