// Mantine UI Components
import { Button, Card, Group, Image, Stack, Text, Title } from "@mantine/core";

// Type definitions
import type { ProfileCardData } from "../../types/dataTypes.ts";

export default function ProfileCard({ slideData }: { slideData: ProfileCardData }) {
    return (
        <Card
            mih={375}
            miw={{ base: 0, lg: 240 }}
            shadow="sm"
            p={0}
            bdrs={20}
        >
            {/* User Image */}
            <Card.Section>
                <Image
                    src={slideData.image}
                    h={'fit-content'}
                    mah={250}
                    fit={'cover'}
                    alt={slideData.name}
                />
            </Card.Section>

            <Stack align={'center'} py={28} justify={'center'} gap={12} style={{ flex: 1 }}>
                {/* User Name */}
                <Title p={0} fz={20} fw={700}>{slideData.name}</Title>

                {/* User Profession */}
                <Text p={0} fw={400} fz={14} c={'descriptionColor.0'}>
                    {slideData.profession}
                </Text>

                {/* Social Media Icons */}
                <Group>
                    <Button variant={'transparent'} p={0}>
                        <Image src={'/assets/icons/facebook.svg'} alt={'Icon'} h={24} w={24} />
                    </Button>
                    <Button variant={'transparent'} p={0}>
                        <Image src={'/assets/icons/instagram.svg'} alt={'Icon'} h={24} w={24} />
                    </Button>
                    <Button variant={'transparent'} p={0}>
                        <Image src={'/assets/icons/twitter.svg'} alt={'Icon'} h={24} w={24} />
                    </Button>
                </Group>
            </Stack>
        </Card>
    );
}
