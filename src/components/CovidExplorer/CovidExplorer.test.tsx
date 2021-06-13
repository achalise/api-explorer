import React from 'react';
import { render, screen } from '@testing-library/react';
import CovidExplorer from './CovidExplorer';

describe("CovidExplorer tests", () => {
    it('CovidExplorer component is rendered successfully', () => {
        render(<CovidExplorer />);
        const linkElement = screen.getByText(/Statistics by country/i);
        expect(linkElement).toBeInTheDocument();
    })
})
