import { Box, Grid, GridItem, Popover, PopoverContent, PopoverTrigger, Flex, Text, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { BiArrowBack, BiChevronDown } from 'react-icons/bi';
import { SERVICE_ITEMS } from './ServiceTems';
function ServiceList() {
    return (
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 2fr)', 'repeat(4, 1fr)']} p={20} gap={6}>
            {SERVICE_ITEMS.map((serviceItem, index) => (
                <GridItem key={index}  gap={2} h={{base:'70%',sm:'70%',md:'50%',lg:'70%',xl:'100%'}} w={['50%','50%','100%']} >
                    <Box backgroundColor={'#9eafbe'} w={'100%'}  position="relative">
                        <PopOverCard triggerHead={serviceItem.label} data={serviceItem.children} dropdown={serviceItem.dropdown} />
                        <Image src={serviceItem.image} w={'100%'}  />
                    </Box>
                </GridItem>
            ))}
        </Grid>
    );
}

function PopOverCard({ triggerHead, data, dropdown }) {
    return (
        <Popover trigger={'hover'} placement='bottom-start'>
            <PopoverTrigger >
                <Flex align={"center"} _hover={{backgroundColor:'#293b4d'}} gap={"2px"} w={'fit-content'} backgroundColor={'#0a0e14'} position="absolute" top="0" left="0" p={2} cursor="pointer">
                    <Text whiteSpace={"nowrap"} color={'white'}>{triggerHead}</Text>
                    {dropdown ? <BiChevronDown fontSize={"18px"} color={"white"} /> : ''}
                </Flex>
            </PopoverTrigger>
            {dropdown ? 
            <PopoverContent backgroundColor={'#0a0e14'} w={'max-content'} position="absolute" top="1px" left="0">
                <VStack align="start" p={2}>
                    {data.map((item, index) => (
                        <Flex key={index} align={"center"} gap={"2px"} backgroundColor={'#0a0e14'} p={1}>
                            <Text whiteSpace={"nowrap"} color={'white'}>{item.label}</Text>
                            <BiArrowBack style={{ transform: 'rotate(180deg)' }} fontSize={"18px"} color={"white"} />
                        </Flex>
                    ))}
                </VStack>
            </PopoverContent> : ''
            }
        </Popover>
    );
}

export default ServiceList;