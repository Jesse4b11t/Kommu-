import * as Yup from 'yup';

const eventWizardValidation = Yup.object().shape({
    venueId: Yup.number().min(1).max(5000).required('Required'),
});

export default eventWizardValidation;
