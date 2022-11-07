import React from 'react';
import Feedback from './Feedback/Feedback';
import HeroSection from './HeroSection/HeroSection';
import Pricing from './Pricing/Pricing';
import Services from './Services/Services';

const Home = () => {
    return (
        <section>
            <HeroSection></HeroSection>
            <Services></Services>
            <Pricing></Pricing>
            <Feedback></Feedback>
        </section>
    );
};

export default Home;