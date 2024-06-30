import { Flex, Link, useToast } from "@chakra-ui/react";
import { CartProductMeta } from "./CartProductMeta";
import { PriceTag } from "./PriceTag";
import Quantity from "./Quantity";

export const CartItem = ({ title, original_price, discounted_price, image_url, items, id, onDelete, onUpdateQuantity }) => {
    const toast = useToast();

    const handleDelete = () => {
        onDelete(id);
        toast({
            title: "Cart Status",
            description: "Item removed from cart",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    const handleQuantityUpdate = (newQuantity) => {
        // Update the quantity in parent component (Cart.jsx) state
        onUpdateQuantity(id, newQuantity);
    };

    return (
        <Flex
            direction={{
                base: "column",
                md: "row",
            }}
            align="center"
            w="100%"
            borderBottom={"1px solid lightgray"}
            pb={3}
        >
            <CartProductMeta
                name={title}
                image={image_url}
                original_price={original_price}
                discounted_price={discounted_price}
            />

            {/* Desktop */}
            <Flex
                width="40%"
                gap={4}
                display={{
                    base: "none",
                    md: "flex",
                }}
            >
                <Quantity id={id} items={items} onUpdate={handleQuantityUpdate} />
                <PriceTag price={discounted_price} />
                <Link onClick={handleDelete} fontSize="sm" textDecor="underline">
                    Delete
                </Link>
            </Flex>

            {/* Mobile */}
            <Flex
                mt="4"
                align="center"
                width="full"
                justify="space-between"
                display={{
                    base: "flex",
                    md: "none",
                }}
            >
                <Link onClick={handleDelete} fontSize="sm" textDecor="underline">
                    Delete
                </Link>
                <PriceTag price={discounted_price} />
            </Flex>
        </Flex>
    );
};
