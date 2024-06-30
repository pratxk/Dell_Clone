import { Box, Flex } from '@chakra-ui/react';

const CustomLayoutReversed = ({ customCard, url, secondContainer }) => {
    return (
        <Box position="relative"  w={{base:'60%',sm:'50%',md:'70%',lg:'100%'}} height="600px" mt={10}>
            <Flex width="100%" height="100%" flexDir={['column','column','row','row','row']}>
                <Box flex="3" w={{base:'50%',sm:'70%',lg:'100%'}} position="relative">
                    <Box
                        width="100%"
                        height="100%"
                        backgroundImage={`url(${url})`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                    />
                </Box>
                <Box flex="2" backgroundColor="transparent" gap={6}>
                    {/* Second container content */}
                    <Box display={['block', 'block', 'none', 'none', 'none']} w={'100%'}>
                        {secondContainer}
                    </Box>
                </Box>
            </Flex>
            <Box
                position="absolute"
                top="50%"
                right="-380"
                transform="translateY(-80%)"
                width="80%"
                height="200px"
                display={['none', 'none', 'block', 'block', 'block']}
                zIndex="2"
            >
                {customCard}
            </Box>
        </Box>
    );
};

export default CustomLayoutReversed;
