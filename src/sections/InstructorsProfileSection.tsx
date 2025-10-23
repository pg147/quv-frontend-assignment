// Mantine UI components
import { Box, Flex } from "@mantine/core";

// Custom components
import { ProfileCarousel, SectionHeader } from "../components";

// Static data
import { PROFILE_CARDS } from "../constants/data.ts";

export default function InstructorsProfileSection() {
    return (
        <Box
            component={'section'}
            id="instructors"
            h='fit-content'
            py={{ base: 36, lg: 96 }}
            px={{ base: 20, lg: 0 }}
            aria-labelledby="instructors-heading"
        >
            <Flex
                gap={{ base: 12, lg: 44 }}
                direction={'column'}
                w={'100%'}
                maw={{ base: '100%', lg: '1050px', xl: '1200px' }}
                mx={{ base: 0, lg: 'auto' }}
            >
                <SectionHeader
                    preheader={'Team'}
                    title={'Get Quality Education'}
                    description={'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics'}
                    titleSize={{ base: 20, lg: 28 }}
                    descriptionSize={{ base: 14, lg: 16 }}
                    descriptionMaxWidth={{ base: '100%', sm: '60%', lg: '470px' }}
                    preheaderSize={14}
                />

                <Box mx={'auto'} w={{ base: '100%', sm: '80%', lg: '100%' }} aria-label="Our instructors carousel">
                    <ProfileCarousel slides={PROFILE_CARDS}/>
                </Box>
            </Flex>
        </Box>
    );
}
