import React from 'react';
import { useEffect } from 'react';
import listingImagesService from '../../services/listingImagesService';
import sabioDebug from 'sabio-debug';

const _logger = sabioDebug.extend('listingimages');

function ListingImage() {
    //const [pageData, setPageData] = useState({
    //   arrayOfListingImages: [],
    //   listingImagesComponents: [],
    // });

    useEffect(() => {
        _logger('useEffect running');
        listingImagesService.getAll().then(onGetAllSuccess); //.catch(onGetAllError);
    }, []);

    const onGetAllSuccess = (data) => {
        _logger(data);
        let arrayOfListingImages = data.items;
        _logger({ arrayOfListingImages });
    };
    /*
        setPageData((prevState) => {
          const pd = { ...prevState };
          pd.arrayOfListingImages = arrayOfListingImages;
          pd.listingImagesComponents = arrayOfListingImages.map(listOfImages);
          return pd;
        });
      };
    
    const onGetAllError = (err) => {
        _logger(err);
    };
*/
    return (
        <React.Fragment>
            <table className="table table-sm table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ListingId</th>
                        <th scope="col">FileId</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>dynamic code here</td>
                        <td>dynamic code here</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>dynamic code here</td>
                        <td>dynamic code here</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>dynamic code here</td>
                        <td>dynamic code here</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
}
export default ListingImage;
