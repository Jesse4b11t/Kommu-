import React, { useCallback,useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

import logger from 'sabio-debug';
import GoogleMapsAuto from './GoogleMapAuto.jsx';
import exports from '../../services/locationService.js';
import getLookUps from '../../services/lookUpsService.js';
import { ToastContainer, toast } from 'react-toastify';
import * as locationVerificationService from '../../services/locationVerificationService'


const _logger = logger.extend('location');

const googleApiKey = "AIzaSyASUgxNOHFzT1QVWeL-2YVAu4kYTxnaTco";

const containerStyle = {
    width: '1200px',
    height: '400px',
};                     
                             
const onLoad = (marker) => {
    _logger('marker: ', marker);
};           
           
function Locations() {
    const [locationData, setLocationData] = useState({
        locationTypeId: 1,
        lineOne: '',
        lineTwo: '',
        city: '',
        zip: '',
        state: '',
        latitude: 0,
        longitude: 0,
    });

    const [ setStatesArray] = useState([]);

    const [locationLatLng, setLocationLatLng] = useState({
        lat: 29.0902,
        lng: 17.7129,
    });

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: googleApiKey,
        libraries: ['places'],
    });
  
    useEffect(() => {
        getLookUps(['States']).then(getStatesSuccess).catch(getStatesError);
    }, []);

//     const getId = useCallback(
//         (location) => {
//             _logger(location);
//             _logger(statesArray);
//             for (let index = 0; index < statesArray.length; index++) {
//                 const currentState = statesArray[index];

//                 if (currentState.code === location) return currentState.id;
//             }
//         },
//         [statesArray]
//    );
    const getStatesSuccess = (response) => {
        _logger('GETSTATES: ', response.item.States);
        const statesAR = response.item.States;

        setStatesArray((prevState) => {
            let sArray = { ...prevState };
            sArray = statesAR;
            return sArray;
        });
    };       

    const getStatesError = (errResponse) => {
        _logger('GETSTATESERROR: ', errResponse);
    };
  
  

    const onHandleSelected = useCallback(
        (locationObj, locationGeo) => {
            _logger('TEST: ', locationObj, locationGeo);

            const locationZip = locationObj[locationObj.length - 1].long_name;
            const locationStateCode = locationObj[locationObj.length - 3].short_name;
            const locationCity = locationObj[4].long_name;
            const locationState = locationObj[6].short_name;
_logger(locationZip)
            const removePeriods = () => {
                const newStateCode = locationStateCode.replaceAll('.', '');
                return newStateCode;
            };

            const finalStateCode = removePeriods();

            _logger(finalStateCode);

            setLocationData((prevState) => {
                const locData = { ...prevState };
                locData.lineOne = `${locationObj[0].long_name} ${locationObj[1].long_name}`;
                locData.lineTwo = locationObj[2].long_name;// = ''
                locData.city = locationCity;// locob[2]
                locData.zip = locationZip;
                locData.state = locationState;
                locData.latitude = locationGeo.location.lat();
                locData.longitude = locationGeo.location.lng();
                _logger("locdata", locData)
                return locData;
            });

            setLocationLatLng((prevState) => {
                const latLng = { ...prevState };
                latLng.lat = locationGeo.location.lat();
                latLng.lng = locationGeo.location.lng();
                return latLng;
            });
        },
       [setStatesArray]
    );

    const onAddLocationClicked = (e) => {
        _logger(locationData, 'is firing')
        e.preventDefault();
        _logger(locationData, "myLocationPayload")
        exports.addLocations(locationData).then(addLocationSuccess).catch(addLocationError);
    };

    const addLocationSuccess = (response) => {
        _logger('Success!', response);
        toast.success('Location added', response);

        const blankLocationVerifyRecord = {
            proofOfResidenceUrl: 'Not Submitted',
            proofOfInsuranceUrl : 'Not Submitted',
            proofOfWifiSpeedTestUrl : 'Not Submitted',
            proofResidenceIsVerified : "Pending Approval",
            proofInsuranceIsVerified : "Pending Approval",
            proofWifiIsVerified : "Pending Approval",
            locationId : response.data.item,  // <we need to figure out the right variable for this
            }
            locationVerificationService.insert(blankLocationVerifyRecord).then(onLocationVerifyInsertSuccess).catch(onLocationVerifyInsertError)
            
    };

    const onLocationVerifyInsertSuccess =(data)=> {
        _logger('Success', data)
        }
        const onLocationVerifyInsertError =(error)=> {
            debugger;
        _logger('Err', error)
        }
    const addLocationError = (errResponse) => {
        _logger('Error', errResponse);
        toast.error('Invalid location added', errResponse);
    };

    _logger('STATE', locationData);

    if (!isLoaded) return <div>Loading Map...</div>;
    
        return (
            
            <Row>
                                <ToastContainer />

                <Col className="col-md-4">
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-2">
                                    <Form.Label htmlFor="autocomplete">Locations</Form.Label>
                                    <GoogleMapsAuto onHandleSelected={onHandleSelected} />
                                </Form.Group>
    <Button variant="success" type="submit" onClick={onAddLocationClicked}
     style={{
        boxSizing: `border-box`,
        border: `1px solid transparent`,
        width: `500px`,
        height: `32px`,
        
     }}
    >
                                    Add Location
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-md-8'>
                    <Card>
                        <Card.Body className='col-md-8'>
                            <GoogleMap mapContainerStyle={containerStyle} center={locationLatLng} zoom={5}>
                                <Marker onLoad={onLoad} position={locationLatLng} />
                            </GoogleMap>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    );
} 
 
export default Locations;