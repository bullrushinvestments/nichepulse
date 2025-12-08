import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      title: 'Sample Title',
      content: 'This is a sample content.',
    },
  }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when fetching data', async () => {
    (fetchData as jest.Mock).mockImplementation(() =>
      new Promise((resolve) => setTimeout(() => resolve({}), 100))
    );
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByRole('status')).toBeInTheDocument();
  });

  test('renders content after data is fetched', async () => {
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/Sample Title/i));
    const content = screen.getByText(/This is a sample content./i);
    expect(content).toBeInTheDocument();
  });

  test('displays error message when fetching fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Fetch failed'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/Fetching data failed/i));
  });

  test('handles user input and updates state accordingly', () => {
    const mockHandleInputChange = jest.fn();
    render(
      <CoreFunctionalityComponent handleInputChange={mockHandleInputChange} />
    );
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    expect(mockHandleInputChange).toHaveBeenCalledWith('test');
  });

  test('ensures accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-label', 'search-input');
    expect(screen.getByRole('button')).toBeEnabled();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      title: 'Sample Title',
      content: 'This is a sample content.',
    },
  }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when fetching data', async () => {
    (fetchData as jest.Mock).mockImplementation(() =>
      new Promise((resolve) => setTimeout(() => resolve({}), 100))
    );
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByRole('status')).toBeInTheDocument();
  });

  test('renders content after data is fetched', async () => {
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/Sample Title/i));
    const content = screen.getByText(/This is a sample content./i);
    expect(content).toBeInTheDocument();
  });

  test('displays error message when fetching fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Fetch failed'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/Fetching data failed/i));
  });

  test('handles user input and updates state accordingly', () => {
    const mockHandleInputChange = jest.fn();
    render(
      <CoreFunctionalityComponent handleInputChange={mockHandleInputChange} />
    );
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    expect(mockHandleInputChange).toHaveBeenCalledWith('test');
  });

  test('ensures accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-label', 'search-input');
    expect(screen.getByRole('button')).toBeEnabled();
  });
});