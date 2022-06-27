import React, { useEffect } from 'react';

import './landing.css';

import Hero from './Hero';
import Services from './Services';
import Kommunity from './Kommunity';
import HowItWorks from './HowItWorks';
import Membership from './Membership';
import SwapperStory from '../../components/SwapperStory/SwapperStory';

import { cities, howToItems, membershipSteps } from './Data';
import PropTypes from 'prop-types';

const Landing = (props) => {
    useEffect(() => {
        if (document.body) document.body.classList.remove('authentication-bg');
    }, []);

    return (
        <>
            <Hero currentUser={props.currentUser} />

            <Services />

            <Kommunity cities={cities} />

            <HowItWorks howItWorksItems={howToItems} />

            <Membership membershipSteps={membershipSteps} />

            <SwapperStory />

        </>
    );
};

Landing.propTypes = {
    currentUser: PropTypes.shape({
        id: PropTypes.number,
        roles: PropTypes.arrayOf(PropTypes.string),
        email: PropTypes.string,
        isLoggedIn: PropTypes.bool.isRequired,
    }),
};

export default Landing;
