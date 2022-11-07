import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Pricing from './Pricing/Pricing';
import Services from './Services/Services';

const Home = () => {
    return (
        <section>
            <HeroSection></HeroSection>
            <Services></Services>
            <Pricing></Pricing>
        </section>
    );
};

export default Home;