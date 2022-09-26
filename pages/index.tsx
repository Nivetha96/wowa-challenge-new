import Head from 'next/head';
import {FC, useEffect, useState} from 'react';
import data from '../data/rates_subset.json'
//import middleware from "../../lib/mongodb";
import nextConnect from 'next-connect';
import Nav from 'src/Nav/Nav';
import MortgageForm from 'src/MortgageCalculator/MortgageForm';
import MortgageCalc from 'src/MortgageCalculator/MortgageCalc';


/*export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/db");
    const json = await res.json();
    return {
      props: {
        data: json,
      },
    };
}*/

const getHeadings = () => {
    return Object.keys(data[0]);
}

const Home: FC = () => {

    return (
        <>
            <Head>
                <title>WOWA Challenge</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

            </Head>
            <body className='bg-sky-50'>
            <Nav/>
            <div className="flex justify-between py-5 px-20 mt-3.5">
                <div className="w-full md:w-3/5 px-3 mt-3 mb-6 md:mb-2">
                    <p className="font-bold leading-tight text-7xl mt-3 mb-2 text-blue-900">Mortgage Rates Calculator<span className="font-bold text-5xl text-orange-500">.</span></p>
                    <p className="underline decoration-orange-500 leading-tight text-2xl mt-0 text-blue-900">As of September 26th,2022</p>
                </div>
                <div className="w-60 md:w-2/5 px-3 mt-3 mb-6 md:mb-2">
                    <img className="float-right object-scale-down h-48 w-96" src="/ontario.png"></img>

                </div>
            </div>
            <div className="flex justify-between py-5 px-20">
                <MortgageForm data={data}/>
            </div>
            </body>
        </>
    );
};

export default Home;

