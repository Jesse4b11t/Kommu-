import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import debug from 'sabio-debug';
import faqsServices from '../../services/faqsService';
import PropTypes from 'prop-types';
import SingleFaq from '../questions/SingleFAQ';
import '../questions/FAQ.css';
import { ToastContainer, toast } from 'react-toastify';

function FAQ(props) {
    const _logger = debug.extend('LandingFaqs');

    const [faqData, setFaqData] = useState({
        faqs: [],
        faqComponents: [],
    });

    false && _logger(faqData);

    useEffect(() => {
        _logger('firing useEffect for getFaqs');
        faqsServices.getFaqs().then(onGetFaqsSuccess).catch(onGetFaqsError);
    }, []);

    const onGetFaqsSuccess = (response) => {
        const faqsArray = response.item.pagedItems;
        setFaqData((prevState) => {
            const fd = { ...prevState };
            fd.faqs = faqsArray;
            fd.faqComponents = faqsArray.map(mapFaqCard);
            return fd;
        });
        return response;
    };

    const onGetFaqsError = (err) => {
        _logger(err);
        toast.error(err, 'Seems like there is an Issue on our end! This will be fixed soon!');
    };

    const currentUser = props.currentUser;
    _logger('currentUser is firing', currentUser);

    const mapFaqCard = (data, index) => {
        return <SingleFaq currentUser={currentUser} key={`${data.id}_${index}`} data={data} />;
    };

    const [toggleAll, setToggleAll] = useState(true);
    const onShowAll = (e) => {
        e.preventDefault();
        if (toggleAll) {
            setToggleAll(false);
        } else {
            setToggleAll(true);
            setToggleMisc(false);
            setToggleReq(false);
            setToggleIns(false);
        }
    };

    const [toggleMisc, setToggleMisc] = useState(false);

    const filterMisc = (data) => {
        let result = false;

        if (data.categoryId === 4) {
            result = true;
        }
        return result;
    };

    const onMiscSelect = (e) => {
        e.preventDefault();
        if (toggleMisc) {
            setToggleMisc(false);
        } else {
            setToggleMisc(true);
            setToggleReq(false);
            setToggleIns(false);
            setToggleAll(false);
        }
    };

    const miscRender = faqData.faqs.filter(filterMisc);
    const miscSelect = miscRender.map(mapFaqCard);

    const [toggleReq, setToggleReq] = useState(false);

    const filterReq = (data) => {
        let result = false;

        if (data.categoryId === 2) {
            result = true;
        }
        return result;
    };

    const onReqSelect = (e) => {
        e.preventDefault();
        if (toggleReq) {
            setToggleReq(false);
        } else {
            setToggleReq(true);
            setToggleMisc(false);
            setToggleIns(false);
            setToggleAll(false);
        }
    };

    const reqRender = faqData.faqs.filter(filterReq);
    const reqSelect = reqRender.map(mapFaqCard);

    const [toggleIns, setToggleIns] = useState(false);

    const filterIns = (data) => {
        let result = false;

        if (data.categoryId === 3) {
            result = true;
        }
        return result;
    };

    const onInsSelect = (e) => {
        e.preventDefault();
        if (toggleIns) {
            setToggleIns(false);
        } else {
            setToggleIns(true);
            setToggleReq(false);
            setToggleMisc(false);
            setToggleAll(false);
        }
    };

    const insRender = faqData.faqs.filter(filterIns);
    const insSelect = insRender.map(mapFaqCard);

    return (
        <React.Fragment>
            <section className="faq-section-image">
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center mt-md-4">
                                <div>
                                    <span className="mb-4 faq-header-title">FAQ</span>
                                </div>
                                <p className="mt-5 faq-header-text">
                                    Got a question? You’ll probably find your answer in this list of frequently asked
                                    questions. If you don’t see your question on this page, contact us and we will
                                    gladly assist you.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="mt-5">
                <Container>
                    <ToastContainer />
                    <div className="col text-center">
                        <button type="button" className="btn faq-btn me-md-3" onClick={onShowAll}>
                            Show All
                        </button>
                        <button type="button" className="btn faq-btn me-md-3" onClick={onInsSelect}>
                            Insurance Policies
                        </button>
                        <button type="button" className="btn faq-btn me-md-3" onClick={onReqSelect}>
                            Requirments
                        </button>
                        <button type="button" className="btn faq-btn me-md-3" onClick={onMiscSelect}>
                            Misc Questions
                        </button>
                    </div>
                </Container>
                <Container className="mb-5 mt-4">
                    {toggleAll && faqData.faqComponents}
                    {toggleIns && insSelect}
                    {toggleReq && reqSelect}
                    {toggleMisc && miscSelect}
                </Container>
            </section>
        </React.Fragment>
    );
}

FAQ.propTypes = {
    currentUser: PropTypes.shape({
        id: PropTypes.number.isRequired,
        roles: PropTypes.arrayOf(PropTypes.string).isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
    }),
};

export default FAQ;
