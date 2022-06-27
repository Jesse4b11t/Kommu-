import React from 'react';
import debug from 'sabio-debug';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'react-bootstrap';

const _logger = debug.extend('swapper');

function Story(props) {
    _logger(props, 'Here are props');
    return (
        <React.Fragment>
            <section>
                <Row className="mt-1">
                    <Col>
                        <Card>
                            <div className="card-body shadow">
                                <p className="card-text">{props.Story.testimonial}</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
}
Story.propTypes = {
    Story: PropTypes.shape({
        img: PropTypes.string.isRequired,
        testimonial: PropTypes.string.isRequired,
    }),
};
export default React.memo(Story);
