import React from 'react';
import PropTypes from 'prop-types';

function AvailableService(props) {
    const aService = props.service;

    return (
        <div className="card">
            <div className="card-body">
                <i> </i>
                <p className="card-title">{aService.name}</p>
                <p className="card-text">{aService.hasVeteranBenefits}</p>
                <p className="card-text">{aService.isHostProvided}</p>
                <small className="card-text">{aService.description}</small>
            </div>
        </div>
    );
}

AvailableService.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.number.isRequired,
        locationId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        hasVeteranBenefits: PropTypes.number.isRequired,
        isHostProvided: PropTypes.number.isRequired,
        createdBy: PropTypes.number.isRequired,
    }),
};

export default AvailableService;
