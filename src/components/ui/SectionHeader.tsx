import { Flex, Text, Title } from "@mantine/core";

export default function SectionHeader({ title, description, preheader, align = 'left' }: { title: string; description: string; preheader?: string; align?: 'left' | 'center' | 'right' }) {
    const contentAlignment = align === 'left' ? 'flex-start' : align === 'center' ? 'center' : 'flex-end'

    return (
        <Flex
            h={'fit-content'}
            w={'fit-content'}
            direction={'column'}
            gap={12}
            align={{ base: 'center', lg: contentAlignment || 'flex-start' }}
        >
            <Flex direction={'column'} gap={12} w={'100%'}>
                {preheader && (
                    <Text
                        c={'primaryColor.0'}
                        fz={18}
                        fw={700}
                        ta={{ base: 'center', lg: 'left' }}
                    >
                        {preheader}
                    </Text>
                )}

                <Title
                    m={0}
                    fw={700}
                    fz={{ base: 28, sm: 40, md: 48, lg: 56 }}
                    order={1}
                    c={'titleColor.0'}
                    ta={{ base: 'center', lg: 'left' }}
                >
                    {title}
                </Title>
            </Flex>

            <Text
                m={0}
                fw={400}
                w={{ base: '80%', lg: 'fit-content' }}
                fz={{ base: 16, lg: 20 }}
                c={'descriptionColor.0'}
                ta={{ base: 'center', lg: 'left' }}
            >
                {description}
            </Text>
        </Flex>

    );
}