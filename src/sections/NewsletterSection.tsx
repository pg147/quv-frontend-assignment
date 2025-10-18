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
        <Box
            component={'section'}
            id="newsletter"
            bg={'secondaryColor.0'}
            py={{ base: 76, lg: 160 }}
            px={{ base: 20, lg: 132 }}
            aria-labelledby="newsletter-heading"
        >
            <Stack align={'center'} gap={36}>
                {/* Header */}
                <Box w={{ base: '100%', lg: '50%' }}>
                    <SectionHeader
                        preheader={'Newsletter'}
                        title={'Watch our Courses'}
                        description={'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics'}
                        align={'center'}
                    />
                </Box>

                {/* Newsletter Form */}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    w={'100%'}
                    maw={800}
                    role="form"
                    aria-label="Newsletter subscription form"
                >
                    <Flex gap={{ base: 8, lg: 0 }} direction={{ base: 'column', lg: 'row' }}>
                        <TextInput
                            id="newsletter-email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            w={'100%'}
                            radius={0}
                            size="lg"
                            fz={14}
                            error={error}
                            leftSection={<LuMail size={20} aria-hidden="true" />}
                            leftSectionPointerEvents={'none'}
                            placeholder={'Enter your email'}
                            aria-label="Enter your email address to subscribe to our newsletter"
                            aria-required="true"
                            aria-invalid={!!error}
                            aria-describedby={error ? "email-error" : undefined}
                            required
                        />

                        <Button
                            type="submit"
                            variant={'filled'}
                            radius={0}
                            fz={14}
                            size="lg"
                            color={'primaryColor.0'}
                            miw={120}
                            aria-label="Subscribe to newsletter"
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
                    {error && (
                        <Text
                            id="email-error"
                            c="red"
                            fz={14}
                            mt={8}
                            role="alert"
                            aria-live="polite"
                        >
                            {error}
                        </Text>
                    )}
                </Box>
            </Stack>

            {/* Success Modal */}
            <Modal
                radius={24}
                opened={opened}
                onClose={close}
                centered
                withCloseButton={true}
                closeButtonProps={{ 'aria-label': 'Close success message' }}
                title="Subscription Successful"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Stack pb={20} align={'center'} gap={16}>
                    {/* Success Icon */}
                    <Flex
                        h={80}
                        w={80}
                        bdrs={'50%'}
                        bg={'primaryColor.0'}
                        align={'center'}
                        justify={'center'}
                        aria-hidden="true"
                    >
                        <LuCheck strokeWidth={3} size={40} color={'white'} />
                    </Flex>

                    {/* Title */}
                    <Title
                        id="modal-title"
                        c={'titleColor.0'}
                        fz={24}
                        fw={700}
                    >
                        Thank You!
                    </Title>

                    {/* Description */}
                    <Text
                        id="modal-description"
                        ta={'center'}
                        c={'descriptionColor.0'}
                        maw={280}
                    >
                        You&apos;ve successfully subscribed to our newsletter!
                    </Text>

                    {/* Close Button */}
                    <Button
                        onClick={close}
                        variant="filled"
                        color="primaryColor.0"
                        mt={12}
                        aria-label="Close and return to page"
                    >
                        Got it!
                    </Button>
                </Stack>
            </Modal>
        </Box>
    );
}
