import { Flex, Heading, Image, Box } from "@chakra-ui/react";
import arpanel from "../images/partners/arpanel.webp";
import cbprofil from "../images/partners/cb-profil.webp";
import dakczech from "../images/partners/dakczech.png";
import kingspan from "../images/partners/kingspan.png";
import ruukki from "../images/partners/ruukki.png";

const Partners = () => {
  return (
    <Flex direction="column" w="80%" gap="25px" mt="35px" mb="15px">
      <Heading fontSize={{ base: "55px" }}>PARTNEŘI:</Heading>
      <Flex w="100%" alignItems={{ base: "center", lg: "unset" }} direction={{ base:"column", lg: "row" }} gap={{ base: 5, lg: "unset" }} justify="space-between" wrap="wrap">
        {[cbprofil, kingspan, ruukki, dakczech, arpanel ].map((logo, index) => (
          <Box 
            key={index}
            w={{ base: "150px", md: "120px", lg: "150px", xl: "200px" }}
            h={{ base: "100px", md: "80px", lg: "100px", xl: "133px" }}
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={logo}
              position="absolute"
              maxW="100%"
              maxH="100%"
              w="auto"
              h="auto"
              objectFit="contain"
              filter="grayscale(100%)"
              transition="filter 0.3s ease"
              _hover={{ filter: "grayscale(0%)" }}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Partners;
