export type FooterLink = {
    label: string;
    href: string;
};

export type FooterSection = {
    header: string;
    links: FooterLink[];
};

export type FeatureCards = {
    title: string;
    iconSrc: string
    description: string;
};

export type ContactItem = {
    icon: string;
    value: string;
    type: 'phone' | 'address' | 'email';
};

export type FooterContact = {
    title: string;
    items: ContactItem[]
};

export type ProfileCardData = {
    id: number;
    name: string;
    profession: string;
    image: string;
};

export type NavLink = {
    label: string;
    href: string
};