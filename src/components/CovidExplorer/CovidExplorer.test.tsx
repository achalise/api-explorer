import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CovidExplorer from './CovidExplorer';
import { act } from 'react-dom/test-utils';

jest.mock('react-chartjs-2', () => ({
    Bar: () => null, // add any additional chart types here
    Line: () => null
  }));
describe("CovidExplorer tests", () => {
    const setUp = () => {
        const utils =  render(<CovidExplorer />);
        const countryInput = utils.getByPlaceholderText('Country');
        return {
            countryInput, ...utils
        }
    }

    it('CovidExplorer component is rendered successfully', () => {
        render(<CovidExplorer />);
        const linkElement = screen.getByText(/Statistics by country/i);
        expect(linkElement).toBeInTheDocument();

        const searchBox = screen.getByTestId('country-search-box');
        expect(searchBox).toBeInTheDocument();

        const dataTable = screen.queryByTestId('covid-data-table');
        expect(dataTable).toBeFalsy();
    });

    it('When user searches data for a country, table is displayed with the country data', async () => {
        global.fetch = jest.fn((url) => {
            console.log(`The url`, url);
            switch(url) {
                case `https://api.covid19api.com/countries`:
                    console.log(`matched`);
                    return Promise.resolve({
                        json: () => Promise.resolve([{
                            Country: `Nepal`
                        }])
                    })
                default:
                    return Promise.resolve({
                        json: () => Promise.resolve([{
                            Active: 92928,
                                    City: "",
                                    CityCode: "",
                                    Confirmed: 585100,
                                    Country: "Nepal",
                                    CountryCode: "",
                                    Date: "2021-06-05T00:00:00Z",
                                    Deaths: 7799,
                                    Lat: "0",
                                    Lon: "0",
                                    Province: "",
                                    Recovered: 484373
                    }])
                })                                
        }})
        const {countryInput} = setUp();
        fireEvent.change(countryInput, { target: { value: 'nepal' } });
        expect(countryInput.value).toBe('nepal');
        const searchButton = screen.getByText('Submit');
        fireEvent.click(searchButton);

        const dataTable =  screen.queryByTestId('covid-data-table');
        expect(await screen.findByTestId('covid-data-table')).toBeInTheDocument();
        expect(await screen.getByText(/7799/)).toBeInTheDocument();
    });
})
