import { useEffect, useState } from "react";

const fetchDataForCountry = async (country: string): Promise<any> => {
    const response = await fetch(`https://api.covid19api.com/total/country/${country}`);
    const json = await response.json();
    return json;
}

const CovidDataTable = ({data}: CovidDataTableInput) => {
    console.log(`data passed into table ${data}`, data);
    return (
        <>
          {data && data.map((row: any) => 
               
                  <div className="col-lg-6">{row.Date}</div>
              
          )}
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
               <input type="text" className="form-control" placeholder='Country' onChange={updateCountry}></input>
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
    const [data, setData] = useState([]);
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
            const list = await response.json();
            setCountries(list);
         }
         fetchCuntries();
         return () => {console.log(`Now disposing`)}
    }, [])
    return (
        <div className="container">
           <h5>Statistics by country</h5>
           <SearchBox handleCountrySelected={handleCountrySelected} ></SearchBox>
           <CovidDataTable data={data}></CovidDataTable>
        </div>
    )
}

export interface Country {
    ISO: String;
    slug: String;
    Country: String;
}