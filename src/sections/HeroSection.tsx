// Mantine UI Components
import { Box, Button, Flex, Image } from "@mantine/core";

// Custom components
import { SectionHeader } from "../components";

export default function HeroSection() {
    return (
        <Box component={'section'} h={'100vh'} bg={'secondaryColor.0'} pos={'relative'} px={{ base: 0, lg: 132 }}>
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
                    />
                </Flex>

                {/* Action Buttons Container */}
                <Flex
                    direction={'row'}
                    align={'center'}
                    justify={{ base: 'center', lg: 'normal' }}
                    gap={12}
                >
                    {/* Join Us Button */}
                    <Button
                        fz={{ base: 14, lg: 16 }}
                        h={'fit-content'}
                        bdrs={'md'} px={40}
                        py={{ base: 16, lg: 20 }}
                        variant={'filled'}
                        bg={'primaryColor.0'}
                    >
                        Join Us
                    </Button>

                    {/* Learn More Button */}
                    <Button
                        fz={{ base: 14, lg: 16 }}
                        h={'fit-content'}
                        bdrs={'md'}
                        px={40}
                        py={{ base: 16, lg: 20 }}
                        variant={'outline'}
                        color={'primaryColor.0'}
                    >
                        Learn more
                    </Button>
                </Flex>
            </Flex>

            {/* Hero Image - Positioned absolutely relative to Box */}
            {/* Mobile version - centered */}
            <Image
                src={'/assets/hero/hero-cover-1.webp'}
                alt={'Hero Cover'}
                pos={'absolute'}
                left={'50%'}
                bottom={0}
                h={320}
                w={'fit-content'}
                loading={"eager"}
                style={{ transform: 'translateX(-50%)' }}
                hiddenFrom="lg"
            />

            {/* Desktop version - right aligned */}
            <Image
                src={'/assets/hero/hero-cover-1.webp'}
                alt={'Hero Cover'}
                pos={'absolute'}
                right={0}
                bottom={0}
                h={{ lg: 620, xl: 682 }}
                w={'fit-content'}
                loading={"eager"}
                visibleFrom="lg"
            />
        </Box>
    );
}

