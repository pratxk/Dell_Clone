import React from "react";
import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import PriceDetails from "./PriceDetails";
import SpecsTable from "./SpecsTable";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductCard = (props) => {
	const {
		id,
		title,
		rating,
		number_of_reviews,
		processor,
		OS,
		graphics_card,
		memory,
		storage,
		display,
		original_price,
		discounted_price,
		image_url,
	} = props;

	return (
		<Link to={`/products/${id}`}>
			<Flex
				flexDir={["column", "row"]}
				shadow={"0 2px 2px #002A581a, 0 4px 4px #002A581a, 0 8px 8px #002A581a"}
				border={"1px solid #e1e1e1"}
				rounded={"md"}
				p={3}
			>
				<Flex px={4} py={4} flex={1} align={"center"} justify={"center"}>
					<Img
						src={image_url}
						alt="product_image"
						h={["130px", "auto"]}
						objectFit={"contain"}
					/>
				</Flex>

				<Flex flexDir={"column"} px={4} gap={1} flex={1.4}>
					<Text color={"brand"} fontSize="20px" lineHeight={"28px"}>
						{title}
					</Text>

					<Flex align={"center"}>
						<Flex fontSize={"24px"} color="brand" mr={2} align="center">
							<StarRatings
								rating={rating}
								starRatedColor="#0076ce"
								numberOfStars={5}
								name="rating"
								starDimension="20px"
								starSpacing="0px"
							/>
						</Flex>
						<Text fontSize={"0.9rem"}>{rating}&nbsp;</Text>
						<Text fontSize={"0.9rem"}>({number_of_reviews})</Text>
					</Flex>

					<Box display={["block", "block", "block", "block", "none"]} m={"-12px"} mt={1}>
						<PriceDetails original_price={original_price} discounted_price={discounted_price} />
					</Box>

					<Flex gap={2} flexDir="column">
						<Heading size={"md"} borderBottom={"1px solid lightgray"} pt={3} pb={1} mb={1}>
							Specs
						</Heading>
						<SpecsTable
							processor={processor}
							OS={OS}
							graphics_card={graphics_card}
							memory={memory}
							storage={storage}
							display={display}
						/>
					</Flex>
				</Flex>

				<Box display={["none", "none", "none", "none", "block"]}>
					<PriceDetails original_price={original_price} discounted_price={discounted_price} />
				</Box>
			</Flex>
		</Link>
	);
};

export default ProductCard;
