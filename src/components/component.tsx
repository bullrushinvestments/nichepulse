import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, CircularProgress } from '@mui/material';
import { useMutation } from '@apollo/client';
import { CREATE_BUSINESS_SPECIFICATION } from './graphql/mutations';

const BusinessSpecificationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string(),
  businessType: yup.string().oneOf(['content']).default('content').required(),
});

interface IBusinessSpecification {
  name: string;
  description?: string;
  businessType: 'content';
}

const CreateBusinessSpecification: React.FC = () => {
  const [createBusiness, { loading }] = useMutation(CREATE_BUSINESS_SPECIFICATION);
  const [submitting, setSubmitting] = useState(false);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<IBusinessSpecification>({
    resolver: yupResolver(BusinessSpecificationSchema),
  });

  useEffect(() => {
    if (loading) {
      setSubmitting(true);
    }
  }, [loading]);

  const onSubmit = async (data: IBusinessSpecification) => {
    try {
      await createBusiness({ variables: { input: data } });
      reset();
    } catch (error) {
      console.error('Failed to create business specification:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            placeholder="Enter business specification name"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
            aria-label="business-specification-name"
            inputMode="text"
            autoComplete="off"
            required
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Description"
            placeholder="Enter business specification description (optional)"
            fullWidth
            multiline
            rows={4}
            aria-label="business-specification-description"
            inputMode="text"
            autoComplete="off"
          />
        )}
      />
      <Button type="submit" variant="contained" disabled={submitting} aria-label="create-business-specification">
        {submitting ? <CircularProgress size={20} /> : 'Create'}
      </Button>
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, CircularProgress } from '@mui/material';
import { useMutation } from '@apollo/client';
import { CREATE_BUSINESS_SPECIFICATION } from './graphql/mutations';

const BusinessSpecificationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string(),
  businessType: yup.string().oneOf(['content']).default('content').required(),
});

interface IBusinessSpecification {
  name: string;
  description?: string;
  businessType: 'content';
}

const CreateBusinessSpecification: React.FC = () => {
  const [createBusiness, { loading }] = useMutation(CREATE_BUSINESS_SPECIFICATION);
  const [submitting, setSubmitting] = useState(false);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<IBusinessSpecification>({
    resolver: yupResolver(BusinessSpecificationSchema),
  });

  useEffect(() => {
    if (loading) {
      setSubmitting(true);
    }
  }, [loading]);

  const onSubmit = async (data: IBusinessSpecification) => {
    try {
      await createBusiness({ variables: { input: data } });
      reset();
    } catch (error) {
      console.error('Failed to create business specification:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            placeholder="Enter business specification name"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
            aria-label="business-specification-name"
            inputMode="text"
            autoComplete="off"
            required
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Description"
            placeholder="Enter business specification description (optional)"
            fullWidth
            multiline
            rows={4}
            aria-label="business-specification-description"
            inputMode="text"
            autoComplete="off"
          />
        )}
      />
      <Button type="submit" variant="contained" disabled={submitting} aria-label="create-business-specification">
        {submitting ? <CircularProgress size={20} /> : 'Create'}
      </Button>
    </form>
  );
};

export default CreateBusinessSpecification;