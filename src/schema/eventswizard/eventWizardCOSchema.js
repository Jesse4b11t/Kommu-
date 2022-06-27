import * as Yup from 'yup';

const eventWizardValidation = Yup.object().shape({
    name: Yup.string().required('Required'),
    eventTypeId: Yup.number(1).min(0).max(50).required('Required'),
    summary: Yup.string().min(5).max(256).required('Required'),
    shortDescription: Yup.string().min(5).max(512).required('Required'),
    imageUrl: Yup.string().min(5).max(256).required('Required'),
    isFree: Yup.bool(),
});

export default eventWizardValidation;
