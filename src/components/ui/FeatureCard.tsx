import { Box, Card, Flex, Image, Stack, Text } from "@mantine/core";

export default function FeatureCard({ iconSrc, title, description }: { iconSrc: string; title: string; description: string}) {
    return (
        <Card shadow={'md'} p={24} bdrs={'xl'} w={'100%'} maw={{ base: '100%', lg: 250 }}>
            <Stack gap={36}>
                <Flex direction={'column'} gap={16} align={{ base: 'center', lg: 'normal' }}>
                    <Flex p={20} h={'fit-content'} w={'fit-content'} justify={'center'} align={'center'} bdrs={'lg'} bg={'primaryColor.0'}>
                        <Image loading={'lazy'} src={iconSrc ?? '/assets/icons/012-blackboards.svg'} alt={'Icon'} h={32} w={32} />
                    </Flex>

                    <Text fz={20} fw={700}>{title}</Text>
                </Flex>

                <Stack gap={16}>
                    <Box component={'div'} h={3} w={{ base: 48, lg: 70 }} bg={'dangerColor.0'}></Box>

                    <Text fz={14} fw={400} c={'descriptionColor.0'}>{description}</Text>
                </Stack>
            </Stack>
        </Card>
    );
}