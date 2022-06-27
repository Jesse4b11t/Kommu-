import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loki from 'react-loki';
import ListingName from './ListingName';
import debug from 'sabio-debug';
import ListingDescription from './ListingDescription';
import './listings.css';
import ListingLocation from './ListingLocation';
import ListingFinish from './ListingFinish';
import ListingPreview from './ListingPreview';
import ListingImages from './ListingImages';
import { BsFileEarmarkTextFill } from 'react-icons/bs';
import { FaHome, FaClipboardCheck, FaHouseUser, FaLocationArrow, FaImages } from 'react-icons/fa';
import * as listingServices from '../../services/listingService';
import ListingAmenities from './ListingAmenities';
import ListingAvaiServices from './ListingAvaiServices';
import { HiHome } from 'react-icons/hi';
import { ImHome2 } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const _logger = debug.extend('ListingAdd');

function AddListing() {
    const [formData, setFormData] = useState({
        internalName: '',
        title: '',
        shortDescription: '',
        description: '',
        locationTypeId: null,
        lineOne: '',
        lineTwo: '',
        city: '',
        zip: null,
        stateId: null,
        latitude: null,
        longitude: null,
        bedRooms: null,
        baths: null,
        housingTypeId: null,
        accessTypeId: null,
        guestCapacity: null,
        costPerNight: null,
        costPerWeek: null,
        checkInTime: null,
        checkOutTime: null,
        daysAvailable: null,
        amenities: [],
        name: '',
        hasVeteranBenefits: null,
        isHostProvided: null,
        images: [],
        hasVerifiedOwnership: true,
        isActive: true,
        createdBy: 1,
        modifiedBy: null,
    });
    _logger(formData, 'HookState Test');
    const navigate = useNavigate();

    const onChange = (values) => {
        _logger(values, 'onChange');
        setFormData((prevState) => {
            const sd = { ...prevState, ...values };
            return sd;
        });
    };

    const onFinish = () => {
        _logger('Finish button clicked', formData);
        listingServices.add(formData).then(onAddListingSuccess).catch(onAddListingError);
    };

    const onAddListingSuccess = (response) => {
        _logger(response, 'onAddListingSuccess');
        toast.success('Listing Add Success');
        navigate('/profile');
    };

    const onAddListingError = (response) => {
        toast.error('Listing Add Error, Please Try Again');
        _logger(response, 'onAddListingError');
    };

    const wizardSteps = [
        {
            label: 'Step 1',
            icon: <FaHome className="mt-2 text-center" />,
            component: <ListingName formData={formData} onChange={onChange} />,
        },
        {
            label: 'Step 2',
            icon: <FaLocationArrow className="mt-2 text-center" />,
            component: <ListingLocation formData={formData} onChange={onChange} />,
        },
        {
            label: 'Step 3',
            icon: <FaHouseUser className="mt-2 text-center" />,
            component: <ListingDescription formData={formData} onChange={onChange} />,
        },
        {
            label: 'Step 4',
            icon: <HiHome className="mt-2 text-center" />,
            component: <ListingAmenities formData={formData} onChange={onChange} />,
        },
        {
            label: 'Step 5',
            icon: <ImHome2 className="mt-2 text-center" />,
            component: <ListingAvaiServices formData={formData} onChange={onChange} />,
        },
        {
            label: 'Step 6',
            icon: <FaImages className="mt-2 text-center" />,
            component: <ListingImages formData={formData} onChange={onChange} setFormData={setFormData} />,
        },
        {
            label: 'Step 7',
            icon: <BsFileEarmarkTextFill className="mt-2 text-center" />,
            component: <ListingPreview formData={formData} onChange={onChange} />,
        },
        {
            label: 'Step 8',
            icon: <FaClipboardCheck className="mt-2" />,
            component: <ListingFinish formData={formData} onChange={onChange} />,
        },
    ];

    return (
        <React.Fragment>
            <ToastContainer />
            <div className="listingWizard">
                <Loki steps={wizardSteps} onNext={onChange} onBack={onChange} onFinish={onFinish} noActions />
            </div>
        </React.Fragment>
    );
}

export default AddListing;
