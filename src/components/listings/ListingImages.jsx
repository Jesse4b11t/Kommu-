import React, { useEffect } from 'react';
import { withFormik } from 'formik';
import { Form, Card } from 'react-bootstrap';
import FileUploader from '../fileuploader/FileUploader';
import * as wizardPropTypes from './listingsPropTypes';
import debug from 'sabio-debug';

const _logger = debug.extend('ListingFileUploader');

const ListingImages = (props) => {
    const { values, isSubmitting, handleSubmit, setValues, onBack, backLabel, nextLabel, onNext, cantBack } = props;

    useEffect(() => {
        onChange();
    }, [values]);

    const onChange = () => {
        props.onChange(values);
    };

    const onNextClicked = () => {
        onNext(values);
    };

    const onHandleUploadSuccess = (data) => {
        _logger(data.items, 'File Upload Success');
        const imagesArr = data?.items;
        const imageIds = imagesArr.map((x) => x.id);
        _logger(imageIds);
        if (imagesArr) {
            setValues({
                images: imageIds,
            });
        }
    };

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit} className="p-1">
                <Card className="p-4 mx-auto" style={{ width: 950 }}>
                    <Card.Header>
                        <h3 className="text-center">Images</h3>
                    </Card.Header>
                    <div className="form-group mt-2">
                        <FileUploader onHandleUploadSuccess={onHandleUploadSuccess} />

                        <div className="button-group pt-3 row">
                            <div className="col-sm-1">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={onBack}
                                    disabled={isSubmitting || cantBack}>
                                    {backLabel}
                                </button>
                            </div>
                            <div className="col-sm-1">
                                <button type="submit" className="btn btn-primary" onClick={onNextClicked}>
                                    {nextLabel}
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </Form>
        </React.Fragment>
    );
};

ListingImages.propTypes = wizardPropTypes.listingPropTypes;

export default withFormik({
    mapPropsToValues: (props) => ({
        images: props.formData.images,
    }),

    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(ListingImages);
