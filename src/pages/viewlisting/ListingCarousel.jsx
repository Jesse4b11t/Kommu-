import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ListingCarousel = (props) => {
    const [carouselState, setCarouselState] = useState({ carouselItems: [] });

    useEffect(() => {
        if (props.images.length >= 1) {
            setCarouselState((oldState) => {
                let newState = { ...oldState };
                newState.carouselItems = props.images.map((imageUrl) => {
                    return (
                        <Carousel.Item key={imageUrl.index + imageUrl}>
                            <img
                                className="d-block w-100"
                                src={imageUrl}
                                alt={imageUrl}
                                height="200px"
                                style={{ objectFit: 'cover' }}
                            />
                        </Carousel.Item>
                    );
                });
                return newState;
            });
        }
    }, [props.images]);

    return (
        <Row className="">
            <Col>
                <Card className="bg-transparent">
                    <Card.Body>
                        <Carousel fade indicators={false} controls={false}>
                            {carouselState.carouselItems}
                        </Carousel>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

ListingCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
};

export default ListingCarousel;
