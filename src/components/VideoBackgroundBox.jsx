import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { BiArrowBack, BiCaretRightCircle } from 'react-icons/bi';
import { useState, useRef } from 'react';

const VideoBackgroundBox = ({ url, boxbgColor, subHead, mainHead, bodyContent, btnexist, btnContent, linkContent1, linkContent2, ...btnAttr }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <Box position="relative" w={{base:'40%',sm:'70%',md:'100%'}} height={{ base: "300px", sm: "400px", md: "500px" }} overflow="hidden">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)"
                }}
            >
                <source src={url} type="video/mp4" />
            </video>

            <Box
                position="relative"
                justifyContent={{base:'left',md:'center'}}
                alignItems={{base:'left',md:'center'}}
                width="100%"
                height="100%"
                backgroundColor="rgba(0, 0, 0, 0.75)"
            />

            <Box
                position="absolute"
                top="50%"
                left={{base:'40%',md:"50%"}}
                transform="translate(-50%, -50%)"
                color="white"
                h={{base:'50%'}}
                w={{base:'50%'}}
                textAlign="center"
                zIndex="2"
                px={{ base: 4, md: 8 }}
            >
                <Text fontSize={{ base: "sm", md: "md" }} fontWeight={600}>{subHead}</Text>
                <Heading fontWeight={400} fontSize={{ base: "2xl", md: "4xl" }}>{mainHead}</Heading>
                <Text fontSize={{ base: "sm", md: "md" }} display={{base:'none', md:'block'}} mt={2} fontWeight={400}>{bodyContent}</Text>
                {btnexist && (
                    <Button mt={8} {...btnAttr} leftIcon={<BiCaretRightCircle />}>{btnContent}</Button>
                )}

                <Flex justify={"center"} mt={5} flexDirection={{ base: "column", sm: "row" }} display={{base:'none', md:'block'}}>
                    <Link href='#' mr={{ sm: 4, base: 0 }} mb={{ base: 2, sm: 0 }}>
                        <Flex align={"center"} gap={"2px"} backgroundColor={'transparent'} p={1}>
                            <Text whiteSpace={"nowrap"} color={'white'}>{linkContent1}</Text>
                            <BiArrowBack style={{ transform: 'rotate(180deg)' }} fontSize={"18px"} color={"white"} />
                        </Flex>
                    </Link>
                    <Link href='#'>
                        <Flex align={"center"} gap={"2px"} backgroundColor={'transparent'} p={1}>
                            <Text whiteSpace={"nowrap"} color={'white'}>{linkContent2}</Text>
                            <BiArrowBack style={{ transform: 'rotate(180deg)' }} fontSize={"18px"} color={"white"} />
                        </Flex>
                    </Link>
                </Flex>
            </Box>

            <Button
                position="absolute"
                w={{base:'sm',md:'md'}}
                backgroundColor={'gray.900'}
                color={'white'}
                bottom="10px"
                right="10px"
                left={{base:'40%',md:"50%"}}
                transform="translate(-50%, -50%)"
                zIndex="1"
                onClick={handlePlayPause}
            >
                {isPlaying ? 'Pause' : 'Play'}
            </Button>
        </Box>
    );
};

export default VideoBackgroundBox;
