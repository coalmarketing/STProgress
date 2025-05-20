import { Text, Flex, Image, Heading, Box, useMediaQuery } from "@chakra-ui/react";
import HeadingImg from "./HeadingImg";
import headerPicture from "../images/photos/webp/header_bunky.webp";
import carIcon from "../images/icons/car.svg";
import flameIcon from "../images/icons/flame.svg";
import boltIcon from "../images/icons/bolt.svg";
import KeyFeatures from "./KeyFeatures";
import bunkyVideoMp4 from "../video/bunky1.mp4";
import bunkyVideoWebm from "../video/bunky1_low.webm";

import img1 from "../images/photos/webp/galerie_bunky_01.webp";
import img2 from "../images/photos/webp/galerie_bunky_02.webp";
import img3 from "../images/photos/webp/galerie_bunky_03.webp";
import img4 from "../images/photos/webp/galerie_bunky_04.webp";

const BuildBlocks = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    const features = [
    { icon: carIcon, text: "Stavební buňky lze snadno a rychle přesunout na jiné místo." },
    { icon: flameIcon, text: "Sendvičové panely s izolací  zajišťují v buňkách tepelný komfort v každém ročním období." },
    { icon: boltIcon, text: "Všechny buňky Vám vybavíme plnohodnotnými elektrickými rozvody." },
];


    return (
        <Flex direction="column" pb="50px" id="stavebni-bunky">
            <Flex w="100%" direction="column" alignItems="center">
                <HeadingImg 
                    img={headerPicture} 
                    titleText="STAVEBNÍ BUŇKY" 
                    videoSrc={{
                        webm: bunkyVideoWebm,
                        mp4: bunkyVideoMp4
                    }}
                />
                <Flex w="80%" direction="column" mb="50px">
                    <KeyFeatures headingText={<Text>ZAŘÍDÍME STAVEBNÍ BUŇKY NA MÍRU<br />OD PROJEKTU PO KOMFORTNÍ ZÁZEMÍ...</Text>} features={features} />
                </Flex>

                <Heading fontSize={{ base: "35px", lg: "55px" }} textAlign="left" w="80%" mt="10px">
                NAŠE STAVEBNÍ BUŇKY:
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
                        <Flex w={{ base: "100%", md: "50%" }}>
                            <Image src={img1} alt="Product 1" w="100%" height="400px" objectFit="cover" />
                            <Image src={img2} alt="Product 2" w="100%" height="400px" objectFit="cover" />
                            <Image src={img3} alt="Product 3" w="100%" height="400px" objectFit="cover" />
                            <Image src={img4} alt="Product 4" w="100%" height="400px" objectFit="cover" />
                        </Flex>
                        <Flex w={{ base: "100%", md: "50%" }}>
                            <Image src={img1} alt="Product 1" w="100%" height="400px" objectFit="cover" />
                            <Image src={img2} alt="Product 2" w="100%" height="400px" objectFit="cover" />
                            <Image src={img3} alt="Product 3" w="100%" height="400px" objectFit="cover" />
                            <Image src={img4} alt="Product 4" w="100%" height="400px" objectFit="cover" />
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    );
};

export default BuildBlocks;
