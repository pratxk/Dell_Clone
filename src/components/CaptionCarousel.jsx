import { Box } from "@chakra-ui/react";
import { LeftButton, RightButton } from "chakra-ui-carousel";
import { Carousel } from "chakra-ui-carousel";
import { Provider } from "chakra-ui-carousel";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";


function CaptionCarousel({children}) {
  return (
    <Box>
      <Provider>
        <Carousel gap={50}>{children}</Carousel>
        <LeftButton
          bgColor="red.500"
          customIcon={<BiArrowFromLeft />}
          textColor={"white.500"}
        />
        <RightButton bgColor="blue.500" customIcon={<BiArrowFromRight />} />
      </Provider>
    </Box>
  );
}

export default CaptionCarousel