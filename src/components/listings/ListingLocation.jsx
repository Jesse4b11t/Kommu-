import React, { useEffect, useState } from 'react';
import listingLocationSchema from '../../schema/listings/listingLocationSchema';
import { withFormik } from 'formik';
import { Form, Card } from 'react-bootstrap';
import * as wizardPropTypes from './listingsPropTypes';
import * as listingService from '../../services/listingService';
import debug from 'sabio-debug';

const _logger = debug.extend('ListingLocation');

const ListingLocation = (props) => {
    const {
        values,
        errors,
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
        onBack,
        backLabel,
        nextLabel,
        onNext,
        cantBack,
    } = props;
    _logger(props, 'ListingLocation props');

    const [states, setStates] = useState([]);
    _logger(states, 'new state States');

    useEffect(() => {
        onChange();
        listingService.post(['States']).then(onTableSuccess).catch(onTableError);
    }, [values]);

    const onTableSuccess = (response) => {
        _logger(response, 'onTableSuccess');
        const states = response.id.states;
        setStates(states);
    };

    const onTableError = (err) => {
        _logger(err, 'onTableError');
    };

    const onChange = () => {
        props.onChange(values);
    };

    const onNextClicked = () => {
        onNext(values);
    };

    const stateOptionsMapper = (stateList) => {
        _logger('stateOptionsMapper');
        let result = [
            <option key={`somsl_none`} value="none">
                Loading
            </option>,
        ];
        _logger(stateList?.length);
        if (stateList) {
            _logger('mapping');
            result = stateList.map((item) => (
                <option key={`somsl_${item.id}`} value={item.id}>
                    {item.name}
                </option>
            ));
        }
        return result;
    };

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit} className="p-1">
                <Card className="p-4 mx-auto" style={{ width: 950 }}>
                    <Card.Header>
                        <h3 className="text-center">Listing Location</h3>
                    </Card.Header>
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="locationTypeId">Location Type</label>
                                <div className="form-group my-2">
                                    <Form.Select
                                        name="locationTypeId"
                                        value={values.locationTypeId}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        className="form-control">
                                        <option>Select One</option>
                                        <option value="1">Home</option>
                                        <option value="2">Business</option>
                                        <option value="3">Billing</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="lineOne">Address 1</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="lineOne"
                                        value={values.lineOne}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="Enter Address"
                                        className="form-control"></Form.Control>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="lineTwo">Address 2</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="lineTwo"
                                        value={values.lineTwo}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="Enter Address"
                                        className="form-control"></Form.Control>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="city">City</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="city"
                                        value={values.city}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="Enter City"
                                        className="form-control"></Form.Control>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="stateId">State</label>
                                <div className="form-group my-2">
                                    <Form.Select
                                        name="stateId"
                                        value={values?.stateId || 0}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        className="form-control">
                                        {stateOptionsMapper(states)}
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="zip">Zipcode</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="zip"
                                        value={values.zip}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="Enter Zipcode"
                                        className="form-control"></Form.Control>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="latitude">Latitude</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="latitude"
                                        value={values.latitude}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="Enter Latitude"
                                        className="form-control"></Form.Control>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="longitude">Longitude</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="longitude"
                                        value={values.longitude}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="Enter Longitude"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="button-group pt-3 row">
                            <div className="col-sm-1">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={onBack}
                                    disabled={isSubmitting || cantBack}>
                                    {backLabel}
                                </button>
                            </div>
                            <div className="col-sm-1">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={
                                        !values.locationTypeId ||
                                        Boolean(errors.locationTypeId) ||
                                        !values.lineOne ||
                                        Boolean(errors.lineOne) ||
                                        !values.zip ||
                                        Boolean(errors.zip) ||
                                        !values.stateId ||
                                        Boolean(errors.stateId) ||
                                        !values.latitude ||
                                        Boolean(errors.latitude) ||
                                        !values.longitude ||
                                        Boolean(errors.longitude)
                                    }
                                    onClick={onNextClicked}>
                                    {nextLabel}
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </Form>
        </React.Fragment>
    );
};

ListingLocation.propTypes = wizardPropTypes.listingPropTypes;

export default withFormik({
    mapPropsToValues: (props) => ({
        locationTypeId: props.formData.locationTypeId,
        lineOne: props.formData.lineOne,
        lineTwo: props.formData.lineTwo,
        city: props.formData.city,
        zip: props.formData.zip,
        stateId: props.formData.stateId,
        stateName: props.formData.stateName || '',
        latitude: props.formData.latitude,
        longitude: props.formData.longitude,
    }),

    validationSchema: listingLocationSchema,

    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(ListingLocation);
