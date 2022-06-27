import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FAQs from './FAQs';
import PropTypes from 'prop-types';
import { RiQuestionnaireFill } from 'react-icons/ri';
import { AiOutlineMail, AiFillTwitterCircle } from 'react-icons/ai';
const FAQ = ({ rawFaqs }) => {
    return (
        <>
            <section className="py-5">
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <h1 className="mt-0">
                                    <RiQuestionnaireFill />
                                </h1>
                                <h3 className="text-dark">Frequently Asked Questions</h3>
                                <button type="button" className="btn btn-success btn-sm mt-2">
                                    <AiOutlineMail /> Email us your question
                                </button>
                                <button type="button" className="btn btn-info btn-sm mt-2 ms-1">
                                    <AiFillTwitterCircle /> Send us a tweet
                                </button>
                            </div>
                        </Col>
                    </Row>
                    <FAQs rawFaqs={rawFaqs} />
                </Container>
            </section>
        </>
    );
};

FAQ.propTypes = {
    rawFaqs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
            titleClass: PropTypes.string,
            textClass: PropTypes.string,
        })
    ),
};

export default FAQ;
