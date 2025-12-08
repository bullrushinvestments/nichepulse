import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Spinner } from '@chakra-ui/react';

interface Test {
  id: string;
  title: string;
  content: string;
}

interface WriteTestsProps {
  onSubmit: (test: Test) => void;
  loading?: boolean;
  error?: string | null;
}

const initialValues = {
  title: '',
  content: ''
};

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required')
});

const WriteTests: React.FC<WriteTestsProps> = ({ onSubmit, loading, error }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      onSubmit({ id: Date.now().toString(), title: values.title, content: values.content })
        .then(() => {
          // Reset form after submission
          formik.resetForm();
        })
        .catch((err) => console.error('Error submitting test:', err))
        .finally(() => setIsSubmitting(false));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      {error && <div role="alert" aria-live="assertive" className="text-red-500">{error}</div>}
      <label htmlFor="title" className="block text-sm font-medium">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        aria-invalid={formik.touched.title && formik.errors.title ? 'true' : 'false'}
        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
          formik.touched.title && formik.errors.title
            ? 'ring-red-300 placeholder:text-red-300 focus:ring-red-500'
            : 'ring-gray-300 focus:ring-indigo-600'
        }`}
      />
      {formik.touched.title && formik.errors.title ? (
        <div className="text-sm text-red-600" aria-live="polite">{formik.errors.title}</div>
      ) : null}

      <label htmlFor="content" className="block text-sm font-medium">Content</label>
      <textarea
        id="content"
        name="content"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.content}
        aria-invalid={formik.touched.content && formik.errors.content ? 'true' : 'false'}
        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
          formik.touched.content && formik.errors.content
            ? 'ring-red-300 placeholder:text-red-300 focus:ring-red-500'
            : 'ring-gray-300 focus:ring-indigo-600'
        }`}
      />
      {formik.touched.content && formik.errors.content ? (
        <div className="text-sm text-red-600" aria-live="polite">{formik.errors.content}</div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          isSubmitting ? 'cursor-not-allowed opacity-50' : ''
        }`}
      >
        {isSubmitting ? <Spinner size="sm" color="white" /> : 'Submit'}
      </button>
    </form>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Spinner } from '@chakra-ui/react';

interface Test {
  id: string;
  title: string;
  content: string;
}

interface WriteTestsProps {
  onSubmit: (test: Test) => void;
  loading?: boolean;
  error?: string | null;
}

const initialValues = {
  title: '',
  content: ''
};

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required')
});

const WriteTests: React.FC<WriteTestsProps> = ({ onSubmit, loading, error }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      onSubmit({ id: Date.now().toString(), title: values.title, content: values.content })
        .then(() => {
          // Reset form after submission
          formik.resetForm();
        })
        .catch((err) => console.error('Error submitting test:', err))
        .finally(() => setIsSubmitting(false));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      {error && <div role="alert" aria-live="assertive" className="text-red-500">{error}</div>}
      <label htmlFor="title" className="block text-sm font-medium">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        aria-invalid={formik.touched.title && formik.errors.title ? 'true' : 'false'}
        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
          formik.touched.title && formik.errors.title
            ? 'ring-red-300 placeholder:text-red-300 focus:ring-red-500'
            : 'ring-gray-300 focus:ring-indigo-600'
        }`}
      />
      {formik.touched.title && formik.errors.title ? (
        <div className="text-sm text-red-600" aria-live="polite">{formik.errors.title}</div>
      ) : null}

      <label htmlFor="content" className="block text-sm font-medium">Content</label>
      <textarea
        id="content"
        name="content"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.content}
        aria-invalid={formik.touched.content && formik.errors.content ? 'true' : 'false'}
        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
          formik.touched.content && formik.errors.content
            ? 'ring-red-300 placeholder:text-red-300 focus:ring-red-500'
            : 'ring-gray-300 focus:ring-indigo-600'
        }`}
      />
      {formik.touched.content && formik.errors.content ? (
        <div className="text-sm text-red-600" aria-live="polite">{formik.errors.content}</div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          isSubmitting ? 'cursor-not-allowed opacity-50' : ''
        }`}
      >
        {isSubmitting ? <Spinner size="sm" color="white" /> : 'Submit'}
      </button>
    </form>
  );
};

export default WriteTests;