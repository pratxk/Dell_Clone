import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	List,
	ListItem,
	SimpleGrid,
	Stack,
	StackDivider,
	Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { PRODUCT_ITEMS } from "../Redux/Product/product";

export default function SingleProductPage() {
	const toast = useToast();
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [image, setImage] = useState("");
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		const foundProduct = PRODUCT_ITEMS.find((item) => item.id === parseInt(id));
		if (foundProduct) {
			setProduct(foundProduct);
			setImage(foundProduct.image_url);
		}
		setLoader(false);
	}, [id]);

	const handleAddToCart = () => {
		const cart = JSON.parse(localStorage.getItem("cart")) || [];
		const existingProduct = cart.find((item) => item.id === product.id);

		if (existingProduct) {
			existingProduct.qty += 1;
		} else {
			cart.push({ ...product, qty: 1 });
		}

		localStorage.setItem("cart", JSON.stringify(cart));
		toast({
			title: "Added to cart",
			description: `${product.title} has been added to your cart.`,
			status: "success",
			duration: 3000,
			isClosable: true,
		});
	};

	if (loader) {
		return <h1>Loading...</h1>;
	}

	if (!product) {
		return <h1>Product not found</h1>;
	}

	return (
		<Box w={"80%"} m={"auto"}>
			<SimpleGrid
				columns={{ base: 1, lg: 2 }}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 18, md: 24 }}
			>
				<Stack>
					<Flex>
						<Box as={"header"} textAlign={"left"}>
							<Heading
								lineHeight={1.1}
								fontWeight={500}
								fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
							>
								{product.title}
							</Heading>
							<Flex
								fontWeight={500}
								fontSize={"2xl"}
								align={"center"}
								gap={2}
								mt={2}
							>
								<StarRatings
									rating={product.rating}
									starRatedColor="#0076ce"
									numberOfStars={5}
									name="rating"
									starDimension="20px"
									starSpacing="1px"
								/>
								<Text mt={"5px"}>{product.rating}</Text>
								<Text mt={"5px"} color={"customGray"}>
									({product.number_of_reviews})
								</Text>
							</Flex>
						</Box>
					</Flex>
					<Flex>
						<Image
							rounded={"md"}
							objectFit={"contain"}
							alt={"product image"}
							src={image}
							fit={"cover"}
							align={"center"}
							m={"auto"}
							w={"80%"}
							h={{ base: "100%", sm: "400px", lg: "500px" }}
						/>
					</Flex>
					<Flex>
						Original Price | <Text as="s">₹ {product.original_price}</Text>
					</Flex>
					<Flex>
						<Box as={"header"} textAlign={"left"}>
							<Heading
								lineHeight={1.1}
								fontWeight={500}
								fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
							>
								₹ {product.discounted_price}
							</Heading>
							<Flex>Price inclusive of GST. Free Delivery.</Flex>
						</Box>
					</Flex>
					<Flex>
						<Text fontWeight={500} fontSize={"xl"} color={"blue"}>
							Financing
						</Text>
					</Flex>
					<Flex>EMI starts from ₹ 24,165.83 /month</Flex>
					<Button
						style={{ marginTop: "1rem", marginBottom: "1rem" }}
						onClick={handleAddToCart}
						rounded={"md"}
						w={"full"}
						size={"lg"}
						py={"7"}
						bg={"gray.900"}
						color={"white"}
						textTransform={"uppercase"}
						_hover={{
							transform: "translateY(2px)",
							boxShadow: "lg",
						}}
					>
						Add to cart
					</Button>
					<Flex align={"center"} gap={2}>
						<MdLocalShipping />
						<Text>2-3 business days delivery</Text>
					</Flex>
					<Flex>
						<Text
							fontWeight={500}
							fontSize={"xl"}
							color={"teal"}
							textAlign={"left"}
						>
							Click "Buy Now" to shop this product on Dell.com
						</Text>
					</Flex>
				</Stack>
				<Stack spacing={{ base: 6, md: 10 }}>
					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={"column"}
						divider={<StackDivider borderColor={"gray.200"} />}
					>
						<Box>
							<Text
								align={"start"}
								fontSize={{ base: "16px", lg: "18px" }}
								color={"blue.500"}
								fontWeight={"500"}
								textTransform={"uppercase"}
								mb={"4"}
							>
								Processor
							</Text>
							<Text
								border={"1px solid blue"}
								bg={"blue.100"}
								padding={"10px"}
								textAlign="left"
								rounded={"md"}
							>
								{product.processor}
							</Text>
						</Box>
						<Box>
							<Text
								align={"start"}
								fontSize={{ base: "16px", lg: "18px" }}
								color={"blue.500"}
								fontWeight={"500"}
								textTransform={"uppercase"}
								mb={"4"}
							>
								Operating System
							</Text>
							<Text
								border={"1px solid blue"}
								bg={"blue.100"}
								padding={"10px"}
								textAlign="left"
								rounded={"md"}
							>
								{product.OS}
							</Text>
						</Box>
						<Box>
							<Text
								align={"start"}
								fontSize={{ base: "16px", lg: "18px" }}
								color={"blue.500"}
								fontWeight={"500"}
								textTransform={"uppercase"}
								mb={"4"}
							>
								Graphics Card
							</Text>
							<Text
								border={"1px solid blue"}
								bg={"blue.100"}
								padding={"10px"}
								textAlign="left"
								rounded={"md"}
							>
								{product.graphics_card}
							</Text>
						</Box>
						<Box>
							<Text
								align={"start"}
								fontSize={{ base: "16px", lg: "18px" }}
								color={"blue.500"}
								fontWeight={"500"}
								textTransform={"uppercase"}
								mb={"4"}
							>
								Memory
							</Text>
							<Text
								border={"1px solid blue"}
								bg={"blue.100"}
								padding={"10px"}
								textAlign="left"
								rounded={"md"}
							>
								{product.memory}
							</Text>
						</Box>
						<Box>
							<Text
								align={"start"}
								fontSize={{ base: "16px", lg: "18px" }}
								color={"blue.500"}
								fontWeight={"500"}
								textTransform={"uppercase"}
								mb={"4"}
							>
								Hard Drive
							</Text>
							<Text
								border={"1px solid blue"}
								bg={"blue.100"}
								padding={"10px"}
								textAlign="left"
								rounded={"md"}
							>
								{product.storage}
							</Text>
						</Box>
						<Box>
							<Text
								align={"start"}
								fontSize={{ base: "16px", lg: "18px" }}
								color={"blue.500"}
								fontWeight={"500"}
								textTransform={"uppercase"}
								mb={"4"}
							>
								Display
							</Text>
							<Text
								border={"1px solid blue"}
								bg={"blue.100"}
								padding={"10px"}
								textAlign="left"
								rounded={"md"}
							>
								{product.display}
							</Text>
						</Box>
						<Box>
							<Text
								align={"start"}
								fontSize={{ base: "16px", lg: "18px" }}
								color={"yellow.500"}
								fontWeight={"500"}
								textTransform={"uppercase"}
								mb={"4"}
							>
								Tech Specs
							</Text>
							<List spacing={2} align={"start"}>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Device:
									</Text>{" "}
									{product.title}
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Brand:
									</Text>{" "}
									{product.brand}
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Release Date:
									</Text>{" "}
									{product.release_date}
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Color:
									</Text>{" "}
									{product.color}
								</ListItem>
							</List>
						</Box>
					</Stack>
				</Stack>
			</SimpleGrid>
		</Box>
	);
}
