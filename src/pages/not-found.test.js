import { render, screen } from '@testing-library/react';
import NotFound from './not-found';
import Container from '@mui/material/Countainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

test('File Not Found 404', () => {
    render(<NotFound />);
    const linkElement = screen.getByText(/404/i);
    expect(linkElement).toBeInTheDocument();
});