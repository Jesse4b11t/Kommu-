import PropTypes from 'prop-types';

const eventWizardPropTypes = {
    state: PropTypes.shape({
        name: PropTypes.string.isRequired,

        summary: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        isFree: PropTypes.bool.isRequired,
        eventTypeId: PropTypes.number.isRequired,
        venueId: PropTypes.number.isRequired,
        externalSiteUrl: PropTypes.string.isRequired,
        eventStatusId: PropTypes.number.isRequired,
        dateStart: PropTypes.instanceOf(Date).isRequired,
        dateEnd: PropTypes.instanceOf(Date).isRequired,
    }),

    values: PropTypes.shape({
        name: PropTypes.string.isRequired,

        summary: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        isFree: PropTypes.bool.isRequired,
        eventTypeId: PropTypes.number.isRequired,
        venueId: PropTypes.number.isRequired,
        externalSiteUrl: PropTypes.string.isRequired,
        eventStatusId: PropTypes.number.isRequired,
        dateStart: PropTypes.instanceOf(Date).isRequired,
        dateEnd: PropTypes.instanceOf(Date).isRequired,
    }),

    touched: PropTypes.shape({
        name: PropTypes.string,
        summary: PropTypes.string,
        shortDescription: PropTypes.string,
        imageUrl: PropTypes.string,
        isFree: PropTypes.bool,
        eventTypeId: PropTypes.number,
        venueId: PropTypes.number,
        externalSiteUrl: PropTypes.string,
        eventStatusId: PropTypes.number,
        dateStart: PropTypes.instanceOf(Date),
        dateEnd: PropTypes.instanceOf(Date),
    }),

    errors: PropTypes.shape({
        name: PropTypes.string,
        summary: PropTypes.string,
        shortDescription: PropTypes.string,
        imageUrl: PropTypes.string,
        isFree: PropTypes.bool,
        eventTypeId: PropTypes.number,
        venueId: PropTypes.number,
        externalSiteUrl: PropTypes.string,
        eventStatusId: PropTypes.number,
        dateStart: PropTypes.instanceOf(Date),
        dateEnd: PropTypes.instanceOf(Date),
    }),

    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    nextLabel: PropTypes.string,
    backLabel: PropTypes.string,
    onBack: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    cantBack: PropTypes.bool.isRequired,
};

export { eventWizardPropTypes };
