// Mantine UI Components
import { Box, Button, Flex, Image } from "@mantine/core";

// Mantine Hooks
import { useMediaQuery } from "@mantine/hooks";

// Custom components
import { SectionHeader } from "../components";

export default function HeroSection() {
    // Detect tablet portrait
    const isTabletPortrait = useMediaQuery('(min-width: 48em) and (orientation: portrait)');

    // Detect tablet landscape
    const isTabletLandscape = useMediaQuery('(min-width: 48em) and (orientation: landscape)');

    // Calculate height based on conditions
    const getImageHeight = () => {
        if (isTabletPortrait) return 'clamp(450px, 70vh, 550px)';
        if (isTabletLandscape) return 'clamp(300px, 50vh, 420px)';
        return '320px'; // Mobile default
    };

    return (
        <Box
            component={'section'}
            h={'100vh'}
            bg={'secondaryColor.0'}
            pos={'relative'}
            px={{ base: 0, lg: 160 }}
            aria-label="Hero section"
        >
            {/* Wrapper Container */}
            <Flex
                py={{ base: 112, lg: 0 }}
                direction={'column'}
                h={'100%'}
                justify={{ base: 'flex-start', lg: 'center' }}
                gap={36}
            >
                {/* Content Container */}
                <Flex
                    direction={'row'}
                    w={'max-content'}
                    maw={{ base: '100%', lg: '40%' }}
                    align={'flex-start'}
                    mx={{ base: 'auto', lg: '0' }}
                >
                    <SectionHeader
                        preheader={'Welcome!'}
                        title={'Best Learning Opportunities'}
                        description={'Our goal is to make online education work for everyone'}
                        descriptionSize={{ base: 14, lg: 16 }}
                        descriptionMaxWidth={{ base: '80%', lg: '336px' }}
                        titleSize={{ base: 28, sm: 36, lg: 56 }}
                        titleMaxWidth={{ base: '100%', lg: '95%' }}
                    />
                </Flex>

                {/* Action Buttons Container */}
                <Flex
                    direction={'row'}
                    align={'center'}
                    justify={{ base: 'center', lg: 'normal' }}
                    gap={12}
                    role="group"
                    aria-label="Call to action buttons"
                >
                    {/* Join Us Button */}
                    <Button
                        component="a"
                        href="#newsletter"
                        fz={{ base: 14, lg: 16 }}
                        h={'fit-content'}
                        radius={'md'}
                        px={40}
                        py={{ base: 16, lg: 20 }}
                        variant={'filled'}
                        bg={'primaryColor.0'}
                        aria-label="Join EduVista and start learning"
                    >
                        Join Us
                    </Button>

                    {/* Learn More Button */}
                    <Button
                        component="a"
                        href="#features"
                        fz={{ base: 14, lg: 16 }}
                        h={'fit-content'}
                        radius={'md'}
                        px={40}
                        py={{ base: 16, lg: 20 }}
                        variant={'outline'}
                        color={'primaryColor.0'}
                        aria-label="Learn more about our courses and features"
                    >
                        Learn more
                    </Button>
                </Flex>
            </Flex>

            <Image
                src={'/assets/hero/hero-cover-1.webp'}
                alt={'Students learning online with laptops and books'}
                pos={'absolute'}
                left={'50%'}
                bottom={0}
                w={'fit-content'}
                loading="eager"
                style={{
                    transform: 'translateX(-50%)',
                    height: getImageHeight(),
                }}
                hiddenFrom="lg"
                role="img"
            />


            {/* Desktop version - right aligned */}
            <Image
                src={'/assets/hero/hero-cover-1.webp'}
                alt={'Students learning online with laptops and books'}
                pos={'absolute'}
                right={0}
                bottom={0}
                w={'fit-content'}
                loading="eager"
                visibleFrom="lg"
                role="img"
                style={{
                    height: '85vh', // 75% of viewport height for desktop
                }}
            />
        </Box>
    );
}
