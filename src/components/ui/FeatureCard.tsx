import { Box, Card, Flex, Image, Stack, Text } from "@mantine/core";

interface FeatureCardProps {
    iconSrc: string;
    title: string;
    description: string;
}

export default function FeatureCard({ iconSrc, title, description }: FeatureCardProps) {
    return (
        <Card
            px={{ base: 24, lg: 40 }}
            py={{ base: 24, lg: 36 }}
            bdrs={0}
            w={'100%'}
            maw={{ base: '100%', lg: 250 }}
            role="article"
            aria-labelledby={`feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
            style={{
                boxShadow: '0px 13px 19px 0px rgba(0, 0, 0, 0.07)'
            }}
        >
            <Stack gap={20}>
                <Flex direction={'column'} gap={20} align={{ base: 'center', lg: 'normal' }}>
                    <Flex
                        py={24}
                        px={20}
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
                            h={{ base: 24, lg: 32 }}
                            w={{ base: 24, lg: 32 }}
                        />
                    </Flex>

                    <Text
                        id={`feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
                        fz={16}
                        fw={700}
                        component="h3"
                    >
                        {title}
                    </Text>
                </Flex>

                <Stack gap={20} maw={{ base: '100%', lg: 132 }}>
                    <Box
                        component={'div'}
                        h={3}
                        w={50}
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
