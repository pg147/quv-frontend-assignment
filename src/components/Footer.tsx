// Mantine UI Components
import { Anchor, Box, Button, Flex, Group, Image, SimpleGrid, Stack, Text } from "@mantine/core";

// Static Data
import { FOOTER_CONTACT_DATA, FOOTER_DATA } from "../constants/data.ts";

// Type definitions
import type { ContactItem, FooterLink, FooterSection } from "../types/dataTypes.ts";

export default function Footer() {
    // Current Year for footer signature
    const currentYear = new Date().getFullYear();

    return (
        <Box component={'footer'} h={'fit-content'} w={'100%'}>
            {/* Footer Links Grid */}
            <SimpleGrid px={{ base: 20, lg: 132 }} py={{ base: 36, lg: 56 }} cols={{ base: 2, lg: 5 }} spacing={{ base: 'xl', lg: 'xs' }}>
                {/* Footer Links */}
                {FOOTER_DATA.map((section: FooterSection, index: number) => (
                    <Stack key={index}>
                        {/* Title */}
                        <Text c={'titleColor.0'} fz={16} fw={700}>{section.header}</Text>

                        {/* Links */}
                        <Stack gap={8}>
                            {section.links.map((link: FooterLink, index: number) => (
                                <Anchor fz={{ base: 12, lg: 14 }} key={index} c={'descriptionColor.0'} href={link.href} target={'_blank'}>{link.label}</Anchor>
                            ))}
                        </Stack>
                    </Stack>
                ))}

                {/* Footer Contact */}
                <Stack>
                    {/* Title */}
                    <Text c={'titleColor.0'} fz={16} fw={700}>{FOOTER_CONTACT_DATA.title}</Text>

                    {/* Contact Items */}
                    <Stack gap={8}>
                        {FOOTER_CONTACT_DATA.items.map((item: ContactItem, index: number) => (
                            <Group key={index} gap={12} align="center" wrap="nowrap">
                                {/* Icon */}
                                <Box miw={24} mih={24} style={{ flexShrink: 0 }}>
                                    <Image
                                        src={item.icon}
                                        alt={'Icon'}
                                        h={{ base: 20, lg: 24 }}
                                        w={{ base: 20, lg: 24 }}
                                        fit="contain"
                                    />
                                </Box>

                                {/* Item value */}
                                <Text fz={{ base: 12, lg: 14 }} c={'descriptionColor.0'} style={{ flex: 1 }}>
                                    {item.value}
                                </Text>
                            </Group>
                        ))}
                    </Stack>
                </Stack>
            </SimpleGrid>

            {/* Footer Salutation */}
            <Flex gap={{ base: 16, lg: 0 }} direction={{ base: 'column-reverse', lg: 'row' }} bg={'#FAFAFA'} w={'100%'} px={{ base: 20, lg: 132 }} py={24} align={'center'} justify={'space-between'}>
                {/* Salutation Line */}
                <Text c={'descriptionColor.0'} fz={14} fw={500}>Made With ❤️ By <span><Anchor c={'primaryColor.0'} fz={14} fw={500} underline={'never'} href={'https://www.prathmesh.dev'}>Prathmesh Gaidhane</Anchor></span> | All Rights Reserved | {currentYear}</Text>

                {/* Social Media Icons */}
                <Group gap={20}>
                    {/* Facebook */}
                    <Button variant={'transparent'} p={0}>
                        <Image src={'/assets/icons/facebook.svg'} alt={'Icon'} h={24} w={24} />
                    </Button>

                    {/* Instagram */}
                    <Button variant={'transparent'} p={0}>
                        <Image src={'/assets/icons/instagram.svg'} alt={'Icon'} h={24} w={24} />
                    </Button>

                    {/* Twitter */}
                    <Button variant={'transparent'} p={0}>
                        <Image src={'/assets/icons/twitter.svg'} alt={'Icon'} h={24} w={24} />
                    </Button>
                </Group>
            </Flex>
        </Box>
    );
}