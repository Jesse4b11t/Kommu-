import * as Yup from 'yup';

const listingValidation = Yup.object().shape({
    internalName: Yup.string().min(2).max(50).required('Required'),
    title: Yup.string().min(2).max(50).required('Required'),
    shortDescription: Yup.string().min(2).max(200).required('Required'),
    description: Yup.string().min(2).max(50),
});

export default listingValidation;
