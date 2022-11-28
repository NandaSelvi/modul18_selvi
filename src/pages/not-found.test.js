import { render, screen } from '@testing-library/react';
import NotFound from './not-found';

test('File Not Found 404', () => {
    render(<NotFound />);
    const linkElement = screen.getByText(/404/i);
    expect(linkElement).toBeInTheDocument();
});