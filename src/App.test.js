// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MettleAgent title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MettleAgent/i);
    expect(titleElement).toBeInTheDocument();
});
