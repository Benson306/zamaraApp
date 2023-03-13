import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {DOMParser} from 'xmldom';


export default function Continents(){
  const [continents, setContinents] = useState([]);


    useEffect(() => {


        const soapMessage = `
        <?xml version="1.0" encoding="utf-8"?>
            <soap12:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                <soap12:Body>
                    <ListOfContinentsByName xmlns="http://www.oorsprong.org/websamples.countryinfo">
                    </ListOfContinentsByName>
                </soap12:Body>
            </soap12:Envelope>`;

        fetch('http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL', {
            method: 'POST',
            headers: {
            'Content-Type': 'text/xml',
            SOAPAction: 'http://www.oorsprong.org/websamples.countryinfo/ListOfContinentsByName',
            },
            body: soapMessage,
        }).then(response => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(response, 'text/xml');

            console.log(doc)
        })

    },[]);

  return (
    <View>
      {/* {continents.map((continent) => (
        <Text key={continent}>{continent}</Text>
      ))} */}
    </View>
  );

};

