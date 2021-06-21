import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

describe("LandingPage tests", () => {
    it('LandingPage component is rendered successfully', () => {
        render(<LandingPage />);
        const linkElement = screen.getByText(/Explore covid data from covid api/i);
        expect(linkElement).toBeInTheDocument();
    })
})
