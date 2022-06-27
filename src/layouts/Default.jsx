// @flow
import React, { useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Footer from './Footer';
const loading = () => <div className=""></div>;

const DefaultLayout = (props) => {
    useEffect(() => {
        if (document.body) document.body.classList.add('authentication-bg');

        return () => {
            if (document.body) document.body.classList.remove('authentication-bg');
        };
    }, []);

    // get the child view which we would like to render
    const children = props.children || null;

    return (
        <>
            <div className="content">
                <Suspense fallback={loading()}>
                    <NavBar currentUser={props.currentUser} />
                </Suspense>

                <>
                    <Suspense fallback={loading()}>{children}</Suspense>
                </>
            </div>

            <Suspense fallback={loading()}>
                <Footer />
            </Suspense>
        </>
    );
};
DefaultLayout.propTypes = {
    children: PropTypes.element,
    currentUser: PropTypes.shape({
        id: PropTypes.number,
        roles: PropTypes.arrayOf(PropTypes.string),
        email: PropTypes.string,
        isLoggedIn: PropTypes.bool.isRequired,
    }),
};
export default DefaultLayout;
