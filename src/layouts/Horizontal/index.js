// @flow
import React, { Suspense, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { changeLayout } from '../../redux/actions';
import * as layoutConstants from '../../constants/layout';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Navbar = React.lazy(() => import('./Navbar'));
const Footer = React.lazy(() => import('../Footer'));

const loading = () => <div className="text-center"></div>;

const HorizontalLayout = ({ children }) => {
    const dispatch = useDispatch();

    /**
     * Open the menu when having mobile screen
     */

    useEffect(() => {
        dispatch(changeLayout(layoutConstants.LAYOUT_HORIZONTAL));
    }, [dispatch]);

    return (
        <>
            <div className="wrapper">
                <div className="content-page">
                    <div className="content">
                        <Suspense fallback={loading()}>
                            <Navbar />
                        </Suspense>

                        <Container fluid>
                            <Suspense fallback={loading()}>{children}</Suspense>
                        </Container>
                    </div>

                    <Suspense fallback={loading()}>
                        <Footer />
                    </Suspense>
                </div>
            </div>
        </>
    );
};
HorizontalLayout.propTypes = {
    children: PropTypes.shape({}),
};
export default HorizontalLayout;
