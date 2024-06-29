import React, { useState } from 'react';
import { Box, Button, Flex, Text, Input, SimpleGrid, useToast } from '@chakra-ui/react';

const SectionForm = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [scores, setScores] = useState([null, null, null]);
    const [suggestion, setSuggestion] = useState('');
    const toast = useToast();

    const questionTitles = [
        'Based on my visit today, I would say Dell Technologies is...',
        'How much did you like The Dell Technologies brand on this site...',
        'How much did you like content featured on this page...'
    ];

    const handleScoreClick = (index, score) => {
        const newScores = [...scores];
        newScores[index] = score;
        setScores(newScores);
        setCurrentSection(currentSection + 1);
    };

    const handleSuggestionChange = (e) => setSuggestion(e.target.value);

    const handleSubmit = () => {
        const submissionPromise = new Promise((resolve) => {
            setTimeout(() => resolve(200), 2000);
        });

        submissionPromise.then(() => {
            setCurrentSection(0);
            setScores([null, null, null]);
            setSuggestion('');
        });

        toast.promise(submissionPromise, {
            success: { title: 'Form submitted', description: 'Thank you for your feedback!' },
            error: { title: 'Submission failed', description: 'Please try again later.' },
            loading: { title: 'Submitting', description: 'Please wait...' },
        });
    };

    return (
        <Box width="100%" maxWidth="600px"  mt="10" mb={10}>
            <Flex justifyContent={{base:'space-evenly',lg:"space-between"}} mb="4" color={'white'}>
                <Text fontSize="xl" fontWeight="bold">Survey</Text>
                <Text fontSize="md">{currentSection + 1}/4</Text>
            </Flex>
            {currentSection < 3 && (
                <Box>
                    <Text mb="4" color={'white'}>{questionTitles[currentSection]}</Text>
                    <SimpleGrid columns={{base:3,lg:7}} row={{base:2, lg:1}} spacing={1}>
                        {[...Array(7)].map((_, score) => (
                            <Button
                                key={score}
                                borderRadius="50%"
                                width="40px"
                                height="40px"
                                bg={scores[currentSection] === score + 1 ? 'blue.500' : 'gray.200'}
                                color={scores[currentSection] === score + 1 ? 'white' : 'black'}
                                onClick={() => handleScoreClick(currentSection, score + 1)}
                            >
                                {score + 1}
                            </Button>
                        ))}
                    </SimpleGrid>
                </Box>
            )}
            {currentSection === 3 && (
                <Box color={'white'}>
                    <Text mb="4">Is there anything specific about your experience today that you'd like to share?</Text>
                    <Input
                        placeholder="Your feedback will help us improve our website."
                        value={suggestion}
                        onChange={handleSuggestionChange}
                        mb="4"
                    />
                    <Button onClick={handleSubmit} colorScheme="blue">Submit</Button>
                </Box>
            )}
        </Box>
    );
};

export default SectionForm;
