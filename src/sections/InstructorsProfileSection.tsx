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
            py={96}
            px={{ base: 20, lg: 132 }}
        >
            <Flex direction={'column'} align={'flex-start'} w={'100%'} justify={'flex-start'}>
                <SectionHeader
                    preheader={'Team'}
                    title={'Get Quality Education'}
                    description={'Problems trying to resolve the conflict between \n' +
                        'the two major realms of Classical physics: Newtonian mechanics '}
                />

                <Box w={'100%'}>
                    <ProfileCarousel slides={PROFILE_CARDS} />
                </Box>
            </Flex>
        </Box>
    );
}
