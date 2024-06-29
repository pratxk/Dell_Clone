import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Carts() {
    return (
        <>
            <Box m={5} justifyContent='space-around' display='flex' flexDir='column'>
                <Heading size='sm'>Your Dell.com Carts</Heading>
                <Link to={'/cart'}>
                    <Text mt={4}>View your cart</Text>
                </Link>
            </Box>
        </>
    )
}

export default Carts