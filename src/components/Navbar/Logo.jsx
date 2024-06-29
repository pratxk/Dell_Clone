import React from "react"
import { Box, Image, Link, Text } from "@chakra-ui/react"

export default function Logo(props) {
    return (
        <Link href="/">
        <Box {...props} w='190px'>
               <Image src="./src/assets/Dell_logo.jpg"  alt="Dell"/>
        </Box>
        </Link>
    )
}