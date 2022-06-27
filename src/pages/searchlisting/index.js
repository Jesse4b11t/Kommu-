import React, { useState, useEffect } from 'react';
import { getPaginated } from '../../services/listingService';
import { useNavigate } from 'react-router-dom';
import logger from 'sabio-debug';
import locale from 'rc-pagination/lib/locale/en_US';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const SearchListing = () => {
    const navigate = useNavigate();
    const _logger = logger.extend('searchlisting');
    const [searchState, setSearchState] = useState({
        listingElements: [],
        pageIndex: 1,
        totalCount: 0,
    });

    useEffect(() => {
        getPaginated(0, 6).then(onGetPaginatedSuccess).catch(onGetPaginatedError);
    }, []);

    const onGetPaginatedSuccess = (message) => {
        _logger('Pagination results:', message);
        let listings = message.data.item.pagedItems;
        let totalCount = message.data.item.totalCount;
        setSearchState((oldState) => {
            let newState = { ...oldState };
            newState.totalCount = totalCount;
            return newState;
        });
        mapElements(listings);
    };

    const onGetPaginatedError = (message) => {
        _logger('Paginated results not retrieved: ', message);
    };

    const onClickEvent = (e) => {
        _logger('Clicked data: ', e);
        navigate(`../listing/view/${e.target.id}`);
    };

    const mapElements = (listings) => {
        setSearchState((oldState) => {
            let newState = { ...oldState };
            newState.listingElements = listings.map((listing) => {
                if (listing.housingImages === null) {
                    listing.housingImages = [{ url: '' }];
                }
                return (
                    <div className="col-12 col-md-6 col-lg-4" key={listing.id}>
                        <div className="card shadow-lg">
                            <img
                                src={listing.housingImages[0].url}
                                className="card-img-top p-2"
                                alt="..."
                                height="200px"
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <p className="fw-bold fs-5 card-text">{listing.title}</p>
                                <p className="card-text">
                                    Beds:{listing.bedRooms} / Baths:{Math.floor(listing.baths)} / Type:
                                    {listing.housingType.name} / Cost per Night:$
                                    {listing.costPerNight}
                                </p>
                                <button
                                    type="button"
                                    id={listing.id}
                                    className="btn btn-outline-dark"
                                    onClick={onClickEvent}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                );
            });
            return newState;
        });
    };

    const onPageChange = (page) => {
        setSearchState((prevState) => {
            const newState = { ...prevState };
            newState.pageIndex = page;
            return newState;
        });
        getPaginated(page - 1, 6)
            .then(onGetPaginatedSuccess)
            .catch(onGetPaginatedError);
    };

    return (
        <div className="container">
            <h1 className="display-6 fw-bold hero-title">View Listings:</h1>
            <Pagination
                showQuickJumper
                onChange={onPageChange}
                defaultPageSize="6"
                current={searchState.pageIndex}
                total={searchState.totalCount}
                locale={locale}
                className="pb-2"
            />
            <div className="row">{searchState.listingElements}</div>
        </div>
    );
};

export default SearchListing;
