import React, { useEffect } from 'react';
import { withFormik } from 'formik';
import { Form, Card } from 'react-bootstrap';
import * as wizardPropTypes from './listingsPropTypes';

const ListingAvaiServices = (props) => {
    const {
        values,
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
                        <h3 className="text-center">Available Services</h3>
                    </Card.Header>
                    <div className="form-group mt-2">
                        <label htmlFor="name">Available Service Name</label>
                        <div className="form-group my-2">
                            <Form.Control
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                placeholder="Name"
                                className="form-control"
                            />
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="hasVeteranBenefits">Are there Veteran Benefits?</label>
                                <div className="form-group my-2">
                                    <Form.Select
                                        name="hasVeteranBenefits"
                                        value={values.hasVeteranBenefits}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        className="form-control">
                                        <option>Select One</option>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="isHostProvided">Is it provided by the Host?</label>
                                <div className="form-group my-2">
                                    <Form.Select
                                        name="isHostProvided"
                                        value={values.isHostProvided}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        className="form-control">
                                        <option>Select One</option>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </Form.Select>
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

ListingAvaiServices.propTypes = wizardPropTypes.listingPropTypes;

export default withFormik({
    mapPropsToValues: (props) => ({
        name: props.formData.name,
        hasVeteranBenefits: props.formData.hasVeteranBenefits,
        isHostProvided: props.formData.isHostProvided,
    }),

    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(ListingAvaiServices);
