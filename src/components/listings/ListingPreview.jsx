import React, { useEffect } from 'react';
import { withFormik } from 'formik';
import { Form, Card } from 'react-bootstrap';
import * as wizardPropTypes from './listingsPropTypes';

const ListingPreview = (props) => {
    const { values, isSubmitting, handleSubmit, onBack, backLabel, nextLabel, onNext, cantBack } = props;

    useEffect(() => {
        onChange();
    }, [values]);

    const onChange = () => {
        props.onChange(values);
    };

    const onNextClicked = () => {
        onNext(values);
    };

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit} className="p-1">
                <Card className="p-4 mx-auto" style={{ width: 950 }}>
                    <Card.Header>
                        <h3 className="text-center">Listing Preview</h3>
                    </Card.Header>
                    <div className="form-group mt-2">
                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Internal Name: </strong>
                                    {props.formData.internalName}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Title: </strong>
                                    {props.formData.title}
                                </p>
                            </div>
                        </div>

                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Short Description: </strong>
                                    {props.formData.shortDescription}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Description: </strong>
                                    {props.formData.description}
                                </p>
                            </div>
                        </div>

                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Location Type: </strong>
                                    {props.formData.locationTypeId === '1' && 'Home'}
                                    {props.formData.locationTypeId === '2' && 'Business'}
                                    {props.formData.locationTypeId === '3' && 'Billing'}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Address: </strong>
                                    {props.formData.lineOne}
                                </p>
                            </div>
                        </div>

                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Address 2: </strong>
                                    {props.formData.lineTwo}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>State: California</strong>
                                </p>
                            </div>
                        </div>

                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Zipcode: </strong>
                                    {props.formData.zip}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Latitude: </strong>
                                    {props.formData.latitude}
                                </p>
                            </div>
                        </div>

                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Longitude: </strong>
                                    {props.formData.longitude}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Bedrooms: </strong>
                                    {props.formData.bedRooms}
                                </p>
                            </div>
                        </div>

                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Baths: </strong>
                                    {props.formData.baths}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Housing Type: </strong>
                                    {props.formData.housingTypeId === '1' && 'Apartment'}
                                    {props.formData.housingTypeId === '2' && 'Condo'}
                                    {props.formData.housingTypeId === '3' && 'Townhome'}
                                    {props.formData.housingTypeId === '4' && 'Home'}
                                    {props.formData.housingTypeId === '5' && 'Backhouse'}
                                </p>
                            </div>
                        </div>

                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Access Type: </strong>
                                    {props.formData.accessTypeId === '1' && 'Shared'}
                                    {props.formData.accessTypeId === '2' && 'Private Room'}
                                    {props.formData.accessTypeId === '3' && 'Entire Place'}
                                    {props.formData.accessTypeId === '4' && 'Personal Residence'}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Guest Capacity: </strong>
                                    {props.formData.guestCapacity}
                                </p>
                            </div>
                        </div>

                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Days Available: </strong>
                                    {props.formData.daysAvailable === '1' && 'Sunday'}
                                    {props.formData.daysAvailable === '2' && 'Monday'}
                                    {props.formData.daysAvailable === '4' && 'Tuesday'}
                                    {props.formData.daysAvailable === '8' && 'Wednesday'}
                                    {props.formData.daysAvailable === '16' && 'Thursday'}
                                    {props.formData.daysAvailable === '32' && 'Friday'}
                                    {props.formData.daysAvailable === '64' && 'Saturday'}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Cost Per Night: </strong>
                                    {props.formData.costPerNight}
                                </p>
                            </div>
                        </div>

                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Cost Per Week: </strong>
                                    {props.formData.costPerWeek}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Check-In Time: </strong>
                                    {props.formData.checkInTime}
                                </p>
                            </div>
                        </div>

                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Check-Out Time: </strong>
                                    {props.formData.checkOutTime}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Amenities: All Selected</strong>
                                </p>
                            </div>
                        </div>

                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Available Service Name: </strong>
                                    {props.formData.name}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Has Veteran Benefits? </strong>
                                    {props.formData.hasVeteranBenefits}
                                </p>
                            </div>
                        </div>

                        <div className="row p-2">
                            <div className="col-sm-6">
                                <p>
                                    <strong>Does the host provide it? </strong>
                                    {props.formData.isHostProvided}
                                </p>
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
                                <button type="submit" className="btn btn-primary" onClick={onNextClicked}>
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

ListingPreview.propTypes = wizardPropTypes.listingPropTypes;

export default withFormik({
    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(ListingPreview);
