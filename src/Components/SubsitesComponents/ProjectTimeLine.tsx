import { Flex, Grid, GridItem, Heading, Text, Image, useMediaQuery } from "@chakra-ui/react";


interface IStep {
    cardTitle: string;
    cardNumber: string;
    textChildren?: React.ReactNode;
    cardImage: string;
}

interface IProps {
    steps: IStep[];
}

const ProjectTimeLine = ({ steps }: IProps) => {
    const [isMobile] = useMediaQuery("(max-width: 770px)");
    return (
        <Flex direction="column" gap="50px" my="80px">
            <Heading fontSize={{ base: "35px", lg: "58px" }} width={{ lg: "65%" }} >
                JAK POSTUPUJEME
                PŘI PROJEKTU?
            </Heading>
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap="40px"
            >
                {steps.map((step, index) => (
                    <GridItem
                        key={index}
                        display="flex"
                        flexDirection="column"
                        textAlign={index % 2 === 1 ? "right" : "left"}
                        mt={index % 2 === 0 ? "0" : !isMobile ? "250px" : "30px"}
                    >
                        <Flex direction="column" gap="0px">
                            <Heading fontSize={{ base: "45px", lg: "40px", xl: "50px"}} opacity="0.5" color="gray">
                                {step.cardNumber}
                            </Heading>
                            <Heading
                                fontSize={{ base: "30px", lg: "40px", xl: "50px"}}
                                w={{ base: "100%", xl: "100%" }}
                                ml={index % 2 === 1 ? "auto" : "0"}
                                mr={index % 2 === 0 ? "auto" : "0"}
                                textAlign={index % 2 === 1 ? "right" : "left"}
                            >
                                {step.cardTitle}
                            </Heading>
                            <Text
                                fontSize={{ base: "18px", lg: "20px", xl: "22px"}}
                                fontWeight="bold"
                                mt="10px"
                                mb="20px"
                                ml={index % 2 === 1 ? "auto" : "0"}
                                mr={index % 2 === 0 ? "auto" : "0"}
                                textAlign={index % 2 === 1 ? "right" : "left"}
                                w={{ base: "95%", lg: "80%" }}
                            >
                                {step.textChildren}
                            </Text>

                            <Image
                                src={step.cardImage}
                                objectFit="cover"
                                width={{ base: "90%", lg: "70%"}}
                                height="300px"
                                alt={step.cardTitle}
                                ml={index % 2 === 1 ? "auto" : "0"}
                                mr={index % 2 === 0 ? "auto" : "0"}
                            />
                        </Flex>
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    );
};

export default ProjectTimeLine;
