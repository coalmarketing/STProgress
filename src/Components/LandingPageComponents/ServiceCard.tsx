import {
    Flex,
    Heading,
    Image,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    useMediaQuery,
} from "@chakra-ui/react"
import { EButtonStyle, EServiceCard, IAccordion } from "../../models/IModels.model";
import { ReactNode, useMemo, useState } from "react";
import CustomAccordion from "./CustomAccordion";
import CustomBtn from "../CustomBtn";
import faviCom from "../../images/icons/SP_favicon_grey.webp";

interface IProps {
    cardNumber: string;
    cardTitle: string;
    textChildren: ReactNode | ReactNode[];
    alignment: EServiceCard;
    accordionData?: IAccordion[];
    cardImages: string[];
    applyMaxWidth?: boolean;
    serviceCardTarget?: string;
}

const ServiceCard = ({ textChildren, cardNumber, alignment, accordionData, cardTitle, cardImages, applyMaxWidth, serviceCardTarget }: IProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState("");
    const [shrinkCard] = useMediaQuery("(max-width: 1100px)");
    const [columnButtons] = useMediaQuery("(max-width: 500px)");

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
        onOpen();
    };

    const leftAlignment = useMemo(() => {
        return alignment === EServiceCard.leftAlign;
    }, [alignment]);

    return (
        <Flex w="100%" 
              minH={{ xl: "47rem", lg: "50rem", md: "50rem", base: "60rem" }} 
              justify="center" 
              bg={leftAlignment ? "white" : "STProgress.black"}
              pb="3rem">
            
        <Flex justifyContent="center" w="80%" py="4rem">
            <Flex w="100%" direction={shrinkCard ? "column" : leftAlignment ? "row" : "row-reverse"}>
                {/* Background image container with opacity applied only to the image */}

                <Flex
                    width="100%"
                    position="relative"
                    justifyContent="end"
                    pt="30px"
                    textAlign={leftAlignment ? "start" : "end"}
                >
                    <Image
                        src={faviCom}
                        alt="Background"
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        zIndex={10}
                        opacity="0.07"  // Apply opacity only to the background image
                    />
                    
                    {/* Content container */}
                    <Flex id={serviceCardTarget} direction="column" w="100%" zIndex={20} p={{sm: "unset", md: "30px" }} pr={{sm: "unset", md: "60px" }} gap={{ sm: "20px", lg: "60px"}} alignItems={leftAlignment ? "start" : "end"} >
                        <Flex direction="column" color={leftAlignment ? "black" : "white"}>
                            <Heading color="STProgress.gray" opacity="0.5" fontSize="50px">{cardNumber}</Heading>
                            <Heading maxW={applyMaxWidth ? "400px" : "100%"} fontSize={{ base: "45px", md: "55px", lg: "60px", xl: "70px" ,'2xl': "80px" }} lineHeight="1">
                                {cardTitle}
                            </Heading>
                        </Flex>
                        <Flex color={leftAlignment ? "black" : "white"} direction="column" fontSize={{ md: "20px", lg: "16px", xl: "18px" }}fontWeight="medium" gap={4}>
                            {textChildren}
                        </Flex>
    
                        <Flex gap={columnButtons ? 3 : 8} direction={columnButtons ? "column" : "row"}>
                            {leftAlignment ? (
                                <>
                                    <CustomBtn  to={"/" + serviceCardTarget} text="Více..." btnStyle={EButtonStyle.primaryLight} />
                                    <CustomBtn scrollTarget="contact-form" isScroller={true} text="Konzultujte s námi" btnStyle={EButtonStyle.secondaryLight} />
                                </>
                            ) : (
                                <>
                                    <CustomBtn to={"/" + serviceCardTarget} text="Více..." btnStyle={EButtonStyle.primaryDark} />
                                    <CustomBtn scrollTarget="contact-form" isScroller={true} text="Konzultujte s námi" btnStyle={EButtonStyle.secondaryDark} />
                                </>
                            )}
                        </Flex>


                    </Flex>
                </Flex>
    
                <Flex direction="column" pt="90px" w={ shrinkCard ? "100%" : "80%" } alignItems={leftAlignment ? "start" : "end"}>
                    <Flex direction="column" w="100%" p={{ sm: "unset", md: "30px"}} gap="40px">
                        <Flex direction="column" position="relative" mt={4}>
                            <Image
                                src={cardImages[0]}
                                w="70%"
                                maxH={{ md: "300px", base: "150px" }} 
                                position="relative"
                                left={!leftAlignment ? "30%" : "unset"}
                                zIndex={!leftAlignment ? 1 : 2}
                                objectFit="cover"
                            />
                          <Image
                                src={cardImages[1]}
                                w={{
                                    base: "50%",
                                    sm: "60%",
                                    md: leftAlignment ? "50%" : "70%",
                                }}
                                maxH={{ md: "250px", base: "150px" }} 
                                objectFit="cover"
                                position="absolute"
                                top="-50px"
                                right={!leftAlignment ? "-20%" : "100%"}
                                left={{
                                    base: leftAlignment ? "75%" : "20%",
                                    sm: leftAlignment ? "75%" : "30%",
                                    md: leftAlignment ? "75%" : "30%",
                                }}
                                transform="translateX(-50%)"
                                zIndex={!leftAlignment ? 2 : 1}
                                boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
                                />

                        </Flex>
                        <Flex direction="column" fontSize="18px" gap={4}>
                            {accordionData && (
                                <CustomAccordion 
                                    leftAlignment={leftAlignment} 
                                    data={accordionData} 
                                    handleImageClick={handleImageClick} 
                                />
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Image src={selectedImage} width="100%" objectFit="contain" />
                </ModalBody>
            </ModalContent>
        </Modal>
    </Flex>
    
    )
}

export default ServiceCard;
