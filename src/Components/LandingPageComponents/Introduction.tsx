import {
  Box,
  Flex,
  Heading,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
import CustomBtn from "../CustomBtn";
import { EButtonStyle } from "../../models/IModels.model";
import Arrow from "../Arrow/Arrow";
import bunka2VideoWebm from "../../video/uvodni-video-new.webm";
import fallbackImage from "../../images/photos/webp/uvodni-new.webp";
import { Link as LinkScroll } from "react-scroll";

const Introduction = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box position="relative" width="100%" height="calc(100vh - 90px)">
      <Flex
        width="100%"
        height="100%"
        direction="column"
        align="center"
        backgroundColor="black"
        position="relative"
        overflow="hidden"
        maxHeight="calc(100vh - 90px)"
      >
        {/* VIDEO BACKGROUND */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={0}
          overflow="hidden"
        >
          {isMobile ? (
            <Image
              src={fallbackImage}
              alt="STProgress"
              width="100%"
              height="100%"
              objectFit="cover"
              filter="brightness(0.7)"
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.7)",
                maxHeight: "calc(100vh - 90px)",
              }}
            >
              <source src={bunka2VideoWebm} type="video/webm" />
            </video>
          )}
        </Box>

        {/* BLACK GRADIENT OVERLAY */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          background="linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%)"
          zIndex={1}
        />

        {/* CONTENT */}
        <Flex
          width="100%"
          height="100%"
          direction="column"
          alignItems="center"
          justifyContent="flex-end"
          pb={{ base: "35%", md: "8%" }}
          zIndex={2}
          position="relative"
        >
          <Flex
            w={{ base: "90%", md: "80%", lg: "80%" }}
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "center" }}
            gap={6}
          >
            <Flex
              direction="column"
              maxW={{ base: "100%", md: "100%", lg: "100%" }}
              gap={6}
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Heading
                width="100%"
                fontSize="clamp(15px, 6vw, 80px)" // Větší text
                color="white"
                textAlign={{ base: "center", md: "start" }}
                lineHeight={1.2}
              >
                STAVÍME FUNKČNÍ HALY<br></br>A POSKYTUJEME STAVEBNÍ<br></br>ŘEŠENÍ PRO 21. STOLETÍ
              </Heading>
              
              <Flex 
                gap={4} 
                direction={{ base: "column", md: "row" }}
                width={{ base: "auto", md: "auto" }}
                justifyContent={{ base: "center", md: "flex-start" }}
                alignItems={{ base: "center", md: "flex-start" }}
              >
                <CustomBtn
                  to="/reference"
                  text="Předešlé projekty"
                  btnStyle={EButtonStyle.secondaryDark}
                />
                <CustomBtn
                  to="/"
                  text="Více..."
                  isScroller={true}
                  scrollTarget="montaz-haly"
                  btnStyle={EButtonStyle.secondaryDark}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* ARROW AT BOTTOM CENTER - OUTSIDE VIDEO CONTAINER */}
      <LinkScroll to="montaz-haly" smooth offset={-100}>
        <Flex
          position="absolute"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
          zIndex={10}
          justify="center"
          align="center"
          cursor="pointer"
        >
          <Arrow />
        </Flex>
      </LinkScroll>
    </Box>
  );
};

export default Introduction;
