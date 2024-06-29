import { Box, Button, Heading, ListItem, UnorderedList, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignInComp() {
    const navigate = useNavigate();
    return (
        <>
            <Box  p={3} >

                <Heading size='sm' _hover={{ backgroundColor: 'none', color: 'none' }}>Welcome to Dell</Heading>
                <br />
                <UnorderedList fontSize='sm'>
                    <ListItem>Place orders quickly and easily</ListItem>
                    <ListItem>View orders and track your shipping status</ListItem>
                    <ListItem> Create and access a list of your products</ListItem>
                </UnorderedList>
                <VStack mt={3}  >

                    <Button rounded={0} onClick={()=> navigate('/login')} backgroundColor='#0672cb' color='white' w='100%'>Sign In</Button>
                    <Button rounded={0} onClick={()=> navigate('/register')} backgroundColor='transparent' color='#0672cb' w='100%' borderColor='#0672cb'>Create an Account</Button>
                    <Button rounded={0} backgroundColor='transparent' color='#0672cb' w='100%' borderColor='#0672cb'>Partner Program Sign In</Button>
                    <Button rounded={0} backgroundColor='transparent' color='#0672cb' w='100%' borderColor='#0672cb'>Premier Sign In</Button>
                </VStack>
            </Box>
        </>
    )
}

export default SignInComp