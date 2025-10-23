// React imports for optimization
import { useMemo } from 'react';

// Mantine UI components
import { Flex, Text, Title } from "@mantine/core";

// Type definitions
interface SectionHeaderProps {
    title: string;
    description: string;
    preheader?: string;
    align?: 'left' | 'center' | 'right';
    // Desktop customization props (lg breakpoint)
    titleSize?: { base?: number; sm?: number; lg?: number };
    titleMaxWidth?: { base?: string; lg?: string | number };  // Added title width prop
    descriptionSize?: { base?: number; lg?: number };
    descriptionMaxWidth?: { base?: string; sm?: string | number; lg?: string | number };
    preheaderSize?: number;
}

export default function SectionHeader({
                                          title,
                                          description,
                                          preheader,
                                          align = 'left',
                                          titleSize = { base: 28, lg: 56 },
                                          titleMaxWidth = { base: '100%', lg: '100%' },  // Default to full width
                                          descriptionSize = { base: 16, lg: 20 },
                                          descriptionMaxWidth = { base: '80%', lg: 'fit-content' },
                                          preheaderSize = 18
                                      }: SectionHeaderProps) {
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
                    fz={preheaderSize}
                    fw={700}
                    ta={{ base: 'center', lg: textAlign }}
                >
                    {preheader}
                </Text>
            )}

            <Title
                fw={700}
                fz={{
                    base: titleSize.base,
                    sm: titleSize?.sm ?? 28,
                    lg: titleSize.lg
                }}
                w={titleMaxWidth}  // Apply title width
                maw={typeof titleMaxWidth.lg === 'number' ? titleMaxWidth.lg : undefined}
                order={1}
                c={'titleColor.0'}
                ta={{ base: 'center', lg: textAlign }}
            >
                {title}
            </Title>

            <Text
                fw={400}
                w={descriptionMaxWidth}
                maw={typeof descriptionMaxWidth.lg === 'number' ? descriptionMaxWidth.lg : undefined}
                fz={descriptionSize}
                c={'descriptionColor.0'}
                ta={{ base: 'center', lg: textAlign }}
            >
                {description}
            </Text>
        </Flex>
    );
}
