import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Contact from './Contact/Contact';
import HeroSection from './HeroSection/HeroSection';
import Pricing from './Pricing/Pricing';
import Services from './Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <section>
            <HeroSection></HeroSection>
            <Services></Services>
            <Pricing></Pricing>
            <Contact></Contact>
        </section>
    );
};

export default Home;