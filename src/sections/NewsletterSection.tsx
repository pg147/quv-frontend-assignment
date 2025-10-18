// React imports
import { type ChangeEvent, type FormEvent, useState } from "react";

// Mantine UI components
import { Box, Button, Flex, Modal, Stack, Text, TextInput, Title } from "@mantine/core";

// Mantine hooks
import { useDisclosure } from "@mantine/hooks";

// Custom components
import { SectionHeader } from "../components";

// Icons from react-icons library
import { LuCheck, LuMail } from "react-icons/lu";

// Email validation regex constant
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    // Modal state management
    const [opened, { open, close }] = useDisclosure();

    // Update email state and clear errors
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
        if (error) setError('');
    }

    // Validate and submit email
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!EMAIL_REGEX.test(email)) {
            setError('Please enter a valid email');
            return;
        }

        // Success - show modal and reset form
        open();
        setEmail('');
        setError('');
    }

    return (
        <Box component={'section'} bg={'secondaryColor.0'} py={{ base: 76, lg: 160 }} px={{ base: 20, lg: 132 }}>
            <Stack align={'center'} gap={36}>
                {/* Header */}
                <Box w={{ base: '100%', lg: '50%' }}>
                    <SectionHeader
                        preheader={'Newsletter'}
                        title={'Watch our Courses'}
                        description={'Problems trying to resolve the conflict between \n' +
                            'the two major realms of Classical physics: Newtonian mechanics '}
                        align={'center'}
                    />
                </Box>

                {/* Newsletter Form */}
                <Box component="form" onSubmit={handleSubmit} w={'100%'} maw={800}>
                    <Flex gap={{ base: 8, lg: 0 }} direction={{ base: 'column', lg: 'row' }}>
                        <TextInput
                            value={email}
                            onChange={handleEmailChange}
                            w={'100%'}
                            radius={0}
                            size="lg"
                            fz={14}
                            error={error}
                            leftSection={<LuMail size={20} />}
                            leftSectionPointerEvents={'none'}
                            placeholder={'Enter your email'}
                        />

                        <Button
                            type="submit"
                            variant={'filled'}
                            radius={0}
                            fz={14}
                            size="lg"
                            color={'primaryColor.0'}
                            miw={120}
                            styles={(theme) => ({
                                root: {
                                    backgroundColor: theme.colors.primaryColor[0],
                                    '&:hover': {
                                        backgroundColor: theme.colors.primaryColor[2], // Use index 2 or 3 for darker shade
                                    },
                                },
                            })}
                        >
                            Subscribe
                        </Button>
                    </Flex>
                </Box>
            </Stack>

            {/* Success Modal */}
            <Modal
                radius={24}
                opened={opened}
                onClose={close}
                centered
                withCloseButton={false}
            >
                <Stack pb={20} align={'center'} gap={16}>
                    <Flex h={80} w={80} bdrs={'50%'} bg={'primaryColor.0'} align={'center'} justify={'center'}>
                        <LuCheck strokeWidth={3} size={40} color={'white'} />
                    </Flex>

                    <Title c={'titleColor.0'} fz={24} fw={700}>
                        Thank You!
                    </Title>

                    <Text ta={'center'} c={'descriptionColor.0'} maw={280}>
                        You&apos;ve successfully subscribed to our newsletter!
                    </Text>
                </Stack>
            </Modal>
        </Box>
    );
}
