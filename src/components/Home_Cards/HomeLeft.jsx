import {
    AspectRatio,
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function HomeLeft({ title, head, body, img, btn1, bodyColor, btncolor1, btnbgcolor1,mblast, btnhovercolor1, btncolor2, btnbgcolor2, btnhovercolor2, btn2, ...rest }) {
    const navigate = useNavigate();
    return (
        <Flex
            align={"center"}
            flexDir={{ base: "column-reverse", md: "column-reverse", lg: 'row', xl: 'row' }}
            justifyContent={'center'}
            m={0}
            h={{sm:'4xl',md:'3xl',xl:'md',lg:'md'}}
            

        >
            <Stack
                flex={1}
                spacing={{ base: 5, md: 4 }}
                p={5}
                align={{ base: "left", sm: 'left', md: 'left', lg: "center", xl: 'center' }}
                justify={"center"}
                height={'full'}
                {...rest}
                width={{base:'inherit',lg:'inherit'}}
                mb={mblast}
            >
                <Heading lineHeight={1.1} w='50%'>
                    <Text fontWeight={600}
                        align={"left"}
                        as={"span"}
                        fontSize={{ base: "xl", sm: "xl", lg: "xl" }}
                        position={"relative"}
                        mb={5}
                    >
                        {title}
                    </Text>
                    <br />
                    <Text align='left' fontWeight={400} fontSize={{ base: "4xl", sm: "4xl", lg: "4xl" }} mt={5}>
                        {head}
                    </Text>
                </Heading>
                <Text fontSize={{ base: "xl", sm: "xl", lg: "xl" }} w={'50%'} color={bodyColor}>{body}</Text>
                <Flex
                    gap={2}
                    justifyContent={"left"}
                    pb={3}
                >
                    <Button
                        size={['md', 'md', 'md', 'lg', 'lg']}
                        fontWeight={"normal"}
                        backgroundColor={btnbgcolor1}
                        color={btncolor1}
                        rounded={0}
                        border={"1px solid"}
                        borderColor={"blue.400"}
                        _hover={btnhovercolor1}
                        onClick={()=>navigate('/products')}
                    >
                        {btn1}
                    </Button>

                    <Button
                        size={['md', 'md', 'md', 'lg', 'lg']}
                        fontWeight={"normal"}
                        rounded={0}
                        color={btncolor2}
                        // color={"#0672cb"}
                        border={"1px solid"}
                        backgroundColor={btnbgcolor2}
                        _hover={btnhovercolor2}
                    >
                        {btn2}
                    </Button>
                </Flex>
            </Stack>
            <Flex
                flex={1.5}
                justify={"left"}
                alignItems={"center"}
                h={'full'}
                position={"relative"}
                w={'full'}
            >
                

                    <Image
                        alt={"Hero Image"}
                        fit={"cover"}
                        align={"center"}
                        // h={{base:'',sm:'',md:'300px',lg:'430px',xl:'447px'}}
                        h={'full'}
                        // w={{base:'',sm:'',md:'800px',lg:'850px',xl:'950px'}}
                        w={{base:'50%',lg:'100%'}}
                        src={img}
                    />

            
            </Flex>
        </Flex>
    );
}