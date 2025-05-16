import { Flex, Heading, Text } from "@chakra-ui/react";
import headerPicture from "../../images/photos/webp/formular_bg.webp";
import callIcon from "../../images/icons/phone.svg";
import mailIcon from "../../images/icons/mail.svg";

const Formular = () => {
  return (
    <Flex
      height="100%"
      align="center"
      justify="center"
      backgroundImage={`url(${headerPicture})`}
      backgroundSize="cover"
      backgroundPosition="center"
      pt="100px"
    >
      <Flex id="contact-form" direction="column" align="center" justify="center" w={{ base: "90%", xl: "60%" }}>
        <Flex w="100%" bg="white" direction="column" p={10}>
          <Heading fontSize={{ base: "35px", lg: "58px"}} color="STProgress.red" mb={4}>
            POJĎME POSTAVIT
            <br />
            NĚCO VELKÉHO.
          </Heading>
          <iframe
            src="https://stp.coalmarketing.cz/kontaktni-formular/"
            scrolling="no"
            width="100%"
            height="1000px"
            frameBorder="0"
            style={{ border: "0" }}
            title="Kontaktní formulář"
            aria-label="Kontaktní formulář"
          ></iframe>
          <Flex gap={{ base: 2, lg: 6 }} direction={{ base: "column", lg: "row" }}>
            <Flex alignItems="center">
            <img src={callIcon} alt="Phone" width="50px"/>
              <Text color="black">+420 000 111 000</Text>
            </Flex>
            <Flex alignItems="center">
            <img src={mailIcon} alt="Mail" width="50px"/>
              <Text color="black">info@stprogress.com</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Formular;
