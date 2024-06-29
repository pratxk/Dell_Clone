import {
    Box,
    Flex,
    Image,
    Text,
    VStack,
    Heading,
    Link
} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";

export default function Playback_card({ image, mainHead, subHead, bodyContent, childData, ...rest }) {
    return (
        <Flex
            flexDir={{ base: "column-reverse", sm: "column-reverse", md: "column-reverse", lg: "row", xl: "row" }}
            justifyContent="flex-start"
            h={{ base: 'auto', md: '600px' }}
            mr={{base:-10,md:-10}}
            position="relative"
            {...rest}
        >
            <Box
                flex={2}
                display="flex"
                flexDir={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
                h={{ base: '80%', md: 'auto', lg: '100%' }}
                backgroundColor="#141d28"
            >
                <Box display={{ base: 'block', md: 'block', lg: 'none' }} backgroundColor={'white'} width="100%">
                    <CustomCard subHead={subHead} mainHead={mainHead} bodyContent={bodyContent} linkData={childData} />
                </Box>
            </Box>
            <Box
                display="flex"
                flex={2}
                position="relative"
                w={'100%'}
                h={{ base: '80%', md: 'auto', lg: '100%' }}
            >
                <Image
                    alt="Hero Image"
                    fit="cover"
                    align="center"
                    h="100%"
                    w={{base:'50%',md:'100%'}}
                    src={image}
                />
            </Box>
            <Box
                position="absolute"
                left="75%"
                top="50%"
                transform="translate(-50%, -50%)"
                zIndex="1"
                display={{ base: 'none', md: 'none', lg: 'block' }}
                width="100%"
            >
                <CustomCard subHead={subHead} mainHead={mainHead} bodyContent={bodyContent} linkData={childData} />
            </Box>
        </Flex>
    );
}

function CustomCard({ subHead, mainHead, bodyContent, linkData, img }) {
    return (
        <Box backgroundColor="white" p={4} w="100%" maxW={['md', 'md', 'lg', 'sm']} h={{base:'60%',md:'100%'}} boxShadow="lg">
            <Box>
                <Text>{subHead}</Text>
                <Heading mt={2} fontWeight={400}>{mainHead}</Heading>
                <Text mt={2}>{bodyContent}</Text>
            </Box>
            <br />
            <VStack align="left">
                {linkData.map((item, index) => (
                    <Flex key={index} align="center" gap="2px" p={1}>
                        <Link><Text whiteSpace="nowrap" color="blue.600">{item.title}</Text></Link>
                        <BiArrowBack style={{ transform: 'rotate(180deg)' }} fontSize="18px" color="blue.600" />
                    </Flex>
                ))}
            </VStack>
        </Box>
    );
}
