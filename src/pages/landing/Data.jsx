import jackson from '../../assets/images/cities/jackson.jpg';
import losAngeles from '../../assets/images/cities/los-angeles.jpg';
import bend from '../../assets/images/cities/bend.jpg';
import newYork from '../../assets/images/cities/new-york.jpg';

import credits from '../../assets/images/credits.svg';
import explore from '../../assets/images/explore.svg';
import hotelBell from '../../assets/images/hotel-bell.svg';

import applicationForm from '../../assets/images/application-form.png';
import backgroundCheck from '../../assets/images/background-check.png';
import submitPhotos from '../../assets/images/submit-photos.png';

const cities = [
    {
        image: jackson,
        city: 'Jackson, WY',
    },
    {
        image: losAngeles,
        city: 'Los Angeles, CA',
    },
    {
        image: bend,
        city: 'Bend, OR',
    },
    {
        image: newYork,
        city: 'New York, NY',
    },
];

const howToItems = [
    {
        id: 1,
        text: 'Members have Kommu credits to use for swaps. Our point system ensures fair swaps between homes of different value.',
        icon: credits,
    },
    {
        id: 2,
        text: 'Explore member profiles to see locations, dates, and other preferences to help you choose who to swap with.',
        icon: explore,
    },
    {
        id: 3,
        text: 'Whether spontaneous or planned travel, Kommu members are ready to go and we can find you a match!',
        icon: hotelBell,
    },
];

const membershipSteps = [
    {
        id: 1,
        text: 'Complete a quick application form.',
        icon: applicationForm,
    },
    {
        id: 2,
        text: "We'll text you a link to share photos and videos of the space that you would use to swap.",
        icon: submitPhotos,
    },
    {
        id: 3,
        text: 'We complete a background check and review of your application to ensure your home is up to Kommu standards and keep our community safe.',
        icon: backgroundCheck,
    },
];

const rawFaqs = [
    {
        id: 1,
        question: 'What are some of the requirements to list my residence? Can I use Kommu if I am a renter?',
        answer: 'To list your residence, you must create a profile by adding photos and verifying relevant info about yourself and your home. Renters and owners alike are welcome to use the platform. Once a swap is planned, members are provided with a pre-trip checklist which details the specific cleaning and safety requirements to prepare homes for the swap.',
        titleClass: 'text-dark',
    },
    {
        id: 2,
        question: 'What happens if my house or apartment is damaged during a swap?',
        answer: 'Kommu always encourages members to check their renters insurance policies before swapping.  Our mandatory post-trip rating system ensures that users who damage property are documented and permanently banned from the platform.',
        titleClass: 'text-dark',
    },
    {
        id: 3,
        question: 'What if I want to swap with someone who has a nicer place?',
        answer: 'After a profile is completed, a member’s property is assigned a point value based on size of the property, location, member rating, and other holistic weighting factors. If a potential swap is planned between properties of different point values, the difference in points must be made up between the parties in order to execute the swap.',
        titleClass: 'text-dark',
    },
    {
        id: 4,
        question: 'Will my landlord be OK with me swapping my home?',
        answer: 'Short term home swapping does not violate the terms of most rental agreements with regards to subletting or vacation rentals because there is no money exchanged in the swap and each party continues to pay rent on their primary residence. We encourage all members to check their lease before joining our platform, check local and state laws regarding occupancy, and consult a lawyer if they have questions.',
        titleClass: 'text-dark',
    },
    {
        id: 5,
        question: 'What if I have roommates?',
        answer: 'You do not need to be the sole occupant of an apartment to swap on Kommu! Often, roommates are helpful in assisting with logistics - just make sure that everyone is onboard before you agree to swap.',
        titleClass: 'text-dark',
    },
];

export { rawFaqs, cities, howToItems, membershipSteps };
