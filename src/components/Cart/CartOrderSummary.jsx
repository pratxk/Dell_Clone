import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
import { useEffect, useState } from "react";

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  const sum = cart.reduce((accumulator, object) => {
    return accumulator + Number(object.discounted_price) * Number(object.items);
  }, 0);

  let tax;
  cart.length === 0
    ? (tax = 0)
    : (tax = Math.floor(Math.random() * (400 - 100) + 50));

  let total = tax + sum;
  localStorage.setItem("tax", JSON.stringify(tax));

  const navigate = useNavigate();
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(sum)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Text>{tax}</Text>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Text fontWeight={"bold"}>DELLCLONE2024</Text>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(total)}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </Button>
    </Stack>
  );
};
