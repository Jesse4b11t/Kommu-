import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import debug from 'sabio-debug';
import validation from '../../../schema/newAccountSchema';
import { newCustomer } from '../../../services/customerService';
import { ToastContainer, toast } from 'react-toastify';
import Logo from '../../../assets/images/kommumainlogo.png';
import Image from '../../../assets/images/background_image.jpg';
import ecommerceService from '../../../services/ecommerceService';
import 'react-toastify/dist/ReactToastify.css';
import { PropTypes } from 'prop-types';

const CreateForm = (props) => {
    const [formState] = useState({
        Id: '',
        BussinessType: '',
        Type: '',
        Email: '',
        Country: '',
    });
    const [countries, setCountries] = useState([]);
    const [currentUser, setCurrentUser] = useState({
        email: '',
        id: 0,
        isLoggedIn: false,
        roles: [],
    });

    const _logger = debug.extend('nav');
    const errorStyles = 'text-danger text-end w-75 d-inline-block fs-6';

    useEffect(() => {
        setCurrentUser((prevState) => {
            let newState = { ...prevState };

            newState = { ...props.currentUser };

            return newState;
        });
        ecommerceService.getCountries().then(onGetCountriesSuccess).catch(onGetCountriesError);
    }, []);
    const onGetCountriesSuccess = (response) => {
        setCountries((prevState) => {
            let newState = { ...prevState };

            newState = response.item.data[0].supported_transfer_countries;

            return newState;
        });

        _logger({ countrySuccess: response.item.data[0] });
    };

    const onGetCountriesError = (response) => {
        _logger({ CountryError: response });
    };

    const formChange = (values) => {
        _logger(values);

        values.Id = currentUser.id;
        newCustomer(values).then(addCustomerSuccess).catch(addCustomerError);
    };

    const addCustomerSuccess = (response) => {
        _logger({ success: response });
        window.location.replace(response.item.url);

        toast.success('Successfully added a new account!');
    };

    const addCustomerError = (response) => {
        _logger({ error: response });
        toast.error('Error could not add account!');
    };

    const countryMapper = (country) => {
        return (
            <option key={country} value={country}>
                {country}
            </option>
        );
    };

    return (
        <React.Fragment>
            <div className="container">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Formik
                    initialValues={formState}
                    enableReinitialize={true}
                    onSubmit={formChange}
                    validationSchema={validation}>
                    <Form className="card border border-rounded w-50 m-auto my-5">
                        <div className="row">
                            <div className="col-6">
                                <div
                                    className="w=100 h-100"
                                    style={{
                                        backgroundImage: 'url(' + Logo + '),url(' + Image + ')',
                                        backgroundPosition: 'top, center',
                                        backgroundSize: 'contain,cover',
                                        backgroundRepeat: 'no-repeat, no-repeat',
                                    }}></div>
                            </div>
                            <div className="col-6 mt-2">
                                <div className="row">
                                    <div className="col-7 text-end mt-1">Account Number:</div>
                                    <div className="col-5 text-start">
                                        <Field
                                            name="Id"
                                            type="number"
                                            value={currentUser.id}
                                            className="form-control-sm w-75 border-0 bg-white text-start"
                                            disabled="true"
                                        />
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <h3 className="text-center">Create Stripe Account</h3>
                                </div>
                                <div className="row py-2 ">
                                    <div className="col-12 my-1 text-center">
                                        <label className="text-start w-75" htmlFor="Name">
                                            <span>Type</span>{' '}
                                            <ErrorMessage name={'Type'} component={'span'} className={errorStyles} />
                                        </label>{' '}
                                        <Field as="select" name="Type" className="form-control-sm w-75">
                                            <option value=""> </option>

                                            <option value="custom">Custom</option>
                                            <option value="express">Express</option>
                                        </Field>
                                    </div>
                                    <div className="col-12 my-1 text-center">
                                        <label className="text-start w-75" htmlFor="Email">
                                            Email{' '}
                                            <ErrorMessage name={'Email'} component={'div'} className={errorStyles} />
                                        </label>
                                        <Field id="email" name="Email" type="text" className="form-control-sm w-75" />
                                    </div>

                                    <div className="col-12 my-1 text-center">
                                        <label className="text-start w-75" htmlFor="Phone">
                                            Country{' '}
                                            <ErrorMessage name={'Country'} component={'div'} className={errorStyles} />
                                        </label>
                                        <Field as="select" name="Country" className="form-control-sm w-75">
                                            <option value=""> </option>

                                            {countries.map(countryMapper)}
                                        </Field>
                                    </div>
                                    <div className="col-12 my-1 text-center">
                                        <label className="text-start w-75" htmlFor="Phone">
                                            BussinessType{' '}
                                            <ErrorMessage
                                                name={'BussinessType'}
                                                component={'div'}
                                                className={errorStyles}
                                            />
                                        </label>
                                        <Field as="select" name="BussinessType" className="form-control-sm w-75">
                                            <option value=""> </option>

                                            <option value="individual">Individual</option>
                                            <option value="company">Company</option>
                                            <option value="non_profit">Non-Profit</option>
                                            <option value="government_entity">Government Entity</option>
                                        </Field>
                                        <div className="w-100 px-4">
                                            <hr />
                                        </div>
                                    </div>

                                    <div className="col-12 my-1 text-center">
                                        <label className="text-start w-75" htmlFor="Description">
                                            Description
                                        </label>
                                        <Field
                                            component={'textarea'}
                                            name="Description"
                                            as="input"
                                            className="form-control-sm w-75"
                                        />
                                        <ErrorMessage name={'Description'} component={'div'} className={errorStyles} />
                                    </div>

                                    <div className="text-center mt-2">
                                        <button type="submit" className="btn btn-md btn-primary">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </React.Fragment>
    );
};
CreateForm.propTypes = {
    currentUser: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }),
};
export default CreateForm;
