import { useEffect, useState } from "react";
import { isoToLocalDate } from "../../utils/dateUtils";
import LineChart from "../LineGraph/LineGraph";

const fetchDataForCountry = async (country: string): Promise<Array<CovidRecord>> => {
    const response = await fetch(`https://api.covid19api.com/total/country/${country}`);
    const json = await response.json();
    console.log(`The json `, json);
    return json;
}

const CovidDataTable = ({data}: CovidDataTableInput) => {
    console.log(`data passed into table`, data);
    return (
        <>
        { data && data.length > 0 && <div  data-testid='covid-data-table' className="row">    
          <>
                <div className="col-lg-3">Date</div>                    
                <div className="col-lg-3"># Active Cases</div>
                <div className="col-lg-3"># Deaths</div>
                <div className="col-lg-3"># Recovered</div>                
          </>    
          {data && data.map((row: CovidRecord) => 
          <>
                  <div className="col-lg-3">{isoToLocalDate(row.Date)}</div>
                  <div className="col-lg-3">{row.Active}</div>
                  <div className="col-lg-3">{row.Deaths}</div>
                  <div className="col-lg-3">{row.Recovered}</div>
          </>
          )}
          </div> }
        </>
    )
}
export interface CovidDataTableInput {
    data: any
}

const SearchBox = ({handleCountrySelected}: SearchBoxInput) => {
    const [country, setCountry] = useState("");
    const updateCountry = (evt: any) => {
        console.log(`The contry value ${evt.target.value}`);
        setCountry(evt.target.value);
    }
    const submitForm = () => {
        handleCountrySelected(country);
    }

    return (
        <form className="row row-cols-lg-auto g-3 align-items-center">
            <div className="col-12 col-lg-6">
               <input type="text" className="form-control" placeholder='Country' value={country} onChange={updateCountry}></input>
            </div>
            <div className="col-12">
                <button type="button" className="btn btn-primary" onClick={submitForm}>Submit</button>
            </div>
        </form>
    )
}

export interface SearchBoxInput {
    handleCountrySelected: (country: string) => {}
}

export default function CovidExplorer() {
    const [country, setCountry] = useState("");
    const [data, setData] = useState<Array<CovidRecord>>([]);
    const handleCountrySelected = async (country: string) => {
        setCountry(country);
        console.log(`Now get the covid data for the country ${country}`);
        const data = await fetchDataForCountry(country);
        console.log(`Fetched data for the country`, data);
        setData(data);
    }
    const [countries, setCountries] = useState<Array<Country>>();
    useEffect(() => {
        async function fetchCuntries() {
            const response =  await fetch(`https://api.covid19api.com/countries`);
            console.log(`the response: `, response);
            const list = await response.json();
            setCountries(list);
         }
         fetchCuntries();
         return () => {console.log(`Now disposing`)}
    }, [])
    return (
        <div className="container">
           <h5>Statistics by country</h5>
           <div data-testid='country-search-box'>
             <SearchBox handleCountrySelected={handleCountrySelected} ></SearchBox>
           </div>
           <CovidDataTable data={data}></CovidDataTable>
           { data && data.length > 0 && <LineChart covidRecords={data}></LineChart>}
        </div>
    )
}

export interface Country {
    ISO: String;
    slug: String;
    Country: String;
}

export interface CovidRecord{
    Country: string;
    Confirmed: number;
    Deaths: number;
    Recovered: number;
    Active: number;
    Date: string;
}