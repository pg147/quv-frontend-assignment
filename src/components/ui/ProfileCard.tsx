// Mantine UI Components
import { ActionIcon, Card, Group, Image, Stack, Text, Title } from "@mantine/core";

// Static Data
import { SOCIAL_ICONS } from "../../constants/data.ts";

// Type definitions
import type { ProfileCardData } from "../../types/dataTypes.ts";

interface ProfileCardProps {
    slideData: ProfileCardData;
}

export default function ProfileCard({ slideData }: ProfileCardProps) {
    return (
        <Card
            mih={375}
            miw={{ base: 0, lg: 240 }}
            shadow="sm"
            p={0}
            radius={20}
            role="article"
            aria-labelledby={`instructor-name-${slideData.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
            {/* User Image */}
            <Card.Section>
                <Image
                    src={slideData.image}
                    h={250}
                    fit={'cover'}
                    alt={`Portrait photo of ${slideData.name}`}
                    loading="lazy"
                />
            </Card.Section>

            <Stack align={'center'} py={28} gap={12}>
                {/* User Name */}
                <Title
                    id={`instructor-name-${slideData.name.toLowerCase().replace(/\s+/g, '-')}`}
                    fz={20}
                    fw={700}
                    component="h3"
                >
                    {slideData.name}
                </Title>

                {/* User Profession */}
                <Text fw={400} fz={14} c={'descriptionColor.0'}>
                    {slideData.profession}
                </Text>

                {/* Social Media Icons */}
                <Group
                    gap={8}
                    role="list"
                    aria-label={`${slideData.name}'s social media links`}
                >
                    {SOCIAL_ICONS.map((icon) => (
                        <ActionIcon
                            key={icon.alt}
                            component="a"
                            href={'#'}
                            variant="transparent"
                            size="lg"
                            aria-label={`${slideData.name}'s ${icon.ariaLabel}`}
                            role="listitem"
                        >
                            <Image
                                src={icon.src}
                                alt=""
                                h={24}
                                w={24}
                                loading="lazy"
                                aria-hidden="true"
                            />
                        </ActionIcon>
                    ))}
                </Group>
            </Stack>
        </Card>
    );
}
