import { lazy } from 'react';
import CheckoutCancelled from '../components/stripe/CheckoutCancelled';
import CheckoutSuccess from '../components/stripe/CheckoutSuccess';
import ConfirmReservation from '../reservations/ConfirmReservation';
import ReservationForm from '../reservations/ReservationForm';
import NewService from '../components/AvailableServices/NewService';

const Landing = lazy(() => import('../pages/landing/'));
const AboutPage = lazy(() => import('../components/aboutpage/AboutPage'));
const AddALocation = lazy(() => import('../components/locations/AddALocation'));
const ContactPage = lazy(() => import('../components/contact/ContactPage'));
const Customer = lazy(() => import('../components/stripe/Customer/CreateForm'));

const ExternalLinks = lazy(() => import('../components/externallinks/ExternalLinks'));

const FAQs = lazy(() => import('../components/questions/FAQ'));
const Listing = lazy(() => import('../components/listings/AddListing'));

const Login = lazy(() => import('../pages/loginpage/Login'));
const PageNotFound = lazy(() => import('../pages/error/PageNotFound'));
const Profile = lazy(() => import('../components/userproflies/Profiles'));
const Register = lazy(() => import('../pages/registerpage/Register'));
const ServerError = lazy(() => import('../pages/error/ServerError'));
const Services = lazy(() => import('../components/AvailableServices/AvailableServices'));
const ViewListing = lazy(() => import('../pages/viewlisting/'));
const SearchListing = lazy(() => import('../pages/searchlisting/'));
const LocationVerification = lazy(() => import('../pages/verificationpage/LocationVerification'));
const Product = lazy(() => import('../pages/ecommerce/'));
const Products = lazy(() => import('../pages/ecommerce/Products'));
const SwapperStory = lazy(() => import('../components/SwapperStory/SwapperStory'));

const routes = [
    {
        path: '/',
        name: 'Landing',
        exact: true,
        element: Landing,
        roles: [],
        isAnonymous: true,
    },
    {
        path: 'users/profiles',
        name: 'Profile',
        exact: true,
        element: Profile,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/location',
        name: 'Location',
        exact: true,
        element: AddALocation,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/verification',
        name: 'Location Verification',
        exact: true,
        element: LocationVerification,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/listing',
        name: 'Listing',
        exact: true,
        element: Listing,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/login',
        name: 'Login',
        exact: true,
        element: Login,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/register',
        name: 'Register',
        exact: true,
        element: Register,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/faq',
        name: 'faq',
        exact: true,
        element: FAQs,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/AboutUs',
        name: 'About Us',
        exact: true,
        element: AboutPage,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/listing/view/:listingId',
        name: 'ViewListing',
        exact: true,
        element: ViewListing,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/listing/search',
        name: 'SearchListing',
        exact: true,
        element: SearchListing,
        roles: [],
        isAnonymous: true,
    },
];
const checkoutRoute = [
    {
        path: '/stripe/checkout/success',
        name: 'CheckoutSuccess',
        exact: true,
        element: CheckoutSuccess,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/stripe/checkout/cancelled',
        name: 'CheckoutCancelled',
        exact: true,
        element: CheckoutCancelled,
        roles: [],
        isAnonymous: true,
    },
];
const contactPageRoute = [
    {
        path: '/contactus',
        name: 'ContactUs',
        exact: true,
        element: ContactPage,
        roles: [],
        isAnonymous: true,
    },
];

const reservationFormRoute = [
    {
        path: '/reservationform/:listingId',
        name: 'Reservation Form',
        element: ReservationForm,
        roles: [],
        exact: true,
        isAnonymous: true,
    },
    {
        path: '/reserved/:listingIdToConfirm',
        name: 'Reservation page',
        element: ConfirmReservation,
        roles: [],
        exact: true,
        isAnonymous: false,
    },
];

const ecommerceRoutes = [
    {
        path: '/dashboard/ecommerce',
        name: 'Analytics',
        element: Product,
        roles: ['Admin', 'SysAdmin', 'User'],
        exact: true,
        isAnonymous: false,
    },
    {
        path: '/apps/ecommerce/products',
        name: 'Product',
        exact: true,
        element: Products,
        roles: ['Admin', 'SysAdmin', 'User'],
        isAnonymous: true,
    },
    {
        path: '/dashboard/ecommerce/stripe/new',
        name: 'New Customer',
        element: Customer,
        roles: ['Admin', 'SysAdmin', 'User'],
        exact: true,
        isAnonymous: true,
    },
];

const errorRoutes = [
    {
        path: '/error-500',
        name: 'Error - 500',
        element: ServerError,
        roles: [],
        exact: true,
        isAnonymous: true,
    },
    {
        path: '*',
        name: 'Error - 404',
        element: PageNotFound,
        roles: [],
        exact: true,
        isAnonymous: true,
    },
];
const servicesRoute = [
    {
        path: '/availableservices',
        name: 'AvailableServices',
        exact: true,
        element: Services,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/availableservices/newservice',
        name: 'NewService',
        exact: true,
        element: NewService,
        roles: [],
        isAnonymous: true,
    },
];

const externalLinkroutes = [
    {
        path: '/externallinks',
        name: 'externallinks',
        element: ExternalLinks,
        roles: [],
        exact: true,
        isAnonymous: true,
    },
];

const swapperStory = [
    {
        path: '/story',
        name: 'Swapper Story',
        exact: true,
        element: SwapperStory,
        roles: ['Admin', 'User'],
        isAnonymous: false,
    },
];

var allRoutes = [
    ...routes,
    ...errorRoutes,
    ...checkoutRoute,
    ...contactPageRoute,
    ...servicesRoute,
    ...swapperStory,
    ...reservationFormRoute,
    ...ecommerceRoutes,
    ...externalLinkroutes,
];

export default allRoutes;
