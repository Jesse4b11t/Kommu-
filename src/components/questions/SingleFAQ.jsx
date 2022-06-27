import React from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import debug from 'sabio-debug';
import PropTypes from 'prop-types';

const _logger = debug.extend('SingleFaq');

function SingleFaq(props) {
    const newFaqData = props.data;
    _logger('Faq passed in prop', newFaqData);

    const currentUser = props.currentUser;
    _logger('currentUser is firing', currentUser);

    const faqData = {
        question: newFaqData.question,
        answer: newFaqData.answer,
        categoryId: newFaqData.categoryId,
        sortOrder: newFaqData.sortOrder,
    };

    return (
        <React.Fragment>
            <Row className="mt-2">
                <Col>
                    <Accordion flush>
                        <Accordion.Header>
                            <h4 className="lh-base fw-bold faq-questions">{faqData.question}</h4>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="text-muted faq-answers">{faqData.answer}</div>
                        </Accordion.Body>
                    </Accordion>
                </Col>
            </Row>
        </React.Fragment>
    );
}

SingleFaq.propTypes = {
    data: PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
        categoryId: PropTypes.number.isRequired,
        sortOrder: PropTypes.number,
    }),
    currentUser: PropTypes.shape({
        id: PropTypes.number.isRequired,
        roles: PropTypes.arrayOf(PropTypes.string).isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
    }),
};

export default SingleFaq;
