import React from 'react';
import { Collapse } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppMenu from './Menu';
import { getMenuItems } from '../../helpers/menu';

const Navbar = (props) => {
    const inputTheme = 'dark';

    return (
        <React.Fragment>
            <div className="topnav">
                <div className="container-fluid">
                    <nav className={classNames('navbar', 'navbar-expand-lg', 'topnav-menu', 'navbar-' + inputTheme)}>
                        <Collapse in={props.isMenuOpened} className="navbar-collapse" id="topnav-menu-content">
                            <div>
                                <AppMenu menuItems={getMenuItems()} />
                            </div>
                        </Collapse>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    );
};
Navbar.propTypes = {
    isMenuOpened: PropTypes.bool,
};
export default Navbar;
