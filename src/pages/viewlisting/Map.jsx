import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import logger from 'sabio-debug';
import PropTypes from 'prop-types';

const containerStyle = {
    width: '350px',
    height: '300px',
};

const Map = (props) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const _logger = logger.extend('map');
    const [locationState, setLocationState] = useState({
        center: { lat: -20, lng: -38.523 },
        city: '',
    });

    const [map, setMap] = useState(null);
    _logger('Map data:', map);

    useEffect(() => {
        _logger('update to props');
        if (props.locationData) {
            setLocationState((oldState) => {
                let newState = { ...oldState };
                newState.center = { lat: props.locationData.latitude, lng: props.locationData.longitude };
                newState.city = props.locationData.cityName;
                return newState;
            });
            if (map) {
                map.setZoom(10);
            }
        }
    }, [props.locationData]);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(locationState.center);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        _logger(map);
        setMap(null);
    }, []);

    return isLoaded ? (
        <div>
            <h3>{locationState.city}</h3>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={locationState.center}
                zoom={5}
                onLoad={onLoad}
                onUnmount={onUnmount}>
                <></>
            </GoogleMap>
        </div>
    ) : (
        <></>
    );
};

Map.propTypes = {
    locationData: PropTypes.shape({
        cityName: PropTypes.string,
        latitude: PropTypes.number,
        longitude: PropTypes.number,
    }),
};

export default Map;
