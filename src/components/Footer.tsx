// Mantine UI Components
import { Anchor, ActionIcon, Box, Flex, Group, Image, SimpleGrid, Stack, Text } from "@mantine/core";

// Static Data
import { FOOTER_CONTACT_DATA, FOOTER_DATA, SOCIAL_ICONS } from "../constants/data.ts";

// Type definitions
import type { ContactItem, FooterLink, FooterSection } from "../types/dataTypes.ts";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box component={'footer'} h={'fit-content'} w={'100%'} role="contentinfo">
            {/* Footer Links Grid */}
            <SimpleGrid
                px={{ base: 20, lg: 132 }}
                py={{ base: 36, lg: 56 }}
                cols={{ base: 2, lg: 5 }}
                spacing={{ base: 'xl', lg: 'xs' }}
            >
                {/* Footer Sections */}
                {FOOTER_DATA.map((section: FooterSection) => (
                    <Stack key={section.header} component="nav" aria-labelledby={`footer-${section.header.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Text
                            id={`footer-${section.header.toLowerCase().replace(/\s+/g, '-')}`}
                            c={'titleColor.0'}
                            fz={16}
                            fw={700}
                            component="h2"
                        >
                            {section.header}
                        </Text>

                        <Stack gap={8} component="ul" style={{ listStyle: 'none', padding: 0 }}>
                            {section.links.map((link: FooterLink) => (
                                <Box key={link.label} component="li">
                                    <Anchor
                                        fz={{ base: 12, lg: 14 }}
                                        c={'descriptionColor.0'}
                                        href={link.href}
                                    >
                                        {link.label}
                                    </Anchor>
                                </Box>
                            ))}
                        </Stack>
                    </Stack>
                ))}

                {/* Footer Contact */}
                <Stack component="address" style={{ fontStyle: 'normal' }}>
                    <Text
                        c={'titleColor.0'}
                        fz={16}
                        fw={700}
                        component="h2"
                    >
                        {FOOTER_CONTACT_DATA.title}
                    </Text>

                    <Stack gap={8} component="ul" style={{ listStyle: 'none', padding: 0 }}>
                        {FOOTER_CONTACT_DATA.items.map((item: ContactItem) => (
                            <Group
                                key={item.value}
                                gap={12}
                                align="center"
                                wrap="nowrap"
                                component="li"
                            >
                                <Box miw={24} mih={24} style={{ flexShrink: 0 }} aria-hidden="true">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        h={{ base: 20, lg: 24 }}
                                        w={{ base: 20, lg: 24 }}
                                        fit="contain"
                                        loading="lazy"
                                    />
                                </Box>

                                <Text
                                    fz={{ base: 12, lg: 14 }}
                                    c={'descriptionColor.0'}
                                    style={{ flex: 1 }}
                                >
                                    {item.value}
                                </Text>
                            </Group>
                        ))}
                    </Stack>
                </Stack>
            </SimpleGrid>

            {/* Footer Bottom */}
            <Flex
                gap={{ base: 16, lg: 0 }}
                direction={{ base: 'column-reverse', lg: 'row' }}
                bg={'#FAFAFA'}
                w={'100%'}
                px={{ base: 20, lg: 132 }}
                py={24}
                align={'center'}
                justify={'space-between'}
            >
                {/* Copyright */}
                <Text c={'descriptionColor.0'} fz={14} fw={500} component="p">
                    Made With ❤️ By{' '}
                    <Anchor
                        c={'primaryColor.0'}
                        fz={14}
                        fw={500}
                        underline={'never'}
                        href={'https://www.prathmesh.dev'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Prathmesh Gaidhane's portfolio website"
                    >
                        Prathmesh Gaidhane
                    </Anchor>
                    {' '}| All Rights Reserved | {currentYear}
                </Text>

                {/* Social Media */}
                <Group gap={20} component="nav" aria-label="Social media links">
                    {SOCIAL_ICONS.map((icon) => (
                        <ActionIcon
                            key={icon.alt}
                            component="a"
                            href={'/'}
                            variant="transparent"
                            size="lg"
                            aria-label={`Visit our ${icon.alt} page`}
                        >
                            <Image
                                src={icon.src}
                                alt=""
                                h={24}
                                w={24}
                                loading="lazy"
                                aria-hidden="true"
                            />
                        </ActionIcon>
                    ))}
                </Group>
            </Flex>
        </Box>
    );
}
