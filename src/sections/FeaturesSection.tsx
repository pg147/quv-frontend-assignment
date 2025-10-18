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
        <Box component={'section'} h={'fit-content'} bg={'white'} px={{ base: 20, lg: 132 }}>
            <Flex
                py={{ base: 64, lg: 160 }}
                gap={{ base: 36, lg: 0 }}
                direction={{ base: 'column', lg: 'row' }}
                w={'100%'}
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
                    <Box h={8} w={{ base: 100, lg: 136 }} bg={'dangerColor.0'} />

                    <SectionHeader
                        title={'Affordable Packages'}
                        description={'Problems trying to resolve the conflict between \n' +
                            'the two major realms of Classical physics: \n' +
                            'Newtonian mechanics '}
                    />

                    {/* Learn More Button with Hover Animation */}
                    <Button
                        w={'fit-content'}
                        fz={16}
                        p={0}
                        variant={'transparent'}
                        rightSection={<LuChevronRight size={16} color={'#96ba7b'} />}
                        color={'primaryColor.0'}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{
                            transition: 'transform 0.3s ease',
                            transform: isHovered ? 'translateX(12px)' : 'translateX(0)',
                        }}
                    >
                        Learn more
                    </Button>
                </Flex>

                {/* Feature Cards Grid */}
                <Flex direction={{ base: 'column', lg: 'row' }} gap={24}>
                    {FEATURE_CARDS.map((card: FeatureCards) => (
                        <FeatureCard
                            key={card.title}
                            iconSrc={card.iconSrc}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
}
