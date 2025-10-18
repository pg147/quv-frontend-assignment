// React imports for optimization
import { useMemo } from 'react';

// Mantine UI components
import { Flex, Text, Title } from "@mantine/core";

// Type definitions
import type { SectionHeaderProps } from "../../types/componentTypes.ts";

export default function SectionHeader({ title, description, preheader, align = 'left' }: SectionHeaderProps) {
    // Memoize alignment calculations
    const { contentAlignment, textAlign } = useMemo(() => ({
        contentAlignment: align === 'left' ? 'flex-start' : align === 'center' ? 'center' : 'flex-end',
        textAlign: align
    }), [align]);

    return (
        <Flex
            w={'100%'}
            direction={'column'}
            gap={12}
            align={{ base: 'center', lg: contentAlignment }}
        >
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
                fw={700}
                fz={{ base: 28, sm: 40, md: 48, lg: 56 }}
                order={1}
                c={'titleColor.0'}
                ta={{ base: 'center', lg: textAlign }}
            >
                {title}
            </Title>

            <Text
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
