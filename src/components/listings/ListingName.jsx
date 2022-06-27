import React, { useEffect } from 'react';
import listingNameSchema from '../../schema/listings/listingNameSchema';
import { withFormik } from 'formik';
import { Form, Card } from 'react-bootstrap';
import * as wizardPropTypes from './listingsPropTypes';
import debug from 'sabio-debug';

const _logger = debug.extend('ListingName');

const ListingName = (props) => {
    const { values, errors, handleChange, handleBlur, handleSubmit, nextLabel, onNext } = props;

    _logger(props, 'props');

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
                        <h3 className="text-center">Create a Listing</h3>
                    </Card.Header>
                    <div className="form-group mt-2">
                        <label htmlFor="internalName">Internal Name</label>
                        <div className="form-group my-2">
                            <Form.Control
                                name="internalName"
                                value={values.internalName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                placeholder="Enter Internal Name"
                                className="form-control"
                            />
                        </div>

                        <label htmlFor="title">Title</label>
                        <div className="form-group my-2">
                            <Form.Control
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                placeholder="Enter Title"
                                className="form-control"
                            />
                        </div>

                        <label htmlFor="shortDescription">Short Description</label>
                        <div className="form-group my-2">
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="shortDescription"
                                value={values.shortDescription}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                className="form-control"
                            />
                        </div>

                        <label htmlFor="description">Full Description</label>
                        <div className="form-group my-2">
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                className="form-control"
                            />
                        </div>

                        <div className="button-group pt-3">
                            <button
                                type="submit"
                                className="btn btn-primary ml-2"
                                disabled={
                                    !values.internalName ||
                                    Boolean(errors.internalName) ||
                                    !values.title ||
                                    Boolean(errors.title) ||
                                    !values.shortDescription ||
                                    Boolean(errors.shortDescription) ||
                                    !values.description ||
                                    Boolean(errors.description)
                                }
                                onClick={onNextClicked}>
                                {nextLabel}
                            </button>
                        </div>
                    </div>
                </Card>
            </Form>
        </React.Fragment>
    );
};

ListingName.propTypes = wizardPropTypes.listingPropTypes;

export default withFormik({
    mapPropsToValues: (props) => ({
        internalName: props.formData.internalName,
        title: props.formData.internalName,
        shortDescription: props.formData.shortDescription,
        description: props.formData.description,
    }),

    validationSchema: listingNameSchema,

    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(ListingName);
