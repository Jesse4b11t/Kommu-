import * as Yup from 'yup';

const validation = Yup.object().shape({
    subject: Yup.string().required('Is Required'),
    email: Yup.object().shape({ email: Yup.string(), name: Yup.string() }),
    plainText: Yup.string(),
    body: Yup.string(),
});

export default validation;
