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
            h='fit-content'
            py={{ base: 36, lg: 96 }}
            px={{ base: 20, lg: 132 }}
        >
            <Flex
                gap={{ base: 12, lg: 44 }}
                direction={'column'}
                w={'100%'}
            >
                <SectionHeader
                    preheader={'Team'}
                    title={'Get Quality Education'}
                    description={'Problems trying to resolve the conflict between \n' +
                        'the two major realms of Classical physics: Newtonian mechanics '}
                />

                <ProfileCarousel slides={PROFILE_CARDS}/>
            </Flex>
        </Box>
    );
}
