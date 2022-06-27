import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import debug from 'sabio-debug';
import { changeLayout } from '../../redux/actions';
import * as layoutConstants from '../../constants/layout';
import AvailableService from './AvailableService';
import availableServiceServices from '../../services/availableServiceService';

const loading = () => <div className="text-center"></div>;

const _logger = debug.extend('Services');
false && _logger();

const AvailableServices = ({ children }) => {
    const dispatch = useDispatch();

    const [pageData, setPageData] = useState({
        arrayOfServices: [],
        serviceComponents: [],
        pageIndex: 0,
        pageSize: 8,
    });

    const mapServices = (aService) => {
        _logger('mapping', aService);
        return (
            <div className="col-md-3" key={'ListA' + aService.id} id={aService.id}>
                <AvailableService service={aService} key={'ListA' + aService.id.value}></AvailableService>
            </div>
        );
    };

    useEffect(() => {
        _logger('useEffect for getFriendsPaginated ');
        availableServiceServices
            .getAvailableServices(pageData.pageIndex, pageData.pageSize)
            .then(onGetAvailableServicesSuccess)
            .catch(onGetAvailableServicesError);
        _logger('services', availableServiceServices.getAvailableServices(pageData.pageIndex, pageData.pageSize));
    }, []);

    const onGetAvailableServicesSuccess = (response) => {
        _logger('Paginate ok', response);
        let servicesArray = response.data.item.pagedItems;
        _logger('Service array', servicesArray);

        setPageData((prevState) => {
            const pd = { ...prevState };
            pd.arrayOfServices = servicesArray;
            pd.serviceComponents = servicesArray.map(mapServices);
            _logger('page data', pd);
            return pd;
        });
    };
    const onGetAvailableServicesError = (err) => {
        _logger('Paginate err', err);
    };

    useEffect(() => {
        dispatch(changeLayout(layoutConstants.LAYOUT_DETACHED));
    }, [dispatch]);

    return (
        <>
            <Container fluid>
                <div className="wrapper">
                    <div className="content-page">
                        <br />
                        <br />
                        <div className="content"></div>
                        <div className="content">
                            <Container className="fluid">
                                <Suspense fallback={loading()}>{children}</Suspense>
                                <h3>Services</h3>
                                <hr />
                                <div className="row">{pageData.arrayOfServices.map(mapServices)}</div>
                            </Container>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};
AvailableServices.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
};
export default AvailableServices;
