// Mantine UI Components
import { Anchor, ActionIcon, Box, Flex, Group, Image, SimpleGrid, Stack, Text } from "@mantine/core";

// Static Data
import { FOOTER_CONTACT_DATA, FOOTER_DATA, SOCIAL_ICONS } from "../constants/data.ts";

// Type definitions
import type { ContactItem, FooterLink, FooterSection } from "../types/dataTypes.ts";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box component={'footer'} h={'fit-content'} w={'100%'}>
            {/* Footer Links Grid */}
            <SimpleGrid
                px={{ base: 20, lg: 132 }}
                py={{ base: 36, lg: 56 }}
                cols={{ base: 2, lg: 5 }}
                spacing={{ base: 'xl', lg: 'xs' }}
            >
                {/* Footer Sections */}
                {FOOTER_DATA.map((section: FooterSection) => (
                    <Stack key={section.header}>
                        <Text c={'titleColor.0'} fz={16} fw={700}>
                            {section.header}
                        </Text>

                        <Stack gap={8}>
                            {section.links.map((link: FooterLink) => (
                                <Anchor
                                    key={link.label}
                                    fz={{ base: 12, lg: 14 }}
                                    c={'descriptionColor.0'}
                                    href={link.href}
                                >
                                    {link.label}
                                </Anchor>
                            ))}
                        </Stack>
                    </Stack>
                ))}

                {/* Footer Contact */}
                <Stack>
                    <Text c={'titleColor.0'} fz={16} fw={700}>
                        {FOOTER_CONTACT_DATA.title}
                    </Text>

                    <Stack gap={8}>
                        {FOOTER_CONTACT_DATA.items.map((item: ContactItem) => (
                            <Group key={item.value} gap={12} align="center" wrap="nowrap">
                                <Box miw={24} mih={24} style={{ flexShrink: 0 }}>
                                    <Image
                                        src={item.icon}
                                        alt={item.value}
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
                <Text c={'descriptionColor.0'} fz={14} fw={500}>
                    Made With ❤️ By{' '}
                    <Anchor
                        c={'primaryColor.0'}
                        fz={14}
                        fw={500}
                        underline={'never'}
                        href={'https://www.prathmesh.dev'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Prathmesh Gaidhane
                    </Anchor>
                    {' '}| All Rights Reserved | {currentYear}
                </Text>

                {/* Social Media */}
                <Group gap={20}>
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
                                alt={icon.alt}
                                h={24}
                                w={24}
                                loading="lazy"
                            />
                        </ActionIcon>
                    ))}
                </Group>
            </Flex>
        </Box>
    );
}
