import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import spLogoLightSquare from "../../images/logos/SP_logo_mono-light_square.svg";
import homeIcon from "../../images/icons/accordion/home_icon.svg";
import Map from "./Map";
import Formular from "./Formular";

const Footer = () => {
  return (
    <Flex direction="column" justify="center">
      <Formular />
      <Map />
      <Flex
        direction={{ base: "column", lg: "row"}}
        padding="36px"
        w="100%"
        bg="STProgress.red"
        justify="space-around"
        gap={{base: 8, lg: "unset" }}
        alignItems={{ base: "center", lg: "unset" }}
        color="white"
      >
        <Flex>
          <Image src={spLogoLightSquare} w="200px" h="auto" />
        </Flex>
        <Flex direction="column" gap={1} fontSize="18px" w={{ base: "100%", lg: "unset" }} align={{base: "center", lg: "unset"}}>
          <Text fontWeight="bold">Fakturační adresa</Text>
          <Flex gap={4} my={3}>
            <Image src={homeIcon} w="25px" />
            <Text
              mt="2px"
              fontSize="14px"
              fontFamily="IBMPlexSans"
              fontWeight="bold"
            >
              Kancelář Praha
            </Text>
          </Flex>
          <Text fontWeight="bold" fontSize="14px">
            STAVEBNÍ PROGRESS a.s.
          </Text>
          <Text fontSize="14px">Ošlanská 2643/1a</Text>
          <Text fontSize="14px">130 00 Praha Žižkov</Text>
        </Flex>
        <Flex direction="column" gap={1} fontSize="18px" w={{ base: "100%", lg: "unset" }} align={{base: "center", lg: "unset"}}>
          <Text fontWeight="bold">Korespondeční adresa</Text>
          <Flex gap={4} fontWeight="bold" fontSize="14px" my={3}>
            <Image src={homeIcon} w="25px" />
            <Text mt="2px">Kancelář Ústí nad Orlicí</Text>
          </Flex>
          <Text fontWeight="bold" fontSize="14px">
            STAVEBNÍ PROGRESS a.s.
          </Text>
          <Text fontSize="14px">Oldřichovice 163</Text>
          <Text fontSize="14px">562 01 Ústí nad Orlicí</Text>
        </Flex>
        <Flex direction="column" gap={1} fontSize="18px" w={{ base: "100%", lg: "unset" }} align={{base: "center", lg: "unset"}}>
          <Text fontWeight="bold">Odkazy</Text>
          <Text fontSize="15px" _hover={{ textDecoration: 'underline' }}>
            <a href="https://www.diana-kouty.cz/" target="_blank" rel="noopener noreferrer">
              Chata Diana
            </a>
          </Text>
          <Text fontSize="15px" _hover={{ textDecoration: 'underline' }}>
            <Link to="/gdpr">
              Ochrana osobních údajů
            </Link>
          </Text>
          <Text fontSize="15px" _hover={{ textDecoration: 'underline' }}>
          <Link to="/gdpr">
              Cookies
            </Link>
          </Text>
        </Flex>
      </Flex>
      <Flex bg="black" color="white" padding="20px" justifyContent="center" textAlign="center">
          <Text textAlign="center">© 2024 STAVEBNÍ PROGRESS a.s. Všechna práva vyhrazena</Text>
      </Flex>
      <Flex justify="center" padding="10px" >
        <Text fontSize="sm" textAlign="center" fontWeight="bold" >
          Developed with <span style={{ color: "red" }}>❤</span> by <a href="#" target="_blank" rel="noopener noreferrer">Coalfamily</a> | © 2024
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;