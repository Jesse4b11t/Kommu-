import * as Yup from 'yup';

const validation = Yup.object().shape({
    locationId: Yup.number().required('Is Required'),
    name: Yup.string().min(2).max(50).required('Is Required'),
    description: Yup.string(),
    hasVeteranBenefits: Yup.bool(),
    isHostProvided: Yup.bool(),
    createdBy: Yup.number().required('Is Required'),
});
export default validation;
