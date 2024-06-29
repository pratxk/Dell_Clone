import { Box, Button } from '@chakra-ui/react'
import React from 'react'

function Languages() {
    return (
        <>
            <Box display='flex' flexDir='column'  >
                <Button backgroundColor='transparent'>English</Button>
                <Button backgroundColor='transparent'>हिंदी</Button>
                <Button backgroundColor='transparent'>मराठी</Button>
            </Box>
        </>
    )
}

export default Languages