import React from 'react';
import PropTypes from 'prop-types';
import debug from 'sabio-debug';

//const _logger = debug.extend('AddLocation');

const _logger = debug.extend('AddLocation');

function Location(props) {
    const aLocation = props.service;
    _logger('alocation',aLocation )

    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">{aLocation.lineOne}</p>
                <p className="card-text">{aLocation.lineTwo}</p>
                <p className="card-text">{aLocation.city}</p>
                <p className="card-text">{aLocation.zip}</p>
                <p className="card-text">{aLocation.stateId}</p>
                </div>
                </div>

    );
}

Location.propTypes = {
     service: PropTypes.shape({
        id: PropTypes.number.isRequired,
        locationTypeId: PropTypes.number.isRequired,
        lineOne: PropTypes.string.isRequired,
        lineTwo: PropTypes.string,
        city: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
        stateId: PropTypes.number.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        createdBy: PropTypes.number.isRequired,
        modifiedBy: PropTypes.number.isRequired,

    }),

};

export default Location;
