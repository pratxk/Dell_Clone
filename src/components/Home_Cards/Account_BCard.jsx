import { Box, Button, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BiArrowBack, BiBarChart, BiCart, BiCheckShield, BiFileFind, BiStar, BiUser } from 'react-icons/bi'

export function Account_BCard() {
    return (
        <>
            <Box backgroundColor={'#002a58'} color={'white'} align={'center'} w={{base:'50%',lg:'fit-content'}} p={7}>
                <Heading fontWeight={300}>My Account</Heading>
                <Text mt={4}>My Account is an easy, more centralized way to manage your tech.</Text>
                <Flex justify={'center'} mt={7} gap={5}>
                    <Button borderColor={'white'} w={'200px'} h={12} backgroundColor={'white'} color={'#002a58'} rounded={3} _hover={{ backgroundColor: 'gray.100' }}>
                        Sign In
                    </Button>
                    <Button borderColor={'white'} w={'290px'} h={12} backgroundColor={'transparent'} color={'white'} rounded={3} _hover={{ backgroundColor: 'white', color: 'gray' }}>
                        Create Account
                    </Button>
                </Flex>

                <Flex mt={8} justify={'space-evenly'} backgroundColor={'transparent'} gap={6}>
                    <Stack gap={4}>
                        <Box>
                            <BiStar color='white' size={50} />
                        </Box>
                        <Text> Easy Ordering
                        </Text>
                    </Stack>
                    <Stack gap={4}>
                        <Box>
                            <BiFileFind size={50} color='white' />
                        </Box>
                        <Text> Order Tracking
                        </Text>
                    </Stack>
                    <Stack gap={4}>
                        <Box>
                            <BiUser size={50} color='white' />
                        </Box>
                        <Text> Profile Setting
                        </Text>
                    </Stack>
                </Flex>
            </Box>
        </>
    )
}
export function Account_B1Card() {
    return (
        <>
            <Box backgroundColor={'#002a58'} color={'white'} align={'center'} w={{base:'50%',lg:'fit-content'}} p={7}>
                <Heading fontWeight={300}>My Account</Heading>
                <Text mt={4}>My Account is an easy, more centralized way to manage your tech.</Text>
                <Flex justify={'center'} mt={7} gap={5}>
                    <Button borderColor={'white'} w={'200px'} h={12} backgroundColor={'white'} color={'#002a58'} rounded={3} _hover={{ backgroundColor: 'gray.100' }}>
                        Sign In
                    </Button>
                    <Button borderColor={'white'} w={'290px'} h={12} backgroundColor={'transparent'} color={'white'} rounded={3} _hover={{ backgroundColor: 'white', color: 'gray' }}>
                        Create Account
                    </Button>
                </Flex>

                <Flex mt={8} justify={'space-evenly'} backgroundColor={'transparent'} gap={6}>
                    <Stack gap={4}>
                        <Box>
                            <BiStar color='white' size={50} />
                        </Box>
                        <Text> Easy Ordering
                        </Text>
                    </Stack>
                    <Stack gap={4}>
                        <Box>
                            <BiFileFind size={50} color='white' />
                        </Box>
                        <Text> Order Tracking
                        </Text>
                    </Stack>
                    <Stack gap={4}>
                        <Box>
                            <BiUser size={50} color='white' />
                        </Box>
                        <Text> Profile Setting
                        </Text>
                    </Stack>
                </Flex>
            </Box>
        </>
    )
}
export function Dell_Premier() {
    return (
        <>
            <Box backgroundColor={'#141d28'} color={'white'} align={'center'} w={{base:'50%',lg:'fit-content'}} p={7}>
                <Heading fontWeight={300}>Dell Premier</Heading>
                <Text w={500} mt={4}>Leverage hands-on IT purchasing for your business with personalised
                    product selection and easy ordering via our customisable online
                    platform.</Text>
                <Flex justify={'center'} align={'center'} mt={7} gap={5}>
                    <Link _hover={{ textDecoration: 'underline' }}>
                        <Flex color={'white'} justify={'center'} align={'center'} gap={2}>
                            <Text>Sign in</Text>
                            <BiArrowBack mt={2} style={{ transform: 'rotate(180deg)' }} fontSize={"18px"} color={"white"} />
                        </Flex>
                    </Link>
                    <Button borderColor={'white'} w={'290px'} h={12} backgroundColor={'transparent'} color={'white'} rounded={3} _hover={{ backgroundColor: 'white', color: 'gray' }}>
                        Learn about Dell Premier
                    </Button>
                </Flex>

                <Flex mt={8} justify={'space-evenly'} backgroundColor={'transparent'} gap={6}>
                    <Stack gap={4}>
                        <Box>
                            <BiCart color='white' size={50} />
                        </Box>
                        <Text> Simplify Purchasing
                        </Text>
                    </Stack>
                    <Stack gap={4}>
                        <Box>
                            <BiBarChart size={50} color='white' />
                        </Box>
                        <Text> Discover Insights
                        </Text>
                    </Stack>
                    <Stack gap={4}>
                        <Box>
                            <BiCheckShield size={50} color='white' />
                        </Box>
                        <Text> Shop Securely
                        </Text>
                    </Stack>
                </Flex>
            </Box>
        </>
    )
}
export function Dell_Premier1() {
    return (
        <>
            <Box backgroundColor={'#141d28'} color={'white'} align={'center'} w={{base:'50%',lg:'fit-content'}} p={7}>
                <Heading fontWeight={300}>Dell Premier</Heading>
                <Text w={[300,300,500]} mt={4}>Leverage hands-on IT purchasing for your business with personalised
                    product selection and easy ordering via our customisable online
                    platform.</Text>
                <Flex justify={'center'} align={'center'} mt={7} gap={5}>
                    <Link _hover={{ textDecoration: 'underline' }}>
                        <Flex color={'white'} justify={'center'} align={'center'} gap={2}>
                            <Text>Sign in</Text>
                            <BiArrowBack mt={2} style={{ transform: 'rotate(180deg)' }} fontSize={"18px"} color={"white"} />
                        </Flex>
                    </Link>
                    <Button borderColor={'white'} w={'290px'} h={12} backgroundColor={'transparent'} color={'white'} rounded={3} _hover={{ backgroundColor: 'white', color: 'gray' }}>
                        Learn about Dell Premier
                    </Button>
                </Flex>

                <Flex mt={8} justify={'space-evenly'} backgroundColor={'transparent'} gap={6}>
                    <Stack gap={4}>
                        <Box>
                            <BiCart color='white' size={50} />
                        </Box>
                        <Text> Simplify Purchasing
                        </Text>
                    </Stack>
                    <Stack gap={4}>
                        <Box>
                            <BiBarChart size={50} color='white' />
                        </Box>
                        <Text> Discover Insights
                        </Text>
                    </Stack>
                    <Stack gap={4}>
                        <Box>
                            <BiCheckShield size={50} color='white' />
                        </Box>
                        <Text> Shop Securely
                        </Text>
                    </Stack>
                </Flex>
            </Box>
        </>
    )
}

