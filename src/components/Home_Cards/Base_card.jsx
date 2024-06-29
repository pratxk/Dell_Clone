import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Base_card({ icon, title, ...rest }) {
    return (
        <>
            <Box backgroundColor={'#33414e'} color={'white'} {...rest} display={'flex'} flexDir={{ base: 'row', sm: 'row', md: 'column', lg: 'column', xl: 'column' }}
                justifyContent={{ base: 'left', sm: 'left', md: 'center', lg: 'center', xl: 'center' }} alignItems={{ base: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'center' }}
            >
                <Flex gap={{ base: 4, sm: 4 }} flexDir={['flex', 'flex', 'column', 'column', 'column']} align={{ base: 'left', sm: 'left', md: 'center', lg: 'center', xl: 'center' }} w={'fit-content'}>
                    <Box>
                        {icon}
                    </Box>


                    <Text align={{ sm: 'left', md: 'center' }}>
                        {title}
                    </Text>
                </Flex>
            </Box>
        </>
    )
}

export default Base_card