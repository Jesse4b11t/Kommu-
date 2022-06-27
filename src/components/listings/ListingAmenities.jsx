import React, { useEffect, useState } from 'react';
import { withFormik } from 'formik';
import { Form, Card } from 'react-bootstrap';
import { MultiSelect } from 'react-multi-select-component';
import * as wizardPropTypes from './listingsPropTypes';
import debug from 'sabio-debug';

const _logger = debug.extend('ListingAmenities');

const ListingAmenities = (props) => {
    const {
        values,
        handleBlur,
        isSubmitting,
        handleSubmit,
        setFieldValue,
        onBack,
        backLabel,
        nextLabel,
        onNext,
        cantBack,
    } = props;
    _logger(props, 'ListingAmenities props');

    useEffect(() => {
        onChange();
    }, [values]);

    const onChange = () => {
        props.onChange(values);
    };

    const onNextClicked = () => {
        onNext(values);
    };

    _logger(values, 'Values');

    const options = [
        { label: 'Parking', value: 1 },
        { label: 'Street Parking', value: 2 },
        { label: 'Covered Parking', value: 3 },
        { label: 'Open Parking', value: 4 },
        { label: 'Pool', value: 5 },
        { label: 'Jacuzzi', value: 6 },
        { label: 'Wifi', value: 7 },
        { label: 'Pets Allowed', value: 8 },
        { label: 'Smoking Allowed', value: 9 },
        { label: 'Infant Safe', value: 10 },
        { label: 'Infants', value: 11 },
        { label: 'Patio', value: 12 },
    ];

    const [selected, setSelected] = useState([]);

    const handleAmenityChange = (includedList) => {
        _logger('handleAmenityChange', includedList);
        setSelected(includedList);
        if (includedList) {
            let amenityId = includedList.map((x) => x.value);
            _logger(amenityId, 'Amenities Id');
            setFieldValue('amenities', amenityId);
        }
    };

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit} className="p-1">
                <Card className="p-4 mx-auto" style={{ width: 950 }}>
                    <Card.Header>
                        <h3 className="text-center">Listing Amenities</h3>
                    </Card.Header>
                    <div className="form-group mt-2">
                        <label htmlFor="amenities">Available Amenities</label>
                        <MultiSelect
                            name="amenities"
                            options={options}
                            labelledBy="Select"
                            value={selected}
                            onChange={handleAmenityChange}
                            onBlur={handleBlur}
                            variant="outlined"
                        />

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
                            <div className="col-sm-11"></div>
                        </div>
                    </div>
                </Card>
            </Form>
        </React.Fragment>
    );
};

ListingAmenities.propTypes = wizardPropTypes.listingPropTypes;

export default withFormik({
    mapPropsToValues: (props) => ({
        amenities: props.formData.amenities,
    }),

    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(ListingAmenities);
