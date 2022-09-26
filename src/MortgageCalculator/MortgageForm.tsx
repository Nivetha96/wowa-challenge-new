import { useState, useEffect, createContext } from "react";
import JSXStyle from "styled-jsx/style";
import middleware from "../../lib/mongodb";
import nextConnect from 'next-connect';
import {ObjectID} from 'mongodb';
import MortgageCalc from "./MortgageCalc";
import rates_data from '../../data/rates_subset.json'

const MortgageForm = ({data}) : JSX.Element => {
   
    const [ formData, setformdata ] = useState({
        termlength : "1 Year",
        type : "Fixed",
        homeprice : 50000,
        dwnpymt : 10,
        mortgageamt : 10000,
        amortization : 10
    })
    const [ results, setresults] = useState(data);
    
    const getDbData = async () => {
        let termLength = parseInt(formData.termlength.split(" ")[0]);
        let type = formData.type.toLowerCase();
        let homeprice = formData.homeprice;
        let dwnpymt = formData.dwnpymt;
        let mortgageamt = formData.mortgageamt;
        let amortization = formData.amortization;
        const res = await fetch('http://localhost:3000/api/db?year=' + termLength + '&type=' + type);
        const json = await res.json()
        setresults(json);
      }

      
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    let headingsData = ["Lender","Rate","Monthly Payment"]; 
    
    return (
    <>
    <div className="w-full md:w-2/5 px-3 mt-1 mb-6 md:mb-6 relative"> 
            <form onSubmit={handleSubmit} className="w-full max-w-lg float-left bg-white p-3 hover:border-orange-500" method="post" >
                <div className="flex flex-wrap -mx-3 mb-6 border-gray-300">
                    <div className="w-full md:w-1/2 px-3 mt-3 mb-6 md:mb-6">
                        <label className="block tracking-wide text-blue-900 text-2xl font-bold mb-4" htmlFor="grid-state">Term Length</label>
                        <div className="relative border hover:border-orange-500">
                        <select className="block appearance-none w-full text-2xl bg-white border border-gray-400 focus:border-orange-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="term" value={formData.termlength} onChange={e => {setformdata({...formData,termlength : e.target.value});getDbData()}} >
                            <option selected>1 Year</option>
                            <option>2 Years</option>
                            <option>3 Years</option>
                            <option>4 Years</option>
                            <option>5 Years</option>
                            <option>6 Years</option>
                            <option>7 Years</option>
                            <option>8 Years</option>
                            <option>9 Years</option>
                            <option>10 Years</option>
                            <option>25 Years</option>
                        </select>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-3 mb-6 md:mb-6">
                        <label className="block tracking-wide text-blue-900 text-2xl font-bold mb-4" htmlFor="grid-state">Type</label>
                        <div className="relative border hover:border-orange-500">
                            <select className="block appearance-none w-full text-2xl bg-white border border-gray-400 focus:border-orange-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="type" value={formData.type} onChange={e => {setformdata({...formData,type : e.target.value});getDbData()}}>
                                <option selected>Fixed</option>
                                <option>Variable</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-6">
                        <label className="block tracking-wide text-blue-900 text-2xl font-bold mb-4" htmlFor="grid-state">Home Price</label>
                        <div className="relative border-b hover:border-orange-500">
                            <input className="text-2xl appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="$50000" name="home_price" type="number" value={formData.homeprice} onChange={e => {setformdata({...formData,homeprice : parseInt(e.target.value)});getDbData()}}/>
                        </div>
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-6">
                        <label className="block tracking-wide text-blue-900 text-2xl font-bold mb-4" htmlFor="grid-state">Downpayment (in Percentage)</label>
                        <div className="relative border-b hover:border-orange-500">
                            <input className="text-2xl appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="10%" name="downpayment" type="number" value={formData.dwnpymt} onChange={e => {setformdata({...formData,dwnpymt : parseInt(e.target.value)});getDbData()}} />
                        </div>
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-6">
                        <label className="block tracking-wide text-blue-900 text-2xl font-bold mb-4" htmlFor="grid-state">Mortgage Amount</label>
                        <div className="relative border-b hover:border-orange-500">
                            <input className="text-2xl appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="$10000" name="mortgage_amt" type="number" value={formData.mortgageamt} onChange={e => {setformdata({...formData,mortgageamt : parseInt(e.target.value)});getDbData()}} />
                        </div>
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-6">
                        <label className="block tracking-wide text-blue-900 text-2xl font-bold mb-4" htmlFor="grid-state">Amortization</label>
                        <div className="relative border-b hover:border-orange-500">
                            <input className="text-2xl appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="10 years" name="amortization" value={formData.amortization} onChange={e => {setformdata({...formData,amortization : parseInt(e.target.value)});getDbData()}}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div className="relative w-full md:w-3/5 ">
                        <div className="w-full relative text-sm font-medium hover:background-orange-500 place-content-center text-center text-blue-900 bg-stone-200">
                        <ul className="flex flex-wrap -mb-px">
                            <li className="mr-3 hover:background-orange-500">
                                <div className="background-orange-500">
                                    <a href="#" className="inline-block p-4 text-3xl text-blue-600 rounded-t-lg border-b-2 border-blue-600 active" aria-current="page">New Mortgage</a>
                                </div>
                            </li>
                            <div className="focus:background-orange-500"><li className="mr-3">
                                <a href="#" className="inline-block p-4 text-3xl rounded-t-lg border-b-2 border-transparent hover:border-gray-300">Switch or Transfer</a>
                            </li></div>
                            <div className="focus:background-orange-500"><li className="mr-3">
                                <a href="#" className="inline-block p-4 text-3xl rounded-t-lg border-b-2 border-transparent hover:border-gray-300">Refinancing</a>
                            </li></div>
                        </ul>
                    </div>
                    <MortgageCalc theadData={headingsData} tbodyData={results} formData={formData}/>                    
                </div>
    </>
    );
    
}

MortgageForm.getInitialProps = async () => {
    return { data: rates_data }
  }

export default MortgageForm;


