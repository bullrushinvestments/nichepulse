import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    type: string;
    required: boolean;
  }>;
}

interface GatherRequirementsForm {
  requirementTitle: string;
  requirementDescription: string;
  requirementName: string;
  requirementType: string;
  isRequirementRequired: boolean;
}

const RequirementInput = styled.input`
  ${tw`w-full px-4 py-2 border rounded-lg focus:border-blue-500`}
`;

const GatherRequirements: React.FC<IRequirement> = ({ title, description, requirements }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<GatherRequirementsForm>();

  const onSubmit: SubmitHandler<GatherRequirementsForm> = (data) => {
    // Handle form submission logic here
    console.log(data);
    if (currentStep < requirements.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      
      {/* Render form fields based on requirements */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {requirements.map((req, index) => (
          currentStep === index &&
          <div key={index} className="mb-4">
            <label htmlFor={`requirementName-${index}`} className="block text-sm font-medium text-gray-700">
              {req.name}
            </label>
            <RequirementInput
              id={`requirementName-${index}`}
              type="text"
              placeholder={req.required ? `${req.name} (required)` : `${req.name} (optional)`}
              {...register(`requirement${index + 1}`, {
                required: req.required,
                minLength: { value: 3, message: 'Must be at least 3 characters' },
              })}
            />
            <p className="text-red-500">{errors[`requirement${index + 1}`]?.message}</p>
          </div>
        ))}
        
        {/* Submit button */}
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          {currentStep === requirements.length - 1 ? 'Finish' : 'Next'}
        </button>
      </form>
    </div>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    type: string;
    required: boolean;
  }>;
}

interface GatherRequirementsForm {
  requirementTitle: string;
  requirementDescription: string;
  requirementName: string;
  requirementType: string;
  isRequirementRequired: boolean;
}

const RequirementInput = styled.input`
  ${tw`w-full px-4 py-2 border rounded-lg focus:border-blue-500`}
`;

const GatherRequirements: React.FC<IRequirement> = ({ title, description, requirements }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<GatherRequirementsForm>();

  const onSubmit: SubmitHandler<GatherRequirementsForm> = (data) => {
    // Handle form submission logic here
    console.log(data);
    if (currentStep < requirements.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      
      {/* Render form fields based on requirements */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {requirements.map((req, index) => (
          currentStep === index &&
          <div key={index} className="mb-4">
            <label htmlFor={`requirementName-${index}`} className="block text-sm font-medium text-gray-700">
              {req.name}
            </label>
            <RequirementInput
              id={`requirementName-${index}`}
              type="text"
              placeholder={req.required ? `${req.name} (required)` : `${req.name} (optional)`}
              {...register(`requirement${index + 1}`, {
                required: req.required,
                minLength: { value: 3, message: 'Must be at least 3 characters' },
              })}
            />
            <p className="text-red-500">{errors[`requirement${index + 1}`]?.message}</p>
          </div>
        ))}
        
        {/* Submit button */}
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          {currentStep === requirements.length - 1 ? 'Finish' : 'Next'}
        </button>
      </form>
    </div>
  );
};

export default GatherRequirements;