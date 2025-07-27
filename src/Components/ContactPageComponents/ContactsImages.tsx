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
                        gap={{ base: 10, lg: 20 }}
                    >
                        {images
                            .filter((image) => image.section === section)
                            .map((image, index) => (
                                <Flex key={index} w="100%" textAlign="left" direction="column">
                                    <Flex alignItems="flex-start" gap={4}>
                                        <img 
                                            src={sectionIndex % 2 === 0 ? profileIcon : profileIconRed} 
                                            alt="Phone" 
                                            width="70px" 
                                        />
                                        <Flex direction="column" gap={1}>
                                            <Heading fontSize={{ base: "18px", lg: "24px" }} fontWeight="bold">
                                                {image.heading}
                                            </Heading>
                                            <Text fontWeight="bold" fontSize={{ base: "12px", lg: "16px" }} color="STProgress.red">
                                                {image.position}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                    <Flex direction="column" ml={-2} mt={3}>
                                        <Flex alignItems="center" gap={1}>
                                            <img src={callIconRed} alt="Phone" width="50px" />
                                            <Text fontSize={{ base: "14px", lg: "16px" }}>
                                                <a href={`tel:${image.phone}`}>{image.phone}</a>
                                            </Text>
                                        </Flex>
                                        <Flex alignItems="center" gap={2}>
                                            <img src={mailIcon} alt="Mail" width="50px" />
                                            <Text fontSize={{ base: "14px", lg: "16px" }}>
                                                <a href={`mailto:${image.mail}`}>{image.mail}</a>
                                            </Text>
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
