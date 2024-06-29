import { Box, Flex, Link, Popover, PopoverTrigger, useColorModeValue, Text, PopoverContent, Stack } from '@chakra-ui/react'
import React from 'react'
import { NAV_ITEMS } from './NavTems'
import { BiChevronDown } from "react-icons/bi";
import DesktopSubNav from './DesktopSubNav';
function PopOverBar() {


  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex gap={4} h='20%' alignItems='center' mt={-270} mb={-250}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label} pl={3}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <Flex align={"center"} gap={"2px"}>
                  <Text whiteSpace={"nowrap"}>{navItem.label}</Text>
                  <BiChevronDown fontSize={"18px"} color={"#636363"} />
                </Flex>
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Flex>
  );

}

export default PopOverBar