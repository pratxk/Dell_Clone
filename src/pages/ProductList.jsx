import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Product/action";
import {
  Box,
  Flex,
  Heading,
  Select,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";
import { BsFillCaretDownFill } from "react-icons/bs";
import FilterDrawer from "../components/Product_list/FilterDrawer";
import FilterSection from "../components/Product_list/FilterSection";
import Pagination from "../components/Product_list/Pagination";
import ProductCard from "../components/Product_list/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((store) => store.Product);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialMemory = searchParams.getAll("memory");
  const [memory] = useState(initialMemory || []);
  const initialStorage = searchParams.getAll("storage");
  const [storage] = useState(initialStorage || []);
  const initialKeyword = searchParams.get("keyword");
  const [keyword] = useState(initialKeyword || "");
  const initialCategory = searchParams.getAll("category");
  const [category] = useState(initialCategory || []);
  const initialMinPrice = searchParams.get("discounted_price[gte]");
  const initialMaxPrice = searchParams.get("discounted_price[lte]");

  // pagination states
  const initialPage = searchParams.get("_page") || 1;
  const initialLimit = searchParams.get("_limit") || 5;
  const [page, setPage] = useState(+initialPage);
  const [limit, setLimit] = useState(+initialLimit);

  const [sortAndOrder, setSortAndOrder] = useState("");

  // getting sort data in localStorage for using same sort on refresh
  const [sortBy, setSortBy] = useState(localStorage.getItem("sortBy") || "");
  const [order, setOrder] = useState(localStorage.getItem("order") || "");

  const handlePrev = () => {
    if (page > 1) setPage((page) => page - 1);
  };

  const handleNext = () => {
    setPage((page) => page + 1);
  };

  const handleSortChange = (e) => {
    setSortAndOrder(e.target.value);
  };

  useEffect(() => {
    switch (sortAndOrder) {
      case "priceHightToLow":
        setSortBy("price");
        setOrder("des");
        break;
      case "priceLowToHigh":
        setSortBy("price");
        setOrder("asc");
        break;
      case "avgCustomerReview":
        setSortBy("rating");
        setOrder("des");
        break;
      case "":
        setSortBy("");
        setOrder("");
        break;
      default:
        return;
    }
  }, [sortAndOrder]);

  useEffect(() => {
    const paramObj = {
      params: {
        keyword,
        category,
        memory,
        storage,
        "discounted_price[lte]": initialMinPrice,
        "discounted_price[gte]": initialMaxPrice,
        _page: page, // Use _page instead of page here
        _limit: limit,
      },
    };

    // get processor form search params
    const processor = searchParams.get("processor");

    if (processor) paramObj.params.processor = processor;

    dispatch(getProducts(paramObj));
  }, [dispatch, page, limit, keyword, category, memory, storage, initialMinPrice, initialMaxPrice]);

  // Update URL search parameters when page or limit changes
  useEffect(() => {
    setSearchParams({
      _page: page, // Use _page instead of page here
      _limit: limit,
    });
  }, [page, limit, setSearchParams]);

  return (
    <Flex
      m={"auto"}
      p={3}
      flexDir={"column"}
      w={["100%", "100%", "100%", "100%", "100%", "1645px"]}
      borderTop={"1px solid lightgray"}
    >
      <Heading mb={5}>Laptop and PCs</Heading>

      <Flex gap={6} textAlign="left">
        <Box flex={1} display={["none", "none", "none", "block", "block"]}>
          <FilterSection />
        </Box>

        <Flex flexDir={"column"} flex={5} w="full" gap={3}>
          <Flex gap={4} flexDir={["column", "row", "row"]}>
            <Select
              flex={[1, 1, 1, 0.4, 0.3]}
              icon={<BsFillCaretDownFill />}
              value={sortAndOrder}
              onChange={handleSortChange}
            >
              <option value="">Sort by</option>
              <option value="priceLowToHigh">Price low to high</option>
              <option value="priceHightToLow">Price high to low</option>
              <option value="avgCustomerReview">Avg. customer review</option>
            </Select>

            <Box display={["block", "block", "block", "none", "none"]} flex={1}>
              <FilterDrawer />
            </Box>
          </Flex>

          {isLoading ? (
            <Flex flexDir={"column"} align="center" gap={4}>
              <Skeleton h={"20rem"} w="full" rounded={"md"}></Skeleton>
              <Skeleton h={"20rem"} w="full" rounded={"md"}></Skeleton>
              <Skeleton h={"20rem"} w="full" rounded={"md"}></Skeleton>
              <Skeleton h={"20rem"} w="full" rounded={"md"}></Skeleton>
              <Skeleton h={"3rem"} w="50%" rounded={"md"}></Skeleton>
            </Flex>
          ) : (
            <>
              <SimpleGrid gap={4}>
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    rating={product.rating}
                    number_of_reviews={product.number_of_reviews}
                    processor={product.processor}
                    OS={product.OS}
                    graphics_card={product.graphics_card}
                    memory={product.memory}
                    storage={product.storage}
                    display={product.display}
                    original_price={product.original_price}
                    discounted_price={product.discounted_price}
                    image_url={product.image_url}
                  />
                ))}
              </SimpleGrid>

              <Flex justify={"center"}>
                <Pagination
                  page={page}
                  limit={limit}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              </Flex>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductList;
