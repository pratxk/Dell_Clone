import {
    Box,
    Button,
    Center,
    Flex,
    HStack,
    Heading,
    Image,
    Link,
    Skeleton,
    Stack,
    useColorModeValue as mode,
    useToast,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { CartItem } from "../components/Cart/CartItem";
  import { CartOrderSummary } from "../components/Cart/CartOrderSummary";
  import empty from "../assets/empty.png";
  
  const Cart = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [cart, setCart] = useState([]);
    const toast = useToast();
    const navigate = useNavigate();
  
    const updateCart = () => {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(cartData);
      setIsLoading(false);
    };
  
    useEffect(() => {
      setIsLoading(true);
      updateCart();
    }, []);
  
    const handleClear = () => {
      localStorage.removeItem("cart");
      updateCart();
    };
  
    const handleItemDelete = (id) => {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = cartData.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      updateCart();
      toast({
        title: "Cart Status",
        description: "Item removed from cart",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    };
  
    const handleQuantityUpdate = (id, newQuantity) => {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = cartData.map((item) => {
        if (item.id === id) {
          return { ...item, items: newQuantity };
        }
        return item;
      });
  
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      updateCart();
    };
  
    return (
      <Box
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        mx="auto"
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
        <Flex flexDir="column" gap={8}>
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({cart.length} items)
          </Heading>
          <Stack
            direction={{
              base: "column",
              lg: "row",
            }}
            align={{
              lg: "flex-start",
            }}
            spacing={{
              base: "8",
              md: "16",
            }}
          >
            <Stack
              spacing={{
                base: "8",
                md: "10",
              }}
              flex="2"
            >
              {isLoading ? (
                <Flex flexDir={"column"} gap={4}>
                  <Skeleton w="full" h="150px"></Skeleton>
                  <Skeleton w="full" h="150px"></Skeleton>
                  <Skeleton w="full" h="150px"></Skeleton>
                </Flex>
              ) : cart.length <= 0 ? (
                <Center>
                  <Image src={empty} alt="emptycart" m={"auto"} w={250} mt={"70px"} />
                </Center>
              ) : (
                <>
                  <Stack
                    spacing="3"
                    overflowY={"scroll"}
                    h={"425px"}
                    boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                    rounded={"md"}
                    p={4}
                  >
                    {cart.map((item) => (
                      <CartItem
                        key={item.id}
                        {...item}
                        onDelete={handleItemDelete}
                        onUpdateQuantity={handleQuantityUpdate}
                      />
                    ))}
                  </Stack>
                  <Button colorScheme="red" onClick={handleClear}>
                    Clear All
                  </Button>
                </>
              )}
            </Stack>
  
            <Flex direction="column" align="center" flex="1">
              <CartOrderSummary cart={cart} />
              <HStack mt="6" fontWeight="semibold">
                <p>or</p>
                <Link onClick={() => navigate("/products")} color={mode("blue.500", "blue.200")}>
                  Continue shopping
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Flex>
      </Box>
    );
  };
  
  export default Cart;
  