// React imports
import { useState, useEffect, useCallback } from 'react';

// Mantine UI Components
import { AppShell, Box, Burger, Button, Drawer, Group, NavLink, Stack, Text, UnstyledButton } from '@mantine/core';

// Static Data
import { NAV_LINKS } from "../constants/data.ts";

// Mantine Hooks
import { useDisclosure, useWindowScroll } from '@mantine/hooks';

// Icons from react-icons library
import { LuArrowRight } from 'react-icons/lu';

export default function Navbar() {
    // State to manage active links
    const [active, setActive] = useState('Home');

    // State to manage drawer state
    const [opened, { toggle, close }] = useDisclosure(false);

    // State to manage scroll behavior
    const [isScrolled, setIsScrolled] = useState(false);
    const [scroll] = useWindowScroll();

    // Optimize scroll handler with useEffect
    useEffect(() => {
        setIsScrolled(scroll.y > 50);
    }, [scroll.y]);

    // Memoize navigation click handler
    const handleNavClick = useCallback((label: string) => {
        setActive(label);
        close();
    }, [close]);

    return (
        <AppShell
            header={{ height: { base: 64, lg: 80 } }}
            padding={0}
        >
            <AppShell.Header
                px={{ base: 20, lg: 132 }}
                style={{
                    backgroundColor: isScrolled ? 'white' : 'transparent',
                    borderBottom: isScrolled ? '1px solid #f0f0f0' : 'none',
                    transition: 'background-color 0.3s ease, border-bottom 0.3s ease',
                }}
            >
                <Group h="100%" justify="space-between">
                    {/* Logo */}
                    <Text fz={{ base: 24, lg: 28 }} fw={700} c="titleColor.0">
                        EduVista
                    </Text>

                    {/* Desktop Navigation */}
                    <Group gap={64} visibleFrom="md">
                        {NAV_LINKS.map((link) => (
                            <UnstyledButton
                                key={link.label}
                                onClick={() => setActive(link.label)}
                            >
                                <Text
                                    fz={16}
                                    fw={500}
                                    c={active === link.label ? 'primaryColor.0' : 'descriptionColor.0'}
                                >
                                    {link.label}
                                </Text>
                            </UnstyledButton>
                        ))}
                    </Group>

                    {/* Desktop Actions */}
                    <Group gap={16} visibleFrom="md">
                        <Button
                            h={'fit-content'}
                            radius={8}
                            px={24}
                            py={16}
                            variant="outline"
                            color="primaryColor.0"
                            fw={700}
                            fz={16}
                        >
                            Login
                        </Button>

                        <Button
                            variant="filled"
                            color="primaryColor.0"
                            radius={8}
                            rightSection={<LuArrowRight size={16}/>}
                            h={'fit-content'}
                            px={24}
                            py={16}
                            fw={700}
                            fz={16}
                            styles={{
                                root: {
                                    '&:hover': {
                                        filter: 'brightness(0.9)',
                                    },
                                },
                            }}
                        >
                            JOIN US
                        </Button>
                    </Group>

                    {/* Mobile Hamburger */}
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="md"
                        size="md"
                    />
                </Group>
            </AppShell.Header>

            {/* Mobile Drawer */}
            <Drawer
                opened={opened}
                onClose={close}
                position="left"
                size="75%"
                title={
                    <Text fz={24} fw={700} c="titleColor.0">
                        EduVista
                    </Text>
                }
                padding="lg"
                hiddenFrom="md"
            >
                <Stack gap={0}>
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.label}
                            label={link.label}
                            color={'primaryColor.0'}
                            active={active === link.label}
                            onClick={() => handleNavClick(link.label)}
                            styles={{
                                root: {
                                    borderRadius: 8,
                                    fontWeight: 600,
                                    fontSize: 16,
                                },
                            }}
                        />
                    ))}

                    <Box mt={24}>
                        <Stack gap={12}>
                            <Button
                                variant="outline"
                                color="primaryColor.0"
                                fullWidth
                                h={'fit-content'}
                                fz={14}
                                px={24}
                                py={12}
                                fw={700}
                                onClick={close}
                            >
                                Login
                            </Button>
                            <Button
                                variant="filled"
                                color="primaryColor.0"
                                rightSection={<LuArrowRight size={16}/>}
                                fullWidth
                                h={'fit-content'}
                                px={24}
                                py={12}
                                fw={700}
                                fz={14}
                                onClick={close}
                                styles={{
                                    root: {
                                        '&:hover': {
                                            filter: 'brightness(0.9)',
                                        },
                                    },
                                }}
                            >
                                JOIN US
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Drawer>
        </AppShell>
    );
}
