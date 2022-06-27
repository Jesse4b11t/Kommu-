import React, { useEffect } from 'react';
import listingDescriptionSchema from '../../schema/listings/listingNameSchema';
import { withFormik } from 'formik';
import { Form, Card } from 'react-bootstrap';
import * as wizardPropTypes from './listingsPropTypes';
import debug from 'sabio-debug';

const _logger = debug.extend('ListingDescription');

const ListingDescription = (props) => {
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
    _logger(props, 'ListingDescription props');

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
                <Card className=" p-4 mx-auto" style={{ width: 950 }}>
                    <Card.Header>
                        <h3 className="text-center">Listing Description</h3>
                    </Card.Header>
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="bedRooms">Bedrooms</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="bedRooms"
                                        value={values.bedRooms}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="Enter Quantity of Bedrooms"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="baths">Baths</label>
                                <div className="form-group my-2">
                                    <Form.Control
                                        name="baths"
                                        value={values.baths}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        placeholder="Enter Quantity of Baths"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group mt-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="housingTypeId">Housing Type</label>
                                    <div className="form-group my-2">
                                        <Form.Select
                                            name="housingTypeId"
                                            value={values.housingTypeId}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            variant="outlined"
                                            className="form-control">
                                            <option>Select One</option>
                                            <option value="1">Apartment</option>
                                            <option value="2">Condo</option>
                                            <option value="3">Townhome</option>
                                            <option value="4">Home</option>
                                            <option value="5">Backhouse</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="accessTypeId">Access Type</label>
                                    <div className="form-group my-2">
                                        <Form.Select
                                            name="accessTypeId"
                                            value={values.accessTypeId}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            variant="outlined"
                                            className="form-control">
                                            <option>Select One</option>
                                            <option value="1">Shared</option>
                                            <option value="2">Private Room</option>
                                            <option value="3">Entire Place</option>
                                            <option value="4">Personal Residence</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group mt-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="guestCapacity">Guest Capacity</label>
                                    <div className="form-group my-2">
                                        <Form.Control
                                            name="guestCapacity"
                                            value={values.guestCapacity}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            variant="outlined"
                                            placeholder="Enter Quantity of Guests Allowed"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="daysAvailable">Days Available</label>
                                    <div className="form-group my-2">
                                        <Form.Select
                                            name="daysAvailable"
                                            value={values.daysAvailable}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            variant="outlined"
                                            className="form-control">
                                            <option value="0">Select One</option>
                                            <option value="1">Sunday</option>
                                            <option value="2">Monday</option>
                                            <option value="4">Tuesday</option>
                                            <option value="8">Wednesday</option>
                                            <option value="16">Thursday</option>
                                            <option value="32">Friday</option>
                                            <option value="64">Saturday</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group mt-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="costPerNight">Cost Per Night</label>
                                    <div className="form-group my-2">
                                        <Form.Control
                                            name="costPerNight"
                                            value={values.costPerNight}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            variant="outlined"
                                            placeholder="Enter Cost Per Night"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="costPerWeek">Cost Per Week</label>
                                    <div className="form-group my-2">
                                        <Form.Control
                                            name="costPerWeek"
                                            value={values.costPerWeek}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            variant="outlined"
                                            placeholder="Enter Cost Per Week"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group mt-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="checkInTime">Check-In Time</label>
                                    <div className="form-group my-2">
                                        <Form.Control
                                            name="checkInTime"
                                            type="time"
                                            value={values.checkInTime}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            variant="outlined"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="checkOutTime">Check-Out Time</label>
                                    <div className="form-group my-2">
                                        <Form.Control
                                            name="checkOutTime"
                                            type="time"
                                            value={values.checkOutTime}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            variant="outlined"
                                            className="form-control"
                                        />
                                    </div>
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
                                        !values.bedRooms ||
                                        Boolean(errors.bedRooms) ||
                                        !values.baths ||
                                        Boolean(errors.baths) ||
                                        !values.housingTypeId ||
                                        Boolean(errors.housingTypeId) ||
                                        !values.accessTypeId ||
                                        Boolean(errors.accessTypeId) ||
                                        !values.guestCapacity ||
                                        Boolean(errors.guestCapacity) ||
                                        !values.costPerNight ||
                                        Boolean(errors.costPerNight) ||
                                        !values.costPerWeek ||
                                        Boolean(errors.costPerWeek) ||
                                        !values.checkInTime ||
                                        Boolean(errors.checkInTime) ||
                                        !values.checkOutTime ||
                                        Boolean(errors.checkOutTime) ||
                                        !values.daysAvailable ||
                                        Boolean(errors.daysAvailable)
                                    }
                                    onClick={onNextClicked}>
                                    {nextLabel}
                                </button>
                            </div>
                            <div className="col-sm-11"></div>
                        </div>
                    </div>
                </Card>
            </Form>
        </React.Fragment>
    );
};

ListingDescription.propTypes = wizardPropTypes.listingPropTypes;

export default withFormik({
    mapPropsToValues: (props) => ({
        bedRooms: props.formData.bedRooms,
        baths: props.formData.baths,
        housingTypeId: props.formData.housingTypeId,
        accessTypeId: props.formData.accessTypeId,
        guestCapacity: props.formData.guestCapacity,
        costPerNight: props.formData.costPerNight,
        costPerWeek: props.formData.costPerWeek,
        checkInTime: props.formData.checkInTime,
        checkOutTime: props.formData.checkOutTime,
        daysAvailable: props.formData.daysAvailable,
    }),

    validationSchema: listingDescriptionSchema,

    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(ListingDescription);
