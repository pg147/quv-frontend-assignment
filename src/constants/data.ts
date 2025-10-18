import type {
    FeatureCards,
    FooterContact,
    FooterSection,
    NavLink,
    ProfileCardData,
    SocialIcon
} from "../types/dataTypes.ts";

export const FEATURE_CARDS: FeatureCards[] = [
    {
        title: 'Certified Teachers',
        iconSrc: '/assets/icons/012-blackboards.svg',
        description: 'The gradual \n' +
            'accumulation of \n' +
            'information about '
    },
    {
        title: 'Expert Instructions',
        iconSrc: '/assets/icons/013-telescope-1.svg',
        description: 'The gradual \n' +
            'accumulation of \n' +
            'information about '
    },
]

export const FOOTER_DATA: FooterSection[] = [
    {
        header: 'Company Info',
        links: [
            { label: 'About Us', href: '/' },
            { label: 'Careers', href: '/' },
            { label: 'We are hiring!', href: '/' },
            { label: 'Blogs', href: '/' }
        ]
    },
    {
        header: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '/' },
            { label: 'Terms of Service', href: '/' },
            { label: 'Cookie Policy', href: '/' },
            { label: 'Disclaimer', href: '/' }
        ]
    },
    {
        header: 'Features',
        links: [
            { label: 'Business Marketing', href: '/' },
            { label: 'User Analytics', href: '/' },
            { label: 'Live Chat', href: '/' },
            { label: 'Unlimited Support', href: '/' }
        ]
    },
    {
        header: 'Resources',
        links: [
            { label: 'IOS & Android', href: '/' },
            { label: 'Watch a Demo', href: '/' },
            { label: 'Customers', href: '/' },
            { label: 'API', href: '/' }
        ]
    }
];

export const FOOTER_CONTACT_DATA: FooterContact = {
    title: 'Get In Touch',
    items: [
        {
            icon: '/assets/icons/contact.svg',
            value: '(480) 555-0103',
            type: 'phone' as const
        },
        {
            icon: '/assets/icons/location.svg',
            value: '4517 Washington Ave. Manchester, Kentucky 39495',
            type: 'address' as const
        },
        {
            icon: '/assets/icons/email.svg',
            value: 'debra.holt@example.com',
            type: 'email' as const
        }
    ]
};

export const PROFILE_CARDS: ProfileCardData[] = [
    {
        id: 1,
        name: 'Arthur Morgan',
        profession: 'Senior Software Engineer',
        image: '/assets/users/user-cover-1.webp',
    },
    {
        id: 2,
        name: 'John Marston',
        profession: 'UX Designer',
        image: '/assets/users/user-cover-2.webp',
    },
    {
        id: 3,
        name: 'Sadie Adler',
        profession: 'Product Manager',
        image: '/assets/users/user-cover-3.webp',
    },
    {
        id: 4,
        name: 'Dutch van der Linde',
        profession: 'Marketing Director',
        image: '/assets/users/user-cover-4.webp',
    }
];

export const NAV_LINKS: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Product', href: '/product' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
];

export const SOCIAL_ICONS: SocialIcon[] = [
    { src: '/assets/icons/facebook.svg', alt: 'Facebook', ariaLabel: 'Visit Facebook profile' },
    { src: '/assets/icons/instagram.svg', alt: 'Instagram', ariaLabel: 'Visit Instagram profile' },
    { src: '/assets/icons/twitter.svg', alt: 'Twitter', ariaLabel: 'Visit Twitter profile' },
];