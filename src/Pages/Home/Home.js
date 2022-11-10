import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Contact from './Contact/Contact';
import Feedback from './Feedback/Feedback';
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
            <Feedback></Feedback>
            <Contact></Contact>
        </section>
    );
};

export default Home;