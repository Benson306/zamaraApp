import React, { useState, useEffect } from 'react';
import { View,Text, ActivityIndicator } from 'react-native';
import { xml2json } from 'xml-js';
import Card from '../utils/Card';

export default Continent = () =>{
      const [countries, setCountries] = useState([]);
      const [ loading, setLoading ] = useState(true)

      useEffect(()=>{

        const soapMessage = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
          <soapenv:Header/>
          <soapenv:Body>
              <web:ListOfContinentsByName/>
          </soapenv:Body>
        </soapenv:Envelope>`;

        // Send the SOAP request using the Fetch API
        fetch('http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/xml;charset=UTF-8',
                'SOAPAction': 'http://www.oorsprong.org/websamples.countryinfo/ListOfContinentsByName'
            },
            body: soapMessage
        })
        .then(response => response.text())
        .then(responseText => {

            const options = {
              compact: true,
              ignoreDeclaration: true,
              ignoreInstruction: true,
              ignoreComment: true,
              ignoreAttributes: true,
              ignoreCdata: true,
              ignoreDoctype: true
            };
            
          const response = xml2json(responseText, options);

          let newResponse = JSON.parse(response);

          const continents = newResponse["soap:Envelope"]["soap:Body"]["m:ListOfContinentsByNameResponse"]["m:ListOfContinentsByNameResult"]["m:tContinent"];

          const obj = continents.map(continent => {
              let continentCode = continent["m:sCode"]._text 
              let continentName = continent["m:sName"]._text

              return { continentCode, continentName }
            })

            setCountries(obj);
            setLoading(false);
           
        })
        .catch(error => {
          console.error(error)
          setLoading(false);
        });

      },[])

return(
  <View>
    {
      loading ? 
            <View style={{flex:1, justifyContent:'center', alignItems:'center', marginTop:30 }}>
                <ActivityIndicator size='large'  color="#009999"/>
            </View> 
      : 
      
      <View style={{padding: 20}}>
        {
          countries.map(country =>(
            <View style={{marginBottom:10}} key={country.continentCode}>
              <Card>
                <Text style={{fontWeight:'bold', fontSize:18}} key={1}>{country.continentName}</Text>
                <Text>{country.continentCode}</Text>
              </Card>
          </View>
          ))
        }
          
      </View>
    }
    
  </View>
)

}
