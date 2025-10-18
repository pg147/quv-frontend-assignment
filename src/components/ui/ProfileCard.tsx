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
        >
            {/* User Image */}
            <Card.Section>
                <Image
                    src={slideData.image}
                    h={250}
                    fit={'cover'}
                    alt={`${slideData.name} profile picture`}
                    loading="lazy"
                />
            </Card.Section>

            <Stack align={'center'} py={28} gap={12}>
                {/* User Name */}
                <Title fz={20} fw={700}>
                    {slideData.name}
                </Title>

                {/* User Profession */}
                <Text fw={400} fz={14} c={'descriptionColor.0'}>
                    {slideData.profession}
                </Text>

                {/* Social Media Icons */}
                <Group gap={8}>
                    {SOCIAL_ICONS.map((icon) => (
                        <ActionIcon
                            key={icon.alt}
                            variant="transparent"
                            size="lg"
                            aria-label={icon.ariaLabel}
                        >
                            <Image
                                src={icon.src}
                                alt={icon.alt}
                                h={24}
                                w={24}
                                loading="lazy"
                            />
                        </ActionIcon>
                    ))}
                </Group>
            </Stack>
        </Card>
    );
}
