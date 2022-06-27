import * as Yup from 'yup';

const validation = Yup.object().shape({
    Type: Yup.string('Invalid entry').min(0).max(10).required('*Required!'),
    Email: Yup.string().email('*Invalid Email Provided').required('*Required!'),
});

export default validation;
