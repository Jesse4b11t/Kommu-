import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import debug from 'sabio-debug';
import Story from './newStory';
import swapperStoryService from '../../services/swapperStoryService';
import { ToastContainer, toast } from 'react-toastify';

const _logger = debug.extend('swapper');

function SwapperStory() {
    const mapStory = (aStory) => {
        return <Story Story={aStory} key={'ListA' + aStory.id}></Story>;
    };

    const [pageData, setPageData] = useState({
        arrayOfStories: [],
        storyComponents: [],
    });

    useEffect(() => {
        swapperStoryService.GetSwapperStory(31).then(onSwapperStorySuccess).catch(onSwapperStoryError);
        _logger('Use Effect is working');
    }, []);

    const onSwapperStorySuccess = (data) => {
        let arrayOfStrs = [];
        arrayOfStrs = data.items;
        _logger([arrayOfStrs]);

        setPageData((prevState) => {
            const pageData = { ...prevState };
            pageData.arrayOfStories = arrayOfStrs;
            pageData.storyComponents = arrayOfStrs.map(mapStory);
            return pageData;
        });
    };
    const onSwapperStoryError = (err) => {
        _logger(err);
        toast.error(err, 'Seems like there is an Issue on our end! This will be fixed soon!');
    };

    return (
        <React.Fragment>
            <section className="py-5">
                <ToastContainer />
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <h1 className="mt-0">Swapper Stories</h1>
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center">{pageData.arrayOfStories.map(mapStory)}</div>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default SwapperStory;
