import { Box, Flex } from '@chakra-ui/react';

const CustomLayout = ({ customCard, url, firstContainer }) => {
    return (
        <Box position="relative" width={["auto",'70%','100%']}  height="600px" mt={10}>
            <Flex width="100%" height="100%" flexDir={['column-reverse','column-reverse','row','row','row']}>
                <Box flex="2"  backgroundColor="transparent" gap={6}>
                    {/* First container content */}
                    <Box display={['block','block','none','none','none']} w={'100%'}>
                        {firstContainer}
                    </Box>
                </Box>
                <Box flex="3" w={{base:'30%',sm:'50%',lg:'100%'}} position="relative">
                    <Box
                        width="100%"
                        height="100%"
                        backgroundImage={`url(${url})`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                    />
                </Box>
            </Flex>
            <Box
                position="absolute"
                top="50%"
                left="20"
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

export default CustomLayout;
