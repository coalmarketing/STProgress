import { Grid, Text, Heading, Flex } from "@chakra-ui/react";
import callIconRed from "../../images/icons/phone-red.svg";
import mailIcon from "../../images/icons/mail-red.svg";
import profileIcon from "../../images/icons/profile.svg";
import profileIconRed from "../../images/icons/profile-red.svg";


interface ContactsImagesProps {
    images: {
        heading: string;
        position: string;
        phone: string;
        mail: string;
        section: number;
    }[];
}
const ContactsImages: React.FC<ContactsImagesProps> = ({ images }) => {
    // Get unique sections
    const sections = Array.from(new Set(images.map(image => image.section)));

    return (
        <Flex direction="column" gap={8} w="100%">
            {sections.map((section, sectionIndex) => (
                <Flex direction="column" key={section}>
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                        w="100%"
                        gap={{ base: 5, lg: 10 }}
                    >
                        {images
                            .filter((image) => image.section === section)
                            .map((image, index) => (
                                <Flex key={index} w="100%" textAlign="left" direction="column">
                                    <img 
                                        src={sectionIndex % 2 === 0 ? profileIcon : profileIconRed} 
                                        alt="Phone" 
                                        width="100px" 
                                    />
                                    <Flex direction="column" gap={2} mt={5}>
                                        <Heading fontSize={{ base: "22px", lg: "35px" }} fontWeight="bold">
                                            {image.heading}
                                        </Heading>
                                        <Text fontWeight="bold" fontSize={{ base: "15px", lg: "20px" }} color="STProgress.red">
                                            {image.position}
                                        </Text>
                                        <Flex direction="column" ml={-2}>
                                            <Flex alignItems="center" gap={1}>
                                                <img src={callIconRed} alt="Phone" width="50px" />
                                                <Text>
                                                    <a href={`tel:${image.phone}`}>{image.phone}</a>
                                                </Text>
                                            </Flex>
                                            <Flex alignItems="center" gap={2}>
                                                <img src={mailIcon} alt="Mail" width="50px" />
                                                <Text>
                                                    <a href={`mailto:${image.mail}`}>{image.mail}</a>
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            ))}
                    </Grid>
                </Flex>
            ))}
        </Flex>
    );
};

export default ContactsImages;
