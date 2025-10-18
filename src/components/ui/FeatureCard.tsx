import { Box, Card, Flex, Image, Stack, Text } from "@mantine/core";

interface FeatureCardProps {
    iconSrc: string;
    title: string;
    description: string;
}

export default function FeatureCard({ iconSrc, title, description }: FeatureCardProps) {
    return (
        <Card
            shadow={'md'}
            p={24}
            bdrs={'xl'}
            w={'100%'}
            maw={{ base: '100%', lg: 250 }}
            role="article"
            aria-labelledby={`feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
            <Stack gap={36}>
                <Flex direction={'column'} gap={16} align={{ base: 'center', lg: 'normal' }}>
                    <Flex
                        p={20}
                        h={'fit-content'}
                        w={'fit-content'}
                        justify={'center'}
                        align={'center'}
                        bdrs={'lg'}
                        bg={'primaryColor.0'}
                        aria-hidden="true"
                    >
                        <Image
                            loading={'lazy'}
                            src={iconSrc ?? '/assets/icons/012-blackboards.svg'}
                            alt=""
                            h={32}
                            w={32}
                        />
                    </Flex>

                    <Text
                        id={`feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
                        fz={20}
                        fw={700}
                        component="h3"
                    >
                        {title}
                    </Text>
                </Flex>

                <Stack gap={16}>
                    <Box
                        component={'div'}
                        h={3}
                        w={{ base: 48, lg: 70 }}
                        bg={'dangerColor.0'}
                        aria-hidden="true"
                    />

                    <Text fz={14} fw={400} c={'descriptionColor.0'}>
                        {description}
                    </Text>
                </Stack>
            </Stack>
        </Card>
    );
}
