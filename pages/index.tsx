import Head from 'next/head';
import {FC, useEffect, useState} from 'react';



const Home: FC = () => {


    return (
        <>
            <Head>
                <title>WOWA Challenge</title>
                <link rel="shortcut icon" href="/favicon.ico" />

            </Head>
            <h1 className="pt-8 text-gray-600 text-center font-bold text-2xl md:text-4xl">WOWA Challenge</h1>

        </>
    );
};

export default Home;

