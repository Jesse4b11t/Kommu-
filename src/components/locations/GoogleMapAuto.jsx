import React, { useState } from 'react';
import { Autocomplete} from '@react-google-maps/api';
import logger from 'sabio-debug';
import PropTypes from 'prop-types';

const googleApiKey = "AIzaSyASUgxNOHFzT1QVWeL-2YVAu4kYTxnaTco";

const _logger = logger.extend('google');

function LocationAutocomplete(props) {
    const [autocomplete, setAutocomplete] = useState();
    const onLoad = (autocomplete) => {
        _logger('autocomplete: ', autocomplete);
        setAutocomplete(() => autocomplete);
    };

    const onHandleSelected = () => {          
        _logger('event', autocomplete.getPlace())
                       
        if (autocomplete !== null) {
            _logger('Place Object', autocomplete.getPlace());
            let locationObj = autocomplete.getPlace();
            props.onHandleSelected(locationObj.address_components, locationObj.geometry);
        } else {
            _logger('Autocomplete is not loaded yet!');
        }
    };
    
    return (
        <Autocomplete onLoad={onLoad} onPlaceChanged={onHandleSelected} libraries={["places"]} googleMapsApiKey={googleApiKey} >
            <input type="text" 
             placeholder="Enter an address" className="autocomplete"    style={{
                boxSizing: `border-box`,
                border: `1px solid black`,
                width: `500px`,
                height: `32px`,
                
             }}
               />
        </Autocomplete>
    );
}

LocationAutocomplete.propTypes = {
    onHandleSelected: PropTypes.func,
};

export default LocationAutocomplete;