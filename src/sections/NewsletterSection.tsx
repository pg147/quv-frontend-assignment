// React imports
import { type ChangeEvent, type FormEvent, useState } from "react";

// Mantine UI components
import { Box, Button, Flex, Modal, Stack, Text, TextInput, Title } from "@mantine/core";

// Mantine hooks
import { useDisclosure } from "@mantine/hooks";

// Custom components
import { SectionHeader } from "../components";

// Custom icons from react-icons library
import { LuCheck, LuMail } from "react-icons/lu";

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    // States to manage modal visibility
    const [opened, { open, close }] = useDisclosure();

    // Function to update email state on input change
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);

        // Clear error when the user starts typing
        if (error) setError('');
    }

    // Function to handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault(); // Prevent default form submission behavior

        // Regex to validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        // Test email against regex
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email');
            return;
        }

        // Clear error and process valid email
        setError('');

        // Open modal to indicate successful submission
        open();

        // Clear email input field
        setEmail('');
    }

    return (
        <Box component={'section'} bg={'secondaryColor.0'} py={{ base: 76, lg: 160 }} px={{ base: 20, lg: 132 }}>
            <Stack align={'center'} justify={'center'} gap={36}>
                {/* Header Content */}
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
                <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Flex gap={{ base: 8, lg: 0 }} direction={{ base: 'column', lg: 'row' }}>
                        {/* Email Input Field */}
                        <TextInput
                            c={'primaryColor.0'}
                            value={email}
                            onChange={handleEmailChange}
                            miw={{ base: '100%', lg: 600 }}
                            radius={0}
                            size="lg"
                            fz={14}
                            error={error}
                            leftSection={<LuMail size={20}/>}
                            leftSectionPointerEvents={'none'}
                            placeholder={'Enter your email'}
                        />

                        {/* Subscribe Button */}
                        <Button
                            type="submit"
                            variant={'filled'}
                            radius={0}
                            fz={14}
                            size="lg"
                            color={'primaryColor.0'}
                        >
                            Subscribe
                        </Button>
                    </Flex>
                </form>
            </Stack>

            {/* Success Modal */}
            <Modal radius={24} opened={opened} onClose={close} centered={true}>
                {/* Modal content */}
                <Stack pb={20} justify={'center'} align={'center'} gap={16}>
                    <Stack gap={16} justify={'center'} align={'center'}>
                        <Flex h={'fit-content'} w={'fit-content'} p={20} bdrs={100} bg={'primaryColor.0'}>
                            <LuCheck strokeWidth={3} size={40} color={'white'}/>
                        </Flex>
                        <Title c={'titleColor.0'} fz={24} fw={700}>Thank You!</Title>
                    </Stack>

                    <Text ta={'center'} w={'90%'} c={'descriptionColor.0'}>
                        You&apos;ve successfully subscribed to our newsletter!
                    </Text>
                </Stack>
            </Modal>
        </Box>
    );
}
