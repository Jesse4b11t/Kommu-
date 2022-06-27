import * as Yup from 'yup';

const validation = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email.').required('An email is required.'),
    password: Yup.string()
        .min(8, 'Your password must be at least 8 characters.')
        .max(50, 'Your password must be between 8 and 50 characters.')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            'Must include 1 upper, lower, special char. and #.'
        )
        .required('A password is required.'),
});

export default validation;
