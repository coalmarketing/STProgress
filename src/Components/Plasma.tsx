import { Text, Flex, Image, Heading, Box } from "@chakra-ui/react";
import HeadingImg from "./HeadingImg";
import headerPicture from "../images/photos/webp/header_paleni.webp";
import plasma from "../images/photos/plazma.png";
import brickIcon from "../images/icons/brick.svg";
import skipIcon from "../images/icons/skip.svg";
import sparkIcon from "../images/icons/spark.svg";
import KeyFeatures from "./KeyFeatures";
import paleniVideoMp4 from "../video/plazma tmavý obraz.mp4";
import paleniVideoWebm from "../video/plazma tmavý obraz.webm";

import img1 from "../images/photos/webp/galerie_paleni_01.webp";
import img2 from "../images/photos/webp/galerie_paleni_02.webp";
import img3 from "../images/photos/webp/galerie_paleni_03.webp";
import img4 from "../images/photos/webp/galerie_paleni_04.webp";

const Plasma = () => {
  const features = [
    {
      icon: brickIcon,
      text: "Dokážeme řezání všech vodivých materiálů, včetně oceli, hliníku a mědi.",
    },
    {
      icon: skipIcon,
      text: "Nabízíme výrazně rychlejší řezání ve srovnání s tradičními metodami",
    },
    {
      icon: sparkIcon,
      text: "Zajistíme Vám dokonale přesný plasmou pálený výrobek.",
    },
  ];

  return (
    <Flex id="paleni-plasmou" direction="column" bg="STProgress.lightGray" pb="50px">
      <Flex w="100%" direction="column" alignItems="center">
        <HeadingImg 
            img={headerPicture} 
            titleText="PÁLENÍ PLASMOU" 
            videoSrc={{
                webm: paleniVideoWebm,
                mp4: paleniVideoMp4
            }}
        />
        <Flex w="80%" direction="column" mb="50px">
          <KeyFeatures
            headingText={
              <Text>
                NABÍZÍME RYCHLÉ A PRECIZNÍ
                <br />
                PLASMOVÉ DĚLENÍ VŠECH KOVŮ...
              </Text>
            }
            features={features}
          />
        </Flex>

        <Heading
          fontSize={{ base: "35px", lg: "55px" }}
          textAlign="left"
          w="80%"
          mt="10px"
        >
          NAŠE PLASMOU PÁLENÉ VÝROBKY:
        </Heading>

        <Box
          w="100%"
          overflow="hidden"
          position="relative"
          mt="30px"
        >
          <Flex
            w="200%"
            animation="marquee 30s linear infinite"
            sx={{
              "@keyframes marquee": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" }
              }
            }}
          >
            <Flex w="50%">
              <Image
                src={img1}
                alt="Product 1"
                w={{ base: "100%", md: "25%" }}
                height="400px"
                objectFit="cover"
              />
              <Image
                src={img2}
                alt="Product 2"
                w={{ base: "100%", md: "25%" }}
                height="400px"
                objectFit="cover"
              />
              <Image
                src={img3}
                alt="Product 3"
                w={{ base: "100%", md: "25%" }}
                height="400px"
                objectFit="cover"
              />
              <Image
                src={img4}
                alt="Product 4"
                w={{ base: "100%", md: "25%" }}
                height="400px"
                objectFit="cover"
              />
            </Flex>
            <Flex w="50%">
              <Image
                src={img1}
                alt="Product 1"
                w={{ base: "100%", md: "25%" }}
                height="400px"
                objectFit="cover"
              />
              <Image
                src={img2}
                alt="Product 2"
                w={{ base: "100%", md: "25%" }} 
                height="400px"
                objectFit="cover"
              />
              <Image
                src={img3}
                alt="Product 3"
                w={{ base: "100%", md: "25%" }}
                height="400px"
                objectFit="cover"
              />
              <Image
                src={img4}
                alt="Product 4"
                w={{ base: "100%", md: "25%" }}
                height="400px"
                objectFit="cover"
              />
            </Flex>
          </Flex>
        </Box>

        <Flex w="80%" justify="center">
          <Flex
            justifyContent="center"
            direction={{ base: "column", lg: "row" }}
            w="100%"
          >
            <Flex
              direction="column"
              w="100%"
              pr={{ base: "unset", lg: "140px" }}
              gap="20px"
              alignItems="start"
            >
              <Heading fontSize={{ base: "35px", lg: "55px" }} textAlign="left" mt={{ base: "25px", lg: "90px"}}>
                NÁŠ PLASMOVÝ <br />
                STROJ:
              </Heading>
              <Text fontSize="30px" lineHeight="1" fontWeight="bold">
                Pegas 121 od firmy Alfain
              </Text>
              <Flex fontSize={{ base: "16px",  lg: "17px" }} direction="column">
                <Text>
                  Řezání ocelových a nerezových plechů a plechů z barevných kovů
                  o tloušťce 1 - 15 mm
                </Text>
                <Text>Formát stolu 1500 x 3000 (1,5 m x 3 m)</Text>
                <Text>Řezací proud 15 - 120 A</Text>
                <Text>Dosahovaná přesnost od +/- 0,2 mm</Text>
              </Flex>
            </Flex>
            <Flex w={{ base: "100%", lg: "80%"}}>
              <Image
                mt="25px"
                src={plasma}
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Plasma;
