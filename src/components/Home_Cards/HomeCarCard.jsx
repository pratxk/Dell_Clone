import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Link,
	Stack,
	Text,
    VStack,
} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";

export default function HomeCarCard({ subHead,mainHead, bodyContent,linkData, img }) {
	return (
		<Flex
			maxW={"7xl"}
			align={"center"}
			flexDir={{ base: "column-reverse", md: "row" }}
			m="auto"
			mt="30px"
            mr={30}
            ml={30}
            mb={30}
            p={10}
		>
			<Stack
				flex={1}
				spacing={{ base: 5, md: 10 }}
				align={"left"}
				justify={"center"}
                backgroundColor={'white'}
                pl={5}
			>
				<Heading lineHeight={1.1} fontWeight={600}>
					<Text
						align={"left"}
						as={"span"}
						fontSize={{ base: "xl", sm: "xl", lg: "xl" }}
						position={"relative"}
						_after={{
							content: "''",
							width: "full",
							height: "30%",
							position: "absolute",
							bottom: 1,
							left: 0,
							zIndex: -1,
						}}
					>
						{subHead}
					</Text>
					<br />
                    <br />
					<Text as={"span"} pt={3} fontSize={{ base: "4xl", sm: "4xl", lg: "4xl" }}>
						{mainHead}
					</Text>
				</Heading>
				<Text color={"gray.500"}>{bodyContent}</Text>
				<VStack align="left">
                {linkData.map((item, index) => (
                    <Flex key={index} align="center" gap="2px" p={1}>
                        <Link><Text whiteSpace="nowrap" color="blue.600">{item.title}</Text></Link>
                        <BiArrowBack style={{ transform: 'rotate(180deg)' }} fontSize="18px" color="blue.600" />
                    </Flex>
                ))}
            </VStack>
			</Stack>
			<Flex
				flex={1}
				justify={"center"}
				align={"center"}
				position={"relative"}
				w={"full"}
			>
				<Box width={"full"} overflow={"hidden"}>
					<Image
						alt={"Hero Image"}
						fit={"cover"}
						align={"center"}
						w={"85%"}
						m={"auto"}
						h={"100%"}
						src={img}
					/>
				</Box>
			</Flex>
		</Flex>
	);
}
