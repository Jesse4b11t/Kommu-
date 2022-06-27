import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Amenities = (props) => {
    const [amenitiesState, setAmenitiesState] = useState({
        servicesArray: [],
    });

    useEffect(() => {
        setAmenitiesState((oldState) => {
            let newState = { ...oldState };
            newState.servicesArray = props.services.map((service) => (
                <div key={service.id}>
                    <h5>- {service.name}</h5>
                </div>
            ));
            return newState;
        });
    }, [props.services]);

    return (
        <div>
            <h3 className="text-decoration-underline">Amenities ({amenitiesState.servicesArray.length})</h3>
            {amenitiesState.servicesArray}
        </div>
    );
};

Amenities.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        })
    ),
};

export default Amenities;
