import { lazy } from 'react';
import FileUploader from '../components/fileuploader/FileUploader';
const Profiles = lazy(() => import('../components/userproflies/Profiles'));
const Profile = lazy(() => import('../components/userprofile/UserBox'));
const AnalyticsDashboards = lazy(() => import('../pages/dashboard/Analytics'));
const FAQ = lazy(() => import('../components/questions/FAQ'));
const PageNotFound = lazy(() => import('../pages/error/PageNotFound'));
const Products = lazy(() => import('../pages/ecommerce/Products'));
const LocationVerification = lazy(() => import('../pages/verificationpage/LocationVerification'));

// dashboard
const dashboardRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboards',
        icon: 'uil-home-alt',
        header: 'Navigation',
        children: [
            {
                path: '/dashboard/analytics',
                name: 'Analytics',
                element: AnalyticsDashboards,
                roles: ['Admin', 'SysAdmin', 'User'],
                exact: true,
                isAnonymous: false,
            },

            {
                path: '/pages/UserProfiles',
                name: 'Profiles',
                element: Profiles,
                roles: ['Admin', 'User', 'SysAdmin'],
                exact: true,
                isAnonymous: false,
            },
            {
                path: '/profile',
                name: 'Profile',
                element: Profile,
                roles: ['Admin', 'User', 'SysAdmin'],
                exact: true,
                isAnonymous: false,
            },
        ],
    },
];

const faqRoutes = [
    {
        path: '/pages/faq',
        name: 'FAQ',
        exact: true,
        element: FAQ,
        roles: ['Admin', 'User'],
        isAnonymous: false,
    },
];

const fileUploaderRoutes = [
    {
        path: '/files',
        name: 'File Uploader',
        exact: true,
        element: FileUploader,
        roles: ['Admin', 'User', 'SysAdmin'],
        isAnonymous: false,
    },
];

const locationVerificationRoutes = [
    {
        path: 'apps/verification',
        name: 'Location Verification',
        exact: true,
        element: LocationVerification,
        roles: ['Admin', 'User', 'SysAdmin'],
        isAnonymous: false,
    },
];

const ecommerceRoutes = [
    {
        path: '/apps/ecommerce/products',
        name: 'Product',
        exact: true,
        element: Products,
        roles: [],
        isAnonymous: true,
    },
];

const test = [
    {
        path: '/test',
        name: 'Test',
        exact: true,
        element: AnalyticsDashboards,
        roles: ['Fail'],
        isAnonymous: false,
    },
    {
        path: '/secured',
        name: 'A Secured Route',
        exact: true,
        element: AnalyticsDashboards,
        roles: ['Fail'],
        isAnonymous: false,
    },
    {
        path: '/secured2',
        name: 'A Secured Route',
        exact: true,
        element: AnalyticsDashboards,
        roles: ['Admin'],
        isAnonymous: false,
    },
];

const errorRoutes = [
    {
        path: '*',
        name: 'Error - 404',
        element: PageNotFound,
        roles: [],
        exact: true,
        isAnonymous: false,
    },
];

const allRoutes = [
    ...dashboardRoutes,
    ...test,
    ...errorRoutes,
    ...fileUploaderRoutes,
    ...ecommerceRoutes,
    ...locationVerificationRoutes,
    ...faqRoutes,
];

export default allRoutes;