export function Learn_Card({ url, head, subHead }) {
    return (
        <Box
            w={{ base: "60% ", sm: "500px", md: "400px", lg: "200px", xl: "260px" }}
            h={{ base: "auto", md: "175px", lg: "300px", xl: "350px" }}
            backgroundColor={'#001730'}
            mb={4}
            display={ "flex"}
            flexDirection={{ base: "row", md: "row",lg:'column',xl:'column' }}
        >
            <Box flex={{sm:1, base:1}}
            >
                <Image src={url} w={'100%'} h={'100%'} objectFit={'cover'} />
            </Box>
            <Box
                color={'white'} pt={3} pb={3} pl={3}
                h={{ base: "auto", md: "60%" }}
                display={'flex'}
                flexDir={'column'}
                justifyContent={'space-between'}
                flex={{ base: "3", md: 2 }}
            >
                <Box>
                    <Text fontSize={{ base: 14,sm:15,md:16, lg: 18, xl: 20 }}>{head}</Text>
                </Box>
                <Box mt={{ base: 2, lg: 2, xl: 0 }}>
                    <Link _hover={{ textDecoration: 'underline' }}>
                        <Flex color={'white'} align={'center'} gap={1}>
                            <Text fontSize={{ base: 14, lg: 14, xl: 16 }}>{subHead}</Text>
                            <BiArrowBack style={{ transform: 'rotate(180deg)' }} fontSize={"18px"} color={"white"} />
                        </Flex>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
