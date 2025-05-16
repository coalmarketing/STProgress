import {
  Box,
  Flex,
  Heading,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import landingHeader from "../../images/photos/webp/landing-page.webp";
import CustomBtn from "../CustomBtn";
import { EButtonStyle } from "../../models/IModels.model";
import Arrow from "../Arrow/Arrow";

const Introduction = () => {
  const [hidePcIcon] = useMediaQuery("(max-width: 410px)");
  const [showPcIcon] = useMediaQuery("(max-width: 395px)");
  return (
    <Flex
      width="100%"
      direction="column"
      align="center"
      backgroundColor="black"
      height={{ base: "calc(100vh - 90px)", md: "calc(100vh - 90px)" }}
    >
      {/* HEADER DIV */}
      <Flex direction="column" alignItems="center" justifyContent="center">
      <Flex
        backgroundImage={landingHeader}
        width="100%"
        backgroundSize="cover"  // Zajistí, že obrázek pokryje celý prostor
        backgroundPosition="center"  // Zajistí, že obrázek bude zarovnán na střed
        height={{ base: "40vh", md: "60vh", xl: "60vh" }}
        justifyContent="center"
        alignItems="center"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bg: "rgba(0, 0, 0, 0)", // Dark overlay
          zIndex: 1,
        }}
      >
         <Heading
          width="80%"
          fontSize="clamp(25px, 10vw, 200px)" // Dynamické nastavení velikosti
          color="white"
          textAlign="start"
          lineHeight={1}
          zIndex={2}
          filter="brightness(1.2)"
        >
          STAVBY PRO BUDOUCNOST.
        </Heading>

        </Flex>
      </Flex>

      <Flex
        w={{ base: "90%", md: "80%", lg: "80%" }}
        height="100%"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Flex
          direction="column"
          maxW={{ base: "100%", md: "100%", lg: "100%" }}
          gap={6}
          mb={{ base: "50px", md: "100px", xl: "170px", '2xl': "100px" }}
        >
          <Flex mt={{ base: "100px", md: "20px", sm: "20px" }} lineHeight={1.2} color="white">
            <Heading
              fontSize={{ base: "22px", sm: "26px", md: "26x", lg: "29px", xl: "33px" }}
            >
              STAVÍME FUNKČNÍ HALY<br></br>A POSKYTUJEME STAVEBNÍ<br></br>ŘEŠENÍ
              PRO 21. STOLETÍ
            </Heading>
          </Flex>
          <Flex gap={4} wrap={{ base: "wrap", md: "nowrap" }} mb={{ base: "-100px", md: "20px" }}>
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
            {showPcIcon && (
              <Flex
                justify="center"
                align="end"
                h="100%"
                width="30%"
                mt="-45px"
                ml="30px"
              >
                <Arrow></Arrow>
              </Flex>
            )}
          </Flex>
        </Flex>

        {!hidePcIcon && (
          <Flex
            justify="center"
            align="end"
            h="100%"
            mb={{ sm: "60px", lg: "90px", xl: "120px" }}
            width="30%"
          >
            <Arrow></Arrow>
          </Flex>
        )}
        {hidePcIcon && <Spacer />}

        <Flex
          visibility={{ base: "hidden", md: "visible" }}
          direction="row"
          w={{ base: "0", md: "auto" }}
          height={{
            base: "calc(40vh - 90px)",
            xl: "calc(55vh - 90px)",
            "2xl": "calc(40vh - 10px)",
          }}
        >
          <Box
            w={{ base: "90px", md: "130px", lg: "150px" }}
            h="100%"
            bg="STProgress.red"
          ></Box>
          <Box
            w={{ base: "90px", md: "130px", lg: "150px" }}
            h="100%"
            bg="STProgress.gray"
          ></Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Introduction;
