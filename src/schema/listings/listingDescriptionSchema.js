import * as Yup from 'yup';

const listingValidation = Yup.object().shape({
    bedRooms: Yup.number().required('Required'),
    baths: Yup.number().required('Required'),
    housingTypeId: Yup.number().required('Required'),
    accessTypeId: Yup.number().required('Required'),
    guestCapacity: Yup.number().required('Required'),
    costPerNight: Yup.number().required('Required'),
    costPerWeek: Yup.number().required('Required'),
    checkInTime: Yup.number().required('Required'),
    checkOutTime: Yup.number().required('Required'),
    daysAvailable: Yup.number().required('Required'),
});

export default listingValidation;
