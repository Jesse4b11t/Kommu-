import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage, Form as FF } from 'formik';
import { Card, Form, Row, Col } from 'react-bootstrap';
import debug from 'sabio-debug';
import toastr from 'toastr';

import availableServiceServices from '../../services/availableServiceService';
import validation from '../../schema/newServiceSchema';

const _logger = debug.extend('NewService');
false && _logger();

const serviceAddSchema = validation;

function NewService() {
    const [addServiceData] = useState({
        formData: {
            locationId: 1,
            name: '',
            description: '',
            hasVeteranBenefits: false,
            isHostProvided: false,
            createdBy: 1,
        },
    });

    const handleSubmit = (values) => {
        values.hasVeteranBenefits = values.hasVeteranBenefits ? 1 : 0;
        values.isHostProvided = values.isHostProvided ? 1 : 0;
        _logger('Create button clicked', values);

        availableServiceServices.addService(values).then(onAddServiceSuccess).catch(onAddServiceError);
    };

    const onAddServiceSuccess = (response) => {
        toastr.success('Your service was created!');
        _logger('onaAddServiceSuccess response ->', response);
    };

    const onAddServiceError = (err) => {
        _logger('error', err);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Formik
                            enableReinitialize={true}
                            initialValues={addServiceData.formData}
                            onSubmit={handleSubmit}
                            validationSchema={serviceAddSchema}>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <h2 className="mb-3 header-title">Add New Service</h2>
                                            <FF>
                                                <Form.Group className="mb-3">
                                                    <label htmlFor="locationId">Location Id</label>
                                                    <Field
                                                        type="number"
                                                        name="locationId"
                                                        className="form-control"
                                                        placeholder="0"
                                                    />
                                                    <ErrorMessage name="locationId" component="div" className="" />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label htmlFor="name">Service Name</Form.Label>
                                                    <Field
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Service Name"
                                                    />
                                                    <ErrorMessage name="name" component="div" className="" />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <div className="mb-3">
                                                        <label htmlFor="description" className="form-label">
                                                            Description
                                                        </label>
                                                        <Field
                                                            type="textarea"
                                                            name="description"
                                                            className="form-control"
                                                            placeholder="Description..."
                                                        />
                                                        <ErrorMessage name="description" component="div" className="" />
                                                    </div>
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Check className="mb-3">
                                                        <Field
                                                            type="checkbox"
                                                            name="hasVeteranBenefits"
                                                            className="form-check-input"
                                                        />
                                                        <label htmlFor="hasVeteranBenefits">Has Veteran Benefits</label>
                                                        <ErrorMessage
                                                            name="hasVeteranBenefits"
                                                            component="div"
                                                            className=""
                                                        />
                                                    </Form.Check>
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Check className="mb-3">
                                                        <Field
                                                            type="checkbox"
                                                            name="isHostProvided"
                                                            className="form-check-input"
                                                        />
                                                        <label htmlFor="isHostProvided" className="form-check-label">
                                                            Is Host Provided
                                                        </label>
                                                        <ErrorMessage
                                                            name="isHostProvided"
                                                            component="div"
                                                            className=""
                                                        />
                                                    </Form.Check>
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <label htmlFor="createdBy">CreatedBy</label>
                                                    <Field
                                                        type="number"
                                                        name="createdBy"
                                                        className="form-control"
                                                        placeholder="0"
                                                    />
                                                    <ErrorMessage name="createdBy" component="div" className="" />
                                                </Form.Group>
                                                <button type="submit" className="btn btn-primary">
                                                    Create
                                                </button>
                                            </FF>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
}

NewService.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.number.isRequired,
        locationId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        hasVeteranBenefits: PropTypes.bool.isRequired,
        isHostProvided: PropTypes.bool.isRequired,
        createdBy: PropTypes.number.isRequired,
    }),
};

export default NewService;
