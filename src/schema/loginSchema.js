import * as Yup from 'yup';

const validation = Yup.object().shape({
    userName: Yup.string().email('Please enter a valid email.').required('An email is required.'),
    password: Yup.string().required('A password is required.'),
});

export default validation;
