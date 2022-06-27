import * as Yup from 'yup';

const frontEndValidation = Yup.object().shape({
    FirstName: Yup.string().min(2).max(50).required('Required'),
    LastName: Yup.string().min(2).max(50).required('Required'),
    Mi: Yup.string().min(0).max(2),
    AvatarUrl: Yup.string().min(2).max(128).required('Required'),
});

export default frontEndValidation;
