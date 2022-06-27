import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import debug from 'sabio-debug';
import profile from '../../services/userProfileSerivce';
import frontEndValidation from '../../schema/userProfileSchema';
import PropTypes from 'prop-types';

const _logger = debug.extend('AddProfile');

function AddProfile(props) {
    const currentUser = props.currentUser;
    const formData = useState({
        UserId: currentUser.id,
        FirstName: '',
        LastName: '',
        Mi: '',
        AvatarUrl: '',
    });

    const handleSubmit = (values) => {
        _logger('submit was clicked', values);
        profile.addProfile(values).then(onAddProfileSucces).catch(onAddProfileError);
    };

    const onAddProfileSucces = (response) => {
        _logger('response from add', response);
    };

    const onAddProfileError = (err) => {
        _logger('error from add', err);
    };

    _logger('profile state', formData);
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Formik
                        enableReinitialize={true}
                        initialValues={formData[0]}
                        onSubmit={handleSubmit}
                        validationSchema={frontEndValidation}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="FirstName">First Name</label>
                                <br />
                                <Field type="text" name="FirstName" className="form-control" />
                                <ErrorMessage name="FirstName" component="div" className="alert alert-danger" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="LastName">Last Name</label>
                                <br />
                                <Field type="text" name="LastName" className="form-control" />
                                <ErrorMessage name="LastName" component="div" className="alert alert-danger" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Mi">Middle Initial</label>
                                <br />
                                <Field type="text" name="Mi" className="form-control" />
                                <ErrorMessage name="Mi" component="div" className="alert alert-danger" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="AvatarUrl">Avatar Url</label>
                                <br />
                                <Field type="text" name="AvatarUrl" className="form-control" />
                                <ErrorMessage name="AvatarUrl" component="div" className="alert alert-danger" />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

AddProfile.propTypes = {
    currentUser: PropTypes.shape({
        id: PropTypes.number,
        roles: PropTypes.arrayOf(PropTypes.string),
        email: PropTypes.string,
        isLoggedIn: PropTypes.bool,
    }),
};

export default AddProfile;
