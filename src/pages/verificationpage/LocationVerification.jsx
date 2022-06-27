import React, { useState, useEffect } from 'react';
import FileUploader from '../../components/fileuploader/FileUploader';
import PropTypes from 'prop-types';
import debug from 'sabio-debug';
import { Form, Table } from 'react-bootstrap';
import * as locationVerificationSerivce from '../../services/locationVerificationService';
import './locationverify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LocationVerification = () => {
    const _logger = debug.extend('UserLocationVerification');
    const [addressSelected, updateAddressSelected] = useState(false);
    const [fileTypeSelected, updateFileTypeSelected] = useState(false);
    const [fileTypeForUpload, updateFileTypeForUpload] = useState({});
    const [locationResults, setLocationResults] = useState({
        arrayOfLocationResults: [],
        locationResultsComponents: [],
    });
    const [formData, updateFormData] = useState({
        id: '',
        createdBy: '',
        proofOfResidenceUrl: '',
        proofOfInsuranceUrl: '',
        proofOfWifiSpeedTestUrl: '',
        proofResidenceIsVerified: '',
        proofInsuranceIsVerified: '',
        proofWifiIsVerified: '',
    });

    useEffect(() => {
        locationVerificationSerivce.getByCreatedBy(0, 20).then(onGetLocationsSuccess).catch(onGetLocationsError);
    }, []);

    const onGetLocationsSuccess = (data) => {
        if (data.item.pagedItems) {
            setLocationResults(() => {
                const newResultData = { ...data };
                newResultData.arrayOfLocationResults = [...data.item.pagedItems];
                newResultData.locationResultsComponents = newResultData.arrayOfLocationResults.map(
                    mapLocationVerificationResultsToDropDown
                );
                return newResultData;
            });
        }
    };

    const mapLocationVerificationResultsToDropDown = (location) => {
        if (location.id) {
            return (
                <option key={location.id} value={location.id}>
                    {location.locationDataForUser.address} {location.locationDataForUser.city}{' '}
                    {location.locationDataForUser.state}
                </option>
            );
        }
    };

    const onSelectAddress = (e) => {
        if (e.target.value !== 'Click to view your locations pending verification') {
            let currentSelection = Number(e.target.value);
            locationVerificationSerivce
                .getById(currentSelection)
                .then(onGetVerificationRecordSuccess)
                .catch(onGetVerificationRecordError);
            if (addressSelected === false) {
                updateAddressSelected(!addressSelected);
            }
        } else updateAddressSelected(!addressSelected);
    };

    const onGetVerificationRecordSuccess = (data) => {
        updateFormData(() => {
            let currentRecord = { ...data.item };
            if (addressSelected === false) {
                updateAddressSelected(!addressSelected);
            }
            return currentRecord;
        });
    };

    const onFileTypeClick = (e) => {
        if (e.target.value !== 'Please select a file to upload') {
            updateFileTypeForUpload(e.target.value);
            if (fileTypeSelected === false) {
                updateFileTypeSelected(!fileTypeSelected);
            }
            return fileTypeForUpload;
        } else updateFileTypeSelected(!fileTypeSelected);
    };

    const onHandleUploadSuccess = (data) => {
        _logger('File Upload Success, now proceeding to update location verification record', data.items);
        const currentRecord = formData;
        currentRecord[fileTypeForUpload] = data.items[0].url;

        locationVerificationSerivce
            .update(currentRecord, formData.id)
            .then(onRecordUpdateSuccess)
            .catch(onRecordUpdateError);
    };

    const onRecordUpdateSuccess = () => {
        _logger('Location verification record update successful, now retrieving updated record');
        locationVerificationSerivce
            .getById(formData.id)
            .then(onGetVerificationRecordSuccess)
            .catch(onGetVerificationRecordError);
    };

    const onGetLocationsError = (error) => {
        toast.error(
            'An error occured while retrieving the records for your account. Please contact Kommu support via a link at the bottom of the page'
        );
        _logger("An error occured locating this user's location verification records", error);
        return error;
    };

    const onGetVerificationRecordError = (error) => {
        toast.error(
            'An error occured while retrieving this verification record. Please contact Kommu support via a link at the bottom of the page'
        );
        _logger('An error occured while retrieving this verification record', error);
    };

    const onRecordUpdateError = (error) => {
        toast.error(
            'An error occured while trying to update your record with the information provided. Please contact Kommu support via a link at the bottom of the page'
        );
        _logger('An error occured while updating this verification record', error);
    };

    return (
        <React.Fragment>
            <section className="verification-image"></section>
            <div>
                <ToastContainer />
            </div>
            <div className="dropdown col-md-6 offset-md-3 py-3">
                <h1 className="text-center header-font">Verification</h1>
                <label className="body-font">
                    Select one of your registered addresses to start or resume the verification process!
                </label>
                <Form.Select
                    aria-label="Default select example"
                    onChange={onSelectAddress}
                    className="form-select form-control body-font">
                    <option>Click to view your locations pending verification</option>
                    {locationResults.locationResultsComponents}
                </Form.Select>
            </div>
            <div className="body-font">
                {addressSelected && (
                    <div className="col-md-8 offset-md-2">
                        <div className="py-1">
                            {' '}
                            Thank you for applying to join Kommu - you are almost there! There are a couple steps to
                            follow:
                        </div>
                        <div className="py-1">
                            1. Please click the link below to complete a quick identity verification through Berbix.
                            Have your driver license (preferred) or passport handy!
                        </div>
                        <div className="text-center">
                            <span>Verify Id</span>
                        </div>
                        <span className="text-muted justify-content-center "></span>
                        <div className="py-1">
                            2. You will need to submit a{' '}
                            <b>document proving residence (rental contract or a bill no older than 6 months)</b>,{' '}
                            <b>a copy of your renter/homeowner insurance policy</b>, and a{' '}
                            <b>WiFi speed test screenshot</b>.
                        </div>
                        <div>
                            3. Please select one of the required document types from the dropdown menu. Then click the
                            file uploader where indicated. Or click and drag that file where indicated.
                        </div>
                        <div className="dropdown py-1 col-md-8 offset-md-2">
                            <Form.Select aria-label="Default select example" onChange={onFileTypeClick}>
                                <option>Please select a file to upload</option>
                                <option value="proofOfResidenceUrl">Document proving residence</option>
                                <option value="proofOfInsuranceUrl">
                                    Copy of your renter/homeowner insurance policy
                                </option>
                                <option value="proofOfWifiSpeedTestUrl">A WiFi speed test screenshot</option>
                            </Form.Select>
                        </div>
                        <div className="col-md-8 offset-md-2">
                            {fileTypeSelected && (
                                <FileUploader
                                    className="col-md-6"
                                    onHandleUploadSuccess={onHandleUploadSuccess}></FileUploader>
                            )}
                        </div>
                        <Table bordered striped>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="col-md-2 text-center">
                                        File Type
                                        <br />
                                    </th>
                                    <th className="col-md-8 text-center">File</th>
                                    <th className="text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1.</th>
                                    <td className="text-center">Proof of Ownership or Rental Agreement</td>
                                    <td className="text-center">
                                        <a
                                            href={formData.proofOfResidenceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            {formData.proofOfResidenceUrl}
                                        </a>
                                    </td>
                                    <td className="text-center">{formData.proofResidenceIsVerified}</td>
                                </tr>
                                <tr>
                                    <th>2.</th>
                                    <td className="text-center">Proof of Home/Rental Insurance</td>
                                    <td className="text-center">
                                        <a
                                            href={formData.proofOfInsuranceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            {formData.proofOfInsuranceUrl}
                                        </a>
                                    </td>
                                    <td className="text-center">{formData.proofInsuranceIsVerified}</td>
                                </tr>
                                <tr>
                                    <th>3.</th>
                                    <td className="text-center">Wifi Speed Test</td>
                                    <td className="text-center">
                                        <a
                                            href={formData.proofOfWifiSpeedTestUrl}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            {formData.proofOfWifiSpeedTestUrl}
                                        </a>
                                    </td>
                                    <td className="text-center">{formData.proofWifiIsVerified}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

LocationVerification.propTypes = {
    currentUser: PropTypes.shape({
        id: PropTypes.number,
        roles: PropTypes.arrayOf(PropTypes.string),
        email: PropTypes.string,
        isLoggedIn: PropTypes.bool.isRequired,
    }),
};

export default LocationVerification;
