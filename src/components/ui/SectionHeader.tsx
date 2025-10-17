import { Flex, Text, Title } from "@mantine/core";
import type { SectionHeaderProps } from "../../types/componentTypes.ts";

export default function SectionHeader({ title, description, preheader, align = 'left' }: SectionHeaderProps) {
    const contentAlignment = align === 'left' ? 'flex-start' : align === 'center' ? 'center' : 'flex-end';
    const textAlign = align;

    return (
        <Flex
            h={'fit-content'}
            w={'100%'}
            direction={'column'}
            gap={12}
            align={{ base: 'center', lg: contentAlignment }}
        >
            <Flex direction={'column'} gap={12} w={'100%'}>
                {preheader && (
                    <Text
                        c={'primaryColor.0'}
                        fz={18}
                        fw={700}
                        ta={{ base: 'center', lg: textAlign }}
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
                    ta={{ base: 'center', lg: textAlign }}
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
                ta={{ base: 'center', lg: textAlign }}
            >
                {description}
            </Text>
        </Flex>
    );
}
