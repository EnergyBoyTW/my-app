import React, { useEffect, useState } from "react";
import { GraphQLClient } from 'graphql-request';
import Hero from "./Hero";


const App = () => {

    const [countries, setCountries] = useState([])

    const client = new GraphQLClient('https://countries.trevorblades.com/graphql')

    const searchCountry = async () => {
        const query = `
          query {
              countries {
              name
              emoji
              languages{
                  name
              }
              }
          }
        `
        const data = await client.request(query)
        setCountries(data.countries)
      }


    useEffect(() => {
        searchCountry()
    }, []);

    return (
        <>
            <ul>
                {countries.map((country) => (
                                    <Hero data = {country}/>
                                ))}
            </ul>
        </>
    );
}

export default App