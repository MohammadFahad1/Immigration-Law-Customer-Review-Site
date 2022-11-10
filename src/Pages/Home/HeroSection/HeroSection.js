import React from 'react';
import hero from './../../../assets/hero.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <>
            <section className="text-gray-50 body-font bg-slate-900 min-h-screen flex items-center">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-50">Let me be your <span className="text-blue-500">Immigration & VISA</span> Consultant.</h1>
                        <p className="mb-8 leading-relaxed">GOLDEN IMMIGRATION AND VISA CONSULTANT WITH BEST REVIEWS FROM ALL OVER THE WORLD, WITH A WIDE CUSTOMER BASE.</p>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <Link to='/services'>
                                <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-8 py-4 text-center mr-2 mb-2">Get Service</button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={hero} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;