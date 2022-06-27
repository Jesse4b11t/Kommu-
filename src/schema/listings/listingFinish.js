import * as Yup from 'yup';

const listingValidation = Yup.object().shape({
    acceptCheck: Yup.bool().required('Must Accept Terms and Conditions'),
});

export default listingValidation;
