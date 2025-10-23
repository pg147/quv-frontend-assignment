// React imports
import { useState } from "react";

// Mantine UI components
import { Box, Button, Flex } from "@mantine/core";

// Custom components
import { FeatureCard, SectionHeader } from "../components";

// Static data
import { FEATURE_CARDS } from "../constants/data.ts";

// Icons from react-icons library
import { LuChevronRight } from "react-icons/lu";

// Type definitions
import type { FeatureCards } from "../types/dataTypes.ts";

export default function FeaturesSection() {
    // State to manage button hover effect
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            component={'section'}
            id="features"
            h={'fit-content'}
            bg={'white'}
            px={{ base: 20, lg: 0 }}
            aria-labelledby="features-heading"
        >
            <Flex
                py={{ base: 64, lg: 160 }}
                gap={{ base: 36, lg: 0 }}
                direction={{ base: 'column', lg: 'row' }}
                w={'100%'}
                maw={{ base: '100%', lg: '1050px', xl: '1200px' }}
                mx={{ base: 0, lg: 'auto' }}
                align={'center'}
                justify={{ base: 'center', lg: 'space-between' }}
            >
                {/* Left Content Section */}
                <Flex
                    w={'100%'}
                    maw={{ base: '100%', lg: '50%' }}
                    direction={'column'}
                    gap={36}
                    align={{ base: 'center', lg: 'flex-start' }}
                >
                    {/* Red Decorative Line */}
                    <Box
                        h={{ base: 5, lg: 8 }}
                        w={{ base: 100, lg: 136 }}
                        bg={'dangerColor.0'}
                        aria-hidden="true"
                    />

                    {/* Section Header */}
                    <SectionHeader
                        title={'Affordable Packages'}
                        description={'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics'}
                        titleSize={{ base: 20, lg: 40 }}
                        descriptionSize={{ base: 14, lg: 16 }}
                        descriptionMaxWidth={{ base: '100%', sm: '70%', lg: '350px' }}
                    />

                    {/* Learn More Button with Hover Animation */}
                    <Button
                        component="a"
                        href="#"
                        w={'fit-content'}
                        fz={16}
                        p={0}
                        variant={'transparent'}
                        rightSection={
                            <span
                                style={{
                                    display: 'inline-flex',
                                    marginLeft: -6,
                                    transition: 'transform 0.3s ease',
                                    transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
                                }}
                            >
                                <LuChevronRight size={20} color={'#96ba7b'} aria-hidden="true"/>
                            </span>
                        }
                        color={'primaryColor.0'}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        aria-label="Learn more about our affordable packages and features"
                    >
                        Learn more
                    </Button>
                </Flex>

                {/* Feature Cards Grid */}
                <Flex
                    direction={{ base: 'column', sm: 'row', lg: 'row' }}
                    gap={20}
                    role="list"
                    aria-label="Key features of our platform"
                >
                    {FEATURE_CARDS.map((card: FeatureCards) => (
                        <Box key={card.title} role="listitem">
                            <FeatureCard
                                iconSrc={card.iconSrc}
                                title={card.title}
                                description={card.description}
                            />
                        </Box>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
}
