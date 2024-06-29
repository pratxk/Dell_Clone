import { Box, Flex } from '@chakra-ui/react';

const Homecard = ({url}) => {
    return (
        <Box position="relative" width="100%" height="600px" mt={10}>
            <Flex width="100%" height="100%">
                <Box flex="2" backgroundColor="transparent" gap={6}>
                    
                </Box>
                <Box flex="3" position="relative">
                    <Box
                        width="90%"
                        height="100%"
                        backgroundImage={`url(${url})`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export default Homecard;
