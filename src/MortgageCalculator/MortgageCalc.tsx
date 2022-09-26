import { useState, useEffect, createContext } from "react";
import ratesdata from'../../data/rates_subset.json';
    function calcMonthlyPayment(homeprice,rate,termLength){
        return homeprice*(rate*(Math.pow((1+rate),termLength))/(Math.pow(1+rate,termLength)-1))
    }
    
    export default function MortgageCalc({theadData,tbodyData,formData}) {
        const row = {
            "source": "TD",
            "year": 1,
            "rate_type": "fixed",
            "rate": 2.79
        }
        let theadDataVal = theadData;
        let termLength = parseInt(formData.termlength.split(" ")[0]);
        let homeprice = formData.homeprice;

        let result = ratesdata;
        for (let i = 0; i < tbodyData.length; i++) {
            result[i]['source'] = tbodyData[i]['source'].toUpperCase();
            result[i]['rate'] = tbodyData[i]['rate'];
            result[i]['monthly payment'] = calcMonthlyPayment(homeprice,parseInt(tbodyData[i]['rate']),termLength)
          }
        
        return (
        <div className="my-5 overflow-x-auto relative border shadow-md sm:rounded-lg">
          <table className="place-content-center border-spacing-4 relative overflow-hidden text-left text-gray-500 text-blue-900 text-2xl">
              <thead className="text-blue-900 text-2xl uppercase bg-white">
                  <tr className="border-b h-6">
                    {theadDataVal.map(heading => {return <th key={heading} className="text-center py-3 px-6 text-blue-900 text-2xl">{heading}</th>})}
                  </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b px-6 text-blue-900 text-2xl text-center h-6">
                    <td>{result[0]['source']}</td>
                    <td>{result[0]['rate']}</td>
                    <td>{result[0]['monthly payment']}</td>
                </tr>
                <tr className="bg-white border-b px-6 text-blue-900 text-2xl text-center h-6">
                    <td>{result[1]['source']}</td>
                    <td>{result[1]['rate']}</td>
                    <td>{result[1]['monthly payment']}</td>
                </tr>
                <tr className="bg-white border-b px-6 text-blue-900 text-2xl text-center h-6">
                    <td>{result[2]['source']}</td>
                    <td>{result[2]['rate']}</td>
                    <td>{result[2]['monthly payment']}</td>
                </tr>
                <tr className="bg-white border-b px-6 text-blue-900 text-2xl text-center h-6">
                    <td>{result[3]['source']}</td>
                    <td>{result[3]['rate']}</td>
                    <td>{result[3]['monthly payment']}</td>
                </tr>
                <tr className="bg-white border-b px-6 text-blue-900 text-2xl text-center h-6">
                    <td>{result[4]['source']}</td>
                    <td>{result[4]['rate']}</td>
                    <td>{result[4]['monthly payment']}</td>
                </tr>
              </tbody>
          </table>
          </div>
        );
      }
      
    
